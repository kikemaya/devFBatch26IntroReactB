
// const esDiaLaborable = true

// // EN BASE A "esDiaLaborable", definir si "Nos sabemos la de chambear" | "Trabajar" ò "Descansar"
// const actividad = (esDiaLaborable === true) ? "Nos sabemos la de chambear" : "Descansar"
// console.log(actividad);


const esDiaLaborable = "Sabado"
const actividad = ((esDiaLaborable === "Sabado") || (esDiaLaborable === "Domingo")) ? "Descansar" : "Chambear"

console.log(actividad)