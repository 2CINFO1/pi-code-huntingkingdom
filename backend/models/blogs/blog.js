const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Blog = new Schema ({
    fullName: {
        type: String
    },

    title: {
        type: String,
        required:true,
    },

    img: {
        type: String,
        required:false,
    },

    description: {
        type: String,
        required:true,
    },
    category: {
        type: Array,
        required:false,
    }},
    { timestamps: true }
);
module.exports = mongoose.model('Blog', Blog);