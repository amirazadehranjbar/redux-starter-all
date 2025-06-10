// src/components/bug/form-AddBug.jsx
import React from "react";
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import {useDispatch, useSelector} from "react-redux";
import { postBug } from "../../redux/features/bugs/bugSlice.js";
import {buttonStyle, formStyle} from "../../styles/dark-light-style.js";

const FormAddBug = () => {
    const [action, setAction] = useState(null);
    const isDark = useSelector(state => state.darkMode.isDark);
    const dispatch = useDispatch();

    return (
        <Form
            className={isDark ? formStyle.dark : formStyle.light}
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));
                data.userID = "683f64e1772825e09a59634d";

                dispatch(postBug(data));
            }}
        >
            <label>
                bugDescription
            </label>
            <Input
                isRequired
                errorMessage="Please enter your bug description"
                name="bugDescription"
                placeholder="Enter your bug description"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <div className="flex gap-6">
                <Button
                    type="submit"
                    variant="bordered"
                    className={isDark ? buttonStyle.dark : buttonStyle.light}
                >
                    add bug
                </Button>
                <Button
                    type="reset"
                    className={isDark ? buttonStyle.dark : buttonStyle.light}
                >
                    Reset
                </Button>
            </div>
        </Form>
    );
};

export default FormAddBug;
