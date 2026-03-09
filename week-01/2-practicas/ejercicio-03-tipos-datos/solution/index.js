// ============================================
// EJERCICIO 03: Tipos de Datos — SOLUCIÓN
// ============================================

// ============================================
// PASO 1: typeof string
// ============================================
console.log('--- Paso 1: typeof string ---');

console.log(typeof 'Hola');
console.log(typeof 'JavaScript');
console.log(typeof '42');         // "string" — aunque parece número, las comillas lo hacen string

console.log('');

// ============================================
// PASO 2: typeof number
// ============================================
console.log('--- Paso 2: typeof number ---');

console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof -100);

console.log('');

// ============================================
// PASO 3: typeof boolean
// ============================================
console.log('--- Paso 3: typeof boolean ---');

console.log(typeof true);
console.log(typeof false);

console.log('');

// ============================================
// PASO 4: La trampa — número vs string numérico
// ============================================
console.log('--- Paso 4: Número vs string numérico ---');

console.log(42);            // 42
console.log(typeof 42);     // "number"
console.log('');
console.log('42');          // "42" (con comillas en la salida)
console.log(typeof '42');   // "string"

console.log('');

// ============================================
// PASO 5: typeof null — el quirk histórico
// ============================================
console.log('--- Paso 5: typeof null ---');

// null es la ausencia intencional de valor
// Su typeof devuelve "object" por un error histórico de JS que no se pudo corregir
console.log(null);
console.log(typeof null);   // "object" (no "null")

// undefined — variable declarada pero sin valor
let sinValor;
console.log(typeof sinValor);   // "undefined"
