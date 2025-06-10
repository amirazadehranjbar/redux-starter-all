// src/redux/features/user/userSlice.js

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// post new user
export const postNewUser = createAsyncThunk(
    'users/postNewUser',async (newUserData, thunkAPI) => {
        try{

            const response = await axios.post("http://localhost:8000/api/users" , newUserData);
            return response.data;

        }catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// get all users
export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (users , thunkAPI)=>{

        try {

            const response = await axios.get("http://localhost:8000/api/users");
            return response.data;

        }catch (e) {
            return thunkAPI.rejectWithValue(e);
        }

    }
);


const userSlice = createSlice({
    name:"users",
    initialState:{
        usersList:[],
        isPosting:false,
        isLoading:false,
        isLoggedIn:false,
        error:null,
    },
    extraReducers:builder => builder

        //region add user *************************************************
        .addCase(postNewUser.pending , users => {
            users.isPosting=true;
            users.error=null;
        })

        .addCase(postNewUser.fulfilled , (users, action)=>{
            users.usersList.push(action.payload.newUser);
            users.isPosting=false;
            users.isLoggedIn = true;
        })

        .addCase(postNewUser.rejected , (users , action)=>{
            users.error = action.payload.error;
        })
        //endregion

        //region get all users *****************************************
        .addCase(getAllUsers.pending,(users)=>{
            users.isLoading=true;
            users.error = null;
        })

        .addCase(getAllUsers.fulfilled , (users , action)=>{
            users.usersList = action.payload.data;
            users.isLoading=false;
        })

        .addCase(getAllUsers.rejected , (users , action)=>{
            users.isLoading = false;
            users.isPosting = false;
            users.error = action.payload.error;

        })
        //endregion
});


// export
export const actions = userSlice.actions;
export default userSlice.reducer;


