import React from 'react'
import {footerStyle} from "../styles/dark-light-style.js";
import {useSelector} from "react-redux";

const Footer = () => {

    const isDark = useSelector(state => state.darkMode.isDark);

    return (

        <footer className={isDark ? footerStyle.dark : footerStyle.light}>
            © 2025 My App
        </footer>
    )
}
export default Footer
