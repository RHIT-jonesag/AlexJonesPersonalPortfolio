// Let Functions


// Username animation
var i = 0;
var txtUsername = "alex56jones@gmail.com"
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriterUsername() {
  if (i < txtUsername.length) {
    console.log(i)
    document.getElementById("username-animate").innerHTML += txtUsername.charAt(i);
    i++;
    setTimeout(typeWriterUsername, speed);
  }
}

// Password animation
var j = 0;
var txtPassword = "**************************"

function typeWriterPassword() {
  if (j < txtPassword.length) {
    console.log("value of j: " + j)
    document.getElementById("password-animate").innerHTML += txtPassword.charAt(i);
    j++;
    setTimeout(typeWriterPassword, speed);
  }
}

$(function() {
    typeWriterUsername();
    setTimeout(
        function() 
        {
            typeWriterPassword();
        }, 1700)
});