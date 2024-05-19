import React from "react";
import NavHeader from "./ContentComponents/NavHeader/NavHeader";
import ProductsStatus from "./ContentComponents/ProductsStatus/ProductsStatus";

export default function Content({ width }) {
  return (
    <div className={`${width} content`}>
    <NavHeader/>
    <div className=" overflow-auto contentscrolled">
    <ProductsStatus/>
    </div>
    </div>

  );
}
