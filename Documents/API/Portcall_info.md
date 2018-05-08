### Get the last portcalls (http://specification.portcdm.eu/)

#### 1 Get last portcalls from a specific date, in a limited nr, and sorted and ordered by 
```````````
{
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/pcb/port_call?after=$DATE&limit=100&sort_by=LAST_UPDATE&order=DESCENDING
: {
                  X-PortCDM-UserId: Tugboat 
                  X-PortCDM-Password: De7Haven
                  X-PortCDM-APIKey: PortableCDM
                  }
 }
 
 RETURNS [
     {
        "portCallId": "urn:mrn:stm:portcdm:port_call:SEGOT:27a7de6f-c8d0-463b-aebe-8e3e18c68cca",
        "vesselId": "urn:mrn:stm:vessel:IMO:9530890",
        "startTime": "2018-05-07T18:16:48Z",
        "endTime": "2018-05-10T19:00:00Z",
        "stage": "ANCHORED",
        "status": "WARNING",
        "lastUpdated": "2018-05-08T15:43:56Z",
        "lastUpdatedBy": "urn:mrn:stm:user:legacy:SSPA",
        "lastUpdatedState": "Departure_EscortTug_Vessel",
        "lastUpdatedTimeType": "ACTUAL"
    },
    ....
 ]
 
 ```````````
 #### 2 Get information about a specific portcall-ID
```````````
{
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/pcb/port_call/$portcall-id
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
    "stage": "PLANNED",
    "status": "OK",
    "lastUpdated": "2018-04-30T15:45:27Z",
    "lastUpdatedBy": "GHAB",
    "lastUpdatedState": "PortVisit_Confirmed",
    "lastUpdatedTimeType": null
}
 ]
 
 ```````````
 
 #### 3 Get vessel Info
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
 #### 4 Get endpoint (provided by the "at"-information in the return)
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
 #### 5 Get ETA from portCDM
  ```````````
 http.GET
 ```````````
 #### (6 Get ETA from marineTime)
  ```````````
 http.GET
 ```````````
 #### 7 Status on towage
 "Listen" to the "lastUpdatedState" to genereate a Status: 
 - Towage_Requested -> Requested
 - EscortTowage_Requested -> Requested
 - EscortTowage_ReqReceived -> Request received
 - Towage_ReqReceived -> Request received
 - EscortTowage_Confirmed -> Confirmed
 - Towage_Confirmed -> Confirmed
 - EscortTowage_Denied -> Denied
 - Towage_Denied -> Denied
 - EscortTowage_Cancelled -> Cancelled
 - Towage_Cancelled -> Cancelled
 - EscortTowage_Commenced -> Commenced
 - Towage_Commenced -> Commenced
 - EscortTowage_Completed - > Completed
 - Towage_Completed - > Completed
 - (Maybe all the location-states as well)
 
  ```````````
 {
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/pcb/port_call/$portcall-id
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
    "stage": "PLANNED",
    "status": "OK",
    "lastUpdated": "2018-04-30T15:45:27Z",
    "lastUpdatedBy": "GHAB",
    "lastUpdatedState": "PortVisit_Confirmed",
    "lastUpdatedTimeType": null
}
 ]
 
 
 ```````````
 #### 8 Type of towage
 "Listen" to the "lastUpdatedState". If it includes the following state_type, it's a Escort Towage: 
 - EscortTowage_Requested
 - EscortTowage_ReqReceived
 - EscortTowage_Confirmed
 - EscortTowage_Denied
 - EscortTowage_Cancelled
 - EscortTowage_Commenced
 - EscortTowage_Completed
 - (Maybe all the location-states as well)
 
  "Listen" to the "lastUpdatedState". If it includes the following state_type, it's a Harbor Towage: 
 - Towage_Requested
 - Towage_ReqReceived 
 - Towage_Confirmed
 - Towage_Denied
 - Towage_Cancelled
 - Towage_Commenced
 - Towage_Completed
 - (Maybe all the location-states as well)
 
  ```````````
  {
         method: "GET",
         URL: http://sandbox-6.portcdm.eu:8080/pcb/port_call/$portcall-id
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
    "stage": "PLANNED",
    "status": "OK",
    "lastUpdated": "2018-04-30T15:45:27Z",
    "lastUpdatedBy": "GHAB",
    "lastUpdatedState": "PortVisit_Confirmed",
    "lastUpdatedTimeType": null
}
 ]
 
 
 ```````````
 #### 9 ETA planned or set
  ```````````
 http.GET
 ```````````
