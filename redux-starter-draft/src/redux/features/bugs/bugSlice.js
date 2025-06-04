// src/redux/features/bugs/bugSlice.js

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// post new bug
const postBug = createAsyncThunk("bugs/postBug", async (bugData, thunkAPI) => {

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

    extraReducers: {

        [postBug.pending]: (bug) => {
            bug.isLoading = true;
            bug.error = null;
        },

        [postBug.fulfilled]: (bug, action) => {
            bug.isLoading = false;
            bug.list.push(action.payload.data);
        },

        [postBug.rejected]:(bug , action)=>{
            bug.isLoading = false;
            bug.error = action.payload?.error || "some error in post new bug";
        }

    }

});

export const {addBug} = bugSlice.actions;
export default bugSlice.reducer;