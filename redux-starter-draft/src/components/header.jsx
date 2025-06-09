import React, {useEffect} from 'react'
import {headerStyle} from "../styles/dark-light-style.js";
import {toggleMode} from "../redux/features/dark/darkSlice.js";
import {Moon, Sun} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

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
        <header className={isDark ? headerStyle.dark : headerStyle.light}>
            <h1>My App Navbar</h1>
            <button className="bg-slate-800 px-5 py-2 right-5 fixed top-[calc(100vh/12)/2]
                rounded-md text-slate-400 font-bold hover:scale-110 cursor-pointer" onClick={() => dispatch(toggleMode())}>
                {isDark ? <Sun/>: <Moon/>}
            </button>

        </header>
    )
}
export default Header
