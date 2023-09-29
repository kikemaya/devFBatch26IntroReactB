// CONCATENAR ARREGLOS

// EL SPREAD OPERATOR, TAMBIEN PUEDE SERVIR PARA COMBINAR VARIOS ARREGLOS EN UNO SOLO

const arreglo1 = [1, 2, 3]
const arreglo2 = [4, 5, 6]

const arregloConcatenado = [...arreglo1, ...arreglo2]

// EXPECTED OUTPUT: [1, 2, 3, 4, 5, 6]
console.log("arreglo Concatenado", arregloConcatenado);