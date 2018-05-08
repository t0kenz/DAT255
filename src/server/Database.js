/**
 * Declaring dependencies
 */
//var mariaDB = require('mariasql');

module.exports = Database;


function Database(connection) {
    this.dbConnection = connection;
    //this.connection = new mariaDB(this.dbConnection);
}

Database.prototype.set = function (params) {

};


Database.prototype.get = function (params) {

};