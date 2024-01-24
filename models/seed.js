const mongoose = require("./connection")
const jersey = require("./jerey")// Delay Seed Code Till Connection Opens with Connection Event
mongoose.connection.on("open", async () => {
  // seed code should be inside this function

  // clear the collection
  await Jersey.deleteMany({});

  // add seed data
  const jerseys = await Jersey.create([
    { name: "Paul George", team: "Clippers", number: "13" },
    { name: "Donovan Mitchell", team: "Cavaliers", number:"45" },
    { name: "Ja Morant", team: "Grizzleys", number: "12" },
    { name: "Jason Tatum", team: "Celtics", number: "0"},
    { name: "Luka Doncic", team: "Mavericks", number: "77"}
  ]);

  // log to confirm it was created
  console.log(jerseys);
});  