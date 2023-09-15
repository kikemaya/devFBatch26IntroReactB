// La desestructuración de objetos en JavaScript te permite extraer propiedades de un objeto y asignarlas a variables individuales de manera más conveniente.

const persona = {
  nombre: "Cinthya",
  edad: 19,
  ciudad: "La mejor ciudad"
};

// Desestructuracion
let { edad, ciudad, nombre } = persona;

console.log(edad);