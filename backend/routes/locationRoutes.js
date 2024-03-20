// routes/locationRoutes.js
const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

router.post('/add/data-location', (req, res) => {
    const { lat, long } = req.body;

    const newLocation = new Location({
        latitude: lat,
        longitude: long
    });

    newLocation.save()
        .then(() => res.status(200).json({ message: 'Location added successfully' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Route to fetch all location data
router.get('/get/data-location', async (req, res) => {
    try {
        const locations = await Location.find().sort({_id:-1}).limit(1);
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
