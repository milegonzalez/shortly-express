var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  // firstThing: console.log('hello, from the user model'),
  //TODO fill me in!
  tableName: 'users',
  username: null,
  password: null,
  hasTimestamps: true,
  storeUser : function (user){
    var username = user.username;
    var password = user.password;
    var arr = [username, password];
    var query = `insert into users (username, password) values (?, ?, NOW())`;
    var connection = db.connection;
    connection.query(query, arr, function (err, results){
      if(err) {
        console.log('error with our query');
        cb(err, null);
      } else{
        console.log('passed query');
        cb(null, results);
      }
    })

  },
  initialize: function() {
    this.on('creating', function() {
      console.log('TODO: finish creating user in user.js!');

    });
  }
});

module.exports = User;