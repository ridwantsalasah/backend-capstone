const  mongoose = require('mongoose');

const CangguSchema = new mongoose.Schema({
    name: String,
    description: String,
    Image: String
})

const cangguModel = mongoose.model("canggu", CangguSchema)
module.exports = cangguModel