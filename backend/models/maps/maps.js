const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var Position = new Schema({
    user_id: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    position_type: {
        type: String,
        maxlength: 32,
        trim: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    salt: String,
},
    { timestamps: true }
);

module.exports = mongoose.model("Position", Position)