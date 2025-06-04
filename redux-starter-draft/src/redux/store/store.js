import {configureStore} from "@reduxjs/toolkit";
import bugSlice from "../features/bugs/bugSlice.js";

const store = configureStore({
    reducer:{
        bugSlice
    }
});

export default store;