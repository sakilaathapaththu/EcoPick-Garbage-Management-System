
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const DriverSchema = new Schema({
    
    firstName: {
        type: String,
        required: true 
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    lclass: {
        type: String,
        required: true
    },
    lnumber: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imagePath: { 
        type: String
    }
});


const driver = mongoose.model("drivers", DriverSchema);

module.exports = driver;
