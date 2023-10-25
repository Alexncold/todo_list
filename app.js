document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".principal nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((innerLink) => {
        innerLink.style.fontWeight = "400"; // restablece todos los enlaces a 400
      });
      link.style.fontWeight = "600"; // establece el enlace clicado a 600
    });
  });
});
