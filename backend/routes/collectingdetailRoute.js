//route collectingdetail.js
const express = require('express');
const router = express.Router();
const Collectingdetail = require('../models/Collectingdetail');

router.post('/add/collectingdetail', async (req, res) => {
  try {
    const { startPoint, endPoint, date, garbageType, startPointLat, startPointLong, endPointLat, endPointLong } = req.body;
    const newCollectingdetail = new Collectingdetail({
      startPoint,
      startPointLat,
      startPointLong,
      endPoint,
      endPointLat,
      endPointLong,
      date,
      garbageType
    });
    const savedCollectingdetail = await newCollectingdetail.save();
    res.json(savedCollectingdetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//get details to frontend 

router.get('/last/collectingdetail', async (req, res) => {
    try {
      const lastCollectingdetail = await Collectingdetail.findOne().sort({ _id: -1 });
      res.json(lastCollectingdetail);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  


module.exports = router;