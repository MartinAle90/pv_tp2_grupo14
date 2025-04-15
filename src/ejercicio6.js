// Crear el array con 8 edades
let edades = [23, 34, 19, 45, 60, 28, 33, 50];

// Calcular el promedio de las edades
let calcProm = () => {
  let suma = 0;
  let promedio = 0;
  // Recorremos el array y sumamos todas las edades
  edades.forEach(edad => {
    suma += edad;
  });
  
  // Calculamos el promedio
  promedio = suma / edades.length;
  console.log("El promedio de las edades es: "+promedio);
};

// Llamamos a la función
calcProm();