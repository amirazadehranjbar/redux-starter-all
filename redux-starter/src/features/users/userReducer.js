const { createSlice } = require("@reduxjs/toolkit");

let userID = 0;
const initialState = [];

const userReducer = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        // Add a new user
        userAdd: (users, action) => {
            users.push({
                userID: ++userID,
                userName: action.payload.userName,
                userUploadedBugsIDs: [], 
            });
        },

        // Add a bug to an existing user by ID
        addBug: (users, action) => {
            const { userID, bugID } = action.payload; 
            const user = users.find(user => user.userID === userID);
            if (user) {
                user.userUploadedBugsIDs.push(bugID); 
            }
        }
    }
});

module.exports = {
    usersReducer: userReducer.reducer,
    usersActions: userReducer.actions,
};