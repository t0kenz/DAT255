var BASE_URL = "http://localhost:8080";

window.onload = function () {
    var left = createDiv(document.body, "left");
    var right = createDiv(document.body, "right");
    paintLeft(left);
    paintRight(right);
}

function paintLeft(left) {
    left.header = createDiv(left, "header");
    left.header.textContent = "Request a tugboat";
    var addRequestButton = createButton(left, "reqButton", "Add request");

    left.acceptedRequests = createDiv(left, "requests");
    left.acceptedRequests.header = createDiv(left, "header");
    left.acceptedRequests.header.textContent = "Accepted requests";
    left.requests = createDiv(left, "requests");

    addEventMouseClick(addRequestButton, false, addRequest.bind("", left));
    checkHttpRequest(getAcceptedRequests, left.requests);
}

function paintRight(right) {
    right.header = createDiv(right, "header");
    right.header.textContent = "Requested tugboats";
    right.requests = createDiv(right, "requests");
    checkHttpRequest(getPendingRequests, right.requests);
}

function getAcceptedRequests(container, url, _e) {
    var INDEX_URL = "/API=getAcceptedTugboats";
    var token = "temporarykey";
    getTugboatRequests(container, INDEX_URL, token);
}

function getPendingRequests(container, url, _e) {
    var INDEX_URL = "/API=getRequestedTugboats";
    var token = "temporarykey";
    getTugboatRequests(container, INDEX_URL, token);
}

function getTugboatRequests(container, INDEX_URL, token) {
    var URL = BASE_URL + INDEX_URL;
    var header = {
        'Content-Type': 'application/json',
        'token': token,
    };
    var body = {};
    var promise = httpGet(URL, header, body)
        .then(function (data) {
            container.innerHTML = "";
            var data = JSON.parse(data);
            var requests = data["tugboatRequests"];
            var mod2 = 0;
            for (var key in requests) {
                var tugboat = createDiv(container, "requestedTugboat");
                tugboat.textContent = requests[key];
                if (mod2 % 2 === 1) {
                    tugboat.classList.add("greyBackground");
                }
                mod2++;
                addEventMouseClick(tugboat, false, acceptRequest.bind("", tugboat, key));
            }
        });
}

function addTugboatRequest(container, INDEX_URL, token, key, cb) {
    var URL = BASE_URL + INDEX_URL;
    var header = {
        'Content-Type': 'application/json',
        'token': token,
    };
    var body = { 'key': key };
    var promise = httpPost(URL, header, body)
        .then(function (data) {
            cb && cb(data);
        });
}

function addRequest(container, _e) {
    var INDEX_URL = "/API=addRequestTugboat";
    var token = "temporarykey";
    addTugboatRequest(container, INDEX_URL, token, "");
}

function acceptRequest(container, key, _e) {
    function callback(data) {
        var contaierParent = container.parentNode;
        contaierParent.removeChild(container);
    }
    var INDEX_URL = "/API=acceptRequestTugboat";
    var token = "temporarykey";
    addTugboatRequest(container, INDEX_URL, token, key, callback);
}

function httpPost(url, header, body) {
    return httpRequest(url, "POST", header, JSON.stringify(body));
}

function httpGet(url, header, body) {
    return httpRequest(url, "GET", header, body);
}


function httpRequest(url, method, header, body) {
    /** documents on fetch
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     */
    /**
     * TODO
     * checkHeader(header);
     * checkBody(body);
     */
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: method,
            headers: new Headers(header),
            body: body,
            mode: 'cors',
        }).then(function (response) {
            resolve(response.text());
        }).catch(function (error) {
            reject(error);
        });
    });
}


function checkHttpRequest(callback, callbackArgs, _e) {
    var delay = 1000;

    callback(callbackArgs);

    // Pulse after the delay
    setTimeout(checkHttpRequest.bind(this, callback, callbackArgs), delay);
}

function createDiv(parent, containerName) {
    var container = document.createElement('div');
    container.className = containerName;
    parent.appendChild(container);

    return container;
}

function createButton(parentContainer, className, text) {
    var button = createDiv(parentContainer, className);
    button.textContent = text;
    return button;
}

/**
 * LISTENS FOR MOUSE-UP ON WINDOW! IF YOU WANT LOCAL, USE 'addEventMouseClick' 
 * Adds a eventlistenr to the contaier. Listens for mouse-Down and Up.
 * @param {div} container adds eventlistener to container
 * @param {function} startFunction runs function when event mouseDown
 * @param {function} endFunction runs function when event mouseUp
 */
function addEventGlobalMouseClick(container, startFunction, endFunction) {
    var mouseDown = function (e) {
        window.addEventListener('mouseup', mouseUp, false);
        if (startFunction) startFunction(e);
    }

    var mouseUp = function (e) {
        // Drag ends
        window.removeEventListener('mouseup', mouseUp, false);
        if (endFunction) endFunction(e);
    };

    container.addEventListener('mousedown', mouseDown, false);
}

/**
 * LISTENS FOR MOUSE-UP ON CONTAINER, NOT WINDOW. IF YOU WANT GLOBAL, USE 'addEventGlobalMouseClick' 
 * Adds a eventlistenr to the contaier. Listens for mouse-Down and Up.
 * @param {div} container adds eventlistener to container
 * @param {function} startFunction runs function when event mouseDown
 * @param {function} endFunction runs function when event mouseUp
 */
function addEventMouseClick(container, startFunction, endFunction) {
    var mouseDown = function (e) {
        container.addEventListener('mouseup', mouseUp, false);
        if (startFunction) startFunction(e);
    }

    var mouseUp = function (e) {
        // Drag ends
        container.removeEventListener('mouseup', mouseUp, false);
        if (endFunction) endFunction(e);
    };

    container.addEventListener('mousedown', mouseDown, false);
}