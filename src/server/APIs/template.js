/**
 * 
 * @param {*} req 
 */
module.exports = function (req) {
    var header = req.headers;
    var body = req.body;

    return new Promise(function (resolve, reject) {
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