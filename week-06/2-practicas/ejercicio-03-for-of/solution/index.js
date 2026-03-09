// ============================================
// EJERCICIO 03: for...of — SOLUCIÓN
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: for...of sobre un array
// ============================================
console.log("--- Paso 1: for...of básico ---");

const cities = ["Madrid", "Barcelona", "Sevilla", "Valencia"];

for (const city of cities) {
  console.log(`Ciudad: ${city}`);
}

console.log("");

// ============================================
// PASO 2: for...of con condicional
// ============================================
console.log("--- Paso 2: for...of con condicional ---");

const temperatures = [28, 35, 19, 31, 22, 38, 15];

for (const temp of temperatures) {
  if (temp >= 30) {
    console.log(`🌡 Caluroso: ${temp}°C`);
  } else {
    console.log(`   Normal:   ${temp}°C`);
  }
}

console.log("");

// ============================================
// PASO 3: for...of sobre un string
// ============================================
console.log("--- Paso 3: for...of sobre string ---");

const code = "JS2023";

// Cada iteración da un carácter individual del string
for (const char of code) {
  console.log(char);
}

console.log("");

// ============================================
// PASO 4: for...of con .entries() — índice + valor
// ============================================
console.log("--- Paso 4: for...of con entries() ---");

const podium = ["Oro", "Plata", "Bronce"];

// .entries() convierte el array en pares [índice, valor]
// El patrón [position, medal] extrae ambos valores (destructuring)
for (const [position, medal] of podium.entries()) {
  console.log(`Puesto ${position + 1}: ${medal}`);
}
