const button = document.getElementById('BotonColor');

// Lista de colores
const colores = ['#FF5733','#33FF57','#3357FF','#F1C40F','#9B59B6','#1ABC9C','#39FF14','#FF073A','#00FFFF','#FF1493','#FFFF00','#FF00FF'];

// Función que cambia el color de fondo y muestra el mensaje
function CambiarColor() {
  // Elegir un color aleatorio
  const colorAleat = colores[Math.floor(Math.random() * colores.length)];
  
  // Cambiar el color de fondo
  document.body.style.backgroundColor = colorAleat;

  // Color actual
  console.log(`Color de fondo cambiado a: ${colorAleat}`);
}

// Captura del evento
button.addEventListener('click', CambiarColor);