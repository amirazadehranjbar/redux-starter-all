// app.js
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/userRoutes");
const bugRoutes = require("./routes/bugRoutes");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*', // Allow requests from only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));

// routes
app.use("/", userRoutes);
app.use("/", bugRoutes);

// connect to express
const PORT = process.env.PORT || 8001;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`app listening on port ${PORT} success`)
});

// connect to mongoDB
mongoose.connect(process.env.MONGO_DB_URL, {}).then(() => {
    console.log("connected to mongoDB success")
}).catch((error) => {
    console.log(error.toString())
});
