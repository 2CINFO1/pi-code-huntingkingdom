const mongoose = require("mongoose")
const Schema = mongoose.Schema;
let Position = require("./common/position");

const Animal = new Schema(
    {
        name: {type: String, required: true},
        natural_spawn: {type: String, required: true},
        rarity: {type: String, default: 'Fishing'},
        difficulty: {type: String, default: 'Easy'},
        position: Position,
    },
    {timestamps: true}
);

module.exports = mongoose.model("Animal", Animal);