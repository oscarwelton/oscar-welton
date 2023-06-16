const front = document.querySelector(".front");
const back = document.querySelector(".back");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const box = document.querySelector(".box");

function addClasses() {
  const boxClasses = `
  .front {
    transform: translateZ(${translateZ}px);
  }
  .back {
    transform: translateZ(-${translateZ}px) rotateY(180deg);
  }
  .left {
    transform: translateX(-${translateZ}px) rotateY(-90deg);
  }
  .right {
    transform: translateX(${translateZ}px) rotateY(90deg);
  }`;

  var styleElement = document.createElement('style');
  styleElement.innerHTML = boxClasses;
  document.head.appendChild(styleElement);

  front.classList.add("front");
  back.classList.add("back");
  left.classList.add("left");
  right.classList.add("right");
}

let translateZ;
translateZ = box.offsetWidth / 2;
addClasses();

window.addEventListener('resize', function() {
  translateZ = box.offsetWidth / 2;
  front.classList.remove("front");
  back.classList.remove("back");
  left.classList.remove("left");
  right.classList.remove("right");
  addClasses();
});

home.addEventListener("click", () => {
  console.log("home clicked");
  requestAnimationFrame(() => {
    box.classList.add("rotate-front");
    box.classList.remove("rotate-back", "rotate-left", "rotate-right");
  });
});

about.addEventListener("click", () => {
  requestAnimationFrame(() => {
    box.classList.add("rotate-left");
    box.classList.remove("rotate-back", "rotate-front", "rotate-right");
  });
});

projects.addEventListener("click", () => {
  requestAnimationFrame(() => {
    box.classList.add("rotate-right");
    box.classList.remove("rotate-back", "rotate-front", "rotate-left");
  });
});

contact.addEventListener("click", () => {
  requestAnimationFrame(() => {
    box.classList.add("rotate-back");
    box.classList.remove("rotate-left", "rotate-front", "rotate-right");
  });
});
