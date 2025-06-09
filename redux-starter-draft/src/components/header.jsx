import React, {useEffect} from 'react'
import {buttonStyle, headerStyle} from "../styles/dark-light-style.js";
import {toggleMode} from "../redux/features/dark/darkSlice.js";
import {Moon, Sun} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const isDark = useSelector(state => state.darkMode.isDark);
    const navigate = useNavigate();

    useEffect(() => {

        if(isDark){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);


    return (
        <header className={isDark ? headerStyle.dark : headerStyle.light}>
            <button className={isDark ? buttonStyle.dark : buttonStyle.light} onClick={()=>navigate("/bug")}>
                bugs
            </button>
            <button className={isDark ? buttonStyle.dark : buttonStyle.light} onClick={()=>navigate("/user")}>
                user
            </button>
            <button className="bg-slate-800 px-5 py-2 right-5 fixed top-[calc(100vh/12)/2]
                rounded-md text-slate-400 font-bold hover:scale-110 cursor-pointer" onClick={() => dispatch(toggleMode())}>
                {isDark ? <Sun/>: <Moon/>}
            </button>

        </header>
    )
}
export default Header
