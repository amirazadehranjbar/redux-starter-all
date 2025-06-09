// src/redux/store/store.js

import {configureStore} from "@reduxjs/toolkit";
import bugReducer from "../features/bugs/bugSlice.js";
import DarkReducer from "../features/dark/darkSlice.js";

const store = configureStore({
    reducer:{
        bug:bugReducer,
        darkMode:DarkReducer,
    }
});

export default store;