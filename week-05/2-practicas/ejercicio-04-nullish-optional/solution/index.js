// ============================================
// EJERCICIO 04: Nullish Coalescing ?? y Optional Chaining ?. — SOLUCIÓN
// Semana 05 — Condicionales
// ============================================

// ============================================
// PASO 1: ?? para valor por defecto
// ============================================
console.log("--- Paso 1: nullish coalescing ?? ---");

const savedTimeout = null;
const timeout = savedTimeout ?? 3000;
console.log(`Timeout guardado: ${savedTimeout}`);
console.log(`Timeout a usar: ${timeout}`);

console.log("");

// ============================================
// PASO 2: ?? vs || — diferencia clave
// ============================================
console.log("--- Paso 2: ?? vs || ---");

const count = 0;
console.log(`Conteo: ${count}`);
console.log(`Con ||: ${count || 10}`);
console.log(`Con ??: ${count ?? 10}`);

console.log("");

// ============================================
// PASO 3: ?. para acceder a propiedades opcionales
// ============================================
console.log("--- Paso 3: optional chaining ?. ---");

const exhibit = {
  name: "Luna",
  location: { wing: "B" },
};
console.log(`Ala: ${exhibit?.location?.wing}`);
console.log(`Apertura: ${exhibit?.schedule?.opening}`);

console.log("");

// ============================================
// PASO 4: Combinación ?. con ??
// ============================================
console.log("--- Paso 4: combinación ?. con ?? ---");

const item = { name: "Saturno" };
const rating = item?.rating ?? "Sin calificación";
const wing = item?.location?.wing ?? "Sin asignar";
console.log(`Nombre: ${item.name}`);
console.log(`Calificación: ${rating}`);
console.log(`Ala: ${wing}`);

console.log("");
