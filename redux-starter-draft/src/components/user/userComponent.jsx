// src/components/user/userComponent.jsx
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input} from "@heroui/react";
import {buttonStyle, formStyle, mainStyle} from "../../styles/dark-light-style.js";
import {getAllUsers, postNewUser} from "../../redux/features/user/userSlice.js";


const UserComponent = () => {

    const [action, setAction] = useState(null);
    const isDark = useSelector(state => state.darkMode.isDark);
    const users = useSelector(state => state.user.usersList);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);


    return (
        <div className="h-[calc(100vh-125px)] w-screen flex flex-col">
            <main className={isDark ? mainStyle.dark : mainStyle.light}>
                {/*region add new user form*/}
                <Form
                    className={isDark ? formStyle.dark : formStyle.light}
                    onReset={() => setAction("reset")}
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        await dispatch(postNewUser(data));
                    }}
                >
                    <label>
                        user name
                    </label>
                    <Input
                        isRequired
                        errorMessage="Please enter your user name"
                        name="userName"
                        placeholder="Enter your user name"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <label>
                        email
                    </label>
                    <Input
                        isRequired
                        errorMessage="Please enter your email"
                        name="email"
                        placeholder="Enter your email"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <div className="flex gap-6">
                        <Button
                            type="submit"
                            variant="bordered"
                            className={isDark ? buttonStyle.dark : buttonStyle.light}
                        >
                            add user
                        </Button>
                        <Button
                            type="reset"
                            className={isDark ? buttonStyle.dark : buttonStyle.light}
                        >
                            Reset
                        </Button>
                    </div>
                </Form>
                {/*endregion*/}
                <div className="flex flex-col items-center justify-center">
                    {users.length > 0 ?
                        (
                            users.map((user,index)=>(<div key={index}><p>{user.userName}</p></div>))
                        )
                        : (<div>users not found !</div>)}
                </div>
            </main>
        </div>

    )
}
export default UserComponent;
