/**
 * Declaring external dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);


/**
 * Declaring Internal dependencies
 */
var config = require('./config/config');
//var database = ...

/**
 * Logs every request for dev reasons (EX: 404 not found...)
 */
if (config.dev) {
	var morgan = require('morgan');
	app.use(morgan('dev'));
}

/**
 * Limits the urlencoded file size that can be transfered to the server
 */
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Token, Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	next();
});
app.use(bodyParser.urlencoded({
	parameterLimit: 100000,
	limit: '52428800', //50mb
	type: 'application/x-www-form-urlencoded',
	extended: true
}));
/**
 * Limits the JSON string size that will be accepted to the server. 
 */
app.use(bodyParser.json({
	limit: '52428800', //50mb
	parameterLimit: 100000,
	extended: true
}));

/**
 * Loads our routes function, which tells the server where to send clients if they are valid. Also handles API calls
 */
require('./routes.js')(app, express, config.APIs);

/**
 * Starts server on port/host from config
 */
server.listen(config.ports.port, config.ports.host);
console.log('Server started on ' + config.ports.host + ' ' + config.ports.port);











