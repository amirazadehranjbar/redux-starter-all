// src/App.jsx
import { useDispatch } from "react-redux";
import { addBug } from "./redux/features/bugs/bugSlice";

const App = ()=>{

    const dispatch = useDispatch();

    const handleAddBug = ()=>{
        dispatch(addBug({bugDescription:"add bug manual" , userID:"12212"}))
    }

    return(
        <div>
            <button onClick={handleAddBug} className="bg-slate-900 text-slate-300">add bug</button>
        </div>
    )
}

export default App;