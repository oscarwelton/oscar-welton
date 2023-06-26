const bg = document.querySelector(".bg");
const bgShadow = document.querySelector(".bg-shadow");

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

const surname = document.querySelector(".surname");
const firstName = document.querySelector(".first-name");
const projectsButton = document.getElementById("projects");
const projects = document.querySelector(".projects");

projectsButton.addEventListener("click", () => {
  firstName.classList.remove("intro-animation");
  projectsButton.classList.add("active");
  contact.classList.remove("active");
  surname.classList.remove("intro-animation");
  bg.classList.add("left");
  bgShadow.classList.add("left");
  contactForm.classList.add("d-none");
  projects.classList.remove("d-none");
  projects.classList.add("fade");
});

const contactForm = document.querySelector(".links-div");
contact.addEventListener("click", () => {
  firstName.classList.remove("intro-animation");
  surname.classList.remove("intro-animation");
  firstName.classList.add("rotate-left-animation");
  surname.classList.add("rotate-right-animation");
  contactForm.classList.remove("d-none");
  contactForm.classList.add("fade");
  contact.classList.add("active");
  projectsButton.classList.remove("active");
  projects.classList.add("d-none");
  bg.classList.add("left");
  bgShadow.classList.add("left");
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

const eye = document.querySelector(".eye");
const pupil = document.querySelector(".pupil");
const elipse = document.querySelector(".elipse");

elipse.addEventListener("animationend", () => {
  bgShadow.addEventListener("mousemove", function (e) {
    elipse.classList.remove("open");
    var x = e.clientX / 10;
    var y = e.clientY / 10;

    elipse.style.height = y + "%";

    eye.style.clipPath = `circle(40% at ${x - 5}% ${y + 10}%)`;
    pupil.style.clipPath = `circle(17% at ${x - 5}% ${y + 10}%)`;
  });
});
