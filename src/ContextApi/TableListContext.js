"use client";
import { getdataproduct } from "@/Components/Content/ContentComponents/ProductList/ProductListComponent/GetDataProduct";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TableListContext = createContext({});

export const TableListContextContextProvider = ({ children }) => {
  const [productlist, setProductList] = useState([]);
  const [editstatus, seteditstatus] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const data = await getdataproduct();

      setProductList(data);
    }
    fetchData();
  }, []);

  // حذف محصول خاص به شکل کلاینت سرور
  const deleteproductHandler = async (id) => {
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      if (response.status === 200) {
        const updatedProductList = productlist.filter((item) => item.id !== id);
        setProductList(updatedProductList);
      } else {
        console.error("Deletion failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // ویرایش اظلاعات
  const [ShowModalEdit, setShowModalEdit] = useState(false);

  const [productId, setProductId] = useState("");
  const [ProductSelected, setProductSelected] = useState([]);

  const [Edited, SetEdited] = useState({
    title: undefined,
    price: undefined,
    category: undefined,
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
        seteditstatus(!editstatus);
        setShowModalEdit(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editProductHandler = (id) => {
    setProductId(id);
    setShowModalEdit(true);
  };





  const val = {
    deleteproductHandler,
    productlist,
    ShowModalEdit,
    setProductList,
    setShowModalEdit,
    editProductHandler,
    productId,
    editstatus,
    seteditstatus,
    editHandler,
    SetEdited,
    Edited,
    ProductSelected,
  };
  return (
    <TableListContext.Provider value={val}>
      {children}
    </TableListContext.Provider>
  );
};
