// ============================================
// EJERCICIO 02: while y do...while
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: while básico
// ============================================
console.log("--- Paso 1: while básico ---");

// while repite mientras la condición sea true
// Descomenta las siguientes líneas:
// let counter = 1;
//
// while (counter <= 5) {
//   console.log(`Contador: ${counter}`);
//   counter++;  // ← fundamental: sin esto, bucle infinito
// }

console.log("");

// ============================================
// PASO 2: while buscando un valor
// ============================================
console.log("--- Paso 2: while buscando valor ---");

// Iterar hasta encontrar el primer valor no null
// Descomenta las siguientes líneas:
// const queue = [null, null, "ticket-valid", null];
// let position = 0;
// let result = null;
//
// while (position < queue.length && result === null) {
//   result = queue[position];
//   position++;
// }
//
// console.log(`Resultado encontrado en posición ${position - 1}: ${result}`);

console.log("");

// ============================================
// PASO 3: do...while — al menos una vez
// ============================================
console.log("--- Paso 3: do...while ---");

// El cuerpo se ejecuta ANTES de revisar la condición
// Descomenta las siguientes líneas:
// let attempts = 0;
//
// do {
//   attempts++;
//   console.log(`Procesando intento ${attempts}...`);
// } while (attempts < 3);
//
// console.log(`Total de intentos: ${attempts}`);

console.log("");

// ============================================
// PASO 4: while vs do...while con condición falsa
// ============================================
console.log("--- Paso 4: while vs do...while ---");

// Observa: ¿cuántas veces ejecuta cada uno cuando la condición es false?
// Descomenta las siguientes líneas:
// let whileCount = 0;
// let doWhileCount = 0;
//
// while (10 < 5) {
//   whileCount++;
// }
//
// do {
//   doWhileCount++;
// } while (10 < 5);
//
// console.log(`while ejecutó el cuerpo: ${whileCount} veces`);
// console.log(`do...while ejecutó el cuerpo: ${doWhileCount} veces`);
