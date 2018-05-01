### Get the last portcalls

#### 1 Get last portcalls and use the portcall id query the server for more information
```````````
http.GET
{
method: "GET",
url: 'http://sandbox-6.portcdm.eu:8080/pcb/port_call?limit=20&sort_by=LAST_UPDATE&order=DESCENDING&stage=PLANNED&stage=ARRIVED&stage=BERTHED&stage=ANCHORED&stage=UNDER_WAY&stage=SAILED&updated_after=2018-04-2T10:43:35.572Z'
header: {
         X-PortCDM-UserId: Tugboat 
         X-PortCDM-Password: De7Haven
         X-PortCDM-APIKey: PortableCDM
         Content-Type: application/json
         }
 }
 
 RETURNS {
 ...
 }
 
 ```````````
 #### 2 Get vessel Info
 ```````````
 http.GET
 url: http://sandbox-6.portcdm.eu:8080/pcb/port_call/{PORTCALL_ID}/events
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
