// ============================================
// EJERCICIO 04: Extracción y Manipulación — SOLUTION
// ============================================

// ============================================
// PASO 1: slice(inicio, fin)
// ============================================
console.log("--- Paso 1: slice ---");

const lang = 'JavaScript';
console.log("slice(0, 4):", lang.slice(0, 4));
console.log("slice(4):",    lang.slice(4));
console.log("slice(-6):",   lang.slice(-6));

console.log("");

// ============================================
// PASO 2: split — separador coma
// ============================================
console.log("--- Paso 2: split con coma ---");

const csv = 'título,autor,año,género';
const fields = csv.split(',');
console.log("Campos:", fields);
console.log("Total de campos:", fields.length);

console.log("");

// ============================================
// PASO 3: split — separador espacio
// ============================================
console.log("--- Paso 3: split con espacio ---");

const phrase = 'Sistema Solar en 3D';
const words = phrase.split(' ');
console.log("Palabras:", words);
console.log("Total de palabras:", words.length);

console.log("");

// ============================================
// PASO 4: Combinando slice + trim
// ============================================
console.log("--- Paso 4: slice + trim ---");

const raw = '  #Astronomía  ';
const tag = raw.trim().slice(1).toLowerCase();
console.log("Tag limpio:", tag);

console.log("");
