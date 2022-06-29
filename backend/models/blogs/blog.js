const mongoose = require('mongoose');
var blogSchema = new mongoose.schema ({
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
mongoose.model('Blog', blogSchema);