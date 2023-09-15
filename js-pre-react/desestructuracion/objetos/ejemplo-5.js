// Desestructuracion de objetos como parametros de funciones
function imprimirInfo({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
};

const cinthya = {
  nombre: "Cinthya",
  edad: 19,
  ciudad: "La mejor ciudad"
};

imprimirInfo(cinthya);

// En este caso, estamos pasando un objeto como argumento a la función imprimirInfo, y luego desestructuramos el objeto directamente en los parámetros de la función para acceder a las propiedades dentro de la función.

// La desestructuración de objetos es una característica poderosa de JavaScript que simplifica la manipulación de datos en objetos.