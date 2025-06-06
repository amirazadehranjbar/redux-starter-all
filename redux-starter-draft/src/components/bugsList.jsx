// src/components/bugsList.jsx
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllBugs} from "../redux/features/bugs/bugSlice.js";


const BugsList = () => {

    const dispatch = useDispatch();
    const bugsList = useSelector(state => state.bug.list);
    const isLoading = useSelector(state => state.bug.isLoading);


    useEffect(() => {
        dispatch(getAllBugs());
    }, [dispatch]);

    if (bugsList.length > 0 && !isLoading) {
        return (
            <div className="flex flex-col gap-3">
                {bugsList.map(bug => (
                    <p key={bug._id}>{bug.bugDescription}</p>
                ))}
            </div>
        );
    }

    if (bugsList.length === 0) return <p>bug not found</p>;

    if (isLoading) return <p>is loading ....</p>;

    else return null;


};

export default BugsList;
