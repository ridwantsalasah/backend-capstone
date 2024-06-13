const express = require("express");

const Thread = require('../models/thread');

const postThread = async (req, res) => {
  // console.log("Request body:", req.body); // Log request body

  try {
    const newThread = await Thread.create(req.body);
    // console.log("New thread created:", newThread); // Log new thread creation
    return res.status(201).json({
      status: 'success',
      data: newThread
    });
  } catch (error) {
    console.error("Error creating thread:", error); // Log error
    res.status(400).json({
      status: 'fail',
      message: error.errors
    });
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
  };