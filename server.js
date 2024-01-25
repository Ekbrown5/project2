// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

//
const jerseyRouter = require("./controllers/jersey")

// get .env variables
const {PORT = 3000, DATABASE_URL, SECRET = "iknowwhatyoudidlastsummer",} = process.env

// create app object
const app = express()

//Middleware
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/jersey", jerseyRouter);

// routes
app.get("/", (req, response) => {
    response.redirect("/jersey")
})

// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})