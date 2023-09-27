// Convertir un arreglo de nombres en un arreglo de saludos

const nombres = ['Juan', 'Maria', 'Pedro']

const saludos = nombres.map(nombre => {
  return `¡Hola, ${nombre}!`
});

console.log("Arreglo de nombres", nombres);
console.log("Arreglo de saludos", saludos);