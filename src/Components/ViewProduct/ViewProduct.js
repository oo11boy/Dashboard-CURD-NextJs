import React from "react";
import { getdataproduct } from "../Content/ContentComponents/ProductList/ProductListComponent/GetDataProduct";
import StarIcon from "@mui/icons-material/Star";
import CategoryIcon from "@mui/icons-material/Category";
import { redirect } from "next/navigation";
export default async function ViewProduct({ ProductId }) {
  const data = await getdataproduct();
  const findproduct = data.find((item) => item.id == ProductId);
  !findproduct && redirect("../");
  return (
    <div class="flex p-4 flex-col bg-[#F1F5F9] justify-center items-center h-[100vh]">
      <div class="!z-5  min-w-[300px] max-w-[420px] h-auto relative flex w-full flex-col rounded-[20px] bg-white bg-clip-border p-5 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div class="ml-auto">
          <div class="relative flex">
            <div class="flex">
              <button class="linear flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-xl font-bold text-brand-500 transition duration-200 hover:cursor-pointer hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="mb-auto flex flex-col items-center justify-center">
          <div class="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 border ">
            <img src={findproduct.image} className="w-32 h-32" />
          </div>
          <h4 class="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
            {findproduct.price} $
          </h4>
          <p class="px-5 text-center my-4 text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
            {findproduct.title}
          </p>
        </div>
        <div class="flex flex-col mt-3">
          <div class="flex justify-between">
            <p class="text-lg font-medium flex items-center  text-gray-600">
              {findproduct.rating.rate}{" "}
              <StarIcon className="ml-1 text-yellow-400" />
            </p>
            <p class="text-sm font-medium text-gray-600 opacity-40 flex items-center">
              <CategoryIcon className="mr-1" /> {findproduct.category}
            </p>
          </div>
          <div class="mt-2 flex h-3 w-full items-center rounded-full bg-lightPrimary dark:!bg-navy-700">
            <span class="h-full w-1/2 rounded-full bg-brand-500"></span>
          </div>
        </div>
      </div>
      <p class="font-normal text-navy-700 mt-20 mx-auto w-max">
        Storage Card component from
        <a
          href="https://github.com/oo11boy"
          target="_blank"
          class="text-brand-500 font-bold"
        >
          {" "}
          oo11boy
        </a>
      </p>
    </div>
  );
}
