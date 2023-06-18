const bg = document.querySelector(".bg");
const url = "./resources/grainy.svg";







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

  setTimeout(() => {
    surname.style.transition = "";
    firstName.style.transition = "";

    firstName.classList.add("up-animation");
    surname.classList.add("down-animation");
  }, 10);
});

projects.addEventListener("click", () => {
  firstName.classList.remove("intro-animation");
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
});
