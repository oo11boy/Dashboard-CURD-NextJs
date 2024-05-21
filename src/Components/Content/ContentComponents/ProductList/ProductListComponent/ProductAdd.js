import { ProductAddContext } from "@/ContextApi/ProductAddContext";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React, { useContext } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ProductAdd() {
  const {
    showAddProductModal,
    setshowAddProductModal,
    NewProduct,
    SetNewProduct,
    AddProductHandler,
  } = useContext(ProductAddContext);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showAddProductModal}
        onClose={() => setshowAddProductModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showAddProductModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Add Product 
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form class="w-full max-w-sm" onSubmit={AddProductHandler}>
               
              <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Image Url
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                    autoComplete='off'
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) =>
                        SetNewProduct({ ...NewProduct, image: e.target.value })
                      }
                    />
                  </div>
                </div>
                  
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                        autoComplete='off'
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) =>
                        SetNewProduct({ ...NewProduct, title: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Price
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                     autoComplete='off'
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) =>
                        SetNewProduct({ ...NewProduct, price: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Category
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                       autoComplete='off'
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) =>
                        SetNewProduct({
                          ...NewProduct,
                          category: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div class="md:flex md:items-center">
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <button
                      class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={(event) => AddProductHandler(event)}
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
