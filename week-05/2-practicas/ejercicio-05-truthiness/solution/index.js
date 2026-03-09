// ============================================
// EJERCICIO 05: Truthiness y Falsy Values — SOLUCIÓN
// Semana 05 — Condicionales
// ============================================

// ============================================
// PASO 1: Los 6 valores falsy
// ============================================
console.log("--- Paso 1: valores falsy ---");

const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach((v) => {
  if (!v) {
    console.log(`${String(v)} es falsy`);
  }
});

console.log("");

// ============================================
// PASO 2: Casos sorprendentes — son truthy
// ============================================
console.log("--- Paso 2: casos sorprendentes ---");

console.log([] ? "array vacío es truthy" : "es falsy");
console.log({} ? "objeto vacío es truthy" : "es falsy");
console.log("0" ? '"0" es truthy' : "es falsy");

console.log("");

// ============================================
// PASO 3: && como condicional compacto
// ============================================
console.log("--- Paso 3: && como condicional ---");

const userName = "Copérnico";
const emptyName = "";
userName && console.log(`Bienvenido, ${userName}`);
emptyName && console.log("Esto no se imprime");
console.log("(sin nombre: no se imprime nada)");

console.log("");

// ============================================
// PASO 4: || para valor por defecto (falsy)
// ============================================
console.log("--- Paso 4: || para valor por defecto ---");

const emptyInput = "";
const filledInput = "Galileo";
console.log(`Con input vacío: ${emptyInput || "Visitante"}`);
console.log(`Con input "Galileo": ${filledInput || "Visitante"}`);

console.log("");

// ============================================
// PASO 5: Conversión explícita con Boolean() y !!
// ============================================
console.log("--- Paso 5: Boolean() y !! ---");

console.log(`Boolean("texto"): ${Boolean("texto")}`);
console.log(`Boolean(0): ${Boolean(0)}`);
console.log(`!!"texto": ${!!"texto"}`);
console.log(`!!null: ${!!null}`);

console.log("");
