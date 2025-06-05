// src/components/form-AddBug.jsx
import {useState} from "react";
import {Form, Input, Button} from "@heroui/react";

const formAddBug = ()=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [action, setAction] = useState(null);

    return (
        <Form
            className="h-1/2 w-1/2 flex flex-col gap-4 mt-10 ml-10 items-center justify-center bg-slate-800 p-4
            rounded-2xl border-4 border-blue-500"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));

                setAction(`submit ${JSON.stringify(data)}`);
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

                <Button type="submit" variant="bordered" className="rounded-2xl bg-slate-800 px-8 py-2
                text-slate-400 border-2 border-blue-500">
                    Submit
                </Button>
                <Button type="reset" className="rounded-2xl bg-slate-800 px-8 py-2
                text-slate-400 border-2 border-blue-500">
                    Reset
                </Button>
            </div>
            {action && (
                <div className="text-small text-default-500">
                    Action: <code>{action}</code>
                </div>
            )}
        </Form>
    );
};

export default formAddBug;

