# TP-Link-Smart-Switch-Toggler
Using TP-Link API and Javascript, toggle the specified smart switch

--

Variables Needed in tasker:

username - username of your tp-link account
password - password of your tp-link account
state - state of the light -> 1 to turn on, 2 to turn off

(Not Required)
output - output result of the calls

---

User must create a javascript action and call the js file


---

Improvements:

Get the url from the deviceList instead of hard coded url. The url is dependent on the device location. By default it is set to the US url.
Add a parameter to get the deviceID using an alias