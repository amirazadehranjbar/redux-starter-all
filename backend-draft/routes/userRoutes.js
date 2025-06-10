// routes/userRoutes.js
const { Router } = require("express");
const userRoutes = Router();
const UserModel = require("../models/userModel");

// new user add
userRoutes.post("/api/users", async (req, res) => {

    const { userName, email } = req.body;

    if (!userName) return new Error("user name required !");
    if (!email) return new Error("email required !");

    try {

        const newUser = new UserModel({
            userName,
            email,
        });

        await newUser.save();

        return res.status(201).json({ message: "success", data: newUser });


    } catch (error) {

        return res.status(401).json({ message: "error", data: error.message })

    }

});

// get all users
userRoutes.get("/api/users", async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json({ message: "success", data: users });
    } catch (error) {
        return res.status(400).json({ message: "error", data: error });
    }
});


// export
module.exports = userRoutes;
