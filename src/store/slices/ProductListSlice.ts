import { createSlice } from "@reduxjs/toolkit";
import { ProductListType } from './types'
import { getProductData } from './ProdcutService'

const initialState: ProductListType = {
    products: [],
    error: '',
};

const productSlice = createSlice({
    name: "prodcut",
    initialState,
    reducers: {        
    },
    extraReducers: (builder) => {
        builder
          .addCase(getProductData.fulfilled, (state, action) => {
            state.products = action.payload;
          })
          .addCase(getProductData.rejected, (state, action) => {
            state.error = action.error.message;
          });
      },
});

console.log(productSlice, 'productSlice')
export default productSlice.reducer;