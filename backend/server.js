import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import routes from "./routes/routes";
import Thought from "./models/thought";
import dotenv from "dotenv";
dotenv.config()


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/thoughts";
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then (() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

mongoose.Promise = Promise;

const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());


// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Internal Server Error', error: err });
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
