const eye = document.querySelector(".eye");
const pupil = document.querySelector(".pupil");
const elipse = document.querySelector(".elipse");


function eyeTrack(cursor) {
  eye.style.transition = "";
  pupil.style.transition = "";
  elipse.classList.remove("open");

  var x = cursor.clientX;
  var y = cursor.clientY;

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var eyeWidth = eye.offsetWidth / 2
  var eyeHeight = eye.offsetHeight / 2

  var centerX = screenWidth * 0.5;
  var centerY = screenHeight * 0.5;

  var offsetX = x - centerX+ eyeWidth;
  var offsetY = y - centerY + eyeHeight ;

  pupil.classList.add("pupil-grow");

  elipse.style.height = y / 15 + "%";

  eye.style.clipPath = `circle(40% at ${offsetX}px ${offsetY}px)`;
  pupil.style.clipPath = `circle(17% at ${offsetX}px ${offsetY}px)`;
}

export { eyeTrack }
