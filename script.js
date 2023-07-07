console.log("Connected");
// Let Functions


// Username animation
var i = 0;
var txtUsername = "alex56jones@gmail.com"
var speed = 70; /* The speed/duration of the effect in milliseconds */

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

// Main title animation
var z = 0;
var txtTitle="Alex Jones";

function typeWriterTitle() {
  if (z < txtTitle.length) {
    console.log("value of z: " + z);
    let mainTitle = document.querySelector(".main-title");
    console.log(mainTitle);
    mainTitle.innerHTML += txtTitle.charAt(z);
    z++;
    setTimeout(typeWriterTitle, speed);
  }
}

function loadPages() {
  console.log("please");
  typeWriterTitle();
}

window.onload = loadPages();

// Navbar scroll change
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".welcome");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// About Page Fade on Scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      console.log("animate please")
      document.querySelector(".about-text").classList.add("fadeInLeft")
      document.querySelector(".self-portrait").classList.add("fadeInRight")
    }
  })
})

observer.observe(document.querySelector(".about-text"));