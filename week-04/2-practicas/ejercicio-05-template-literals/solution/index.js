// ============================================
// EJERCICIO 05: Template Literals — SOLUTION
// ============================================

// ============================================
// PASO 1: Interpolación básica
// ============================================
console.log("--- Paso 1: Interpolación básica ---");

const name = 'Ana';
const role = 'guía del planetario';
console.log(`Hola, soy ${name} — ${role}.`);

console.log("");

// ============================================
// PASO 2: Expresiones aritméticas en ${}
// ============================================
console.log("--- Paso 2: Expresiones en template ---");

const ticketPrice = 12_000;
const visitors = 3;
console.log(`Precio por entrada: $${ticketPrice}`);
console.log(`Total ${visitors} entradas: $${ticketPrice * visitors}`);

console.log("");

// ============================================
// PASO 3: Métodos de string en ${}
// ============================================
console.log("--- Paso 3: Métodos dentro de template ---");

const rawTitle = '  sistema solar  ';
console.log(`Título limpio: ${rawTitle.trim().toUpperCase()}`);
console.log(`Primeras 7 letras: ${rawTitle.trim().slice(0, 7)}`);

console.log("");

// ============================================
// PASO 4: String multilínea
// ============================================
console.log("--- Paso 4: Multilínea ---");

const exhibitionName = 'Sistema Solar en 3D';
const capacity = 45;
const duration = 50;
const card = `
=============================
  EXHIBICIÓN: ${exhibitionName}
=============================
Capacidad: ${capacity} personas
Duración:  ${duration} minutos
=============================
`;
console.log(card);

// ============================================
// PASO 5: Ternario dentro del template
// ============================================
console.log("--- Paso 5: Ternario en template ---");

const isOpen = true;
const seatsLeft = 0;
console.log(`Estado: ${isOpen ? 'Abierto' : 'Cerrado'}`);
console.log(`Entradas: ${seatsLeft > 0 ? seatsLeft + ' disponibles' : 'Sin disponibilidad'}`);

console.log("");
