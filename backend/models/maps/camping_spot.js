const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const campingSpot = new Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        category: {type: String, default: 'Campground'},
        rate: {type: [Number], required: true, min: 0, max: 5},
        position: {
            lat: {type: Number, required: true},
            lng: {type: Number, required: true},
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("campingSpot", campingSpot);