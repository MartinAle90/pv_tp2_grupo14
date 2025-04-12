// 16. Escribir una función llamada sumarRango que reciba dos argumentos numéricos
// enteros: número inicial y número final. La función debe retornar la suma de los números
// en ese rango (incluyéndolos).
// El número inicial debe ser menor o igual que el número final.

let numInicial = parseInt(prompt("Ingrese un numero inicial"));
let numFinal = parseInt(prompt("Ingrese el numero final"));

function sumarRango(ni, nf) {
  if (ni > nf) {
    alert("El número inicial debe ser menor o igual al número final");
    return;
  }

  let sumNum = 0;
  for (let i = ni; i <= nf; i++) {
    sumNum += i;
  }

  return sumNum;
}

console.log("La suma del rango es:", sumarRango(numInicial, numFinal));
    