// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const session = require("express-session")
const connectMongo = require("connect-mongo")

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
app.get("/", (req, res) => {
    res.redirect("/jerseys")
})
 
app.post("/", (req, res) => {
    const { name, team, number } = req.body;
  
    res.redirect("/show");
  }); 

  app.post("/", async (REQUEST, RESPONSE) => {
    
    // create a jersey with the model
    const newJersey = await Jersey.create(REQUEST.body)

    // then once the jersey is created REDIRECT to the show, by giving it the newJersey data
    RESPONSE.redirect("show.ejs", {jersey: newJersey})
}) 

// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})