// ============================================
// EJERCICIO 01: const y let
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Declarar con const
// ============================================
console.log("--- Paso 1: const ---");

// const es para valores que no cambian
// Es la opción por defecto: úsala siempre que puedas
// Descomenta las siguientes líneas:
// const productName = "Laptop";
// const productPrice = 1299.99;
// console.log("Producto:", productName);
// console.log("Precio:", productPrice);

console.log("");

// ============================================
// PASO 2: Declarar con let
// ============================================
console.log("--- Paso 2: let ---");

// let es para valores que SÍ cambian
// Descomenta las siguientes líneas:
// let score = 0;
// console.log("Puntaje inicial:", score);
// score = score + 10;
// console.log("Puntaje actualizado:", score);
// score = score + 5;
// console.log("Puntaje final:", score);

console.log("");

// ============================================
// PASO 3: const protege contra reasignación
// ============================================
console.log("--- Paso 3: const protege ---");

// Este bloque está comentado a propósito
// Si lo descomentas, verás un TypeError en consola
// Lee y entiende el error antes de continuar:
//
// const appName = "MiApp";
// appName = "OtraApp"; // TypeError: Assignment to constant variable.

console.log("(Las constantes no se pueden reasignar)");
console.log("");

// ============================================
// PASO 4: Por qué no usar var
// ============================================
console.log("--- Paso 4: var está obsoleto ---");

// var tiene un problema: permite redeclarar sin error
// Esto lleva a bugs difíciles de encontrar
// Descomenta las siguientes líneas:
// var oldStyle = "primero";
// var oldStyle = "segundo"; // sin error — ¡peligroso!
// console.log("var permite redeclarar:", oldStyle);

// const y let lanzan error al redeclarar (correcto):
// const modern = "primero";
// const modern = "segundo"; // SyntaxError: ya declarado

console.log("");

// ============================================
// PASO 5: Alcance de bloque
// ============================================
console.log("--- Paso 5: alcance de bloque ---");

// let respeta el bloque { } donde se declara
// Descomenta las siguientes líneas:
// if (true) {
//   let blockScoped = "solo dentro del bloque";
//   console.log("Dentro del bloque:", blockScoped);
// }
// console.log("Fuera del bloque: variable no existe");
// Intenta acceder a blockScoped fuera del bloque y verás ReferenceError

console.log("");
