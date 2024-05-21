import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Pagination from "@mui/material/Pagination";
import { TableListContext } from "@/ContextApi/TableListContext";
import { ProductEditContext } from "@/ContextApi/ProductEditContext";
import { ProductDeleteContext } from "@/ContextApi/ProductDeleteContext";
import ProductEdit from "./ProductEdit";
import { PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
export default function TableList() {
  const { productlist } = useContext(TableListContext);
  const { editProductHandler, ShowModalEdit } = useContext(ProductEditContext);
  const { handleDelete } = useContext(ProductDeleteContext);

  // تعیین تعداد محصولات در هر صفحه
  const productsPerPage = 6;

  // متغیرهای مربوط به صفحه فعلی و محصولات در آن
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productlist.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
    <div className="flex justify-end my-4">
    
    <Stack spacing={2}>
  <Pagination
 count={Math.ceil(productlist.length / productsPerPage)}
 page={currentPage}
 onChange={handleChangePage}
    renderItem={(item) => (
      <PaginationItem
        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
        {...item}
      />
    )}
  />
</Stack>
  </div>
    <div className="relative overflow-x-auto">
     
   
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
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

            <th scope="col" className="px-6 flex justify-center py-3">
              Action
            </th>
          </tr>
          
        </thead>
        <tbody>
        
          {currentProducts.map((item) => {
            return (
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6  py-4 font-medium flex items-center text-gray-900 whitespace-nowrap "
                >
                  <img className="w-12 border border-opacity-95 p-1 h-12 mr-2 rounded-lg" src={item.image}/>
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.category}</td>

                <td className="px-6 py-4 flex justify-center items-center">
                  <EditIcon
                    className="m-2 cursor-pointer"
                    onClick={() => editProductHandler(item.id)}
                  />
                  <DeleteIcon
                    className="m-2 cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  />
                  <Link href={`../${item.id}`} >
                  <VisibilityIcon 
                   className="m-2 cursor-pointer" />
                  </Link>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {ShowModalEdit && <ProductEdit />}

    
    </div>
    </>
  );
}
