const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Animal = new Schema(
    {
        name: {type: String, required: true},
        natural_spawn: {type: String, required: true},
        rarity: {type: String, default: 'Fishing'},
        difficulty: {type: String, default: 'Easy'}
    },
    {timestamps: true}
);

module.exports = mongoose.model("Animal", Animal);