import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { characterInitialState } from "./CharacterInitialState";


const char_limit = 12

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (page:number) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&offset=${page * char_limit}`);

    return res.data
});

export const CharacterSlice = createSlice({
    name: "character",
    initialState: characterInitialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.items = [...state.items, ...action.payload]
            state.status = "succeeded"
            state.error = false
            state.page += 1
            {
                state.page === 7 ? state.hasNextPage = false : state.hasNextPage = true
            }
        })
        builder.addCase(fetchCharacters.pending, (state) => {
            state.status = "pending"
            state.error = false
        })
        builder.addCase(fetchCharacters.rejected, (state) => {
            state.status = "failed"
            state.error = true
        })
    },
});


export default CharacterSlice.reducer;