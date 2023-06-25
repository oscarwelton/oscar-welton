const bg = document.querySelector(".bg");
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
const about = document.getElementById("about");
const projects = document.getElementById("projects");

const projectsContent = Array.from(
  document.querySelector(".projects").children
);

about.addEventListener("click", () => {
  surname.classList.remove("intro-animation");
  firstName.classList.remove("intro-animation");
  about.classList.add("active");
  projects.classList.remove("active");
  contact.classList.remove("active");


  setTimeout(() => {
    surname.style.transition = "";
    firstName.style.transition = "";

    firstName.classList.add("up-animation");
    surname.classList.add("down-animation");
  }, 10);
});

// projectsContent.style.width = bg.offsetWidth * 0.75
projects.addEventListener("click", () => {
  firstName.classList.remove("intro-animation");
  projects.classList.add("active");
  about.classList.remove("active");
  contact.classList.remove("active")
  surname.classList.remove("intro-animation");
  firstName.classList.add("round-animation");


  surname.classList.add("round-animation");
  projectsContent.forEach((project, index) => {

    setTimeout(() => {
      project.classList.remove("d-none");
      project.classList.add("fade");
    }, 400 * index);
  });
});


const contactForm = document.querySelector(".contact-container");
contact.addEventListener("click", () => {
  contactForm.classList.remove("d-none");
  contact.classList.add("active");
  projects.classList.remove("active")
});
