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

document.addEventListener("DOMContentLoaded", function () {
  const crearTareaBtn = document.querySelector(".crear-tarea-btn");
  const modalTarea = document.querySelector(".modal-tarea");
  const overlay = document.querySelector(".overlay");

  crearTareaBtn.addEventListener("click", function () {
    if (modalTarea.classList.contains("show")) {
      modalTarea.classList.remove("show");
      overlay.style.opacity = "0"; // oculta el overlay cuando el modal se oculta
      setTimeout(() => (overlay.style.display = "none"), 300); // asegura que el display se cambie después de la transición
    } else {
      modalTarea.classList.add("show");
      overlay.style.display = "block"; // muestra el overlay
      setTimeout(() => (overlay.style.opacity = "1"), 10); // se asegura de que el cambio de opacidad ocurra después de que se muestra el overlay
    }
  });

  // Añadimos un oyente de eventos al overlay para cerrar el modal
  overlay.addEventListener("click", function () {
    modalTarea.classList.remove("show");
    overlay.style.opacity = "0";
    setTimeout(() => (overlay.style.display = "none"), 300);
  });
});
