// ============================================
// EJERCICIO 04: Spread con Objetos
// SOLUCIÓN COMPLETA
// ============================================

// ============================================
// SECCIÓN 1: Problema de Referencias (= no copia)
// ============================================
console.log("=== Sección 1: Problema de Referencias ===");

// ⚠️ Asignar con = solo copia la referencia, no el objeto
const person = { name: "Carlos", score: 85, level: 3 };
const samePerson = person; // ⚠️ NO es una copia

console.log("Modificando 'samePerson' con =");
samePerson.score = 100;
console.log(`person.score: ${person.score} ← ¡también cambió!`);
console.log(`samePerson.score: ${samePerson.score}`);

console.log("");

// ============================================
// SECCIÓN 2: Copia con Spread {…obj}
// ============================================
console.log("=== Sección 2: Copia con Spread ===");

const original = { name: "Ana", score: 85, level: 2 };
const spreadCopy = { ...original }; // ✅ copia real

console.log("Modificando 'spreadCopy'");
spreadCopy.score = 100;
console.log(`original.score: ${original.score} ← sin cambios ✓`);
console.log(`spreadCopy.score: ${spreadCopy.score}`);

console.log("");

// ============================================
// SECCIÓN 3: Fusionar Objetos
// ============================================
console.log("=== Sección 3: Fusionar Objetos ===");

const defaults = {
  theme: "light",
  language: "en",
  fontSize: 14,
  animations: true,
};
const userConfig = { theme: "dark", language: "es" };

const finalConfig = { ...defaults, ...userConfig };

console.log("Defaults:   ", defaults);
console.log("User config:", userConfig);
console.log("Final config:");
Object.entries(finalConfig).forEach(([key, value]) => {
  console.log(`  ${key.padEnd(12)}: ${value}`);
});

console.log("");

// ============================================
// SECCIÓN 4: Actualización Inmutable
// ============================================
console.log("=== Sección 4: Actualización Inmutable ===");

const product = { id: 1, name: "Laptop", price: 1200, available: true };

// Actualizar precio sin mutar el original
const discounted = { ...product, price: 999 };

// Agregar propiedades nuevas al vuelo
const withRating = { ...product, rating: 4.8 };

console.log("Original:", product);
console.log("Descuento:", discounted);
console.log("Con rating:", withRating);
console.log(`original.price sigue siendo: ${product.price}`);
