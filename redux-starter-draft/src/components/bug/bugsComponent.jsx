import React from 'react'
import {mainStyle} from "../../styles/dark-light-style.js";
import {useSelector} from "react-redux";
import FormAddBug from "../form-AddBug.jsx";
import BugsList from "./bugsList.jsx";


const BugsComponent = () => {
    const isDark = useSelector(state => state.darkMode.isDark);

    return (

        <div className="min-h-screen flex flex-col">
            <main className={isDark ? mainStyle.dark : mainStyle.light}>
                <FormAddBug/>
                <BugsList/>
            </main>
        </div>

    )
}
export default BugsComponent
