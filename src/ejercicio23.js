// Captura los botones
const radios = document.querySelectorAll('input[name="language"]');
const result = document.getElementById('result');

// Función que se ejecuta cuando cambia la selección
function Seleccion() {
  // Obtener el valor del botón seleccionado
  const Lenguaje = document.querySelector('input[name="language"]:checked').value;
  
  // Mostrar el resultado en el span con id
  result.textContent = Lenguaje;

  // Mostrar el valor en la consola
  console.log(`Lenguaje seleccionado: ${Lenguaje}`);
}

// Añadir un evento change a cada botón de opción
radios.forEach(radio => {
  radio.addEventListener('change', Seleccion);
});
