const  mongoose = require('mongoose');

const NusaduaSchema = new mongoose.Schema({
    name: String,
    description: String,
    Image: String
})

const nusaduaModel = mongoose.model("nusadua", NusaduaSchema)
module.exports = nusaduaModel