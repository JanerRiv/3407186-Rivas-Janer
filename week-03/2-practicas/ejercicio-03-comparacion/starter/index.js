// ============================================
// EJERCICIO 03: Operadores de Comparación
// Semana 03 — Operadores y Expresiones
// ============================================

// ============================================
// PASO 1: === y !== — Comparación estricta
// ============================================
console.log("--- Paso 1: === y !== ---");

// Descomenta las siguientes líneas:
// const a = 10;
// const b = 10;
// const c = "10";

// console.log("a === b:", a === b);   // true  — mismo valor y tipo
// console.log("a === c:", a === c);   // false — mismo valor, tipo diferente
// console.log("a !== c:", a !== c);   // true  — son distintos

console.log("");

// ============================================
// PASO 2: Por qué NO usar ==
// ============================================
console.log("--- Paso 2: el peligro de == ---");

// El operador == (débil) convierte tipos antes de comparar
// Descomenta las siguientes líneas:
// console.log("0 == false  :", 0 == false);    // true  ← ¡peligroso!
// console.log('"" == false :', "" == false);   // true  ← ¡peligroso!
// console.log("0 == ''     :", 0 == "");       // true  ← ¡peligroso!
// console.log('1 == "1"    :', 1 == "1");      // true  ← ¡peligroso!

// Con === (estricto) no hay sorpresas:
// console.log("0 === false  :", 0 === false);  // false ← correcto
// console.log('"" === false :', "" === false); // false ← correcto
// console.log('1 === "1"    :', 1 === "1");    // false ← correcto

console.log("");

// ============================================
// PASO 3: Operadores de orden
// ============================================
console.log("--- Paso 3: >, <, >=, <= ---");

// Descomenta las siguientes líneas:
// const score = 85;
// console.log("score > 90:", score > 90);   // false
// console.log("score >= 85:", score >= 85); // true  — mayor O igual
// console.log("score < 60:", score < 60);   // false
// console.log("score <= 85:", score <= 85); // true  — menor O igual

console.log("");

// ============================================
// PASO 4: Validaciones prácticas
// ============================================
console.log("--- Paso 4: validaciones prácticas ---");

// Descomenta las siguientes líneas:
// const age = 20;
// const itemPrice = 15_000;
// const budget = 20_000;

// const canVote = age >= 18;
// console.log("¿Puede votar?", canVote);           // true

// const canAfford = itemPrice <= budget;
// console.log("¿Alcanza el presupuesto?", canAfford); // true

// const isMinor = age < 18;
// console.log("¿Es menor de edad?", isMinor);      // false

console.log("");
