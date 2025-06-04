// models/bugModel.js
const {Schema, model} = require("mongoose");

const bugSchema = new Schema({

    bugDescription: {
        type: String,
        required: [true, "Bug must have description !"]
    },

    bugIsSolved: {
        type: Boolean,
        default: false
    },

    bugUploadAt: {
        type: Date,
        default: Date.now,
    },

    userID:{
        type:Schema.ObjectId,
        ref:"User"
    },

}, {timestamps: true});

const bugModel = model("Bug", bugSchema);
module.exports = bugModel;