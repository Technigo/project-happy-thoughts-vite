import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import dotenv from "dotenv";
dotenv.config()


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/thoughts";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

mongoose.Promise = Promise;

const Thought = require('./models/thought');

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
    const endpoints = listEndpoints(app);
    res.json({ message: 'Happy Thoughts API', availableEndpoints: endpoints });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Internal Server Error', error: err });
});

app.get("/thoughts", async (req, res) => {
  try {
    const thoughts = await Thought.find()
    .sort({ createdAt: -1 })
    .limit(20);
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/thoughts", async (req, res) => {
  const { message } = req.body;

  try {
    const thought = await Thought.create({ message });

    res.status(201).json(thought);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

app.post("/thoughts/:thoughtId/like", async (req, res) => {
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
