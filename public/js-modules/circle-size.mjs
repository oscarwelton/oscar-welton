const bg = document.querySelector(".bg");
const bgShadow = document.querySelector(".bg-shadow");

function updateCircleDiameter() {
  var linksCircle = document.getElementById("links-circle");
  linksCircle.setAttribute("width", bg.offsetWidth);
  linksCircle.setAttribute("height", bg.offsetWidth);

  var svg = bgShadow.querySelector("svg");
  var circlePath = svg.querySelector("#circle-path");

  var parentDivWidth = bgShadow.offsetWidth;
  var diameter = parentDivWidth - 50;

  var centerX = parentDivWidth / 2;
  var centerY = parentDivWidth / 2;

  var pathData = `M${centerX} ${centerY} m${-diameter / 2} 0 a${diameter / 2} ${
    diameter / 2
  } 0 1 0 ${diameter} 0 a${diameter / 2} ${diameter / 2} 0 1 0 ${-diameter} 0`;

  circlePath.setAttribute("d", pathData);
}

export { updateCircleDiameter }
