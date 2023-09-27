// EN BASE UN OPERADOR TERNARIO, HACER QUE LA FUNCION RETORNE "Es par" ò "Es impar"
function esPar(numero) {
  return (numero % 2 === 0) ? "Es par" : "Es impar"
}

let tres = 3

console.log(esPar(1));
// EXPECTED OUTPUT: "Es par"

console.log((tres % 2 === 0) ? "Es par" : "Es impar");