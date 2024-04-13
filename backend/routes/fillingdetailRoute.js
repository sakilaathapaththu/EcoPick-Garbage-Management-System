// //fillingdetailrouter.js route
// const express = require('express');
// const router = express.Router();
// const FillingDetail = require('../models/FillingDetail');

// router.post('/add/fillingdetail', async (req, res) => {
//   try {
//     const { filledCapacity, emptyCapacity,date } = req.body;
//     const newFillingDetail = new FillingDetail({
//       filledCapacity,
//       emptyCapacity,
//       date,
//     });
//     const savedFillingDetail = await newFillingDetail.save();
//     res.json(savedFillingDetail);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// //get filling details
// router.get('/last/fillingdetail', async (req, res) => {
//     try {
//       const lastfillingdetail = await FillingDetail.findOne().sort({ _id: -1 });
//       res.json(lastfillingdetail);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
// module.exports = router;
// Express Route
const express = require('express');
const router = express.Router();
const FillingDetail = require('../models/FillingDetail');

router.post('/add/fillingdetail', async (req, res) => {
  try {
    const { filledCapacity, date } = req.body;
    const lastFillingDetail = await FillingDetail.findOne({ date }).sort({ _id: -1 });

    let emptyCapacity = 10000; // Assuming total capacity is always 10000

    if (lastFillingDetail) {
      emptyCapacity = lastFillingDetail.emptyCapacity;
    }

    const updatedEmptyCapacity = Math.max(emptyCapacity - filledCapacity, 0);

    const newFillingDetail = new FillingDetail({
      filledCapacity,
      emptyCapacity: updatedEmptyCapacity,
      date,
    });

    const savedFillingDetail = await newFillingDetail.save();
    res.json(savedFillingDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/last/fillingdetail', async (req, res) => {
  try {
    const { date } = req.query; // Changed from req.body to req.query
    const lastFillingDetail = await FillingDetail.findOne({ date }).sort({ _id: -1 });
    res.json(lastFillingDetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;

