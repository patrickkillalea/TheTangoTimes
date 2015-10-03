'use strict';

var _ = require('lodash');
var Newsarticle = require('./newsarticle.model');

// Get list of newsarticles
exports.index = function(req, res) {
  Newsarticle.find(function (err, newsarticles) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(newsarticles);
  });
};

// Get a single newsarticle
exports.show = function(req, res) {
  Newsarticle.findById(req.params.id, function (err, newsarticle) {
    if(err) { return handleError(res, err); }
    if(!newsarticle) { return res.status(404).send('Not Found'); }
    return res.json(newsarticle);
  });
};

// Creates a new newsarticle in the DB.
exports.create = function(req, res) {
  Newsarticle.create(req.body, function(err, newsarticle) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(newsarticle);
  });
};

// Updates an existing newsarticle in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Newsarticle.findById(req.params.id, function (err, newsarticle) {
    if (err) { return handleError(res, err); }
    if(!newsarticle) { return res.status(404).send('Not Found'); }
    var updated = _.merge(newsarticle, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(newsarticle);
    });
  });
};

// Deletes a newsarticle from the DB.
exports.destroy = function(req, res) {
  Newsarticle.findById(req.params.id, function (err, newsarticle) {
    if(err) { return handleError(res, err); }
    if(!newsarticle) { return res.status(404).send('Not Found'); }
    newsarticle.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}