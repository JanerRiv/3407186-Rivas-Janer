// ============================================
// EJERCICIO 05: Valores y Expresiones — SOLUCIÓN
// ============================================

// ============================================
// PASO 1: Valores literales
// ============================================
console.log('--- Paso 1: Valores literales ---');

console.log('JavaScript');   // JavaScript
console.log(2026);           // 2026
console.log(true);           // true

console.log('');

// ============================================
// PASO 2: Expresiones aritméticas
// ============================================
console.log('--- Paso 2: Expresiones aritméticas ---');

console.log(10 + 5);   // 15
console.log(10 - 5);   // 5
console.log(10 * 5);   // 50
console.log(10 / 5);   // 2
console.log(10 % 3);   // 1 — resto de dividir 10 entre 3

console.log('');

// ============================================
// PASO 3: Expresiones con strings
// ============================================
console.log('--- Paso 3: Expresiones con strings ---');

// + entre strings → concatena (une los textos)
console.log('Hola' + ' ' + 'mundo');   // "Hola mundo"
console.log('Java' + 'Script');         // "JavaScript"
console.log('Tengo ' + 25 + ' años');  // "Tengo 25 años"

console.log('');

// ============================================
// PASO 4: La trampa del + mixto
// ============================================
console.log('--- Paso 4: La trampa + mixto ---');

console.log(10 + 5);      // 15     — suma normal entre dos numbers
console.log('10' + 5);    // "105"  — concatenación (string + number)
console.log(10 + '5');    // "105"  — concatenación (number + string)
console.log('10' + '5');  // "105"  — concatenación (string + string)

console.log('');

// ============================================
// PASO 5: console.log evalúa cualquier expresión
// ============================================
console.log('--- Paso 5: Expresiones variadas ---');

console.log(2 ** 10);            // 1024
console.log(typeof 'hola');      // "string"
console.log(typeof 42);          // "number"
console.log(100 > 50);           // true
console.log(100 < 50);           // false
