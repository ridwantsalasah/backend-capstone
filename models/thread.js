const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  nama: { 
    type: String, 
    required: true 
  },
  body: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;