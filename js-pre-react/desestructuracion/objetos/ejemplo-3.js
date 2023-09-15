// Valores por defecto:
const persona = {
  nombre: "Cinthya",
  edad: 19,
  ciudad: "La mejor ciudad"
};

// Desestructuracion con valores por defecto
let { edad = 30 } = persona;

console.log(edad);