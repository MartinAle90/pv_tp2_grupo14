import { mostrarTexto } from "/pv_tp2_grupo14/src/ejercicio21.js";

const input = document.getElementById("Textovivo");
const salida = document.getElementById("TextoEnvivo");

input.addEventListener("input", () => {
  const TextN = input.value.length;

  if (TextN > 19) {
    salida.style.backgroundColor = "#f8d7da";
  } else {
    salida.style.backgroundColor = "white";
  }

  mostrarTexto(input, salida);
});
