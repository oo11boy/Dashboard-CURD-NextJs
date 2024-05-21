"use client";
import { createContext, useContext, useState } from "react";
import { TableListContext } from "./TableListContext";
import axios from "axios";

export const ProductAddContext = createContext({});

export const ProductAddContextProvider = ({ children }) => {
  const [showAddProductModal, setshowAddProductModal] = useState(false);
  const { setProductList } = useContext(TableListContext);
  const [NewProduct, SetNewProduct] = useState({
    title: "",
    price: "",
    category: "",
  });

  const AddProductHandler = (e) => {
    e.preventDefault();

    axios
      .post(`https://fakestoreapi.com/products`, NewProduct)
      .then((response) => {
        console.log(response.data);
        setProductList((prevProduct) => [...prevProduct, NewProduct]);
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
