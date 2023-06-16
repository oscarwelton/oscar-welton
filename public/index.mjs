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


const url = "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='9.15' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

const circle = document.getElementById("circle");

circle.style.background = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0.55), rgba(0,0,0,0.2)),
radial-gradient(circle at 50% 50%, rgba(16,13,13,0.06), rgba(9,10,9,0.19)),
url(${url})`;
