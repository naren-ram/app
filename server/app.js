const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Import model
const EducationRequest = require('./models/model');

// Basic Routes
app.get('/', (req, res) => {
  res.send('🎉 Server is running');
});

// Get all requests
app.get('/api/requests', async (req, res) => {
  const requests = await EducationRequest.find();
  res.json(requests);
});

// Create a new request
app.post('/api/requests', async (req, res) => {
  try {
    const newRequest = new EducationRequest(req.body);
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
