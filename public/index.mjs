import { eyeTrack } from "./js-modules/eye-track.mjs";
import { updateCircleDiameter } from "./js-modules/circle-size.mjs";

const bg = document.querySelector(".bg");
const bgShadow = document.querySelector(".bg-shadow");

const surname = document.querySelector(".surname");
const firstName = document.querySelector(".first-name");
const projectsButton = document.getElementById("projects");
const projects = document.querySelector(".projects");

const eye = document.querySelector(".eye");
const pupil = document.querySelector(".pupil");
const elipse = document.querySelector(".elipse");

let contactClicked = false;
let projectsClicked = false;


projectsButton.addEventListener("click", () => {
  projectsClicked = true;

  bgShadow.removeEventListener("mousemove", eyeTrack);

  firstName.classList.remove("intro-animation");
  surname.classList.remove("intro-animation");

  projectsButton.classList.add("active");
  contact.classList.remove("active");

  bg.classList.add("move-eye");
  bgShadow.classList.add("move-eye");

  projects.classList.remove("d-none");
  projects.classList.add("slide-in");

  elipse.style.maxHeight = "100%";

  if (contactClicked === true) {
    const linkers = Array.from(document.querySelectorAll(".contact-link"));

    const pupilText = document.querySelector(".eye h1");
    pupilText.innerHTML = "";

    linkers.forEach((link) => {
      var linkFont = link.style.fontSize;
      link.style.fontSize = "";
      link.animate([{ fontSize: linkFont }, { fontSize: "10vw" }], {
        duration: 1500,
      });
    });

    elipse.classList.remove("open");
    elipse.classList.remove("grow-elipse");
    elipse.classList.add("shrink-elipse");

    firstName.classList.remove("move-up-animation");
    surname.classList.remove("move-down-animation");

    firstName.classList.add("down-animation");
    surname.classList.add("up-animation");
    setTimeout(() => {
      document.querySelector(".elipse span").classList.add("eye-wrap");
    }, 600);
  }

  contactClicked = false;
});

contact.addEventListener("click", () => {
  projectsClicked = false;
  contactClicked = true;

  elipse.classList.remove("shrink-elipse");

  bgShadow.removeEventListener("mousemove", eyeTrack);

  firstName.classList.remove("fn-animation");
  surname.classList.remove("ln-animation");
  firstName.classList.add("move-up-animation");
  surname.classList.add("move-down-animation");

  elipse.classList.remove("open");
  elipse.classList.add("grow-elipse");
  elipse.style.maxHeight = "100%";

  setTimeout(() => {
    document.querySelector(".elipse span").classList.remove("eye-wrap");
  }, 600);

  const pupilText = document.querySelector(".eye h1");
  pupilText.innerHTML = "Let's <br> Connect.";
  pupilText.animate(
    { color: ["initial", "white"] },
    { duration: 300, fill: "both", delay: 500 }
  );

  pupil.classList.remove("pupil-grow");

  contact.classList.add("active");
  projectsButton.classList.remove("active");
  // projects.classList.add("d-none");

  linksFontSize();

  if (projectsClicked === true) {
  }
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
const navbar = Array.from(document.querySelectorAll(".navbar h4"));

navbar.forEach((navItem) => {
  navItem.style.fontSize = bg.offsetWidth / 13 + "px";
});

window.addEventListener("resize", updateCircleDiameter);

updateCircleDiameter();

bgShadow.addEventListener("mouseout", function () {
  eye.style.transition = "clip-path 0.5s ease";
  pupil.style.transition = "clip-path 0.5s ease";
  eye.style.clipPath = `circle(30% at 50% 50%)`;
  pupil.style.clipPath = `circle(15% at 50% 50%)`;
});
