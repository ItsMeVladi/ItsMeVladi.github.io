
//NavBar Implementation
document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("navbar").innerHTML = data;
        });
});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var ampm = h >= 12 ? 'PM' : 'AM';  // Determine AM or PM
    h = h > 12 ? h - 12 : h;  // Convert to 12-hour format
    h = h == 0 ? 12 : h;  // If hour is 0 (midnight), set to 12
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('datetime').innerHTML = h + ":" + m + " " + ampm;  // Add AM/PM
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();
checkTime();
