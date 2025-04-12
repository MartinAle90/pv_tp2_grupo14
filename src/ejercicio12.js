// 12. Solicitar al usuario que ingrese un número.
// Comparar si es par o no, usando un if/else determinar si es par que muestre un alert
// indicando que el número es par o sino mostrar un alert indicando que es impar.

let num = parseInt(prompt("Ingrese un numero:", 0));

if (num % 2 == 0) {
  alert(`${num} es un numero par`);
} else {
  alert(`${num} es un numero impar`);
}
