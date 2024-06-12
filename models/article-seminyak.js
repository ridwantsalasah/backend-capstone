const  mongoose = require('mongoose');

const SeminyakSchema = new mongoose.Schema({
    name: String,
    description: String,
    Image: String
})

const seminyakModel = mongoose.model("seminyak", SeminyakSchema)
module.exports = seminyakModel