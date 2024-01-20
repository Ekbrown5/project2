const {Schema, model} = require("./connection")

const jerseySchema = new Schema({
    name: String,
    team: String,
    number: Number
})
const Jersey = model("Jersey", jerseySchema)
module.exports = Jersey