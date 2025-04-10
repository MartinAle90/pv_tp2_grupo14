// 17. Escribir una función llamada contarLetraA que reciba un string y retorne el número de veces que aparece la letra "a".
// el string  recibido va a ser ingresado por el usuario

function contarLetraA(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}

let cadena = prompt("Ingrese una cadena de texto:");
//Se muestra el string ingresado para corroborar la cantidad de "a"
console.log("String ingresado: " + cadena);
let cantidadA = contarLetraA(cadena);
console.log("La letra 'a' aparece " + cantidadA + " veces en la cadena ingresada.");