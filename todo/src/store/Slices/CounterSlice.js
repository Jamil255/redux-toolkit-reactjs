import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        add: (state, action) => {
            console.log("addttion", state.count);
            let count = state.count
            state.count = ++count
        },
        minus: (state, action) => {
            console.log("minus");
        }
    }
})
export const { add, minus } = counterSlice.actions
export default counterSlice.reducer