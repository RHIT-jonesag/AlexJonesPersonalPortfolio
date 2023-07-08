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

// Welcome Message Scroll Change
$(function () {
  $(document).scroll(function () {
    var $nav = $(".welcome");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// About Page Fade on Scroll
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      document.querySelector(".about-text").classList.add("fadeInTop")
      document.querySelector(".self-portrait").classList.add("fadeInRight")
    }
  })
})

observer1.observe(document.querySelector(".about-title"));


// Projects Page Fade on Scroll
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      document.querySelector(".projects-title").classList.add("fadeInLeft")
      document.querySelector(".mySlides").classList.add("fadeInRight")
    }
  })
})

observer2.observe(document.querySelector(".slide-title"));

// Other 1 Fade on Scroll
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      document.querySelector(".other1-text").classList.add("fadeInLeft")
      document.querySelector(".project-image1").classList.add("fadeInBottom")
    }
  })
})

observer4.observe(document.querySelector(".other1-text"));

// Other 2 Fade on Scroll
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      document.querySelector(".other2-text").classList.add("fadeInLeft")
      document.querySelector(".project-image2").classList.add("fadeInBottom")
    }
  })
})

observer5.observe(document.querySelector(".other2-text"));

// Other 3 Fade on Scroll
const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      document.querySelector(".other3-text").classList.add("fadeInLeft")
      document.querySelector(".project-image3").classList.add("fadeInBottom")
    }
  })
})

observer6.observe(document.querySelector(".other3-text"));

// Other 4 Fade on Scroll
const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      document.querySelector(".other4-text").classList.add("fadeInLeft")
      document.querySelector(".project-image4").classList.add("fadeInBottom")
    }
  })
})

observer7.observe(document.querySelector(".other4-text"));

// Footer Page Fade on Scroll
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      document.querySelector(".insta").classList.add("fadeInBottom")
      document.querySelector(".linkedin").classList.add("fadeInBottom")
      document.querySelector(".github").classList.add("fadeInBottom")
      document.querySelector(".discord").classList.add("fadeInBottom")
      document.querySelector(".replit").classList.add("fadeInBottom")
    }
  })
})

observer3.observe(document.querySelector(".footer"));


// Slideshow swapping slides feature
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}