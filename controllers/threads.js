const express = require("express");
const app = express();
const connectDB = require("../db/connect");


const Thread = require('../models/thread');
const handler = async (req, res) => {
  const { method } = req;

  switch (method) {   
      case 'GET':
          await connectDB();
          res.json({ ok: true });
      case 'POST':
          return postThread(req, res);
      // case yg lain
      default:
          return res.status(404).send('Not Found');
  }
};

const postThread = async (req, res) => {
  try {
      const thread = new Thread({
          nama: req.body.nama,
          konten: req.body.konten
      });
      await thread.save();
      console.log(thread);
      res.status(201).send(thread);
  } catch (error) {
    res.status(400).send({ message: 'Error creating thread', error: error.message });
  }
};
  
const getAllThreads = async (req, res) => {
  try {
      const threads = await Thread.find();
      res.send(threads);
  } catch (error) {
      res.status(500).send({ message: 'Error fetching threads', error });
  }
};
  
const getThreadById = async (req, res) => {
  try {
      const threadId = req.params.id;
      const thread = await Thread.findById(threadId);

      if (!thread) {
          return res.status(404).send({ message: 'Thread not found' });
      }

      res.send(thread);
  } catch (error) {
      res.status(500).send({ message: 'Error fetching thread', error });
  }
};
  
const updateThreadById = async (req, res) => {
  try {
      const threadId = req.params.id;
      const updates = req.body;
      const thread = await Thread.findByIdAndUpdate(threadId, updates, { new: true, runValidators: true });

      if (!thread) {
          return res.status(404).send({ message: 'Thread not found' });
      }

      res.send(thread);
  } catch (error) {
      res.status(400).send({ message: 'Error updating thread', error });
  }
};

const deleteThreadById = async (req, res) => {
  try {
      const threadId = req.params.id;
      const thread = await Thread.findByIdAndDelete(threadId);

      if (!thread) {
          return res.status(404).send({ message: 'Thread not found' });
      }

      res.send({ message: 'Thread deleted successfully' });
  } catch (error) {
      res.status(500).send({ message: 'Error deleting thread', error });
  }
};
  
  module.exports = {
    postThread,
    getAllThreads,
    getThreadById,
    updateThreadById,
    deleteThreadById,
    handler
  };
