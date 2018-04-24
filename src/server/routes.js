module.exports = function (app, express, APIs) {
    /**
     * Rejects all urls except the ones declared below
     */
    app.get('/', function (req, res) {
        unAuthorizedRequest(req, res);
    });

    /**
     * Adds all APIs from config to the router and opens the server to listen to those addresses.
     */
    for (var key in APIs) {
        addAPIs(app, APIs[key], key);
    }
};

var addAPIs = function (app, APIs, method) {
    var appMethod;
    switch (method) {
        case "POST":
            appMethod = app.post.bind(app);
            break;
        case "GET":
            appMethod = app.get.bind(app);
            break;
        case "SET":
            appMethod = app.set.bind(app);
            break;
        default:
            appMethod = app.post.bind(app);
            break;
    }
    for (var key in APIs) {
        addAPI(appMethod, APIs[key]);
    }
}

/**
 * 
 * @param {*} appMethod 
 * @param {*} api 
 */
var addAPI = function (appMethod, api) {
    var address = api['address'];
    var serverToken = api['token'];
    var importModule = api['callback'];
    /**
     * Imports the callback module given in config
     */
    var callback = require(importModule);
    appMethod(address, function (req, res) {
        var header = req.headers;
        var clientToken = header['token'];
        if (clientToken === serverToken) {
            AuthorizedRequest(req, res, callback);
        } else {
            unAuthorizedRequest(req, res, address);
        }
    });
}


/**
 * If a request was authorized (client token = server token), callback to API
 */
function AuthorizedRequest(req, res, callback) {
    /**
    * A authorized request was made to a secred address of the server, calling callback
    */
    var promise = callback(req)
        .then(function (args) {
            var status = args['status'];
            var success = args['success'];
            var message = args['message'];
            res.status(status).send(message);
        });
    promise.catch(function (error) {
        console.log(error);
        res.status(410).send("error");
    });

}

/**
 * If a request was unauthorized, reject them with status 401
 */
function unAuthorizedRequest(req, res, address, _callback) {
    /**
     * TODO: ADD LOGGER
     * TODO: ADD TIMEOUT
     * TODO: ADD DELAY
     */
    var header = req.headers;
    var token = header['token'];
    var host = header['host'];
    var address = host + address;
    console.log("A failed request tried to connect to address: " + address + "\ntoken: " + token);
    res.status(401).send('Unknown address/token');
    //callback && callback(req, res);
}