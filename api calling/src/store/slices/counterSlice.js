import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        add: (state, action) => {
            let count = ++state.count

        },
        minus: (state, action) => {
            let count = state.count
            count && --state.count
        },
        
    }
})
export const { add, minus } = counterSlice.actions
export default counterSlice.reducer