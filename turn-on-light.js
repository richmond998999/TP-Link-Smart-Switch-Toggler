//Turn on TP-Link Lightswitch


function getToken() {
	var authenticate_url = "https://wap.tplinkcloud.com";
	var content_type = "application/json";


	var message = '{"method": "login",' +
	'"params": {' +
	 	'"appType": "Kasa_Android",' +
	 	'"cloudUserName": "' + username + '",' +
	 	'"cloudPassword": "' + password + '",' +
	 	'"terminalUUID": "MY_UUID_v4"' +
	 	'}' +
	'}';


	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", authenticate_url, false);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(message);

	var result = JSON.parse(xmlhttp.responseText);
	return result.result.token;
}

//Get Token
var output = getToken();
