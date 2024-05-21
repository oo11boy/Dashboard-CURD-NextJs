"use client";
import axios from "axios";
import { createContext, useContext } from "react";
import { TableListContext } from "./TableListContext";

export const ProductDeleteContext = createContext({});

export const ProductDeleteContextProvider = ({ children }) => {
  const { setProductList, productlist } = useContext(TableListContext);

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
      

    const updatedProductList = productlist.filter((item) => item.id !== id);
    setProductList(updatedProductList);
    }
  };

  const val = {
    deleteproductHandler,
  };
  return (
    <ProductDeleteContext.Provider value={val}>
      {children}
    </ProductDeleteContext.Provider>
  );
};
