// Funcion obtener numeros
let obtenerProm = () => {
    // Usamos prompt para obtener los números desde la entrada del usuario
    let num1 = parseInt(prompt("Ingrese el primer número entero:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero:"));
  
    // Calculamos el promedio
    let promedio = 0;
    promedio = (num1 + num2 + num3) / 3;

    console.log("El promedio de los tres números es: "+promedio);
  };
  
  // Llamamos a la función
  obtenerProm();
  