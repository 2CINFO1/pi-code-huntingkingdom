const mongoose = require("mongoose")
const Schema = mongoose.Schema;
let Position = require("./common/position");

const HuntSpot = new Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        hunt_type: {type: String, default: 'Fishing'},
        animal_name: {type: String, default: 'Wild boar'},
        position: Position,
    },
    {timestamps: true}
);

module.exports = mongoose.model("HuntSpot", HuntSpot);