// ============================================
// EJERCICIO 01: Bucle for clásico — SOLUCIÓN
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: for básico — contar del 1 al 5
// ============================================
console.log("--- Paso 1: for básico ---");

for (let i = 1; i <= 5; i++) {
  console.log(`Iteración ${i}`);
}

console.log("");

// ============================================
// PASO 2: for con array — acceso por índice
// ============================================
console.log("--- Paso 2: for con array ---");

const stations = ["Norte", "Centro", "Sur", "Este", "Oeste"];

for (let i = 0; i < stations.length; i++) {
  // i + 1 porque los usuarios esperan numeración desde 1
  // stations[i] porque los arrays empiezan en índice 0
  console.log(`Estación ${i + 1}: ${stations[i]}`);
}

console.log("");

// ============================================
// PASO 3: for hacia atrás — cuenta regresiva
// ============================================
console.log("--- Paso 3: cuenta regresiva ---");

for (let i = 5; i >= 1; i--) {
  console.log(`${i}...`);
}
console.log("¡Fin!");

console.log("");

// ============================================
// PASO 4: for con paso distinto — de 2 en 2
// ============================================
console.log("--- Paso 4: saltar de 2 en 2 ---");

const evenNumbers = [];
for (let i = 0; i <= 10; i += 2) {
  evenNumbers.push(i);
}
console.log("Pares:", evenNumbers);
