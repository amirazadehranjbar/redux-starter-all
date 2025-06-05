import React from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-800 text-white p-4">
                <h1>My App Navbar</h1>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 bg-slate-100">
                {children}
            </main>

            <footer className="bg-blue-900 text-white p-4 text-center">
                © 2025 My App
            </footer>
        </div>
    );
};

export default Layout;
