// routes/bugRoutes.js
const {Router} = require("express");
const bugRoutes = Router();
const BugModel = require("../models/bugModel");

// post new bug
bugRoutes.post("/api/bugs" , async (req , res)=>{

    const {bugDescription , userID } =req.body;

    if (!bugDescription) {
        return res.status(400).json({ message: "bug's description is required!" });
    }


    try {

        const newBug = new BugModel({
            bugDescription,
            userID,
        });

        await newBug.save();

        return res.status(201).json({message:"success" , data:newBug});

    }catch (e) {
        return res.status(401).json({message:"error",data:e.message})
    }



});

// get all bugs
bugRoutes.get("/api/bugs" , async (req , res)=>{

    try {

        const bugs = await BugModel.find({});
        if(!bugs) return res.status(200).json({message:"Not bugs found"});

        return res.status(200).json({message:"success" , data:bugs});

    }catch (e) {
        return res.status(400).json({message:"error" , data:e.message});
    }

});

// export
module.exports = bugRoutes;