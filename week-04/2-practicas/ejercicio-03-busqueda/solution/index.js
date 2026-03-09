// ============================================
// EJERCICIO 03: Métodos de Búsqueda — SOLUTION
// ============================================

// ============================================
// PASO 1: includes
// ============================================
console.log("--- Paso 1: includes ---");

const description = 'Exhibición interactiva de astronomía';
console.log("¿Contiene 'astronomía'?", description.includes('astronomía'));
console.log("¿Contiene 'biología'?",   description.includes('biología'));

console.log("");

// ============================================
// PASO 2: startsWith y endsWith
// ============================================
console.log("--- Paso 2: startsWith / endsWith ---");

const filename = 'informe-2026.pdf';
console.log("¿Empieza con 'informe'?", filename.startsWith('informe'));
console.log("¿Termina con '.pdf'?",    filename.endsWith('.pdf'));
console.log("¿Empieza con 'reporte'?", filename.startsWith('reporte'));

console.log("");

// ============================================
// PASO 3: indexOf
// ============================================
console.log("--- Paso 3: indexOf ---");

const text = 'La Luna orbita la Tierra';
console.log("Posición de 'Luna':",  text.indexOf('Luna'));
console.log("Posición de 'Marte':", text.indexOf('Marte'));
console.log("(−1 significa: no encontrado)");

console.log("");

// ============================================
// PASO 4: Combinando búsquedas
// ============================================
console.log("--- Paso 4: Combinando búsquedas ---");

const email = 'usuario@ejemplo.com';
const isEmail = email.includes('@') && email.endsWith('.com');
console.log("Email:", email);
console.log("¿Es email válido?", isEmail);

console.log("");
