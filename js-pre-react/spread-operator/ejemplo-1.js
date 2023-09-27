// El operador de propagacion se utiliza para expandir elementos de un iterable (como un arreglo) o las propiedades de un objeto en lugares donde se requieren multiples elementos o propiedades

// Clonar un arreglo de forma segura
const numeros = [1, 2, 3]
const copiaDeNumeros = numeros

copiaDeNumeros[1] = 9

console.log("El original", numeros);
console.log("La copia", copiaDeNumeros);


// CLONAR UN ARREGLO CON EL SPREAD OPERATOR
const copiaArreglo = [...numeros]

copiaArreglo[1] = 23

console.log(copiaArreglo);