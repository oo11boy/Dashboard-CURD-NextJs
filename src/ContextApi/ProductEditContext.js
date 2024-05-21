"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { TableListContext } from "./TableListContext";
import Swal from "sweetalert2";

export const ProductEditContext = createContext({});

export const ProductEditContextProvider = ({ children }) => {
  const { setProductList, productlist } = useContext(TableListContext);

  const [editstatus, seteditstatus] = useState(false);

  const [ShowModalEdit, setShowModalEdit] = useState(false);

  const [productId, setProductId] = useState("");
  const [ProductSelected, setProductSelected] = useState([]);

  const [Edited, SetEdited] = useState({
    title: undefined,
    price: undefined,
    category: undefined,
    image:undefined
  });
  useEffect(() => {
    const find = productlist.find((item) => item.id == productId);
    setProductSelected(find);
  }, [ShowModalEdit]);
  const editHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://fakestoreapi.com/products/${productId}`, Edited)
      .then((response) => {
        console.log(response.data);
        setProductList(
          productlist.map((item) =>
            item.id === productId ? { ...item, ...Edited } : item
          )
        );
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product has been updated successfully!",
          });
        seteditstatus(!editstatus);
        setShowModalEdit(false);
      })
      .catch((error) => {
        console.error(error);
      });

      setProductList(
        productlist.map((item) =>
          item.id === productId ? { ...item, ...Edited } : item
        )
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product has been updated successfully!",
      });
      seteditstatus(!editstatus);
      setShowModalEdit(false);
  };

  const editProductHandler = (id) => {
    setProductId(id);
    setShowModalEdit(true);
  };

  const val = {
    setShowModalEdit,
    editProductHandler,
    productId,
    editstatus,
    seteditstatus,
    editHandler,
    SetEdited,
    Edited,
    ProductSelected,
    ShowModalEdit
  };
  return (
    <ProductEditContext.Provider value={val}>
      {children}
    </ProductEditContext.Provider>
  );
};
