// 2. Modificando el arreglo original

const numeros = [1, 2, 3, 4, 5]

// cada forEach, en la funcion que pide como parametro, a su vez, esa 
// funcion pide 3 parametros: elemento, indice y arreglo completo
numeros.forEach((numero, indice, arregloCompleto) => {
  // console.log(`${indice}.- ${numero} ==== ${arregloCompleto}`);
  arregloCompleto[indice] = numero * 2;
});

console.log(numeros);