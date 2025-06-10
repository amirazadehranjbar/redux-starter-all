// src/redux/features/dark/darkSlice.js
import {createSlice} from "@reduxjs/toolkit";

const DarkReducer= createSlice({
    name:"dark-light",
    initialState:{
        isDark:true
    },
    reducers:{
        toggleMode:(state)=>{
            state.isDark = !state.isDark;
        }
    }
});

export const {toggleMode} = DarkReducer.actions;
export default DarkReducer.reducer;