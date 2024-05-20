"use client";
import { getdataproduct } from "@/Components/Content/ContentComponents/ProductList/ProductListComponent/GetDataProduct";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TableListContext = createContext({});

export const TableListContextContextProvider = ({ children }) => {

  const [productlist, setProductList] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const data = await getdataproduct();
      
  // ذخیره اطلاعات محصولات دریافتی از سمت سرور در استیت مربوطه
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



  

  const val = {
    deleteproductHandler,
    productlist
  };
  return (
    <TableListContext.Provider value={val}>
      {children}
    </TableListContext.Provider>
  );
};
