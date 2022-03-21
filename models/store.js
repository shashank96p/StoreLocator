const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/lib/data-types');

const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [true, 'Please add a store Name'],
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    city: {
        type: String,
        required: [true, 'Please add an city']
    },
    state: {
        type: String,
        required: [true, 'Please add an state']
    },
    country: {
        type: String,
        required: [true, 'Please add an country']
    },
    postalCode: {
        type: String,
        required: [true, 'Please add an Pin code']
    },
    image:
        {
            type: Buffer,
            required:false
        },

    
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum : ['active','inactive'],
        default: 'active'
    },
});
module.exports = mongoose.model('StoreLoc',StoreSchema)