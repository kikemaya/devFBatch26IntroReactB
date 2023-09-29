// Copiar de forma segura las propiedades de un objeto a otro

// EJEMPLO DE COMO CREAR MAL UNA COPIA
// let gato = { nombre: "Cho", edad: 1 }

// let gatoCopia = gato

// gatoCopia.nombre = "Lucy"

// console.log("Gato original", gato);
// console.log("Gato copia", gatoCopia);

// EJEMPLO DE COMO COPIAR UN ARREGLO CON SPREAD OPERATOR
let gato = { nombre: "Cho", edad: 1 }

let gatoCopia = { ...gato }

gatoCopia.nombre = "Lucy"

console.log("Gato original", gato);
console.log("Gato copia", gatoCopia);