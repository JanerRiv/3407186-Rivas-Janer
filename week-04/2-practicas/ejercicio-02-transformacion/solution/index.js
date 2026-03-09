// ============================================
// EJERCICIO 02: Métodos de Transformación — SOLUTION
// ============================================

// ============================================
// PASO 1: toUpperCase y toLowerCase
// ============================================
console.log("--- Paso 1: toUpperCase / toLowerCase ---");

const title = 'JavaScript ES2023';
console.log("Mayúsculas:", title.toUpperCase());
console.log("Minúsculas:", title.toLowerCase());
console.log("Original (sin cambios):", title);

console.log("");

// ============================================
// PASO 2: trim, trimStart, trimEnd
// ============================================
console.log("--- Paso 2: trim ---");

const raw = '   hola mundo   ';
console.log("trim():     '" + raw.trim() + "'");
console.log("trimStart():", `'${raw.trimStart()}'`);
console.log("trimEnd():  ", `'${raw.trimEnd()}'`);

console.log("");

// ============================================
// PASO 3: replace vs replaceAll
// ============================================
console.log("--- Paso 3: replace / replaceAll ---");

const msg = 'el sol brilla y el sol calienta';
console.log("replace():",    msg.replace('sol', 'viento'));
console.log("replaceAll():", msg.replaceAll('sol', 'viento'));

console.log("");

// ============================================
// PASO 4: repeat
// ============================================
console.log("--- Paso 4: repeat ---");

const separator = '='.repeat(30);
console.log(separator);
console.log("★ ".repeat(5));

console.log("");

// ============================================
// PASO 5: Encadenamiento de métodos
// ============================================
console.log("--- Paso 5: Encadenamiento ---");

const userInput = '  JAVASCRIPT ES2023  ';
const cleaned = userInput.trim().toLowerCase();
console.log("Resultado:", cleaned);

console.log("");
