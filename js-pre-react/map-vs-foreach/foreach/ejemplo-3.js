// 3. Calcular la suma de "n" elementos en un arreglo
const valores = [10, 20, 30, 40, 50]
let suma = 0

// valores.forEach(valor => { suma += valor })
valores.forEach(function (valor) {
  suma += valor
})

console.log(suma);
