// ============================================
// EJERCICIO 02: Operador Ternario — SOLUCIÓN
// Semana 05 — Condicionales
// ============================================

// ============================================
// PASO 1: Asignación básica con ternario
// ============================================
console.log("--- Paso 1: asignación básica ---");

const stock = 5;
const availability = stock > 0 ? "Disponible" : "Sin stock";
console.log(`Stock: ${stock}`);
console.log(availability);

console.log("");

// ============================================
// PASO 2: Ternario dentro de template literals
// ============================================
console.log("--- Paso 2: ternario en template literal ---");

const isOpen = true;
console.log(`Estado: ${isOpen ? "Abierto" : "Cerrado"}`);

console.log("");

// ============================================
// PASO 3: Ternario con cálculo numérico
// ============================================
console.log("--- Paso 3: ternario con cálculo ---");

const visitors = 120;
const total = visitors > 100 ? visitors * 0.9 : visitors;
console.log(`Visitantes: ${visitors}`);
console.log(`Total con descuento: ${total}`);

console.log("");

// ============================================
// PASO 4: Cuándo NO usar el ternario
// ============================================
console.log("--- Paso 4: cuándo no usar ternario ---");

const examScore = 82;
let category;
if (examScore >= 90) {
  category = "A";
} else if (examScore >= 70) {
  category = "B";
} else {
  category = "C";
}
console.log(`Puntaje: ${examScore}`);
console.log(`Categoría if/else: ${category}`);

console.log("");
