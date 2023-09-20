import { createSlice } from "@reduxjs/toolkit";
import { getProductData } from './ProdcutService'
import { postProductData } from './AddProductService'
import { searchProduct } from './SearchProductService'
import { deleteProductItem } from './RemoveProductService'
import { ProductListType } from './types'

const productSlice = createSlice({
    name: "prodcut",
    initialState: {
      products: [],
      searc_results: [],
      loading: true,
      error: null,
    } as ProductListType,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(getProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(postProductData.fulfilled, (state, action) => {
        state.products.push(action as never)
        state.loading = false;
      })
      .addCase(postProductData.rejected, (state, action) => {   
        state.loading = false;     
        state.error = action.error.message ?? "An error occurred";;
      })
      .addCase(searchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.searc_results = action.payload;
        state.loading = false;
      })
      .addCase(searchProduct.rejected, (state, action) => {   
        state.loading = false;     
        state.error = action.error.message ?? "An error occurred";;
      })
      .addCase(deleteProductItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductItem.fulfilled, (state, action) => {        
        state.products = state.products.filter(product => product.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteProductItem.rejected, (state, action) => {   
        state.loading = false;     
        state.error = action.error.message ?? "An error occurred";;
      })
    },
});

export default productSlice.reducer;