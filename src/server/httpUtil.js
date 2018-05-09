var request = require('request-promise');

module.exports = Http;


function Http() {
    this.https = false; // Just to make it a prototype for now...
}

Http.prototype.post = function (url, header, body) {
    return this.request(url, "POST", header, JSON.stringify(body), true);
}

Http.prototype.get = function (url, header) {
    return this.request(url, "GET", header, {}, true);
}


Http.prototype.request = function (url, method, header, body, json) {
    /** documents on fetch
     * 
     * Spara all tidigare data. Rekommendera antal bogseringsbåtar
     * 
     * headers till portcdm ExportCDM, userID, password, APIkey
    http://specification.portcdm.eu/?url=swagger_specifications/AMSS.json
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     */
    /**
     * TODO
     * checkHeader(header);
     * checkBody(body);
     * add a universal response function, over switch cases
     */
    return new Promise(function (resolve, reject) {
        request({
            'uri': url,
            'method': method,
            'headers': header,
            'body': body,
            //mode: 'no-cos',
            'json': json
        }).then(function (response) {
            resolve(response);
        });
    });
}