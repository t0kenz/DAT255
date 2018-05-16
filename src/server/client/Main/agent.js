var BASE_URL = "http://localhost:8080";

window.onload = function () {
    var view = createDiv(document.body, "view");
    paintView(view);
}

function paintView(view) {
    view.header = createDiv(view, "header");
    view.header.textContent = "Request a tugboat";
    var addRequestButton = createButton(view, "reqButton", "Add request");

    view.acceptedRequests = createDiv(view, "requests");
    view.acceptedRequests.header = createDiv(view, "header");
    view.acceptedRequests.header.textContent = "Sent requests";
    view.requests = createDiv(view, "requests");

    addEventMouseClick(addRequestButton, false, addRequest.bind("", view));
    checkHttpRequest(getRequests, view.requests);
}

function addRequest(container, _e) {
    var INDEX_URL = "/API=addRequestTugboat";
    var token = "temporarykey";
    addTugboatRequest(container, INDEX_URL, token, "");
}

function addTugboatRequest(container, INDEX_URL, token, key, cb) {
    var URL = BASE_URL + INDEX_URL;
    var header = {
        'Content-Type': 'application/json',
        'token': token,
    };
    var body = { 'key': key, // TODO key ska bort
            'numberOfTugboats': 2,
            'portCallID': 0001};
    var promise = httpPost(URL, header, body)
        .then(function (data) {
            cb && cb(data);
        });
}

function getRequests(container, url, _e) {
    var INDEX_URL = "/API=getRequestedTugboats";
    var token = "temporarykey";
    getTugboatRequests(container, INDEX_URL, token);
}

function getTugboatRequests(container, INDEX_URL, token) {
    var URL = BASE_URL + INDEX_URL;
    var nextState;
    var header = {
        'Content-Type': 'application/json',
        'token': token,
    };
    var body = undefined; //{};
    var promise = httpGet(URL, header, body)
        .then(function (data) {
            container.innerHTML = "";
            var data = JSON.parse(data);
            var requests = data["tugboatRequests"];
            var mod2 = 0;
            for (var key in requests) {
                var tugboat = createDiv(container, "requestedTugboat");
                tugboat.textContent = JSON.stringify(requests[key]);
                if (mod2 % 2 === 1) {
                    tugboat.classList.add("greyBackground");
                }
                mod2++;
            }
        });
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