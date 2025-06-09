import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input} from "@heroui/react";
import {buttonStyle, formStyle, mainStyle} from "../../styles/dark-light-style.js";


const UserComponent = () => {

    const [action, setAction] = useState(null);
    const isDark = useSelector(state => state.darkMode.isDark);
    const dispatch = useDispatch();
    return (
        <div className="h-[calc(100vh-125px)] w-screen flex flex-col">
            <main className={isDark ? mainStyle.dark : mainStyle.light}>
                <Form
                    className={isDark ? formStyle.dark : formStyle.light}
                    onReset={() => setAction("reset")}
                    onSubmit={(e) => {
                        e.preventDefault();
                        let data = Object.fromEntries(new FormData(e.currentTarget));
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
            </main>
        </div>

    )
}
export default UserComponent;
