// src/redux/features/bugs/bugSlice.js

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// post new bug
export const postBug = createAsyncThunk("bugs/postBug", async (bugData, thunkAPI) => {

    try {
        const response = await axios.post("http://localhost:8000/api/bugs", bugData);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }

});

// bug Slice
const bugSlice = createSlice({

    name: "bugs",

    initialState: {
        list: [],
        isSolved: false,
        lastFetch: null,
        isLoading: false,
        error: null,
    },

    reducers: {

        // 🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱
        addBug: (bug, action) => {
            bug.list.push({
                bugDescription: action.payload.bugDescription,
                userID: action.payload.userID,
            })
        },

        // 🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱

    },

    extraReducers: (builder) => {
        builder
            .addCase(postBug.pending, (bug) => {
                bug.isLoading = true;
                bug.error = null;
            })

            .addCase(postBug.fulfilled, (bug, action) => {
                bug.list.push(action.payload.data);

                bug.isLoading = false;
                bug.error = null;
            })

            .addCase(postBug.rejected, (bug, action) =>{
                bug.isLoading = false;
                bug.error = action.payload?.error || "error while posting new bug"
            })
    }

});

export const {addBug} = bugSlice.actions;
export default bugSlice.reducer;