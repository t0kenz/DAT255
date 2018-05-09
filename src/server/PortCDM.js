module.exports = PortCDM;


function PortCDM(database, portCDMInfo, HTTP) {
    this.continue = true;
    this.database = database;
    this.url_base = portCDMInfo.baseURL;
    this.UserId = portCDMInfo.UserId;
    this.Password = portCDMInfo.Password;
    this.APIKey = portCDMInfo.APIKey;
    this.HTTP = HTTP;

    /**
     * FOR NOW, LATER WE WILL GET IT FROM DB
     */
    this.lastRequest = new Date(2018, 06, 7);
}

/**
 * Starts asking portCDM's server every DELAY seconds for a new portcall, if new portcall is found, get all the information on that portcall.
 * @param {*} DELAY Delays every request to portCDM with X seconds
 * @param {*} self is a reference to PortCDM itself
 */
PortCDM.prototype.start = function (DELAY, self) {
    self.requestNewPortcalls()
        .then(function (data) {
            if (self.continue) {
                // An infinite loop that calls itself, until continue is toggled
                setTimeout(self.start.bind("", DELAY, self), (DELAY * 1000));
            }
            for (var i = 0; i < data.length; i++)  {
                var portCall = data[i];
                var portCallId = portCall.portCallId;
                var vesselId = portCall.vesselId;
                var isNew = true;
                /**
                 * CHECK IF TIME STAMP EXISTS IN DATABASE
                 * self.database.get({
                 * table: ...
                 * where: portcallID = portcallID})
                 */
                if (isNew) {
                    self.getTimestampInfo(portCallId, vesselId, self.updateTimestamp);
                }
            }
        }).catch(function (error) {
            console.log(error);
        });;
}

/**
 * Checks for new portcalls since this.lastRequest. When done, updates this.lastRequests to new Date.
 */
PortCDM.prototype.requestNewPortcalls = function () {
    // To get object in prototype
    var self = this;
    return new Promise(function (resolve, reject) {
        var url_suffix = "/pcb/port_call?after=" + self.lastRequest.toISOString() + "&limit=0&sort_by=LAST_UPDATE&order=DESCENDING";
        var url = self.url_base + url_suffix;
        var header = {
            'X-PortCDM-UserId': self.UserId,
            'X-PortCDM-Password': self.Password,
            'X-PortCDM-APIKey': self.APIKey
        };
        //self.lastRequest = new Date();
        self.HTTP.get(url, header)
            .then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error)
            });
    });
}

/**
 * Collects all timestamp info. Waits for all requests to get completed, and then resolves.
 */
PortCDM.prototype.getTimestampInfo = function (portCallId, vesselId, callback) {
    if (portCallId === undefined) return;
    if (vesselId === undefined) return;

    var vesselInfo = this.getVesselInfo(vesselId);
    var portCallInfo = this.getPortCallInfo(portCallId);

    Promise.all([vesselInfo, portCallInfo]).then(function (values) {
        console.log("gej");
        callback(values);
    });
}


PortCDM.prototype.updateTimestamp = function (values) {
    var vessel = values[0];
    var portCall = values[1];
    console.log(vessel);
    console.log(portCall);
}


PortCDM.prototype.getVesselInfo = function (vesselId) {
    // To get object in prototype
    var self = this;
    return new Promise(function (resolve, reject) {
        var url_suffix = "/vr/vessel/" + vesselId;
        var url = self.url_base + url_suffix;
        var header = {
            'X-PortCDM-UserId': self.UserId,
            'X-PortCDM-Password': self.Password,
            'X-PortCDM-APIKey': self.APIKey
        };
        self.HTTP.get(url, header)
            .then(function (vesselBaseInfo) {
                /**
                 * TODO: CHECK IF NAME IS AMBIGUOUS
                 */
                var name = vesselBaseInfo.name;
                url = "http://segot.portcdm.eu:8080/SeaTrafficManagement/vessel-registry/vessel?name=" + name;
                self.HTTP.get(url, header)
                    .then(function (vesselFullInfo) {
                        // Override all common attributes
                        for (var key in vesselBaseInfo) {
                            vesselFullInfo[key] = vesselBaseInfo[key];
                        }
                        resolve(vesselFullInfo);
                    }).catch(function (error) {
                        reject(error)
                    });
            }).catch(function (error) {
                reject(error)
            });
    });
}


PortCDM.prototype.getPortCallInfo = function (portCallId) {
    // To get object in prototype
    var self = this;
    return new Promise(function (resolve, reject) {
        var url_suffix = "/pcb/port_call/" + portCallId;
        var url = self.url_base + url_suffix;
        var header = {
            'X-PortCDM-UserId': self.UserId,
            'X-PortCDM-Password': self.Password,
            'X-PortCDM-APIKey': self.APIKey
        };
        self.HTTP.get(url, header)
            .then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error)
            });
    });
}