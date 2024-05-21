"use client";
import { createContext, useContext, useState } from "react";
import { TableListContext } from "./TableListContext";
import axios from "axios";
import Swal from "sweetalert2";

export const ProductAddContext = createContext({});

export const ProductAddContextProvider = ({ children }) => {
  const [showAddProductModal, setshowAddProductModal] = useState(false);
  const { setProductList } = useContext(TableListContext);
  const [NewProduct, SetNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    image:""
  });

  const AddProductHandler = (e) => {
    e.preventDefault();

    axios
      .post(`https://fakestoreapi.com/products`, NewProduct)
      .then((response) => {
        console.log(response.data);
        setProductList((prevProduct) => [NewProduct,...prevProduct]);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product has been Added successfully!",
        });
        setshowAddProductModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showModalAdd = (e) => {
    e.preventDefault();
    setshowAddProductModal(true);
  };
  const val = {
    showAddProductModal,
    setshowAddProductModal,
    showModalAdd,
    AddProductHandler,
    NewProduct,
    SetNewProduct,
    AddProductHandler,
  };
  return (
    <ProductAddContext.Provider value={val}>
      {children}
    </ProductAddContext.Provider>
  );
};
