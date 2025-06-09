// src/bugsComponent.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import store from "./redux/store/store.js";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BugsComponent from "./components/bugsComponent.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>

            <React.StrictMode>
                <Routes>
                    <Route path="/" element={BugsComponent}/>
                </Routes>

            </React.StrictMode>

        </Provider>
    </BrowserRouter>
);