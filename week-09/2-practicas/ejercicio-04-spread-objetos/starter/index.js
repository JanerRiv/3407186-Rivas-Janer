// ============================================
// EJERCICIO 04: Spread con Objetos
// ============================================

// ============================================
// SECCIÓN 1: Problema de Referencias (= no copia)
// ============================================
console.log("=== Sección 1: Problema de Referencias ===");

// ⚠️ Asignar con = solo copia la referencia, no el objeto
// Ambas variables apuntan al mismo espacio en memoria

// Descomenta las siguientes líneas:
// const person = { name: "Carlos", score: 85, level: 3 };
// const samePerson = person; // ⚠️ NO es una copia
//
// console.log("Modificando 'samePerson' con =");
// samePerson.score = 100;
// console.log(`person.score: ${person.score} ← ¡también cambió!`);
// console.log(`samePerson.score: ${samePerson.score}`);

console.log("");

// ============================================
// SECCIÓN 2: Copia con Spread {…obj}
// ============================================
console.log("=== Sección 2: Copia con Spread ===");

// {…obj} crea un NUEVO objeto con las mismas propiedades
// Modificar la copia no afecta el original

// Descomenta las siguientes líneas:
// const original = { name: "Ana", score: 85, level: 2 };
// const spreadCopy = { ...original }; // ✅ copia real
//
// console.log("Modificando 'spreadCopy'");
// spreadCopy.score = 100;
// console.log(`original.score: ${original.score} ← sin cambios ✓`);
// console.log(`spreadCopy.score: ${spreadCopy.score}`);

console.log("");

// ============================================
// SECCIÓN 3: Fusionar Objetos
// ============================================
console.log("=== Sección 3: Fusionar Objetos ===");

// Al fusionar, si dos objetos tienen la misma clave, el último gana

// Descomenta las siguientes líneas:
// const defaults = {
//   theme: "light",
//   language: "en",
//   fontSize: 14,
//   animations: true,
// };
// const userConfig = { theme: "dark", language: "es" };
//
// const finalConfig = { ...defaults, ...userConfig };
//
// console.log("Defaults:   ", defaults);
// console.log("User config:", userConfig);
// console.log("Final config:");
// Object.entries(finalConfig).forEach(([key, value]) => {
//   console.log(`  ${key.padEnd(12)}: ${value}`);
// });

console.log("");

// ============================================
// SECCIÓN 4: Actualización Inmutable
// ============================================
console.log("=== Sección 4: Actualización Inmutable ===");

// Patrón clave: crear un objeto nuevo con alguna propiedad cambiada
// sin modificar nunca el objeto original

// Descomenta las siguientes líneas:
// const product = { id: 1, name: "Laptop", price: 1200, available: true };
//
// // Actualizar precio sin mutar el original
// const discounted = { ...product, price: 999 };
//
// // Agregar propiedades nuevas al vuelo
// const withRating = { ...product, rating: 4.8 };
//
// console.log("Original:", product);
// console.log("Descuento:", discounted);
// console.log("Con rating:", withRating);
// console.log(`original.price sigue siendo: ${product.price}`);
