// The functions below can be used to contact our test server from within the app.
    
    getTugboatRequestsFromServer() {
        return fetch('http://10.0.2.2:8080/API=getRequestedTugboats', 
        {
            method: "GET", 
            headers: new Headers({
                'Content-Type': 'application/json',
                'token': "temporarykey"
            }),
            mode: 'cors'
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //   console.log("Response:");
            //   console.log(responseJson);
              return responseJson;
            })
          .catch((error) => {
            console.error(error);
          });
    }


    postChangeStateRequest(portCallID, newState) {
        return fetch('http://10.0.2.2:8080/API=changeStateTugboat', 
        {
            method: 'POST', 
            headers: new Headers({
                'Content-Type': 'application/json',
                'token': "temporarykey"
            }),
            body: JSON.stringify({
                'portCallID': portCallID,
                'newState': newState
            }),
            mode: 'cors'
        })
          .then((response) => response.text())
          .then((responseJson) => {
            //   console.log("Response:");
            //   console.log(responseJson);
              return responseJson;
            })
          .catch((error) => {
            console.error(error);
          });
    }