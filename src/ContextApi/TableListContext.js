"use client";
import { getdataproduct } from "@/Components/Content/ContentComponents/ProductList/ProductListComponent/GetDataProduct";

import { createContext, useEffect, useState } from "react";

export const TableListContext = createContext({});

export const TableListContextContextProvider = ({ children }) => {
  const [productlist, setProductList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getdataproduct();
// ذخیره اطلاعاتی که به شکل سرور ساید دریافت شده در استیت مخصوص
      setProductList(data);
    }
    fetchData();
  }, []);

  const val = {
    productlist,
    setProductList,
  };
  return (
    <TableListContext.Provider value={val}>
      {children}
    </TableListContext.Provider>
  );
};
