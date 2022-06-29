const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var User = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  lastname: {
    type: String,
    maxlength: 32,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  encry_password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}
);

module.exports = mongoose.model("User", User)