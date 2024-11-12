const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hour: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
