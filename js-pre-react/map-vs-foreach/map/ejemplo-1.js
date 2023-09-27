// Se utiliza para crear un nuevo arreglo a partir de otro, aplicando una funcion a cada
// elemento del arreglo original

// Recibir un arreglo, crear una copia de este y duplicar cada uno de los valores en el
// nuevo arreglo

const numeros = [1, 2, 3, 4, 5]

const numerosDuplicados = numeros.map(numero => {
  return numero * 2
});

console.log("Arreglo original", numeros);
console.log("Copia del arreglo original", numerosDuplicados);