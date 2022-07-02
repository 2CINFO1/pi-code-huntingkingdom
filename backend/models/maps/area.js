const mongoose = require("mongoose")
const Schema = mongoose.Schema;
let Position = require("./common/position");

const Area = new Schema(
    {
        name: {type: String, required: true},
        address: {type: String, required: true},
        category: {type: String, default: 'Forbidden'},
        argument: {type: String, default: 'Protected species'},
        position: Position,
    },
    {timestamps: true}
);

module.exports = mongoose.model("Area", Area);