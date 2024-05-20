// اطلاعات محصولات بصورت سرور ساید از کامپوننت GetDataProduct دریافت میشود
// با استفاده از کانتکس نیز عملیات حذف و ویرایش در سمت کلاینت انجام میشود

"use client";
import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableListContext } from "@/ContextApi/TableListContext";
export default function TableList() {
  const { productlist, deleteproductHandler } = useContext(TableListContext);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Rate
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {productlist.map((item) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.rating.rate}</td>
                <td className="px-6 py-4">
                  Edit /{" "}
                  <DeleteIcon onClick={() => deleteproductHandler(item.id)} /> /
                  View
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
