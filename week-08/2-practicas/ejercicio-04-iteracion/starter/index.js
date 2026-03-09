// ============================================
// EJERCICIO 04: Iteración y Transformación
// Métodos: forEach, map, filter
// ============================================

// ============================================
// SECCIÓN 1: forEach — Recorrer y Mostrar
// ============================================
console.log("=== Sección 1: forEach ===");

// Lista de productos en inventario
// forEach recorre cada elemento ejecutando una acción
// No devuelve nada (retorna undefined)

// Descomenta las siguientes líneas:
// const products = ["Laptop", "Mouse", "Monitor", "Teclado", "Webcam"];
//
// console.log("Inventario de productos:");
// products.forEach((product, index) => {
//   console.log(`  ${index + 1}. ${product}`);
// });
//
// // forEach también puede acceder a todo el array (tercer parámetro)
// products.forEach((product, index, arr) => {
//   if (index === arr.length - 1) {
//     console.log(`Total de productos: ${arr.length}`);
//   }
// });

console.log("");

// ============================================
// SECCIÓN 2: map — Transformar Cada Elemento
// ============================================
console.log("=== Sección 2: map ===");

// map crea un NUEVO array con cada elemento transformado
// El callback SIEMPRE debe retornar el nuevo valor

// Descomenta las siguientes líneas:
// const prices = [100, 250, 80, 320, 45];
//
// // Calcular precio con 19% de IVA
// const pricesWithTax = prices.map((price) => +(price * 1.19).toFixed(2));
//
// console.log("Precios originales:", prices);
// console.log("Precios con IVA:", pricesWithTax);
//
// // Transformar strings
// const names = ["ana", "carlos", "beatriz", "diego"];
// const capitalizedNames = names.map(
//   (name) => name.charAt(0).toUpperCase() + name.slice(1)
// );
// console.log("Nombres capitalizados:", capitalizedNames);

console.log("");

// ============================================
// SECCIÓN 3: filter — Seleccionar Elementos
// ============================================
console.log("=== Sección 3: filter ===");

// filter crea un NUEVO array solo con elementos que pasan la condición
// El callback retorna true (incluir) o false (excluir)

// Descomenta las siguientes líneas:
// const scores = [45, 82, 60, 91, 38, 75, 55, 88];
//
// const passing = scores.filter((score) => score >= 60);
// const failing = scores.filter((score) => score < 60);
//
// console.log("Puntajes originales:", scores);
// console.log("Aprobados (≥60):", passing);
// console.log("Reprobados (<60):", failing);
//
// // filter con objetos
// const inventory = [
//   { name: "Laptop", stock: 5, active: true },
//   { name: "Cable USB", stock: 0, active: false },
//   { name: "Monitor", stock: 3, active: true },
//   { name: "Impresora", stock: 0, active: false },
//   { name: "Webcam", stock: 8, active: true },
// ];
//
// const available = inventory.filter((item) => item.active && item.stock > 0);
// console.log(
//   "Productos disponibles:",
//   available.map((item) => item.name)
// );

console.log("");

// ============================================
// SECCIÓN 4: Combinar filter + map
// ============================================
console.log("=== Sección 4: Combinación filter + map ===");

// Se pueden encadenar porque ambos devuelven nuevos arrays

// Descomenta las siguientes líneas:
// const items = ["Laptop", "Mouse", "Monitor", "Teclado", "Webcam"];
//
// // Filtrar los que tienen más de 5 letras y convertir a mayúsculas
// const result = items
//   .filter((item) => item.length > 5)
//   .map((item) => item.toUpperCase());
//
// console.log("Items originales:", items);
// console.log('Items con >5 letras en mayúsculas:', result);
//
// // Ejemplo con números: obtener cuadrados de pares
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenSquares = numbers
//   .filter((n) => n % 2 === 0)
//   .map((n) => n ** 2);
//
// console.log("Cuadrados de pares:", evenSquares);
