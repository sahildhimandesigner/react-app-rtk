import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "./slices/ProductListSlice";

const store = configureStore ({
    reducer: {
        productData: ProductListSlice,
    }
})

export type AppDispatch = typeof store.dispatch
export default store;