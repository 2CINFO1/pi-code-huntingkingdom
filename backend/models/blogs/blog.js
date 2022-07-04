const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema(
    {

    title: {
        type: String,
        required:true,
        unique: true
    },

    description: {
        type: String,
        required:true,
    },

    img: {
        type: String,
        required:false,
    },

    text: {
        type: String,
        required:true,
    },
    category: {
        type: Array,
        required:false,
    },
    auth: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        username: String,
      },
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
    { timestamps: true }
);
module.exports = mongoose.model('blog', BlogSchema);