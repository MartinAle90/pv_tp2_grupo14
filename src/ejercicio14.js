const duplicar = arreglo => {
    
    return arreglo=arreglo.map (n=> n * 2);
}

let numero = [2,6,10,12];

let numerosDuplicados = duplicar(numero);
console.log(numerosDuplicados); // [4, 12, 20, 24]
