const mongoose = require("mongoose")
const Schema = mongoose.Schema;
let Position = require("./common/position");

const campingSpot = new Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        category: {type: String, default: 'Campground'},
        rate: {type: [Number], required: true, min: 0, max: 5},
        position: Position,
    },
    {timestamps: true}
);

module.exports = mongoose.model("campingSpot", campingSpot);