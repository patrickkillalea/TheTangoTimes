'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewsarticleSchema = new Schema({
  name: String,
  content: String,
  author: String,
  createddate: String,
  picture: String,
  active: Boolean
});

module.exports = mongoose.model('Newsarticle', NewsarticleSchema);