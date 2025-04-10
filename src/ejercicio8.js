  
calcularMayor(23, 20);  
calcularMayor(15,30);   
calcularMayor(12, 12);  

function calcularMayor(numero1, numero2) {
    if (numero1 > numero2) {
      alert("El numero " + numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1) {
      alert("El numero " + numero2 + " es mayor que " + numero1);
    } else {
      alert("Ambos numeros son iguales: " + numero1);
    }
  }
  