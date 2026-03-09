// ============================================
// EJERCICIO 02: Tipos Primitivos Completos
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: string y number
// ============================================
console.log("--- Paso 1: string y number ---");

// string: texto entre comillas simples, dobles o backticks
// number: enteros y decimales son el mismo tipo
// Descomenta las siguientes líneas:
// const city = "Bogotá";
// const population = 8_000_000;
// const temperature = 19.5;
// console.log("Ciudad:", city, "| tipo:", typeof city);
// console.log("Población:", population, "| tipo:", typeof population);
// console.log("Temperatura:", temperature, "| tipo:", typeof temperature);

console.log("");

// ============================================
// PASO 2: boolean
// ============================================
console.log("--- Paso 2: boolean ---");

// boolean: solo puede ser true o false
// Descomenta las siguientes líneas:
// const isOpen = true;
// const hasPaid = false;
// console.log("¿Está abierto?", isOpen, "| tipo:", typeof isOpen);
// console.log("¿Ha pagado?", hasPaid, "| tipo:", typeof hasPaid);

console.log("");

// ============================================
// PASO 3: undefined
// ============================================
console.log("--- Paso 3: undefined ---");

// undefined: declarada pero sin valor asignado
// JavaScript asigna undefined automáticamente
// Descomenta las siguientes líneas:
// let notAssigned;
// console.log("Sin asignar:", notAssigned);
// console.log("Tipo:", typeof notAssigned);

console.log("");

// ============================================
// PASO 4: null
// ============================================
console.log("--- Paso 4: null ---");

// null: ausencia INTENCIONAL de valor, lo asignamos nosotros
// ATENCIÓN: typeof null === "object" es un bug histórico de JS
// Para detectar null usa === null
// Descomenta las siguientes líneas:
// const selectedUser = null;
// console.log("Usuario seleccionado:", selectedUser);
// console.log("typeof null:", typeof selectedUser); // "object" ← bug histórico
// console.log("¿Es null?", selectedUser === null);  // true ← así se detecta

console.log("");

// ============================================
// PASO 5: typeof para todos los tipos
// ============================================
console.log("--- Paso 5: typeof para todo ---");

// typeof devuelve el tipo como string
// Descomenta las siguientes líneas:
// console.log(typeof "hola");         // "string"
// console.log(typeof 42);             // "number"
// console.log(typeof 3.14);           // "number"
// console.log(typeof true);           // "boolean"
// console.log(typeof undefined);      // "undefined"
// console.log(typeof null);           // "object" ← bug histórico
// console.log(typeof {});             // "object"
// console.log(typeof []);             // "object"
// console.log(typeof function() {}); // "function"

console.log("");
