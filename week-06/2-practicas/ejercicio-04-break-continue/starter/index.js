// ============================================
// EJERCICIO 04: break y continue
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: break — salir al encontrar null
// ============================================
console.log("--- Paso 1: break ---");

// break termina el bucle COMPLETAMENTE al ejecutarse
// Descomenta las siguientes líneas:
// const inventory = ["silla", "mesa", null, "lámpara", "sofá"];
//
// for (const item of inventory) {
//   if (item === null) {
//     console.log("Registro vacío encontrado, deteniendo búsqueda.");
//     break;
//   }
//   console.log(`Elemento: ${item}`);
// }

console.log("");

// ============================================
// PASO 2: continue — saltar registros inválidos
// ============================================
console.log("--- Paso 2: continue ---");

// continue salta al SIGUIENTE ciclo (el bucle sigue)
// Descomenta las siguientes líneas:
// const readings = [42, null, 35, null, 28, 51, null];
//
// for (const reading of readings) {
//   if (reading === null) {
//     continue; // ignorar lecturas vacías
//   }
//   console.log(`Lectura válida: ${reading}`);
// }

console.log("");

// ============================================
// PASO 3: break en for clásico con índice
// ============================================
console.log("--- Paso 3: break con índice ---");

// Buscar la posición de un código específico
// Descomenta las siguientes líneas:
// const codes = [101, 204, 308, 415, 502];
// const targetCode = 308;
// let foundAt = -1;
//
// for (let i = 0; i < codes.length; i++) {
//   if (codes[i] === targetCode) {
//     foundAt = i;
//     break; // ya encontramos lo que buscábamos
//   }
// }
//
// console.log(foundAt !== -1
//   ? `Código ${targetCode} en posición ${foundAt}`
//   : `Código ${targetCode} no encontrado`
// );

console.log("");

// ============================================
// PASO 4: continue con condición de rango
// ============================================
console.log("--- Paso 4: continue con rango ---");

// Filtrar: procesar solo valores dentro de un rango
// Descomenta las siguientes líneas:
// const scores = [45, 88, 72, 30, 95, 60, 15, 83];
//
// console.log("Calificaciones entre 60 y 90:");
// for (const score of scores) {
//   if (score < 60 || score > 90) {
//     continue; // saltar los que están fuera del rango
//   }
//   console.log(`  ${score}`);
// }
