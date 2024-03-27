// filling details.js model
const mongoose = require('mongoose');

const fillingDetailSchema = new mongoose.Schema({
    totalCapacity: {
        type: Number,
        default: 10000 // Set default value to 10000 kg
    },
    filledCapacity: {
        type: Number,
        required: true
    },
    emptyCapacity: {
        type: Number,
        required: true
    }
});

const FillingDetail = mongoose.model('FillingDetail', fillingDetailSchema);

module.exports = FillingDetail;
