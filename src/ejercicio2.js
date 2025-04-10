//var nombre="Martin Daza"; //Antiguamente se usaba var para declarar variables, ahora se recomienda usar let o const
let nombre="Martin Daza";
let edad=getRandomInt(100);
console.log("Hola " + nombre + " tienes " + edad + " años");
if (edad>=18){
    console.log(nombre+" con " +edad+" años es mayor de edad");
}
else{
    console.log(nombre+" con " +edad+" años es menor de edad");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}