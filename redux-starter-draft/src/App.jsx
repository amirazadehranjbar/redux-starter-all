// src/App.jsx
import React from "react";
import FormAddBug from "./components/form-AddBug.jsx";
import Layout from "./layout.jsx";
import BugsList from "./components/bugsList.jsx";

const App = () => {


    return (

        <Layout>
            <FormAddBug></FormAddBug>
            <BugsList></BugsList>
        </Layout>
    )
}

export default App;