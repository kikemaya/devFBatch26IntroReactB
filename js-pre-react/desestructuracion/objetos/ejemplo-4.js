// Desestructuracion anidada de objetos
const persona = {
  nombre: "Cinthya",
  edad: 19,
  ciudad: "La mejor ciudad",
  direccion: {
    calle: "123 Calle principal",
    colonia: "colonia bonita"
  }
};

// Desestructuracion anidada
const { nombre, direccion: { calle: calleAlias, colonia } } = persona;

console.log(calleAlias);