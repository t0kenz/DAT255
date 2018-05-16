var TugboatRequests = require("./TugboatRequests");

var incID = 0;
var msgElements = 1;
/**
 * 
 * @param {*} req 
 */
module.exports = function (req) {
    // Incoming
    var header = req.headers;
    var body = req.body;
    
    // Outgoing
    var err = false;
    var errStatus = 500;
    var errMsg;

    return new Promise(function (resolve, reject) {
        // Verify message
        if(Object.keys(body).length === 3 && body.hasOwnProperty("numberOfTugboats") && body.hasOwnProperty("key") 
        && body.hasOwnProperty("portCallID") &&
            body.numberOfTugboats > 0) {
            console.log("Valid message");
        } else {
            console.log("Invalid message:");
            console.log("Message body: " + JSON.stringify(body));
            err = true;
            errMsg = "Invalid body."
        }

        // TODO Use real port call id. Currently a fixed value is sent from main.js
        body.portCallID = incID;
        body.state = "Requested"
        TugboatRequests[incID] = body;
        incID++;

        var args = {
            status : 201,
            success :  true,
            message : "Request accepted"
        };

        if (err) {
            args.status = errStatus;
            args.success = false;
            if (errMsg !== undefined) { 
                args.message = errMsg;
            }
            reject(args);
        }

        resolve(args);
    });
}