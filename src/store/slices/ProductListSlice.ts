import { createSlice } from "@reduxjs/toolkit";
import { getProductData } from './ProdcutService'
import { postProductData } from './AddProductService'

const productSlice = createSlice({
    name: "prodcut",
    initialState: {
      products: [],
      loading: true,
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
    },
});

export default productSlice.reducer;