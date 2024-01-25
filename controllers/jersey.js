const express = require("express")
const Jersey = require("../models/Jersey")

const router = express.Router()

router.get("/jersey/seed", async (req, res) => {

    const startJerseys = [
        { name: "Paul George", team: "Clippers", number: 13}, 
        { name: "Donovan Mitchell", team: "Cavaliers", number: 45},
        { name: "Ja Morant", team: "Grizzleys", number: 12},
        { name: "Jason Tatum", team: "Celtics", number: 0},
        { name: "Luka Doncic", team: "Mavericks", number: 77}
    ]
    await Jersey.deleteMany({});
    await Jersey.create(startJerseys) 
   res.redirect('/jersey') 
  });

// INDEX
router.get("/", async (req, res) => {
    try {
      const jerseys = await Jersey.find({});
      res.render("jerseys/index.ejs", { jerseys});
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  });

// NEW
router.get("/new", (req, res) => {
    res.render("jerseys/new.ejs");
    res.redirect('/jersey/new')
  });
  
  // CREATE
router.post("/", async (req, res) => {
    try {
      await Jersey.create(req.body);
      res.redirect("/jerseys");
    } catch (err) {
      console.log(err);
      res.render("jerseys/new.ejs");
    }
  });

  // EDIT
router.get("/:id/edit", async (req, res) => {
    try {
      const id = req.params.id
      const jersey = await Jersey.findById(id);
      res.render("jerseys/edit.ejs", { jersey});
    } catch (err) {
      console.log(err);
      res.redirect("/jerseys");
    }
  });

  // UPDATE
router.put("/:id", async (req, res) => {
    try {
      await Jersey.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/jerseys" + req.params.id);
    } catch (err) {
      console.log(err);
      res.redirect("/jersys");
    }
  });

  // DELETE 
router.delete("/:id", async (req, res) => {
    try {
      await Jersey.findByIdAndDelete(req.params.id);
      res.redirect("/jerseys");
    } catch (err) {
      console.log(err);
      res.redirect("/jerseys");
    }
  });

    // SHOW
router.get("/:id", async (req, res) => {
  try {    
    const id = req.params.id
    const jersey = await Jersey.findById(id);
    res.render("jerseys/show.ejs", { jersey});
  } catch (err) {
    console.log(err);
    res.redirect("/jerseys");
  }
});



  module.exports = router;