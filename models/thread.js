const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  nama: { 
    type: String, 
    required: true 
  },
  konten: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;