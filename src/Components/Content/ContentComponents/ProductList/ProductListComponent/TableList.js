// اطلاعات محصولات بصورت سرور ساید از کامپوننت GetDataProduct دریافت میشود
// با استفاده از کانتکس نیز عملیات حذف و ویرایش در سمت کلاینت انجام میشود

"use client";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableListContext } from "@/ContextApi/TableListContext";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProductEdit from "./ProductEdit";
import { ProductEditContext } from "@/ContextApi/ProductEditContext";
import { ProductDeleteContext } from "@/ContextApi/ProductDeleteContext";

export default function TableList() {
  const { productlist } = useContext(TableListContext);
  const { editProductHandler, ShowModalEdit } = useContext(ProductEditContext);
  const { handleDelete } = useContext(ProductDeleteContext);

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
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {productlist
            .slice()
            .reverse()
            .map((item) => {
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

                  <td className="px-6 py-4 flex items-center">
                    <EditIcon
                      className="m-2 cursor-pointer"
                      onClick={() => editProductHandler(item.id)}
                    />
                    <DeleteIcon
                      className="m-2 cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    />

                    <VisibilityIcon className="m-2 cursor-pointer" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {ShowModalEdit && <ProductEdit />}
    </div>
  );
}
