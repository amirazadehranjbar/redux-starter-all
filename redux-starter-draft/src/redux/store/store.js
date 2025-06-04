// src/redux/store/store.js

import {configureStore} from "@reduxjs/toolkit";
import bugReducer from "../features/bugs/bugSlice.js";

const store = configureStore({
    reducer:{
        bug:bugReducer,
    }
});

export default store;