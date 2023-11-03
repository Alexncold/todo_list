document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".principal nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((innerLink) => innerLink.classList.remove("active"));
      link.classList.add("active");
      // Obtener el identificador del contenido correspondiente
      const contenidoId = link.getAttribute("data-content");

      // Ocultar todos los contenidos
      const contenidos = document.querySelectorAll(".contenido");
      contenidos.forEach((contenido) => (contenido.style.display = "none"));

      // Mostrar el contenido correspondiente
      const contenidoMostrar = document.getElementById(contenidoId);
      if (contenidoMostrar) {
        contenidoMostrar.style.display = "flex";
      }
    });
  });

  const crearTareaBtn = document.querySelector(".crear-tarea-btn");
  const modalTarea = document.querySelector(".modal-tarea");
  const overlay = document.querySelector(".overlay");

  const toggleModal = () => {
    if (modalTarea.classList.contains("show")) {
      modalTarea.classList.remove("show");
      overlay.style.opacity = "0";
      setTimeout(() => (overlay.style.display = "none"), 300);
    } else {
      modalTarea.classList.add("show");
      overlay.style.display = "block";
      setTimeout(() => (overlay.style.opacity = "1"), 10);
    }
  };

  crearTareaBtn.addEventListener("click", toggleModal);

  overlay.addEventListener("click", toggleModal);

  const agregarObjetivoBtn = document.getElementById("agregar-objetivo");
  const quitarObjetivoBtn = document.getElementById("quitar-objetivo");
  let objetivoCount = 1;

  agregarObjetivoBtn.addEventListener("click", () => {
    const nuevoObjetivo = document.createElement("input");
    nuevoObjetivo.type = "text";
    nuevoObjetivo.id = `objetivo-${objetivoCount}`;
    nuevoObjetivo.classList.add("objetivo-input");

    const parentDiv = document.querySelector(".objetivos-container");
    parentDiv.appendChild(nuevoObjetivo);

    objetivoCount++;
  });

  quitarObjetivoBtn.addEventListener("click", () => {
    if (objetivoCount > 1) {
      const objetivoToRemove = document.getElementById(
        `objetivo-${objetivoCount - 1}`
      );
      objetivoToRemove.remove();
      objetivoCount--;
    }
  });
});

///////////////////////////////////////////////////////////////

// Obtén una referencia al botón "Crear" en el modal
const btnCrear = document.getElementById("btn-crear");
// Obtén una referencia al modal-tarea
const modalTarea = document.querySelector(".modal-tarea");

// Agrega un evento de clic al botón "Crear"
btnCrear.addEventListener("click", () => {
  // Obtén el valor de la prioridad seleccionada en el modal-tarea
  const prioridadSelect = document.getElementById("prioridad");
  const prioridad = prioridadSelect.value;

  // Actualiza la prioridad en la card-task
  const priorityIndicator = document.querySelector(
    ".card-task .priority-indicator"
  );

  // Aplica diferentes estilos de acuerdo a la prioridad
  switch (prioridad) {
    case "baja":
      priorityIndicator.textContent = "Baja";
      priorityIndicator.style.backgroundColor = "#EAF5EB";
      priorityIndicator.style.color = "#178D24";
      break;
    case "media":
      priorityIndicator.textContent = "Media";
      priorityIndicator.style.backgroundColor = "#FCF3EB";
      priorityIndicator.style.color = "#EA9D57";
      break;
    case "alta":
      priorityIndicator.textContent = "Alta";
      priorityIndicator.style.backgroundColor = "#FBEAEA";
      priorityIndicator.style.color = "#DB3E3E";
      break;
  }

  // Oculta el modal-tarea
  modalTarea.classList.remove("show");

  // Otras acciones que desees realizar al hacer clic en "Crear"
  // Por ejemplo, guardar la tarea, etc.
});
