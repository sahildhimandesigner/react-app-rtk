import { createSlice } from "@reduxjs/toolkit";
import { getProductData } from './ProdcutService'
import { postProductData } from './AddProductService'
import { searchProduct } from './SearchProductService'

const productSlice = createSlice({
    name: "prodcut",
    initialState: {
      products: [],
      searc_results: [],
      loading: true,
      error: null as string | null,
    },
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
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.searc_results = action.payload;
        state.loading = false;
      })
      .addCase(searchProduct.rejected, (state, action) => {   
        state.loading = false;     
        state.error = action.error.message ?? "An error occurred";;
      })
    },
});

export default productSlice.reducer;