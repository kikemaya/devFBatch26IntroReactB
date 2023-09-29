// CLONAR UN OBJETO Y MODIFICAR SUS PROPIEDADES

const persona = { nombre: "Miguelito", edad: 37 }
const personaModificada = { ...persona, edad: 31, sexo: "M" }

console.log("Arreglo original", persona);
console.log("Arreglo con una propiedad modificada", personaModificada);