// ============================================
// EJERCICIO 03: Métodos de Búsqueda — SOLUCIÓN
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: includes() e indexOf()
// ============================================
console.log("--- Sección 1: includes() e indexOf() ---");

const ingredients = ["harina", "azúcar", "huevos", "mantequilla", "sal"];

console.log(ingredients.includes("huevos"));    // true
console.log(ingredients.includes("levadura"));  // false

console.log(ingredients.indexOf("azúcar"));     // 1
console.log(ingredients.indexOf("pimienta"));   // -1

const requiredIngredient = "mantequilla";
if (ingredients.includes(requiredIngredient)) {
  console.log(`✅ Tenemos ${requiredIngredient}`);
} else {
  console.log(`❌ Falta ${requiredIngredient}`);
}

console.log("");

// ============================================
// SECCIÓN 2: slice()
// ============================================
console.log("--- Sección 2: slice() ---");

const letters = ["a", "b", "c", "d", "e", "f"];

console.log("slice(1, 4):", letters.slice(1, 4));   // ["b","c","d"]
console.log("slice(3)   :", letters.slice(3));       // ["d","e","f"]
console.log("slice(-2)  :", letters.slice(-2));      // ["e","f"]
console.log("slice()    :", letters.slice());        // copia completa

console.log("Original   :", letters);

console.log("");

// ============================================
// SECCIÓN 3: find()
// ============================================
console.log("--- Sección 3: find() ---");

const scores = [45, 82, 60, 91, 38, 75];

const firstPassing = scores.find((score) => score >= 60);
console.log("Primer aprobatorio:", firstPassing);  // 82

const firstHigh = scores.find((score) => score >= 90);
console.log("Primer puntaje alto:", firstHigh);    // 91

const notFound = scores.find((score) => score >= 100);
console.log("Sin coincidencia:", notFound);        // undefined

console.log("");

// ============================================
// SECCIÓN 4: findIndex()
// ============================================
console.log("--- Sección 4: findIndex() ---");

const names = ["Ana", "Beatriz", "Carlos", "Diana"];

const longNameIndex = names.findIndex((name) => name.length > 6);
console.log("Índice nombre largo:", longNameIndex);       // 1
console.log("Nombre encontrado :", names[longNameIndex]);  // "Beatriz"

const notFoundIndex = names.findIndex((name) => name === "Luis");
console.log("Índice no encontrado:", notFoundIndex);     // -1

const targetIndex = names.findIndex((name) => name === "Carlos");
if (targetIndex !== -1) {
  names[targetIndex] = "CARLOS";
  console.log("Array actualizado:", names);
}

console.log("");
