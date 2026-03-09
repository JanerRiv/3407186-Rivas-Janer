// ============================================
// EJERCICIO 01: const y let — SOLUCIÓN
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Declarar con const
// ============================================
console.log("--- Paso 1: const ---");

const productName = "Laptop";
const productPrice = 1299.99;
console.log("Producto:", productName);
console.log("Precio:", productPrice);

console.log("");

// ============================================
// PASO 2: Declarar con let
// ============================================
console.log("--- Paso 2: let ---");

let score = 0;
console.log("Puntaje inicial:", score);
score = score + 10;
console.log("Puntaje actualizado:", score);
score = score + 5;
console.log("Puntaje final:", score);

console.log("");

// ============================================
// PASO 3: const protege contra reasignación
// ============================================
console.log("--- Paso 3: const protege ---");

// Si descomentas las líneas de abajo verás:
// TypeError: Assignment to constant variable.
// const appName = "MiApp";
// appName = "OtraApp";

console.log("(Las constantes no se pueden reasignar)");
console.log("");

// ============================================
// PASO 4: Por qué no usar var
// ============================================
console.log("--- Paso 4: var está obsoleto ---");

var oldStyle = "primero";
var oldStyle = "segundo"; // sin error — ¡peligroso!
console.log("var permite redeclarar:", oldStyle);

// const y let lanzan error al redeclarar (correcto):
// const modern = "primero";
// const modern = "segundo"; // SyntaxError

console.log("");

// ============================================
// PASO 5: Alcance de bloque
// ============================================
console.log("--- Paso 5: alcance de bloque ---");

if (true) {
  let blockScoped = "solo dentro del bloque";
  console.log("Dentro del bloque:", blockScoped);
}
// blockScoped ya no existe aquí → ReferenceError si intentas usarla
console.log("Fuera del bloque: la variable ya no existe");

console.log("");
