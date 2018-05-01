### Get the last portcalls

#### 1 Get last portcalls and use the portcall id query the server for more information
```````````
{
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/pcr/port_call/created_after?createdAfter=$DATE
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
Get basic vessel info from portCDM
{
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/vr/vessel/$vesselId
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

Get vessel length and more
{
         method: "GET",
         URL: http://segot.portcdm.eu:8080/SeaTrafficManagement/vessel-registry/vessel?name=$VESSEL_NAME
         header: {
                  X-PortCDM-UserId: Tugboat,
                  X-PortCDM-Password: De7Haven,
                  X-PortCDM-APIKey: PortableCDM
         }
 }
RETURNS: {
    "builtYear": "2000",
    "callSign": "PHHL",
    "flag": "NL",
    "id": 215796,
    "imo": "9197791",
    "dataSource": null,
    "mmsi": "246558000",
    "name": "Skagern",
    "photoURL": "http://photos.marinetraffic.com/ais/showphoto.aspx?photoid=154634",
    "vesselType": "GENERAL CARGO"
}
 ```````````
 #### 3 Get endpoint
 ```````````
 {
         method: "GET",
         URL: /pcb/event?from_time=${fromTime}&to_time=${endTime}&location=${locationURN}&event_definition=VESSEL_AT_BERTH
         header: {
                  X-PortCDM-UserId: Tugboat 
                  X-PortCDM-Password: De7Haven
                  X-PortCDM-APIKey: PortableCDM
                  }
 }
 
 RETURNS  {
        "eventId": "21a4df4e-67ad-362f-b051-4e7ad68a94e6",
        "definitionId": "VESSEL_AT_BERTH",
        "portCallId": "urn:mrn:stm:portcdm:port_call:SEGOT:a503f633-3eab-429b-89ae-461e4378d900",
        "vesselId": "urn:mrn:stm:vessel:IMO:9232955",
        "startTime": "2018-04-28T22:13:54Z",
        "startTimeType": "ACTUAL",
        "endTime": "2018-04-30T00:42:00Z",
        "endTimeType": "ACTUAL",
        "from": "urn:mrn:stm:location:segot:anchoring_area:b",
        "at": "urn:mrn:stm:location:segot:berth:skarvik519",
        "to": "urn:mrn:stm:location:segot:anchoring_area:b",
        "lastUpdate": "2018-04-30T00:46:51Z",
        "status": "OK",
        "isExpired": false,
        "isCancelled": false,
        "isDenied": false
    },  {
        "eventId": "bdef888c-6f53-3a74-b643-a27fa3c72d91",
        "definitionId": "VESSEL_AT_BERTH",
        "portCallId": "urn:mrn:stm:portcdm:port_call:SEGOT:90821a78-80ab-4683-99dd-28c022b45bdc",
        "vesselId": "urn:mrn:stm:vessel:IMO:9431056",
        "startTime": "2018-04-21T05:00:00Z",
        "startTimeType": "ESTIMATED",
        "endTime": "2018-05-02T15:56:59Z",
        "endTimeType": "ACTUAL",
        "from": null,
        "at": "urn:mrn:stm:location:segot:berth:skarvik511",
        "to": null,
        "lastUpdate": "2018-04-23T12:09:16Z",
        "status": "OK",
        "isExpired": false,
        "isCancelled": false,
        "isDenied": false
    },
    ...
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
