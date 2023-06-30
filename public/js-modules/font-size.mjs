const firstNameSpans = Array.from(document.querySelectorAll(".first-name span"));
const lastNameSpans = Array.from(document.querySelectorAll(".surname span"));
const bg = document.querySelector(".bg");
const contactLinks = Array.from(document.querySelectorAll(".contact-link"));

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

function linksFontSize() {
  const width = bg.offsetWidth;
  const linkFontSize = width / 8.5 + "px";

  contactLinks.forEach((contact) => {
    contact.style.transition = "font-size 3s";
    contact.style.fontSize = linkFontSize;
    contact.style.pointerEvents = "auto";
  });

  const connect = document.querySelector(".eye h4");
  connect.style.fontSize = linkFontSize;
  connect.style.transition = "font-size 3s";
}

export { updateFontSize, linksFontSize }
