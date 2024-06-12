const  mongoose = require('mongoose');

const KutaSchema = new mongoose.Schema({
    name: String,
    description: String,
    Image: String
})

const kutaModel = mongoose.model("kuta", KutaSchema)
module.exports = kutaModel