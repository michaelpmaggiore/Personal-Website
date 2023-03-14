// Typewriter created by Tameem Safi.
// Source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hey there!') // Maybe capitalize the sentences?!
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('Nice to meet you')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("My name is Michael")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a student at Colorado School of Mines (sko digs!)")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm studying computer science with a focus in Robotics and AI")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm also interested in software engineering")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Huge fan of star wars")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I also like to swim")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}

// var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//   loop: true,
//   delay: 75,
// });

// typewriter
//   .pauseFor(2500)
//   .typeString('A simple yet powerful native javascript')
//   .pauseFor(300)
//   .deleteChars(10)
//   .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   .pauseFor(1000)
//   .start();

//filter buttons 
//source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("each-project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("button-section");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(current);
  });
}

// // Reveals website.
// window.sr = ScrollReveal({
//   reset: false,
//   duration: 600,
//   easing: 'cubic-bezier(.694,0,.335,1)',
//   scale: 1,
//   viewFactor: 0.3,
// });

// sr.reveal('.home-section');
// sr.reveal('.about-section');
// // sr.reveal('.experience', { viewFactor: 0.2 });
// // sr.reveal('.featured-projects', { viewFactor: 0.1 });
// sr.reveal('.project-section', { viewFactor: 0.05 });