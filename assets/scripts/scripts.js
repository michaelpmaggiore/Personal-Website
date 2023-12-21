// Typewriter created by Tameem Safi.
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

  // Start animation for intro page.
  window.onload = () => {
    var element = document.getElementById("fade-in-element0");
    setTimeout(() => { animateFadeIn(element, 600); }, 100);
  }


  window.onscroll = function () {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }

    scrollFunction();
  };

// When the user scrolls down 20px from the top of the document, slide down the navbar
function scrollFunction() {
  fadeInElement("about-section-description", 700, 0, 200);
  fadeInElement("fade-in-element0.5", 700, 0, 400);
  fadeInElement("fade-in-element0.7", 700, 0, 200);

  fadeInElement("fade-in-element2.1", 1400, 0, 200);
  fadeInElement("fade-in-element2.2", 1400, 0, 400);
  fadeInElement("school", 1400, 0, 400);
  fadeInElement("coursework", 1400, 0, 600);

  fadeInElement("fade-in-element1", 2500, 1, 200);
  fadeInElement("button-section", 2500, 2, 200);

  fadeInElement("fade-in-element2", 2800, 3, 200);
  fadeInElement("fade-in-element3", 2800, 3, 400);
  fadeInElement("fade-in-element4", 2800, 3, 600);

  fadeInElement("fade-in-element5", 3100, 3, 800);
  fadeInElement("fade-in-element6", 3100, 3, 1000);
  fadeInElement("fade-in-element7", 3100, 3, 1200);

  fadeInElement("fade-in-element8", 3300, 3, 1200);
  fadeInElement("fade-in-element9", 3300, 3, 1400);
  fadeInElement("fade-in-element10", 3300, 3, 1600);


}

function fadeInElement(elementId, scrollThreshold, zIndex, duration) {
  var element = document.getElementById(elementId);

  if ((document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold)) {
    element.style.zIndex = zIndex + 1;
    animateFadeIn(element, duration);
  }
}

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

x = document.getElementsByClassName("each-project2");
w3AddClass(x[0], "show")

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
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


startImageTransition();
        
function startImageTransition() {
    var images = document.getElementsByClassName("test");

    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    var top = 1;

    var cur = images.length - 1;

    setInterval(changeImage, 5000);

    async function changeImage() {

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

    function transition() {
        return new Promise(function(resolve, reject) {
            var del = 0.01;

            var id = setInterval(changeOpacity, 10);

            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }

        })
    }
  }