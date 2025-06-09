// src/styles/dark-light-style.js

export const buttonStyle = {
    light: "cursor-pointer hover:scale-110 transition duration-300 rounded-md px-5 py-3 bg-slate-800 text-slate-400 border-1 border-blue-500",
    dark:  "cursor-pointer hover:scale-110 transition duration-300 rounded-md px-5 py-3 bg-slate-900 text-slate-200 border-1 border-blue-500"
};

export const formStyle = {
    light: "w-full max-w-md flex flex-col gap-4 p-6 rounded-2xl bg-indigo-400 border-4 border-blue-500 text-black",
    dark:  "w-full max-w-md flex flex-col gap-4 p-6 rounded-2xl bg-indigo-950 border-4 border-blue-500 text-slate-200"
};

export const headerStyle = {
    light:"bg-slate-300 text-slate-900 font-bold p-4 flex flex-row h-[calc(100vh/12)]",
    dark: "bg-slate-900 text-slate-300 font-bold p-4 flex flex-row h-[calc(100vh/12)]"
};

export const mainStyle = {
    light:"flex-1 flex flex-col items-center justify-center p-6 bg-slate-100 text-slate-900",
    dark: "flex-1 flex flex-col items-center justify-center p-6 bg-slate-800 text-slate-200 "
};

export const footerStyle = {
    light:"bg-slate-300 text-slate-900 font-bold p-4 flex flex-row h-[calc(100vh/20)]",
    dark: "bg-slate-900 text-slate-300 font-bold p-4 flex flex-row h-[calc(100vh/20)]"
}
