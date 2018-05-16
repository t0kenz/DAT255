var TugboatRequests = require("./TugboatRequests");

/**
 * 
 * @param {*} req 
 */
module.exports = function (req) {

    //console.log("States: " + req.query.states);
    
    var parsedStates = req.query.states;
    if (parsedStates !== undefined) {
        parsedStates = req.query.states.split(",")
    }

    return new Promise(function (resolve, reject) {
        var returnRequests = {};
        // If no states are specified, select all
        if(parsedStates === undefined ) {
            returnRequests = TugboatRequests;
        }
        // Else (i.e. states are specified), select matching requests
        else {
            index = 0;
            for (i = 0; i < parsedStates.length; i++) {
                for (j = 0; j < Object.keys(TugboatRequests).length; j++) {
                    if (parsedStates[i] === TugboatRequests[j].state) {
                        returnRequests[index] = TugboatRequests[j];
                        index++;
                    }
                }
            }
        }

        var err = false;
        var args = {
            status: 201,
            success: true,
            message: {
                tugboatRequests: TugboatRequests
            }
        };

        if (err) {
            args.status = 500;
            args.success = false;
            reject(args);
        }
        resolve(args);
    });
}