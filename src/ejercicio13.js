// 13. Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como
// parámetro e imprima cada elemento en una línea a parte.

let arreglo = [2, 5, 65, 7, 9, 21, 43, 54, 76];

function mostrarArreglo(arr) {
  arr.map((n) => {
    console.log(n);
  });
}

mostrarArreglo(arreglo);
