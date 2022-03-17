import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuotes = createAsyncThunk('quotes/fetchAllQuotes', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`);
    return res.data
})

interface QuoteProps {
    items: [];
    status: "idle" | "pending" | "succeeded" | "failed";
}

export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items:[],
        status: "idle",
        error: false,
    }as QuoteProps,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllQuotes.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = "succeeded"
        })
        builder.addCase(fetchAllQuotes.pending, (state, action) => {
            state.status = "pending"
        })
        builder.addCase(fetchAllQuotes.rejected, (state, action) => {
            state.status = "failed"
        })
    }
});



export default quotesSlice.reducer