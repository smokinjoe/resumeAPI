var mongoose = require('mongoose');

// read up on this: http://stackoverflow.com/a/7813331/355627
module.exports = mongoose.model('Resume', {
  name: String,
  resume: String
});