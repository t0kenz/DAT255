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
        console.log(TugboatAcceptedRequests);
        var data = TugboatRequests[body.key];
        TugboatAcceptedRequests[body.key] = data;
        delete TugboatRequests[body.key];
        var err = false;
        var args = {
            status: 201,
            success: true,
            message: "Server was updated"
        };

        if (err) {
            args.status = 500;
            args.success = false;
            reject(args);
        }
        resolve(args);
    });
}