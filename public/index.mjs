const surname = document.querySelector(".surname");
const firstName = document.querySelector(".first-name");
const about = document.getElementById("about");
about.addEventListener("click", () => {
  surname.classList.remove("intro-animation");
  firstName.classList.remove("intro-animation");
  firstName.classList.add("up-animation");
  surname.classList.add("down-animation");
});

let y = 0;

function updateCirclePosition(y) {
  const bg = document.querySelector(".bg");
  const url = "./resources/grainy.svg";

  const bgString = `radial-gradient(circle at 100% ${y}%, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
  url('${url}')`;
  bg.style.background = bgString;
  // console.log(bgString);
}

setInterval(() => {
  if (y < 150) {
    y++;
    y++
  } else if (y === 150) {
    y = -150;
    y++;
    y++;
  }

  updateCirclePosition(y);
}, 100);

// setInterval(() => {
//   updateCirclePosition();
// }, 1000);

// setInterval(updateCirclePosition, 30000);
// while (true) {
//   // Your code logic goes here

//   // Check if x reaches 150 or -50 to change direction
//   if (x === 150 || x === -50) {
//     direction *= -1; // Change direction
//   }

//   // Check if y reaches 150 or -50 to change direction
//   if (y === 150 || y === -50) {
//     direction *= -1; // Change direction
//   }

//   // Increment x or y based on the current direction
//   if (x < 150 && x >= -50) {
//     x += direction;
//   } else if (y < 150 && y >= -50) {
//     y += direction;
//   }

//   // Print the current values of x and y (you can replace this with your desired logic)
//   console.log(`x: ${x}, y: ${y}`);
// }
