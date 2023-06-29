import { eyeTrack } from "./js-modules/eye-track.mjs";
import { updateCircleDiameter } from "./js-modules/circle-size.mjs";
import { updateFontSize, linksFontSize } from "./js-modules/font-size.mjs";

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
let projectClicked = false;

window.addEventListener("resize", updateFontSize, updateCircleDiameter);

updateFontSize();
updateCircleDiameter();

projectsButton.addEventListener("click", () => {
  bgShadow.removeEventListener("mousemove", eyeTrack);
  projectClicked = true;

  firstName.classList.remove("intro-animation");
  surname.classList.remove("intro-animation");

  projectsButton.classList.add("active");
  contact.classList.remove("active");

  bg.classList.add("move-eye");
  bgShadow.classList.add("move-eye");

  // function addSlideInClass() {
    projects.classList.add("slide-in");


  // bg.addEventListener("animationend", addSlideInClass);
  // bgShadow.addEventListener("animationend", addSlideInClass);


  projects.classList.remove("slide-out");

  if (contactClicked === true) {
    bg.classList.remove("move-eye-back");
    bgShadow.classList.remove("move-eye-back");

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

  elipse.style.height = "35%";

  contactClicked = false;
});

bgShadow.addEventListener("mouseover", () => {
  pupil.classList.add("pupil-grow");
});

contact.addEventListener("click", () => {
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

  contact.classList.add("active");
  projectsButton.classList.remove("active");

  linksFontSize();

  bg.classList.remove("move-eye-back");
  bgShadow.classList.remove("move-eye-back");

  if (projectClicked === true) {
    projects.classList.add("slide-out");
    projects.classList.remove("slide-in");

    bg.classList.remove("move-eye");
    bgShadow.classList.remove("move-eye");

    bg.classList.add("move-eye-back");
    bgShadow.classList.add("move-eye-back");
  }

  projectClicked = false;
});

setTimeout(() => {
  bgShadow.addEventListener("mousemove", eyeTrack);
}, 2000);

const linkFontSize = bg.offsetWidth / 10 + "px";
document.querySelector(".eye h1").style.fontSize = linkFontSize;

const navbar = Array.from(document.querySelectorAll(".navbar h4"));
navbar.forEach((navItem) => {
  navItem.style.fontSize = bg.offsetWidth / 13 + "px";
});

bgShadow.addEventListener("mouseout", function () {
  pupil.classList.remove("pupil-grow");
  eye.style.transition = "clip-path 0.5s ease";
  pupil.style.transition = "clip-path 0.5s ease";
  eye.style.clipPath = `circle(30% at 50% 50%)`;
  pupil.style.clipPath = `circle(0% at 50% 50%)`;
  elipse.style.height = "35%";

});
