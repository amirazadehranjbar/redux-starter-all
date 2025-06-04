// models/userModel.js
const {Schema, model} = require("mongoose");
const {isEmail} = require('validator');


const userSchema = new Schema({

    userName: {
        type: String,
        required: [true, "user name is required !"],
        unique: [true, "this user name is existing !"],
    },

    email: {
        type: String,
        required: [true, "email is required !"],
        unique: [true, "this email is existing !"],
        validate: {
            validator: (value) => isEmail(value),
            message: "this email not valid !"
        }
    },

});

// pre save
userSchema.pre("save", function (next) {
    // remove all spaces from username
    this.userName = this.userName.replace(/\s+/g, "");

    next();
})


// export
const userModel = model("User", userSchema);
module.exports = userModel;