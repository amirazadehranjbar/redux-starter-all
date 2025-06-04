// src/index.js
const { store } = require("./app/store");
const {loadBugs , addBug} = require("./actions/apiActions");

// Dispatch an action to load bugs from the server
// store.dispatch(loadBugs());

// post a new bug to the server
store.dispatch(addBug({ description: "New Bug from frontend", userId: 1 }));

// Simulate a delay to see the effect of loading bugs
// setTimeout(()=>{store.dispatch(loadBugs())},2000);
