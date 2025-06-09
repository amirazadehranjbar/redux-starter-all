// src/layout.jsx
import React, {useEffect, useState} from "react";
import {Moon,Sun} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {toggleMode} from "./redux/features/dark/darkSlice.js";
import {footerStyle, headerStyle, mainStyle} from "./styles/dark-light-style.js";


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {

    const dispatch = useDispatch();
    const isDark = useSelector(state => state.darkMode.isDark);

    useEffect(() => {

        if(isDark){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen flex flex-col">
            <header className={isDark ? headerStyle.dark : headerStyle.light}>
                <h1>My App Navbar</h1>
                <button className="bg-slate-800 px-5 py-2 right-5 fixed top-[calc(100vh/12)/2]
                rounded-md text-slate-400 font-bold hover:scale-110 cursor-pointer" onClick={() => dispatch(toggleMode())}>
                    {isDark ? <Sun/>: <Moon/>}
                </button>

            </header>

            <main className={isDark ? mainStyle.dark : mainStyle.light}>
                {children}
            </main>

            <footer className={isDark ? footerStyle.dark : footerStyle.light}>
                © 2025 My App
            </footer>
        </div>
    );
};

export default Layout;