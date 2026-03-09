// ============================================
// EJERCICIO 03: for...of
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: for...of sobre un array
// ============================================
console.log("--- Paso 1: for...of básico ---");

// Itera cada elemento directamente (sin índice)
// Usa const — el valor no se reasigna en el cuerpo
// Descomenta las siguientes líneas:
// const cities = ["Madrid", "Barcelona", "Sevilla", "Valencia"];
//
// for (const city of cities) {
//   console.log(`Ciudad: ${city}`);
// }

console.log("");

// ============================================
// PASO 2: for...of con condicional
// ============================================
console.log("--- Paso 2: for...of con condicional ---");

// Combina for...of con if/else para filtrar lógicamente
// Descomenta las siguientes líneas:
// const temperatures = [28, 35, 19, 31, 22, 38, 15];
//
// for (const temp of temperatures) {
//   if (temp >= 30) {
//     console.log(`🌡 Caluroso: ${temp}°C`);
//   } else {
//     console.log(`   Normal:   ${temp}°C`);
//   }
// }

console.log("");

// ============================================
// PASO 3: for...of sobre un string
// ============================================
console.log("--- Paso 3: for...of sobre string ---");

// Los strings son iterables — cada vuelta da un carácter
// Descomenta las siguientes líneas:
// const code = "JS2023";
//
// for (const char of code) {
//   console.log(char);
// }

console.log("");

// ============================================
// PASO 4: for...of con .entries() — índice + valor
// ============================================
console.log("--- Paso 4: for...of con entries() ---");

// .entries() devuelve pares [índice, valor]
// Se usa cuando necesitas tanto posición como valor
// Descomenta las siguientes líneas:
// const podium = ["Oro", "Plata", "Bronce"];
//
// for (const [position, medal] of podium.entries()) {
//   console.log(`Puesto ${position + 1}: ${medal}`);
// }
