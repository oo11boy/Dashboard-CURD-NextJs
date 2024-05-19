import React from "react";
import TableList from "./ProductListComponent/TableList";

export default function ProductList() {
  return (
    <div className=" w-12/12 m-4">
      <div className="bg-white w-full  cart-plist p-5 border-b-2">
        <h2>Active Products</h2>
      </div>

      <TableList />
    </div>
  );
}
