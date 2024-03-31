import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice.js";
import productSlice from "./slices/productSlice.js";
const store = configureStore({
    reducer: {
        counter: counterSlice,
        product:productSlice
    }
})
export default store;