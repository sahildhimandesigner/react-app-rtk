import { createSlice } from "@reduxjs/toolkit";
import { getProductData } from './ProdcutService'
import { postProductData } from './AddProductService'
import { searchProduct } from './SearchProductService'
import { deleteProductItem } from './RemoveProductService'
import { ProductListType } from './types'
import { stringifyToJson } from '../../helper/stringifyToJson'

const cartItemsFromLocalStorage =  stringifyToJson(localStorage.getItem("cartItems") || "") || [];

const productSlice = createSlice({
    name: "prodcut",
    initialState: {
      products: [],
      searc_results: [],
      loading: true,
      error: null,
      cartItem: cartItemsFromLocalStorage,
    } as ProductListType,
    reducers: {
      addToCartItem: (state, action) => {
        console.log(action.payload)
        state.cartItem.push(action.payload);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      },
      remove_cart_item: (state, action) => {
        const idToRemove = action.payload;
        const setRemovedCartItem = state.cartItem.filter(item => item.id !== idToRemove);
        localStorage.setItem("cartItems", JSON.stringify(setRemovedCartItem[0]));
        state.cartItem = setRemovedCartItem;
      },
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
        const deleteProduct = state.products.filter(product => product.id !== action.payload);
        state.products = deleteProduct;
        state.cartItem = deleteProduct;
        state.loading = false;
      })
      .addCase(deleteProductItem.rejected, (state, action) => {   
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";;
      })
    },
});

export const { addToCartItem, remove_cart_item } = productSlice.actions;
export default productSlice.reducer;