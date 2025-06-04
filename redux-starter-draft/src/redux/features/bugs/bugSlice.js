// src/redux/features/bugs/bugSlice.js

import {createSlice} from "@reduxjs/toolkit";

const bugSlice = createSlice({

    name:"bugs",
    initialState:{
        list:[],
        isSolved:false,
        lastFetch:null,
    },
    reducers:{

        addBug:(bugs , action)=>{
            bugs.list.push({
                bugDescription:action.payload.bugDescription
            })
        },

    }

});

export const {addBug} = bugSlice.actions;