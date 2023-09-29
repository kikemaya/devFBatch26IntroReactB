// LA FUNCION "fetch = traer", SE UTILIZA PARA REALIZAR SOLICITUDES DE RED
// Y RECUPERAR O MODIFICAR RECURSOS ALOJADOS EN UNA URL

// NOS DEVUELVE UN OBJETO DE TIPO "Promise"

// GET = OBTENER

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("APP DE PUBLICACIONES ERROR:", error);
  })