// 18.
// Mostrar en una página html un párrafo de texto y un botón, aplicar estilos css. 
// Crear un script que capture el evento clic del botón y que cambie el texto del párrafo por otro. 



// Primero se debe capturar los elementos del html
const parrafo = document.getElementById("miParrafo");
const boton = document.getElementById("miBoton");

// Con las variables capturadas, se desarrolla la funcionalidad del botón
boton.addEventListener("click", () => {
    parrafo.textContent = "Wii texto cambiado";// Usundo la variable textContent podemos reasignar el valor del contenido del parrafo.
    parrafo.style.color = "blue"; // Usando "style" podemos cambiar los estilos del parrafo, por ejemplo color
    parrafo.style.fontFamily = "Courier New, monospace"; // Para elegir la nueva tipo de fuente
    parrafo.style.fontSize = "2rem"; // Tambien se puede aumentar el tamaño del texto

});