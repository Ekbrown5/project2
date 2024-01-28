const mongoose = require("./connection");

const jerseySchema = new mongoose.Schema({
    name: String,
    team: String,
    number: Number,
});

const Jersey = mongoose.model("Jersey", jerseySchema);

module.exports = Jersey;