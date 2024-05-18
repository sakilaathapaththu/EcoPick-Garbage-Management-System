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


// Define route to fetch all collecting details from the database
router.get('/alldetails', async (req, res) => {
    try {
        // Fetch all collecting details from the database
        const collectingDetails = await Collectingdetail.find();

        // Check if collectingDetails is empty
        if (collectingDetails.length === 0) {
            return res.status(404).json({ error: 'No collecting details found' });
        }

        // Extract dates from collectingDetails
        const dates = collectingDetails.map(detail => detail.date);

        // Fetch all filling details from the database where date is in dates array
        const fillingDetails = await FillingDetail.find({ date: { $in: dates } });

        // Send response with fillingDetails
        res.json({ fillingDetails });
    } catch (err) {
        console.error('Error fetching filling details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Define route to fetch all collecting details from the database
router.get('/alldetails/collecting', async (req, res) => {
    try {
        // Fetch all collecting details from the database
        const collectingDetails = await Collectingdetail.find();

        // Check if collectingDetails is empty
        if (collectingDetails.length === 0) {
            return res.status(404).json({ error: 'No collecting details found' });
        }

        // Send response with collectingDetails
        res.json({ collectingDetails });
    } catch (err) {
        console.error('Error fetching collecting details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;
