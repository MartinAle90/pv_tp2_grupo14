//11. Solicitar al usuario que ingrese el número de kilómetros recorridos por su vehículo y el número de litros de combustible consumidos.
//Calcular y mostrar el consumo de combustible por kilómetro.
//El resultado se obtiene dividiendo número de litros dividido por número de kilómetros.

let kmRecorridos = parseFloat(prompt("Ingrese el número de kilómetros recorridos por su vehículo:"));
let ltsConsumidos = parseFloat(prompt("Ingrese el número de litros de combustible consumidos:"));
let consumoPorKm = ltsConsumidos / kmRecorridos;
console.log("El consumo de combustible por kilómetro es: " + consumoPorKm + " litros/km");