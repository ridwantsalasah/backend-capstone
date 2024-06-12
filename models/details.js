const  mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    name: String,
    description: String,
    Image: String,
})

const detailModel = mongoose.model("detail", DetailSchema)
module.exports = detailModel