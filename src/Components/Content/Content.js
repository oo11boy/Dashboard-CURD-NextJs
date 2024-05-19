import React from "react";
import NavHeader from "./ContentComponents/NavHeader/NavHeader";
import ProductsStatus from "./ContentComponents/ProductsStatus/ProductsStatus";
import ProductList from "./ContentComponents/ProductList/ProductList";

export default function Content({ width }) {
  return (
    <div className={`${width} content`}>
      <NavHeader />
      <div className=" overflow-auto contentscrolled">
        <div className="bg-blue-600 h-60">
          <ProductsStatus />
          <ProductList />
        </div>
      </div>
    </div>
  );
}
