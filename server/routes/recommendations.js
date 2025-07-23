const express = require('express');
const router = express.Router();
const Recommendation = require('../models/Recommendation');

let counter = 1;

router.post('/', async (req, res) => {
  try {
    const newRec = new Recommendation({
      ...req.body,
      ID: counter++,
      headApproved: false,
      trusteeApproved: false
    });
    await newRec.save();
    res.status(201).json(newRec);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
