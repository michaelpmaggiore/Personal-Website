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
  var element = document.getElementById("home-fade");
  setTimeout(() => { animateFadeIn(element, 600); }, 100);
}

// When user scrolls to a certain point, activate fade-in effects for each important page element.
window.onscroll = function () {

  // When the user scrolls down 20px from the top of the document, slide down the navbar
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