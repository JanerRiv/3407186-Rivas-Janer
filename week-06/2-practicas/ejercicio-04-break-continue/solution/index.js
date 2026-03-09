// ============================================
// EJERCICIO 04: break y continue — SOLUCIÓN
// Semana 06 — Prácticas
// ============================================

// ============================================
// PASO 1: break — salir al encontrar null
// ============================================
console.log("--- Paso 1: break ---");

const inventory = ["silla", "mesa", null, "lámpara", "sofá"];

for (const item of inventory) {
  if (item === null) {
    console.log("Registro vacío encontrado, deteniendo búsqueda.");
    break; // sale del bucle: "lámpara" y "sofá" no se procesan
  }
  console.log(`Elemento: ${item}`);
}

console.log("");

// ============================================
// PASO 2: continue — saltar registros inválidos
// ============================================
console.log("--- Paso 2: continue ---");

const readings = [42, null, 35, null, 28, 51, null];

for (const reading of readings) {
  if (reading === null) {
    continue; // salta al siguiente, no imprime nada para null
  }
  console.log(`Lectura válida: ${reading}`);
}

console.log("");

// ============================================
// PASO 3: break en for clásico con índice
// ============================================
console.log("--- Paso 3: break con índice ---");

const codes = [101, 204, 308, 415, 502];
const targetCode = 308;
let foundAt = -1; // -1 significa "no encontrado"

for (let i = 0; i < codes.length; i++) {
  if (codes[i] === targetCode) {
    foundAt = i;
    break; // ya encontramos, no necesitamos seguir
  }
}

console.log(foundAt !== -1
  ? `Código ${targetCode} en posición ${foundAt}`
  : `Código ${targetCode} no encontrado`
);

console.log("");

// ============================================
// PASO 4: continue con condición de rango
// ============================================
console.log("--- Paso 4: continue con rango ---");

const scores = [45, 88, 72, 30, 95, 60, 15, 83];

console.log("Calificaciones entre 60 y 90:");
for (const score of scores) {
  // Si el score está fuera del rango, lo saltamos
  if (score < 60 || score > 90) {
    continue;
  }
  console.log(`  ${score}`);
}
