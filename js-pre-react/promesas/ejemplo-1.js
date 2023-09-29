// EN JAVASCRIPT, SON OBJETOS QUE REPRESENTAN UN VALOR QUE PUEDE ESTAR DISPONIBLE AHORA, EN
// EL FUTURO O NUNCA. SE UTILIZAN PARA MANEJAR OPERACIONES ASINCRONAS

// CREAR LA ESTRUCTURA DE LA PROMESA
const promesa = new Promise(function (resolve, reject) {
  // LAS PROMESAS CONTIENEN DOS METODOS:
  resolve()
  reject()
})


// CONOCER LA RESPUESTA DE LA PROMESA
promesa.then(function (response) {
  // codigo...
  console.log(response);
}).catch(function (error) {
  // codigo
  console.log(error);
})