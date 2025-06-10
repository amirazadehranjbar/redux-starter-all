// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import store from "./redux/store/store.js";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BugsComponent from "./components/bug/bugsComponent.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import UserComponent from "./components/user/userComponent.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>

            <React.StrictMode>
                <Header/>
                <Routes>
                    <Route path="/bug" element={<BugsComponent/>}/>
                    <Route path="/user" element={<UserComponent/>}/>
                </Routes>
                <Footer/>

            </React.StrictMode>

        </Provider>
    </BrowserRouter>
);