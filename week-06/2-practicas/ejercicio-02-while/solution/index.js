// ============================================
// EJERCICIO 02: while y do...while — SOLUCIÓN
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: while básico
// ============================================
console.log("--- Paso 1: while básico ---");

let counter = 1;

while (counter <= 5) {
  console.log(`Contador: ${counter}`);
  counter++;
}

console.log("");

// ============================================
// PASO 2: while buscando un valor
// ============================================
console.log("--- Paso 2: while buscando valor ---");

const queue = [null, null, "ticket-valid", null];
let position = 0;
let result = null;

// La condición doble evita salir de los límites del array
while (position < queue.length && result === null) {
  result = queue[position];
  position++;
}

console.log(`Resultado encontrado en posición ${position - 1}: ${result}`);

console.log("");

// ============================================
// PASO 3: do...while — al menos una vez
// ============================================
console.log("--- Paso 3: do...while ---");

let attempts = 0;

do {
  attempts++;
  console.log(`Procesando intento ${attempts}...`);
} while (attempts < 3);

console.log(`Total de intentos: ${attempts}`);

console.log("");

// ============================================
// PASO 4: while vs do...while con condición falsa
// ============================================
console.log("--- Paso 4: while vs do...while ---");

let whileCount = 0;
let doWhileCount = 0;

// La condición (10 < 5) siempre es false
// while NO entra al cuerpo en ningún momento
while (10 < 5) {
  whileCount++;
}

// do...while sí ejecuta el cuerpo una vez antes de revisar
do {
  doWhileCount++;
} while (10 < 5);

console.log(`while ejecutó el cuerpo: ${whileCount} veces`);
console.log(`do...while ejecutó el cuerpo: ${doWhileCount} veces`);
