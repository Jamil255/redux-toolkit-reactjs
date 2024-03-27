import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/CounterSlice"
const store = configureStore({
    reducer: {
        counter:counterReducer,
    }

})
export default store