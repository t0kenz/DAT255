### Get the last portcalls

#### 1 Get last portcalls and use the portcall id query the server for more information
```````````
{
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/pcr/port_call/created_after?createdAfter={DATE}
         header: {
                  X-PortCDM-UserId: Tugboat 
                  X-PortCDM-Password: De7Haven
                  X-PortCDM-APIKey: PortableCDM
                  }
 }
 
 RETURNS [
     {
        "portCallId": "urn:mrn:stm:portcdm:port_call:SEGOT:00021d23-4841-4211-8eda-38cc4a1afb5d",
        "vesselId": "urn:mrn:stm:vessel:IMO:9197791",
        "startTime": "2018-05-02T04:00:00Z",
        "endTime": "2018-05-02T04:00:00Z",
        "createdAt": "2018-04-30T15:46:30Z"
    },
    {
        "portCallId": "urn:mrn:stm:portcdm:port_call:SEGOT:007cadab-3f3a-4fb4-afb1-60af8eada384",
        "vesselId": "urn:mrn:stm:vessel:IMO:9319571",
        "startTime": "2018-05-01T19:30:00Z",
        "endTime": "2018-05-04T09:00:00Z",
        "createdAt": "2018-04-26T15:02:31Z"
    },
    ....
 ]
 
 ```````````
 #### 2 Get vessel Info
 ```````````
{
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/vr/vessel/{vesselId}
         header: {
                  X-PortCDM-UserId: Tugboat,
                  X-PortCDM-Password: De7Haven,
                  X-PortCDM-APIKey: PortableCDM
         }
 }
 
 RETURNS {
    "imo": "urn:mrn:stm:vessel:IMO:9197791",
    "mmsi": "urn:mrn:stm:vessel:MMSI:246558000",
    "name": "Skagern",
    "vesselType": "CARGO",
    "callSign": "PHHL",
    "photoURL": "http://photos.marinetraffic.com/ais/showphoto.aspx?photoid=154634"
}
 ```````````
 #### 3 Get endpoint
 ```````````
 http.GET
 ```````````
 #### 4 Get ETA from portCDM
  ```````````
 http.GET
 ```````````
 #### (5 Get ETA from marineTime)
  ```````````
 http.GET
 ```````````
 #### 6 Status on towage
  ```````````
 http.GET
 ```````````
 #### 7 Type of towage
  ```````````
 http.GET
 ```````````
 #### 8 ETA planned or set
  ```````````
 http.GET
 ```````````
