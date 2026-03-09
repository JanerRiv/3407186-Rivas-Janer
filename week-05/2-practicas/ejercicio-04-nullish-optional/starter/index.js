// ============================================
// EJERCICIO 04: Nullish Coalescing ?? y Optional Chaining ?.
// Semana 05 — Condicionales
// ============================================

// ============================================
// PASO 1: ?? para valor por defecto
// ============================================
console.log("--- Paso 1: nullish coalescing ?? ---");

// ?? devuelve el lado derecho si el izquierdo es null o undefined
// Descomenta las siguientes líneas:
// const savedTimeout = null;
// const timeout = savedTimeout ?? 3000;
// console.log(`Timeout guardado: ${savedTimeout}`);
// console.log(`Timeout a usar: ${timeout}`);

console.log("");

// ============================================
// PASO 2: ?? vs || — diferencia clave
// ============================================
console.log("--- Paso 2: ?? vs || ---");

// Cuando el valor es 0 (válido), ?? es la elección correcta
// Descomenta las siguientes líneas:
// const count = 0;
// console.log(`Conteo: ${count}`);
// console.log(`Con ||: ${count || 10}`);  // 10 (incorrecto — 0 es falsy)
// console.log(`Con ??: ${count ?? 10}`);  // 0  (correcto — 0 no es null)

console.log("");

// ============================================
// PASO 3: ?. para acceder a propiedades opcionales
// ============================================
console.log("--- Paso 3: optional chaining ?. ---");

// ?. permite el acceso seguro sin lanzar TypeError
// Descomenta las siguientes líneas:
// const exhibit = {
//   name: "Luna",
//   location: { wing: "B" },
// };
// console.log(`Ala: ${exhibit?.location?.wing}`);
// console.log(`Apertura: ${exhibit?.schedule?.opening}`);

console.log("");

// ============================================
// PASO 4: Combinación ?. con ??
// ============================================
console.log("--- Paso 4: combinación ?. con ?? ---");

// Acceso seguro + valor por defecto: el patrón más común
// Descomenta las siguientes líneas:
// const item = { name: "Saturno" };
// const rating = item?.rating ?? "Sin calificación";
// const wing = item?.location?.wing ?? "Sin asignar";
// console.log(`Nombre: ${item.name}`);
// console.log(`Calificación: ${rating}`);
// console.log(`Ala: ${wing}`);

console.log("");
