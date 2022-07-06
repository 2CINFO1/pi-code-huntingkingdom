const mongoose = require("mongoose")
const Schema = mongoose.Schema;
new Schema(
    {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true},
    }
);
