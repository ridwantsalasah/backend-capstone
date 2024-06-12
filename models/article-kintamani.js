const  mongoose = require('mongoose');

const KintamaniSchema = new mongoose.Schema({
    name: String,
    description: String,
    Image: String
})

const kintamaniModel = mongoose.model("kintamani", KintamaniSchema)
module.exports = kintamaniModel