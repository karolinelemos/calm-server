var mysql = require('mysql');

var con = function(){
  return mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'calm_app'
  });
};

module.exports = con;
