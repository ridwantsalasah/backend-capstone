// routes/threads.js
const express = require('express');
const router = express.Router();
const { 
  postThread, 
  getAllThreads, 
  getThreadById, 
  updateThreadById, 
  deleteThreadById 
} = require('../controllers/threads');

// Rute untuk membuat thread baru
router.route('/')
  .post(postThread)
  .get(getAllThreads);

// Rute untuk operasi CRUD berdasarkan ID
router.route('/:id')
  .get(getThreadById)
  .put(updateThreadById)
  .delete(deleteThreadById);

module.exports = router;