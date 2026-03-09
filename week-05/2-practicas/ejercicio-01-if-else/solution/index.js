// ============================================
// EJERCICIO 01: if / else if / else — SOLUCIÓN
// Semana 05 — Condicionales
// ============================================

// ============================================
// PASO 1: if simple
// ============================================
console.log("--- Paso 1: if simple ---");

const temperature = 35;
console.log(`Temperatura: ${temperature}`);
if (temperature > 30) {
  console.log("Hace calor");
}

console.log("");

// ============================================
// PASO 2: if / else
// ============================================
console.log("--- Paso 2: if / else ---");

const score = 45;
console.log(`Puntaje: ${score}`);
if (score >= 70) {
  console.log("Aprobado");
} else {
  console.log("No aprobado");
}

console.log("");

// ============================================
// PASO 3: if / else if / else
// ============================================
console.log("--- Paso 3: if / else if / else ---");

const midScore = 75;
console.log(`Puntaje: ${midScore}`);
if (midScore >= 90) {
  console.log("Excelente");
} else if (midScore >= 70) {
  console.log("Satisfactorio");
} else {
  console.log("En proceso");
}

console.log("");

// ============================================
// PASO 4: condición compuesta con &&
// ============================================
console.log("--- Paso 4: condición compuesta ---");

const age = 22;
const hasPass = true;
console.log(`Edad: ${age} | Pase: ${hasPass}`);
if (age >= 18 && hasPass) {
  console.log("Puede ingresar");
} else {
  console.log("No puede ingresar");
}

console.log("");
