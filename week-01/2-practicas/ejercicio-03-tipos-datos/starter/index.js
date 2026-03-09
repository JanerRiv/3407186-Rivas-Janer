// ============================================
// EJERCICIO 03: Tipos de Datos
// ============================================
// Descomenta cada sección siguiendo el README
// Ejecuta con: node starter/index.js
// ============================================

// ============================================
// PASO 1: typeof string
// ============================================
console.log('--- Paso 1: typeof string ---');

// typeof devuelve el tipo del valor como string
// Descomenta las siguientes líneas:
// console.log(typeof 'Hola');
// console.log(typeof 'JavaScript');
// console.log(typeof '42');         // ← ojo: número entre comillas

console.log('');

// ============================================
// PASO 2: typeof number
// ============================================
console.log('--- Paso 2: typeof number ---');

// Los números no llevan comillas
// Descomenta las siguientes líneas:
// console.log(typeof 42);
// console.log(typeof 3.14);
// console.log(typeof -100);

console.log('');

// ============================================
// PASO 3: typeof boolean
// ============================================
console.log('--- Paso 3: typeof boolean ---');

// Solo dos valores: true y false — sin comillas
// Descomenta las siguientes líneas:
// console.log(typeof true);
// console.log(typeof false);

console.log('');

// ============================================
// PASO 4: La trampa — número vs string numérico
// ============================================
console.log('--- Paso 4: Número vs string numérico ---');

// ¡Atención! El mismo "42" puede ser number o string según cómo lo escribas
// Descomenta las siguientes líneas y observa la diferencia:
// console.log(42);           // número
// console.log(typeof 42);    // "number"
// console.log('');
// console.log('42');         // texto
// console.log(typeof '42');  // "string"

console.log('');

// ============================================
// PASO 5: typeof null — el quirk histórico
// ============================================
console.log('--- Paso 5: typeof null ---');

// null es la ausencia intencional de valor
// Su typeof devuelve "object" — es un error antiguo de JavaScript que no se pudo corregir
// Descomenta las siguientes líneas:
// console.log(null);
// console.log(typeof null);   // ← te sorprenderá el resultado

// También puedes verificar undefined:
// let sinValor;
// console.log(typeof sinValor);  // "undefined"
