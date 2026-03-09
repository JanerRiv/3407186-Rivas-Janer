// ============================================
// EJERCICIO 01: Propiedades de Strings — SOLUTION
// ============================================

// ============================================
// PASO 1: La propiedad .length
// ============================================
console.log("--- Paso 1: .length ---");

const language = 'JavaScript';
console.log("Longitud de 'JavaScript':", language.length);

const sentence = 'Hola mundo';
console.log("Longitud de 'Hola mundo':", sentence.length);

console.log("");

// ============================================
// PASO 2: Acceso por índice
// ============================================
console.log("--- Paso 2: Acceso por índice ---");

const word = 'JavaScript';
console.log("Primer carácter:", word[0]);
console.log("Último carácter:", word[word.length - 1]);
console.log("Carácter en índice 4:", word[4]);

console.log("");

// ============================================
// PASO 3: Espacios y escapes
// ============================================
console.log("--- Paso 3: Espacios y escapes ---");

const withSpace = 'Hola mundo';
console.log(`'Hola mundo' tiene ${withSpace.length} caracteres (el espacio cuenta)`);

console.log("");

// ============================================
// PASO 4: String vacío
// ============================================
console.log("--- Paso 4: String vacío ---");

const empty = '';
console.log("Longitud de '':", empty.length);

console.log("");
