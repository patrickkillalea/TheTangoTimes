/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Newsarticle = require('./newsarticle.model');

exports.register = function(socket) {
  Newsarticle.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Newsarticle.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('newsarticle:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('newsarticle:remove', doc);
}