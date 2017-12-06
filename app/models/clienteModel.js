var db = require('../../config/db');

module.exports = function() {

  this.verifyLogin = function(data, r){
    var con = db();
    return con.query('select id, password from tusers where email = ?', data.email, r);
  };

  this.getHistory = function(id, r){
    var con = db();
    return con.query('select * from thistory where user_id = ?', id, r);
  }

  this.saveUser = function(data, r){
    var con = db();
    return con.query('insert into tusers set ?', data, r);    
  }

  this.saveHistory = function(data, r){
    var con = db();
    data.date = (new Date()).toISOString().substring(0, 19).replace('T', ' ');
    return con.query('insert into thistory set ?', data, r);
  }

  this.getProfile = function(id, r){
    var con = db();
    return con.query('select * from tusers where id = ?', id, r);
  }

  this.saveProfile = function(data, r){
    var con = db();
    data.date = (new Date()).toISOString().substring(0, 19).replace('T', ' ');
    return con.query('update tusers set ?', data, r);
  }

  return this;

};
