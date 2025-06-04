// src/App.jsx
import {useDispatch, useSelector} from "react-redux";
import {addBug} from "./redux/features/bugs/bugSlice";

const App = () => {

    const dispatch = useDispatch();
    const bugsList = useSelector((state) => state.bug.list);

    const handleAddBug = () => {
        dispatch(addBug({bugDescription: "add bug manual", userID: "12212"}))
    }

    return (
        <div>
            <button onClick={handleAddBug} className="bg-slate-900 text-slate-300">add bug</button>
            <ul>
                {
                    bugsList.map((bug, index) => (
                        <li className="bg-slate-800 text-slate-400" key={index}>

                            {bug.bugDescription}
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}

export default App;