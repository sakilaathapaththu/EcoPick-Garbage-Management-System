// models/collectingdetails.js
const mongoose = require('mongoose');

const collectingdetailSchema = new mongoose.Schema({
    startPoint: {
        type: String,
        required: true
    },
    endPoint: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    garbageType: {
        type: [String],
        required: true
    },
    
});

const Collectingdetail = mongoose.model('Collectingdetail', collectingdetailSchema);

module.exports = Collectingdetail;