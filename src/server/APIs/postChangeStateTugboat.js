var TugboatRequests = require("./TugboatRequests");
var TugboatAcceptedRequests = require("./TugboatAcceptedRequests");

/**
 * 
 * @param {*} req 
 */
module.exports = function (req) {
    var header = req.headers;
    var body = req.body;

    return new Promise(function (resolve, reject) {
        var matchingRequest;
        var err = false;
        var errStatus;
        var errMsg;

        console.log("Tugboat Requests: " + TugboatRequests);
        console.log("TugboatRequests length: " + Object.keys(TugboatRequests).length);
        
        // Find the request with a matching port call ID, if one exists
        for (i = 0; i < Object.keys(TugboatRequests).length; i++) {
            if (TugboatRequests[i].portCallID == body.portCallID) {
                matchingRequest = TugboatRequests[i];
                break;
            }
        }

        // If a matching request was found and the new state is valid, update the state of the matching request. 
        if (matchingRequest === undefined) {
            err = true;
            errMsg = "Could not find specified Port Call ID";
            errStatus = 400;
        }
        else if (!okState(body.newState)) {
            err = true; 
            errMsg = "Invalid state";
            errStatus = 400;
        }
        else {
            matchingRequest.state = body.newState;
            console.log("New state of matching request: " + String(matchingRequest));
        }
        
        var args = {
            status: 201,
            success: true,
            message: "Server was updated"
        };

        if (err) {
            args.status = errStatus;
            args.success = false;
            args.message = errMsg;
            reject(args);
        }
        resolve(args);
    });
}

// Checks if a state is valid
function okState(state) {
    var okStates = ['Requested', 'Received', 'Confirmed', 'Commenced', 'Completed'];
    for (var i = 0; i < okStates.length; i++) {
        if (okStates[i] === state) {
            return true;
        }
    }
    return false;
}