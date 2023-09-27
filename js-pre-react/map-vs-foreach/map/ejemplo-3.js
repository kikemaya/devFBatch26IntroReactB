// CREAR UN ARREGLO DE LAS LONGITUDES DE LAS PALABRAS DE OTRO ARREGLO
const palabras = ["Manzana", "Llanta", "Tarjeta", "Camara"]

// SALIDA ESPERADA | EXPECTED OUTPUT: [7, 6, 7, 6]

const longitudes = palabras.map(palabra => {
  return palabra.length
});

// const longitudes = palabras.map(palabra => palabra.length);

console.log("palabras: ", palabras);
console.log("longitudes: ", longitudes);