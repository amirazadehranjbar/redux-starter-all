import React, {useEffect, useState} from "react";


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {

    const [isDark , setIsDark] = useState(false);

    const setIsDarkHandler = ()=>{
        setIsDark(!isDark);
    }

    useEffect(() => {

        if(isDark){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-slate-400 dark:bg-slate-900 text-white p-4 flex flex-row h-[calc(100vh/12)]">
                <h1>My App Navbar</h1>
                <button className="bg-slate-800 px-5 py-2 right-5 fixed top-[calc(100vh/12)/2]
                rounded-md text-slate-400 font-bold hover:scale-110 cursor-pointer" onClick={setIsDarkHandler}>
                    {isDark ? "Light" : "Dark"}
                </button>

            </header>

            <main className={`flex-1 flex items-center justify-center p-6 ${isDark ? 'bg-gray-800 text-slate-400' : 'bg-slate-100'}`}>
                {children}
            </main>

            <footer className="bg-slate-400 dark:bg-slate-900 text-white p-4 text-center">
                © 2025 My App
            </footer>
        </div>
    );
};

export default Layout;