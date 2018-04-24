var TugboatRequests = require("./TugboatRequests");

var incID = 0;
/**
 * 
 * @param {*} req 
 */
module.exports = function (req) {
    var header = req.headers;
    var body = req.body;

    return new Promise(function (resolve, reject) {

        TugboatRequests[incID] = (new Date()).toUTCString();
        incID++;
        var err = false;
        var args = {
            status: 201,
            success: true,
            message: "Request accepted"
        };

        if (err) {
            args.status = 500;
            args.success = false;
            reject(args);
        }
        resolve(args);
    });
}