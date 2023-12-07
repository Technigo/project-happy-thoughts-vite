import listEndpoints from 'express-list-endpoints';
const express = require('express');
const router = express.Router();
const Thought = require('../models/thought');

router.get('/', async (req, res) => {
    const endpoints = listEndpoints(router);
    res.json({ message: 'Happy Thoughts API', availableEndpoints: endpoints });
    });


router.get("/thoughts", async (req, res) => {
    try {
      const thoughts = await Thought.find()
      .sort({ createdAt: -1 })
      .limit(20);
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post("/thoughts", async (req, res) => {
    const { message } = req.body;
  
    try {
      const thought = await Thought.create({ message });
  
      res.status(201).json(thought);
    } catch (error) {
      res.status(400).json({ error: 'Invalid input' });
    }
  });
  
  router.post("/thoughts/:thoughtId/like", async (req, res) => {
    const { thoughtId } = req.params;
  
    try {
      const thought = await Thought.findById(thoughtId);
  
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
  
      thought.hearts += 1;
      await thought.save();
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;