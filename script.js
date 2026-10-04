"use strict";

const formulario = document.getElementById("asistencia");
const campoNombre = document.getElementById("nombre");

campoNombre.addEventListener("input", () => campoNombre.setCustomValidity(""));

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = campoNombre.value.trim().replace(/\s+/g, " ");

  if (!nombre) {
    campoNombre.setCustomValidity("Ingresá tu nombre para confirmar.");
    campoNombre.reportValidity();
    return;
  }

  campoNombre.value = nombre;
  const mensaje = `Hola, soy ${nombre} y confirmo mi asistencia al cumpleaños de Santino.`;
  window.location.assign(`https://wa.me/543878599710?text=${encodeURIComponent(mensaje)}`);
});
