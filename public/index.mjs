const bg = document.querySelector(".bg");
const bgShadow = document.querySelector(".bg-shadow");

const surname = document.querySelector(".surname");
const firstName = document.querySelector(".first-name");
const projectsButton = document.getElementById("projects");
const projects = document.querySelector(".projects");

const eye = document.querySelector(".eye");
const pupil = document.querySelector(".pupil");
const elipse = document.querySelector(".elipse");

function eyeTrack(e) {
  eye.style.transition = "";
    pupil.style.transition = "";

    elipse.classList.remove("open");
    var x = e.clientX / 10;
    var y = e.clientY / 10;

    pupil.classList.add("pupil-grow");
    elipse.style.height = y + "%";

    eye.style.clipPath = `circle(40% at ${x - 5}% ${y + 10}%)`;
    pupil.style.clipPath = `circle(17% at ${x - 5}% ${y + 10}%)`;
}


projectsButton.addEventListener("click", () => {
  firstName.classList.remove("intro-animation");
  projectsButton.classList.add("active");
  contact.classList.remove("active");
  surname.classList.remove("intro-animation");
  bg.style.animation = "";
  bgShadow.style.animation = "";

  bg.classList.add("move-eye");
  bgShadow.classList.add("move-eye");
  projects.classList.remove("d-none");
  projects.classList.add("fade");
});

contact.addEventListener("click", () => {
  bgShadow.removeEventListener("mousemove", eyeTrack);

  firstName.classList.remove("fn-animation");
  surname.classList.remove("ln-animation");
  firstName.classList.add("rotate-left-animation");
  surname.classList.add("rotate-right-animation");

  elipse.classList.remove("open");
  elipse.classList.add("links-elipse");
  elipse.style.maxHeight = "100%";

  const heading = document.querySelector(".eye h1");
  heading.innerHTML = "Let's <br> Connect.";
  heading.animate(
    { color: ["initial", "white"] },
    { duration: 300, fill: "both", delay: 500 }
  );

  pupil.classList.remove("pupil-grow");

  contact.classList.add("active");
  projectsButton.classList.remove("active");
  projects.classList.add("d-none");

  linksFontSize();
});

const firstNameSpans = Array.from(
  document.querySelectorAll(".first-name span")
);
const lastNameSpans = Array.from(document.querySelectorAll(".surname span"));

function updateFontSize() {
  const width = bg.offsetWidth;
  const firstFontSize = width / 2.5 + "px";
  const lastFontSize = width / 3 + "px";

  firstNameSpans.forEach((span) => {
    span.style.fontSize = firstFontSize;
  });

  lastNameSpans.forEach((span) => {
    span.style.fontSize = lastFontSize;
  });
}

updateFontSize();
window.addEventListener("resize", updateFontSize);

const contactLinks = Array.from(document.querySelectorAll(".contact-link"));

function linksFontSize() {
  const width = bg.offsetWidth;
  const linkFontSize = width / 8.5 + "px";

  contactLinks.forEach((contact) => {
    contact.style.transition = "font-size 3s";
    contact.style.fontSize = linkFontSize;
    contact.style.pointerEvents = "auto";
  });

  const connect = document.querySelector(".eye h1");
  connect.style.fontSize = linkFontSize;
  connect.style.transition = "font-size 3s";
}

setTimeout(() => {
  bgShadow.addEventListener("mousemove", eyeTrack);
}, 2000);



const linkFontSize = bg.offsetWidth / 10 + "px";
document.querySelector(".eye h1").style.fontSize = linkFontSize;

function blink() {
  firstName.classList.remove("fn-animation");
  firstName.classList.add("blink-top");

  surname.classList.remove("ln-animation");
  surname.classList.add("blink-bottom");

  elipse.classList.remove("open");
  elipse.classList.add("blink");
}

window.addEventListener("resize", updateCircleDiameter);

function updateCircleDiameter() {
  var linksCircle = document.getElementById("links-circle");
  linksCircle.setAttribute("width", bg.offsetWidth);
  linksCircle.setAttribute("height", bg.offsetWidth);

  var svg = bgShadow.querySelector("svg");
  var circlePath = svg.querySelector("#circle-path");

  var parentDivWidth = bgShadow.offsetWidth;
  var diameter = parentDivWidth - 15;

  var centerX = parentDivWidth / 2;
  var centerY = parentDivWidth / 2;

  var pathData = `M${centerX} ${centerY} m${-diameter / 2} 0 a${diameter / 2} ${
    diameter / 2
  } 0 1 0 ${diameter} 0 a${diameter / 2} ${diameter / 2} 0 1 0 ${-diameter} 0`;

  circlePath.setAttribute("d", pathData);
}

updateCircleDiameter();

bgShadow.addEventListener("mouseout", function () {
  eye.style.transition = "clip-path 0.5s ease";
  pupil.style.transition = "clip-path 0.5s ease";
  eye.style.clipPath = `circle(30% at 50% 50%)`;
  pupil.style.clipPath = `circle(15% at 50% 50%)`;

  // blink();
});

// const url = "./resources/grainy.svg";

// let x = 50;
// let y = -50;
// let countX = true;
// let countY = true

// function timerr() {
//   if (countX) {
//     ++x;

//     if (x >= 150)
//       countX = false;
//   } else {
//     --x;

//     if (x <= -100)
//       countX = true;
//   }

//   if (countY) {
//     ++y;

//     if (y >= 150)
//       countY = false;

//   } else {
//     --y;

//     if (y <= -100)
//       countY = true;
//   }

//   const bgString = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${url})`;

//   bg.style.background = bgString;
// }

// setInterval(timerr, 100);
