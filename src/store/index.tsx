import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "./slices/ProductListSlice";

const store = configureStore ({
    reducer: {
        productData: ProductListSlice,
    }
})

export default store;