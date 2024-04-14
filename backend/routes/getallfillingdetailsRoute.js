// Import required modules
const express = require('express');
const router = express.Router();

// Import your models

const Collectingdetail = require('../models/Collectingdetail');
const FillingDetail = require('../models/FillingDetail');
// Define routes
router.get('/collectingdetails', async (req, res) => {
    try {
        // Fetch collecting details from the database
        const collectingDetails = await Collectingdetail.find();
        res.json(collectingDetails);
    } catch (err) {
        console.error('Error fetching collecting details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/fillingdetails', async (req, res) => {
    try {
        // Fetch filling details from the database based on dates provided in query parameters
        const dates = req.query.dates.split(',');
        const fillingDetails = await FillingDetail.find({ date: { $in: dates } });
        res.json(fillingDetails);
    } catch (err) {
        console.error('Error fetching filling details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Export router
module.exports = router;
