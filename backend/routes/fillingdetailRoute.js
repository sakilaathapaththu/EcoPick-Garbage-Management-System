//fillingdetailrouter.js route
const express = require('express');
const router = express.Router();
const FillingDetail = require('../models/FillingDetail');

router.post('/add/fillingdetail', async (req, res) => {
  try {
    const { filledCapacity, emptyCapacity } = req.body;
    const newFillingDetail = new FillingDetail({
      filledCapacity,
      emptyCapacity
    });
    const savedFillingDetail = await newFillingDetail.save();
    res.json(savedFillingDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get filling details
router.get('/last/fillingdetail', async (req, res) => {
    try {
      const lastfillingdetail = await FillingDetail.findOne().sort({ _id: -1 });
      res.json(lastfillingdetail);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
module.exports = router;
