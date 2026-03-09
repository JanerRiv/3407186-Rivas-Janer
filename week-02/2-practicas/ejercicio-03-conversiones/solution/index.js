// ============================================
// EJERCICIO 03: Conversión de Tipos — SOLUCIÓN
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Number()
// ============================================
console.log("--- Paso 1: Number() ---");

console.log(Number("42"));        // 42
console.log(Number("3.14"));      // 3.14
console.log(Number(""));          // 0
console.log(Number("abc"));       // NaN
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN

console.log("");

// ============================================
// PASO 2: NaN — Not a Number
// ============================================
console.log("--- Paso 2: NaN ---");

const result = Number("hola");
console.log("Resultado:", result);           // NaN
console.log("Tipo:", typeof result);         // "number" ← NaN es de tipo number
console.log("¿Es NaN?", isNaN(result));      // true
console.log("NaN === NaN:", result === NaN); // false ← NaN nunca es igual a sí mismo

console.log("");

// ============================================
// PASO 3: String()
// ============================================
console.log("--- Paso 3: String() ---");

console.log(String(42));          // "42"
console.log(String(3.14));        // "3.14"
console.log(String(true));        // "true"
console.log(String(false));       // "false"
console.log(String(null));        // "null"
console.log(String(undefined));   // "undefined"
console.log(String(NaN));         // "NaN"

console.log("");

// ============================================
// PASO 4: Boolean()
// ============================================
console.log("--- Paso 4: Boolean() ---");

console.log("--- Valores FALSY ---");
console.log(Boolean(false));       // false
console.log(Boolean(0));           // false
console.log(Boolean(""));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false

console.log("--- Valores TRUTHY ---");
console.log(Boolean(1));           // true
console.log(Boolean(-1));          // true
console.log(Boolean("hola"));      // true
console.log(Boolean(" "));         // true ← espacio es string no vacío
console.log(Boolean([]));          // true ← array vacío es truthy
console.log(Boolean({}));          // true ← objeto vacío es truthy

console.log("");

// ============================================
// PASO 5: Coerción implícita vs explícita
// ============================================
console.log("--- Paso 5: implícita vs explícita ---");

console.log("Implícita:");
console.log("5" + 3);   // "53" ← concatena strings
console.log("5" - 3);   // 2    ← resta fuerza conversión
console.log("5" * "2"); // 10   ← multiplicación fuerza conversión

console.log("Explícita (recomendado):");
console.log(Number("5") + 3);   // 8
console.log(Number("5") * 2);   // 10

console.log("");
