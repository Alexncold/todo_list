document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".principal nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevendrá el comportamiento predeterminado del enlace

      // Elimina la clase 'active' de todos los enlaces
      navLinks.forEach((innerLink) => {
        innerLink.classList.remove("active");
      });

      // Añade la clase 'active' al enlace que se acaba de hacer clic
      link.classList.add("active");
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
  const agregarObjetivoBtn = document.getElementById("agregar-objetivo");
  const quitarObjetivoBtn = document.getElementById("quitar-objetivo");
  let objetivoCount = 1; // Ya hay un objetivo por defecto

  agregarObjetivoBtn.addEventListener("click", function () {
    const nuevoObjetivo = document.createElement("input");
    nuevoObjetivo.type = "text";
    nuevoObjetivo.id = "objetivo-" + objetivoCount;
    nuevoObjetivo.classList.add("objetivo-input");

    const parentDiv = document.querySelector(".objetivos-container");
    parentDiv.appendChild(nuevoObjetivo);

    objetivoCount++;
  });

  quitarObjetivoBtn.addEventListener("click", function () {
    if (objetivoCount > 1) {
      // Si hay más de un objetivo
      const objetivoToRemove = document.getElementById(
        "objetivo-" + (objetivoCount - 1)
      );
      objetivoToRemove.remove();

      objetivoCount--;
    }
  });
});
