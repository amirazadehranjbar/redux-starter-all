const { createSelector } = require("reselect");

const users = state => state.users;
const bugs = state => state.bugs;

// Select bugs that were uploaded by a given user
const getBugsByUser = (targetUserID) => createSelector( 
    [users, bugs],
    (allUsers, allBugs) => {
        const targetUser = allUsers.find(user => user.userID === targetUserID); 
        if (!targetUser) return [];
        return allBugs.list.filter(bug => targetUser.userUploadedBugsIDs.includes(bug.id));
    }
);

// Return userName by userID
const getUserNameByID = (targetUserID) => createSelector( 
    [users],
    (allUsers) => {
        const foundedUser = allUsers.find(user => user.userID === targetUserID); 
        return foundedUser ? foundedUser.userName : "user not found";
    }
);

module.exports = {
    getBugsByUser,
    getUserNameByID,
};
