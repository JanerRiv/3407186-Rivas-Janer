// ============================================
// EJERCICIO 05: Contadores y Acumuladores
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: Contador — contar ocurrencias
// ============================================
console.log("--- Paso 1: contador ---");

// Patrón: let count = 0 → count++ dentro del bucle
// Descomenta las siguientes líneas:
// const results = ["pass", "fail", "pass", "pass", "fail", "pass"];
// let passCount = 0;
//
// for (const result of results) {
//   if (result === "pass") {
//     passCount++;
//   }
// }
//
// console.log(`Aprobados: ${passCount} de ${results.length}`);

console.log("");

// ============================================
// PASO 2: Acumulador — sumar valores
// ============================================
console.log("--- Paso 2: acumulador ---");

// Patrón: let total = 0 → total += valor dentro del bucle
// Descomenta las siguientes líneas:
// const prices = [15.5, 8.0, 23.0, 6.5, 12.0];
// let total = 0;
//
// for (const price of prices) {
//   total += price;
// }
//
// const average = total / prices.length;
// console.log(`Total: $${total}`);
// console.log(`Promedio: $${average.toFixed(2)}`);

console.log("");

// ============================================
// PASO 3: Máximo y mínimo
// ============================================
console.log("--- Paso 3: máximo y mínimo ---");

// Patrón: inicializar con el primer elemento, luego comparar
// Descomenta las siguientes líneas:
// const measurements = [34, 67, 21, 89, 45, 12, 78];
// let maxVal = measurements[0];  // empezamos asumiendo que el primero es el máximo
// let minVal = measurements[0];  // y también el mínimo
//
// for (const value of measurements) {
//   if (value > maxVal) maxVal = value;
//   if (value < minVal) minVal = value;
// }
//
// console.log(`Máximo: ${maxVal}`);
// console.log(`Mínimo: ${minVal}`);
// console.log(`Rango: ${maxVal - minVal}`);

console.log("");

// ============================================
// PASO 4: Combinar contador + acumulador
// ============================================
console.log("--- Paso 4: combinar patrones ---");

// Múltiples patrones en el mismo bucle (eficiente)
// Descomenta las siguientes líneas:
// const evaluations = [72, 88, 45, 91, 63, 55, 84, 77];
// let totalScore = 0;
// let passedCount = 0;
// let highestScore = evaluations[0];
//
// for (const score of evaluations) {
//   totalScore += score;
//   if (score >= 60) passedCount++;
//   if (score > highestScore) highestScore = score;
// }
//
// const avgScore = totalScore / evaluations.length;
// console.log(`Promedio:  ${avgScore.toFixed(1)}`);
// console.log(`Aprobados: ${passedCount}/${evaluations.length}`);
// console.log(`Más alto:  ${highestScore}`);

console.log("");

// ============================================
// PASO 5: Acumular en array — lista filtrada
// ============================================
console.log("--- Paso 5: acumular en array ---");

// Un array vacío también puede ser un acumulador
// .push() agrega elementos al final del array
// Descomenta las siguientes líneas:
// const allItems = ["activo", "inactivo", "activo", "pendiente", "activo", "inactivo"];
// const activeItems = [];
//
// for (const item of allItems) {
//   if (item === "activo") {
//     activeItems.push(item);
//   }
// }
//
// console.log(`Total: ${allItems.length}`);
// console.log(`Activos: ${activeItems.length}`);
