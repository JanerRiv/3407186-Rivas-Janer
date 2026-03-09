// ============================================
// EJERCICIO 04: Operadores Lógicos — SOLUCIÓN
// Semana 03 — Operadores y Expresiones
// ============================================

// ============================================
// PASO 1: AND (&&)
// ============================================
console.log("--- Paso 1: AND (&&) ---");

// && → true SOLO si los dos son verdaderos
const hasTicket = true;
const hasId = true;
const hasReservation = false;

console.log("¿Ticket Y ID?", hasTicket && hasId);             // true
console.log("¿Ticket Y reserva?", hasTicket && hasReservation); // false

console.log("");

// ============================================
// PASO 2: OR (||)
// ============================================
console.log("--- Paso 2: OR (||) ---");

// || → true si AL MENOS UNO es verdadero
const hasCard = false;
const hasCash = true;
const hasVoucher = false;

console.log("¿Tarjeta O efectivo?", hasCard || hasCash);   // true
console.log("¿Tarjeta O voucher?", hasCard || hasVoucher); // false

console.log("");

// ============================================
// PASO 3: NOT (!)
// ============================================
console.log("--- Paso 3: NOT (!) ---");

// ! → invierte el booleano
const isLoggedIn = false;
const isBlocked = true;

console.log("¿No está logueado?", !isLoggedIn); // true
console.log("¿No está bloqueado?", !isBlocked); // false

console.log("");

// ============================================
// PASO 4: Condiciones compuestas
// ============================================
console.log("--- Paso 4: condiciones compuestas ---");

const age = 25;
const hasLicense = true;
const hasFines = false;

// ¿Puede conducir?: debe tener licencia Y ser mayor de 18
const canDrive = age >= 18 && hasLicense;
console.log("¿Puede conducir?", canDrive); // true

// ¿Está habilitado?: puede conducir Y no tiene multas pendientes
const isEnabled = canDrive && !hasFines;
console.log("¿Habilitado para circular?", isEnabled); // true

// ¿Necesita revisar documentos?: no tiene licencia O tiene multas
const needsReview = !hasLicense || hasFines;
console.log("¿Requiere revisión?", needsReview); // false

console.log("");
