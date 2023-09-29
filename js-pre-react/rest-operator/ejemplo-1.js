// EL OPERADOR REST ..., SE UTILIZA PARA PODER RECODE "n" cantidad de argumentos. A estos argumentos, se les 
// conoce como "argumentos rest"
function sumaNumeros(...numeros) {
  let suma = 0;

  for (const numero of numeros) {
    // suma = suma + numero
    suma += numero
  }

  return suma
}

console.log(sumaNumeros(1, 2, 3));
