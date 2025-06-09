import React from "react";
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { useDispatch } from "react-redux";
import { postBug } from "../redux/features/bugs/bugSlice.js";

const FormAddBug = () => {
    const [action, setAction] = useState(null);
    const dispatch = useDispatch();

    return (
        <Form
            className="w-full max-w-md flex flex-col gap-4 p-6 dark:bg-slate-800 rounded-2xl border-4 dark:border-blue-500"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));
                data.userID = "683f64e1772825e09a59634d";

                dispatch(postBug(data));
            }}
        >
            <Input
                isRequired
                errorMessage="Please enter your bug description"
                label="bugDescription"
                labelPlacement="outside"
                name="bugDescription"
                placeholder="Enter your bug description"
                type="text"
            />

            <div className="flex gap-6">
                <Button
                    type="submit"
                    variant="bordered"
                    className="rounded-2xl dark:bg-slate-800 px-8 py-2 text-slate-400 border-2 dark:border-blue-500"
                >
                    add bug
                </Button>
                <Button
                    type="reset"
                    className="rounded-2xl bg-slate-800 px-8 py-2 text-slate-400 border-2 border-blue-500"
                >
                    Reset
                </Button>
            </div>
        </Form>
    );
};

export default FormAddBug;
