# Assignment for display log by using backend API.

### Highlights

### Dependencies
Node,


### Installation
//Default port set on 8080 for backend API

npm install;
npm start;

### Testing

### API LIST
1. http://localhost:8080/api/v1/log/create
	Description: API to add new Log file in folder "asset/clientLog/logger.txt" or we can replace custom file into this path of this format

	method : POST
	body: {
			"message" : "<<Log message>>"
		}

	O/p:
	{
	    "status": true,
	    "statusCode": "0",
	    "statusMessage": "Success",
	    "response": {}
	}


2. http://localhost:8080/api/v1/log/list
	Description: get last 10 line from log file in the above location.

	method : GET
	
	O/p:
	{
	    "status": true,
	    "statusCode": "0",
	    "statusMessage": "Success",
	    "response": "[2019-01-09 01:31:21] erere dfdsfdfdf\n[2019-01-09 01:31:31] erere 3434v fdffdf\n"
	}

3. http://localhost:8080/api/v1/monitor/ping
	Description: To check API server is working or not by nagios alert, or custom alert

	method : GET
	
	O/p:
	{
	    "status": true,
	    "statusCode": "0",
	    "statusMessage": "Success",
	    "response": "PONG"
	}


## Contributors

 0. Virendra kumar singh
