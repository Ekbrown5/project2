// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

const jerseyRouter = require("./controllers/jersey")

// get .env variables
const {DATABASE_URL, SECRET , PORT} = process.env


// create app object
const app = express()

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/jerseys", jerseyRouter);

// routes
app.get("/", (req, res) => {
    res.send("It's Working")
})

// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})