// src/redux/store/store.js

import {configureStore} from "@reduxjs/toolkit";
import bugReducer from "../features/bugs/bugSlice.js";
import DarkReducer from "../features/dark/darkSlice.js";
import UserReducer from "../features/user/userSlice.js";

const store = configureStore({
    reducer:{
        bug:bugReducer,
        user:UserReducer,
        darkMode:DarkReducer,
    }
});

export default store;