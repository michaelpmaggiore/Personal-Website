// Typewriter effect created by Tameem Safi.
// Source: https://github.com/tameemsafi/typewriterjs
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hey there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('Nice to meet you')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('My name is Michael')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a student at Colorado School of Mines (sko digs!)")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm studying computer science")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm interested in DevOps and Full-Stack development")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I also enjoy software engineering!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Huge fan of star wars")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("waterpolo > competitive swimming")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();

// If user clicks on 'Michael Maggiore' then take user to home page and they should see 'Thanks for visiting' in text.
document.getElementById('toHomeSection').addEventListener('click', function (event) {
  typewriter.stop();
  typewriter = null;

  // Create a new typewriter instance
  typewriter = new Typewriter(app, {
      loop: true,
      delay: 50,
      deleteSpeed: 5
  });

  typewriter.typeString("Thanks for visiting!")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString('Hey there!')
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString('Nice to meet you')
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString('My name is Michael')
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("I'm a student at Colorado School of Mines (sko digs!)")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("I'm studying computer science")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("I'm interested in DevOps and Full-Stack development")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("I also enjoy software engineering!")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("Huge fan of star wars")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("waterpolo > competitive swimming")
  .pauseFor(1000)
  .deleteAll()
  .start();
})

// Start fade-in animation for home page.
window.onload = () => {
  startImageTransition();
  var element = document.getElementById("home-fade");
  setTimeout(() => { animateFadeIn(element, 600); }, 100);
}

// When user scrolls to a certain point, activate fade-in effects for each important page element.
window.onscroll = function () {

  // When the user scrolls down 700px from the top of the document, slide down the navbar
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }

  scrollFunction();
};

function scrollFunction() {

  // Handles About page
  fadeInElement("about-desc", 700, 200);
  fadeInElement("about-title", 700, 400);
  fadeInElement("about-image-container", 700, 200);

  // Handles Education page
  fadeInElement("education-title", 1400, 200);
  fadeInElement("education-college-container", 1400, 400);
  fadeInElement("coursework", 1400, 600);

  // Handles Projects page
  fadeInElement("projects-title", 2500, 200);

  fadeInElement("project-webmd", 2800, 200);
  fadeInElement("project-keyboard", 2800, 400);
  fadeInElement("project-chess", 2800, 600);

  fadeInElement("project-svm", 3100, 800);
  fadeInElement("project-budgetBuddy", 3100, 1000);
  fadeInElement("project-clueGame", 3100, 1200);

  fadeInElement("project-fti", 3400, 800);
  fadeInElement("project-ucs", 3400, 1000);
  fadeInElement("project-portfolio", 3400, 1200);
}

// Logic to determine scroll threshold for fade-ins
function fadeInElement(elementId, scrollThreshold, duration) {
  var element = document.getElementById(elementId);

  if ((document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold)) {
    animateFadeIn(element, duration);
  }
}

// Logic to determine animation fade-ins
function animateFadeIn(element, duration) {
  var startTime = null;
  var startOpacity = parseFloat(element.style.opacity) || 0;
  function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var opacity = startOpacity + (progress / duration);

      element.style.opacity = opacity;

      if (progress <= duration) {
          requestAnimationFrame(step);
      }
  }

  requestAnimationFrame(step);
}

// Allows projects to show up in their individual boxes.
var x, i;
x = document.getElementsByClassName("each-project");
for (i = 0; i < x.length; i++) {
  w3AddClass(x[i], "show");
}

// Pops up about-image.
x = document.getElementsByClassName("about-image-container");
w3AddClass(x[0], "show")

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// Logic for photo transition
var imageTransitionInterval;
var inactiveFlag = false;

function startImageTransition() {
    clearInterval(imageTransitionInterval); // Clear any existing intervals

    var images = document.getElementsByClassName("home-image");

    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    var top = 1;
    var cur = images.length - 1;

    imageTransitionInterval = setInterval(changeImage, 5000);

    async function changeImage() {
      if (inactiveFlag == false){
        var nextImage = (1 + cur) % images.length;

        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        await transition();

        images[cur].style.zIndex = top;

        images[nextImage].style.zIndex = top + 1;

        top = top + 1;

        images[cur].style.opacity = 1;
      
        cur = nextImage;
      }

    }

    function transition() {
        return new Promise(function (resolve, reject) {
            var del = 0.01;
            var id = setInterval(changeOpacity, 10);

            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        });
    }
}

// Pause the image transition when the page is not visible
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'hidden') {
      inactiveFlag = true;
    } else {
      inactiveFlag = false;
    }
});