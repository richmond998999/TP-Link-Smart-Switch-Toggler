//Turn on TP-Link Lightswitch

//Get Token using credentials
function getToken() {

	var message = '{"method": "login",' +
	'"params": {' +
	 	'"appType": "Kasa_Android",' +
	 	'"cloudUserName": "' + username + '",' +
	 	'"cloudPassword": "' + password + '",' +
	 	'"terminalUUID": "7a027d9c-0089-4caa-a512-a468d3a70fc3"' +
	 	'}' +
	'}';

	var url = "https://wap.tplinkcloud.com";
	var content_type = "application/json";
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", url, false);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(message);

	var result = JSON.parse(xmlhttp.responseText);
	return result.result.token;
}

//Look for the first device's deviceId
function getDeviceID(token) {

	var message = '{"method":"getDeviceList"}';
	var url = "https://wap.tplinkcloud.com/?token=" + token
	var content_type = "application/json";
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", url, false);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(message);

	var result = JSON.parse(xmlhttp.responseText);
	return result.result.deviceList[0].deviceId;
}

//Set the device using state
function toggleDevice(token, deviceId, state) {

	var message = '{"method":"passthrough", "params": {"deviceId": "'+ deviceId +'", "requestData": "{\\"system\\": {\\"set_relay_state\\":{\\"state\\":' + state + '}}}" }}'

	var url = "https://use1-wap.tplinkcloud.com/?token=" + token
	var content_type = "application/json";
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", url, false);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(message);

	return xmlhttp.responseText;
}

//Get Token
var token = getToken();

//Get Device ID
var deviceId = getDeviceID(token);

//Switch the device
var output = toggleDevice(token, deviceId, state);

