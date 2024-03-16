const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    ID:{
        type: String,
        required: true

    },

    name:{
        type: String,
        required: true
    },

    filepath:{
        type:String
        
    },

     contact:{
        type:Number,
        required: true
    },

     address:{
        type:String,
        required: true
    },


     date:{
        type:String
    }
})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;