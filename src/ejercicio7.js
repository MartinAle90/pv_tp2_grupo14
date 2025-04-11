// 7. Declarar un array denominado nombres con al menos 6 nombres.
//Obtener el nombre más largo del array nombres.
//Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) que indica su tamaño.

let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Carla"];
let nombreMasLargo = "";
let longitudMaxima = 0;
for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > longitudMaxima) {
        longitudMaxima = nombres[i].length;
        nombreMasLargo = nombres[i];
    }
}
console.log("El nombre más largo es: " + nombreMasLargo);