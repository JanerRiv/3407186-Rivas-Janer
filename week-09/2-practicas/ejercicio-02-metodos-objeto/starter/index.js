// ============================================
// EJERCICIO 02: Métodos de Objeto y Object.*
// ============================================

// ============================================
// SECCIÓN 1: Métodos en un Objeto
// ============================================
console.log("=== Sección 1: Métodos de Objeto ===");

// Un método es una función almacenada como propiedad del objeto
// Se invoca igual que acceder a una propiedad, pero con ()

// Descomenta las siguientes líneas:
// const converter = {
//   label: "Conversor de unidades",
//   kmToMiles: (km) => km * 0.621371,
//   milesToKm: (miles) => miles * 1.60934,
//   celsiusToFahrenheit: (c) => c * (9 / 5) + 32,
//   fahrenheitToCelsius: (f) => ((f - 32) * 5) / 9,
// };
//
// console.log(converter.label);
// console.log(`100 km = ${converter.kmToMiles(100).toFixed(2)} millas`);
// console.log(`62 millas = ${converter.milesToKm(62).toFixed(2)} km`);
// console.log(`100°C = ${converter.celsiusToFahrenheit(100)}°F`);
// console.log(`212°F = ${converter.fahrenheitToCelsius(212)}°C`);

console.log("");

// ============================================
// SECCIÓN 2: Object.keys() — Claves
// ============================================
console.log("=== Sección 2: Object.keys() ===");

// Object.keys retorna un array con todas las claves del objeto

// Descomenta las siguientes líneas:
// const product = {
//   id: 1,
//   name: "Laptop",
//   price: 1200,
//   available: true,
//   category: "tech",
// };
//
// const keys = Object.keys(product);
// console.log("Claves:", keys);
// console.log(`Total de propiedades: ${keys.length}`);
//
// // Recorrer todas las propiedades
// console.log("\nPropiedades del producto:");
// Object.keys(product).forEach((key) => {
//   console.log(`  ${key}`);
// });

console.log("");

// ============================================
// SECCIÓN 3: Object.values() — Valores
// ============================================
console.log("=== Sección 3: Object.values() ===");

// Object.values retorna un array con todos los valores del objeto

// Descomenta las siguientes líneas:
// const scores = {
//   math: 85,
//   history: 72,
//   science: 91,
//   language: 78,
//   art: 88,
// };
//
// const values = Object.values(scores);
// console.log("Valores:", values);
//
// const total = values.reduce((sum, v) => sum + v, 0);
// const average = total / values.length;
// const max = Math.max(...values);
// const min = Math.min(...values);
//
// console.log(`Total: ${total}`);
// console.log(`Promedio: ${average.toFixed(1)}`);
// console.log(`Máximo: ${max}  |  Mínimo: ${min}`);

console.log("");

// ============================================
// SECCIÓN 4: Object.entries() — Formatear Reporte
// ============================================
console.log("=== Sección 4: Object.entries() ===");

// Object.entries retorna pares [clave, valor]
// Ideal para formatear e imprimir objetos de forma legible

// Descomenta las siguientes líneas:
// const config = {
//   host: "localhost",
//   port: 3000,
//   debug: false,
//   version: "2.1.0",
//   timeout: 5000,
// };
//
// console.log("Configuración actual:");
// Object.entries(config).forEach(([key, value]) => {
//   // padEnd alinea las claves para que queden en columnas
//   console.log(`  ${key.padEnd(12)}: ${value}`);
// });
//
// // map para generar array de strings formateados
// const lines = Object.entries(config).map(
//   ([key, value]) => `${key}=${value}`
// );
// console.log("\nFormato clave=valor:");
// console.log(lines.join(" | "));
