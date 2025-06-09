import {createSlice} from "@reduxjs/toolkit";

const DarkReducer= createSlice({
    name:"dark-light",
    initialState:{
        isDark:false
    },
    reducers:{
        toggleMode:(state)=>{
            state.isDark = !state.isDark;
        }
    }
});

export const {toggleMode} = DarkReducer.actions;
export default DarkReducer.reducer;