// ============================================
// EJERCICIO 03: switch Statement
// Semana 05 — Condicionales
// ============================================

// ============================================
// PASO 1: switch básico con strings
// ============================================
console.log("--- Paso 1: switch básico ---");

// switch evalúa la expresión y la compara con cada case (===)
// Descomenta las siguientes líneas:
// const day = "miércoles";
// console.log(`Día: ${day}`);
// switch (day) {
//   case "lunes":
//     console.log("Inicio de semana");
//     break;
//   case "miércoles":
//     console.log("Mitad de semana");
//     break;
//   case "viernes":
//     console.log("¡Casi es fin de semana!");
//     break;
//   default:
//     console.log("Otro día de la semana");
// }

console.log("");

// ============================================
// PASO 2: Fall-through sin break (demostrativo)
// ============================================
console.log("--- Paso 2: fall-through sin break ---");

// Sin break, la ejecución continúa en el siguiente case
// Descomenta las siguientes líneas:
// const level = 2;
// console.log(`Nivel: ${level}`);
// switch (level) {
//   case 1:
//     console.log("Básico");
//   case 2:
//     console.log("Intermedio");
//   case 3:
//     console.log("Avanzado");
// }

console.log("");

// ============================================
// PASO 3: default — caso por defecto
// ============================================
console.log("--- Paso 3: default ---");

// default se ejecuta cuando ningún case coincide
// Descomenta las siguientes líneas:
// const statusCode = "pending";
// console.log(`Estado: ${statusCode}`);
// switch (statusCode) {
//   case "open":
//     console.log("Abierto");
//     break;
//   case "closed":
//     console.log("Cerrado");
//     break;
//   default:
//     console.log("Estado desconocido");
// }

console.log("");

// ============================================
// PASO 4: Fall-through intencional — agrupar casos
// ============================================
console.log("--- Paso 4: fall-through intencional ---");

// Varios case comparten el mismo bloque de código
// Descomenta las siguientes líneas:
// const month = "enero";
// let season;
// console.log(`Mes: ${month}`);
// switch (month) {
//   case "diciembre":
//   case "enero":
//   case "febrero":
//     season = "Invierno";
//     break;
//   case "marzo":
//   case "abril":
//   case "mayo":
//     season = "Primavera";
//     break;
//   default:
//     season = "Otra temporada";
// }
// console.log(`Temporada: ${season}`);

console.log("");
