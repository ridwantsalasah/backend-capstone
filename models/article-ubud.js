const  mongoose = require('mongoose');

const UbudSchema = new mongoose.Schema({
    name: String,
    description: String,
    Image: String
})

const ubudModel = mongoose.model("ubud", UbudSchema)
module.exports = ubudModel