export function mostrarTexto(input, salida) {
    salida.textContent = "El texto es: " + input.value;
}

const input = document.getElementById("Textovivo");
const salida = document.getElementById("TextoEnvivo");

input.addEventListener("input", () => {
    mostrarTexto(input, salida); 
});
