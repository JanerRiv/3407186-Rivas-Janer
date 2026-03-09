// ============================================
// EJERCICIO 05: Precedencia y Coerción — SOLUCIÓN
// Semana 03 — Operadores y Expresiones
// ============================================

// ============================================
// PASO 1: Precedencia básica
// ============================================
console.log("--- Paso 1: precedencia básica ---");

// * y / se evalúan ANTES que + y -
console.log("2 + 3 * 4 =", 2 + 3 * 4);    // 14 — primero 3*4=12, luego 2+12
console.log("(2 + 3) * 4 =", (2 + 3) * 4); // 20 — paréntesis primero

console.log("10 - 4 / 2 =", 10 - 4 / 2);   // 8  — primero 4/2=2, luego 10-2
console.log("(10 - 4) / 2 =", (10 - 4) / 2); // 3 — paréntesis primero

console.log("");

// ============================================
// PASO 2: Paréntesis para claridad
// ============================================
console.log("--- Paso 2: paréntesis para claridad ---");

const basePrice = 50_000;
const taxPercent = 19;

// Sin paréntesis — resultado correcto pero intención poco clara:
const totalA = basePrice + basePrice * taxPercent / 100;
console.log("Total (sin paréntesis):", totalA);  // 59500

// Con paréntesis — intención explícita:
const totalB = basePrice + (basePrice * taxPercent) / 100;
console.log("Total (con paréntesis):", totalB);  // 59500 — misma lógica, más claro

console.log("");

// ============================================
// PASO 3: Trampas de coerción implícita
// ============================================
console.log("--- Paso 3: trampas de coerción ---");

// Cuando un operando es string, + hace concatenación
console.log('"5" + 10 =', "5" + 10);       // "510" ← ¡trampa! concatena
console.log('10 + "5" =', 10 + "5");       // "105" ← ¡trampa! concatena
console.log('1 + 2 + "3" =', 1 + 2 + "3"); // "33"  ← 1+2=3, luego 3+"3"="33"
console.log('"1" + 2 + 3 =', "1" + 2 + 3); // "123" ← "1"+2="12", luego "12"+3="123"

// Otros operadores sí convierten a número:
console.log('"5" - 2 =', "5" - 2);  // 3 — - convierte string a número
console.log('"6" * 2 =', "6" * 2);  // 12 — * convierte string a número

console.log("");

// ============================================
// PASO 4: Cómo evitar la coerción
// ============================================
console.log("--- Paso 4: evitar la coerción ---");

const inputA = "42";
const inputB = "8";

// ❌ Sin conversión — concatena strings:
const badResult = inputA + inputB;
console.log("Sin Number():", badResult);     // "428" ← incorrecto

// ✅ Con conversión explícita — suma números:
const goodResult = Number(inputA) + Number(inputB);
console.log("Con Number():", goodResult);    // 50 ← correcto

console.log("");
