"use client";
import axios from "axios";
import { createContext, useContext } from "react";
import { TableListContext } from "./TableListContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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


    
const MySwal = withReactContent(Swal)

const handleDelete = (id) => {
  MySwal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteproductHandler(id);
      MySwal.fire(
        "Deleted!",
        "The product has been successfully deleted.",
        "success"
      );
    }
  });
};
  const val = {
    handleDelete,
  };
  return (
    <ProductDeleteContext.Provider value={val}>
      {children}
    </ProductDeleteContext.Provider>
  );
};
