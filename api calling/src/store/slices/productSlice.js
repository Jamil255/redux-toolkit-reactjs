import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload.data
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = true
        })

    }
})


export const fetchData = createAsyncThunk("product/fetchData", async (obj, { rejectWithValue }) => {
    try {
        const respone = await axios.get('https://fakestoreapi.com/products')
        return respone
    } catch (error) {
        rejectWithValue(error)
    }
})

export default productSlice.reducer

