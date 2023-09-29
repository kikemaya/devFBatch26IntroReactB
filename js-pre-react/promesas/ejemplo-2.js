let heladeriaAbierta = false

// FORMAS DE USAR PROMESAS
// 1. CREAR LAS REGLAS DE LA PROMESA. NOS PUEDE TOCAR HACERLO O NO.
const traerHelado = new Promise((resolve, reject) => {
  // LOGICA DE LA PROMESA
  if (heladeriaAbierta) {
    resolve("Ten, te traje un helado porque estaba abierta la heladeria")
  } else {
    reject("No te traje el helado, porque no estaba abierta la heladeria")
  }
})

// 2. RECIBIR PROMESAS COMO RESPUESTA
traerHelado.then((response) => {
  console.log(response);
}).catch((error) => {
  // crear una pantalla de error
  console.error("ANTOJITOS TOÑO ERROR: " + error);
})