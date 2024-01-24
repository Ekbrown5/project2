const mongoose = require("./connection")
const {Schema, model} = require("./connection")

console.log(mongoose)


const jerseySchema = new Schema({
    name: String,
    team: String,
    number: Number
})
const Jersey = mongoose.model("Jersey", jerseySchema)
module.exports = Jersey