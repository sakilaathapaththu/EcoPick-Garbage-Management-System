// models/Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
