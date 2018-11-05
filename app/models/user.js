var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  //TODO fill me in!
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', function() {
      console.log('TODO: finish creating user in user.js!');
    });
  }
});

module.exports = User;