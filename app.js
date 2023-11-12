document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".principal nav a");
  const crearTareaBtn = document.querySelector(".crear-tarea-btn");
  const modalTarea = document.querySelector(".modal-tarea");
  const overlay = document.querySelector(".overlay");
  const agregarObjetivoBtn = document.getElementById("agregar-objetivo");
  const quitarObjetivoBtn = document.getElementById("quitar-objetivo");
  const btnCrear = document.getElementById("btn-crear");
  let objetivoCount = 1;

  const toggleActiveClass = (links, activeLink) => {
    links.forEach((link) => link.classList.remove("active"));
    activeLink.classList.add("active");
  };

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

  const agregarObjetivo = () => {
    const nuevoObjetivo = document.createElement("input");
    nuevoObjetivo.type = "text";
    nuevoObjetivo.id = `objetivo-${objetivoCount}`;
    nuevoObjetivo.classList.add("objetivo-input");

    const parentDiv = document.querySelector(".objetivos-container");
    parentDiv.appendChild(nuevoObjetivo);

    objetivoCount++;
  };

  const quitarObjetivo = () => {
    if (objetivoCount > 1) {
      const objetivoToRemove = document.getElementById(
        `objetivo-${objetivoCount - 1}`
      );
      objetivoToRemove.remove();
      objetivoCount--;
    }
  };

  const crearTarea = () => {
    const prioridad = document.getElementById("prioridad").value;
    const tituloTarea = document.getElementById("titulo-tarea").value;
    const comentarios = document.getElementById("comentarios").value;
    const estado = document.getElementById("estado").value;
    const fecha = new Date().toLocaleDateString();
    const objetivos = document.querySelectorAll(".objetivo-input");

    const colorMap = {
      Alta: { fondo: "#FBEAEA", fuente: "#DB3E3E" },
      Media: { fondo: "#FCF3EB", fuente: "#EA9D57" },
      Baja: { fondo: "#EAF5EB", fuente: "#178D24" },
    };

    const colorPrioridad = colorMap[prioridad] || {};

    const nuevaTarea = document.createElement("div");

    nuevaTarea.innerHTML = `
          <div class="card-task" >
            <div class="priority-indicator" style="background-color: ${
              colorPrioridad.fondo || ""
            }; color: ${colorPrioridad.fuente || ""}">${prioridad}</div>
            <h3>${tituloTarea}</h3>
            <p>${comentarios}</p>
            <div class="task-details">
              <i class="fi fi-rr-calendar datos datos-icon"></i>
              <span class="datos fecha-items">${fecha}</span>
              <span class="separator"></span>
              <i class="fi fi-rr-list-check datos datos-icon"></i>
              <span class="datos fecha-items">0/${objetivos.length}</span>
            </div>
          </div>
        `;

    const contenidoMostrar = document.getElementById(estado);
    contenidoMostrar.appendChild(nuevaTarea);

    contenidoMostrar.style.flexDirection = "column";

    document.getElementById("prioridad").value = "baja";
    document.getElementById("titulo-tarea").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("estado").value = "por-hacer";

    objetivos.forEach((objetivo, index) => {
      if (index !== 0) {
        objetivo.remove();
      } else {
        objetivo.value = ""; // Restablecer el primer objetivo a un campo vacío
      }
    });

    const tareaResumen = document.createElement("div");
    tareaResumen.classList.add("tareas-all");

    tareaResumen.innerHTML = `
      <div class="priority-indicator" style="background-color: ${
        colorPrioridad.fondo || ""
      }; color: ${colorPrioridad.fuente || ""}">${prioridad}</div>
      <h3>${tituloTarea}</h3>
    `;

    const tareasSection = document.getElementById("tareas");
    tareasSection.appendChild(tareaResumen);
    tareasSection.style.flexDirection = "column";

    toggleModal();
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      toggleActiveClass(navLinks, link);
      const contenidoId = link.getAttribute("data-content");
      const contenidos = document.querySelectorAll(".contenido");
      contenidos.forEach((contenido) => (contenido.style.display = "none"));
      const contenidoMostrar = document.getElementById(contenidoId);
      if (contenidoMostrar) {
        contenidoMostrar.style.display = "flex";
      }
    });
  });

  crearTareaBtn.addEventListener("click", toggleModal);
  overlay.addEventListener("click", toggleModal);
  agregarObjetivoBtn.addEventListener("click", agregarObjetivo);
  quitarObjetivoBtn.addEventListener("click", quitarObjetivo);
  btnCrear.addEventListener("click", crearTarea);
});
