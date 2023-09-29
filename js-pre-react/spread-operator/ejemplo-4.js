// PUEDES USAR EL OPERADOR DE PROPAGACION PARA COPIAR PROPIEDADES DE UN OBJETO
// EN OTROS Y AGREGAR MAS

const objeto1 = { a: 1, b: 2 }
const objeto2 = { ...objeto1, c: 3 }

console.log("Arreglo original", objeto1);
console.log("Arreglo propagado, mas una propiedad", objeto2);