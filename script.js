var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"]

document.querySelector(".d").innerHTML = daylist[day];

//UTC time in milliseconds

var time = today.getUTCMilliseconds();

document.querySelector(".utc").innerHTML = time;