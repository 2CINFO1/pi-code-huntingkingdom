const { text } = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const BlogSchema = new mongoose.Schema(
    {

    title: {
        type: String,
        required:true,
        unique: true,

    },

    description: {
        type: String,
    },

    img: {
        type: String,
        default:null,
    },

    body: {
        type: String,
        required:true,
    },

    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category' 
    },
    createdBy: { 
      type: mongoose.Schema.Types.ObjectId,
       ref: 'User' 
      },
    

  createdAt: { 
    type: Date,
     default: Date.now() 
    },

    likes: {
       type: Number,
        default: 0 
      },

    likedBy: { 
      type: Array 
    },

    dislikes: {
       type: Number, 
       default: 0 
      },

    dislikedBy: { 
      type: Array 
    },
   

    blogComment: [{

      author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        username: String,
      },

      datePublished: {
          type: Date,
          required: true
      },
      comment:[{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'comment'
         }],
  }],
  commentCount: {
      type: String
  },
 
     
    },
    { timestamps: true }
    
);
    // Validate Function to check blog title length
    let titleLengthChecker = (title) => {
      // Check if blog title exists
      if (!title) {
        return false; 
      } else {
      
        if (title.length < 5 || title.length > 50) {
          return false; 
        } else {
          return true; 
        }
      }
    };

   
    let alphaNumericTitleChecker = (title) => {
    
      if (!title) {
        return false; 
      } else {
        // Regular expression to test for a valid title
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(title); 
      }
    };

    // Array of Title Validators
    const titleValidators = [
      // First Title Validator
      {
        validator: titleLengthChecker,
        message: 'Title must be more than 5 characters but no more than 50'
      },
      // Second Title Validator
      {
        validator: alphaNumericTitleChecker,
        message: 'Title must be alphanumeric'
      }
    ];
    // Validate Function to check body length
let bodyLengthChecker = (body) => {
  // Check if body exists
  if (!body) {
    return false; // Return error
  } else {
    // Check length of body
    if (body.length < 5 || body.length > 500) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid body
    }
  }
};

// Array of Body validators
const textValidators = [
  // First Body validator
  {
    validator: bodyLengthChecker,
    message: 'Body must be more than 5 characters but no more than 500.'
  }
];

module.exports = mongoose.model('blog', BlogSchema);