"use client"
import React, { useContext } from "react";
import TableList from "./ProductListComponent/TableList";
import { ProductAddContext } from "@/ContextApi/ProductAddContext";
import ProductAdd from "./ProductListComponent/ProductAdd";

export default function ProductList() {
const {showModalAdd,showAddProductModal}=useContext(ProductAddContext)
  return (
    <div className=" w-12/12 m-4">
      <div className="bg-white w-full flex justify-between  cart-plist p-5 border-b-2">
        <h2>Active Products</h2>
        <button onClick={(event)=>showModalAdd(event)}  className="bg-blue-600 text-white p-2 rounded-lg text-lg">
         Add New Product
        </button>
        {showAddProductModal && <ProductAdd/>}
      </div>

      <TableList />
    </div>
  );
}
