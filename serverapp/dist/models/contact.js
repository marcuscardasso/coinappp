"use strict";

var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    "default": false
  },
  message: {
    type: String,
    required: true,
    "default": false
  },
  phone: {
    type: String,
    required: true,
    "default": false
  }
});
var Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;