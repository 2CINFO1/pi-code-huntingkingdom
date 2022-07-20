const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Post Schema 

const PostsSchema = mongoose.Schema({
    context: {
        type: String,
        enum: ['Event', 'BLOG', 'RECL', 'REVIEW'],
        default: 'Event',
        required: true
    },
    // The context of post creation , for exemple if it's a post of an event , 
    // context = 
    // contextId must be an event id
    contextId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    type: {
        type: String
    },
    status: {
        type: String,
        enum: ['OPER', 'OFFF', 'STUD', 'ARCH'],
        default: 'OPER'
    },
    datePublished: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    headline: {
        type: String
    },
    sharedContent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    likesCount: {
        type: Number,
        required: true
    },
    dislikeCount: {
        type: Number,
        required: true
    },
    likeUser: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    dislikeUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    textContent: {
        type: String,
        required: true
    },
    mediaContent: [{
        type: String
    }],
    comment: [{
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        datePublished: {
            type: Date,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }],
    commentCount: {
        type: String
    }
}, {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);