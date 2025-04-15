// Función retornar el nombre del mes
let retMes = (numero) => {
    // Array con los nombres de los meses
    let meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    // Condicinal para saber el mes
    if (numero >= 1 && numero <= 12) {
      return meses[numero - 1]; 
    } else {
      return "No es un mes válido";
    }
  };
  
  // Llamamos a la función y mostramos el resultado
  console.log(retMes(4)); // "Abril"
  console.log(retMes(13)); // "No es un mes válido"
  