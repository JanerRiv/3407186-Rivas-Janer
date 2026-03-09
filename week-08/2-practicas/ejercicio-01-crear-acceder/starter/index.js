// ============================================
// EJERCICIO 01: Crear y Acceder Arrays
// Semana 08 — Arrays
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Crear Arrays
// ============================================
console.log("--- Sección 1: Crear Arrays ---");

// Un array de colores (5 elementos)
// Descomenta las siguientes líneas:
// const colors = ["rojo", "verde", "azul", "amarillo", "naranja"];
// console.log("Array de colores:", colors);

// Un array de temperaturas (números)
// const temperatures = [18, 22, 25, 19, 14, 30, 27];
// console.log("Temperaturas:", temperatures);

// Un array vacío
// const emptyList = [];
// console.log("Array vacío:", emptyList);

console.log("");

// ============================================
// SECCIÓN 2: Acceder por Índice
// ============================================
console.log("--- Sección 2: Acceso por Índice ---");

// Descomenta las siguientes líneas (necesitas colors del paso 1):
// console.log("Primero [0]    :", colors[0]);
// console.log("Tercero [2]    :", colors[2]);
// console.log("Último  [4]    :", colors[4]);

// Con .at() — ES2022
// console.log("Último  .at(-1)    :", colors.at(-1));
// console.log("Penúltimo .at(-2)  :", colors.at(-2));
// console.log("Primero .at(0)     :", colors.at(0));

// Índice fuera de rango
// console.log("Índice 99:", colors[99]); // undefined

console.log("");

// ============================================
// SECCIÓN 3: Propiedad .length
// ============================================
console.log("--- Sección 3: .length ---");

// Descomenta las siguientes líneas:
// console.log("Total de colores:", colors.length);
// console.log("Total de temperaturas:", temperatures.length);
// console.log("Total en emptyList:", emptyList.length);

// Usar length para acceder al último elemento (forma clásica)
// const lastColor = colors[colors.length - 1];
// console.log("Último color (con length):", lastColor);

// Comparar con .at(-1)
// console.log("Último color (con .at)   :", colors.at(-1));

console.log("");

// ============================================
// SECCIÓN 4: Modificar Elementos
// ============================================
console.log("--- Sección 4: Modificar Elementos ---");

// Descomenta las siguientes líneas:
// const seasons = ["primavera", "verano", "otoño", "invierno"];
// console.log("Antes:", seasons);

// Modificar el segundo elemento (índice 1)
// seasons[1] = "VERANO";
// console.log("Después:", seasons);

// Modificar el último elemento
// seasons[seasons.length - 1] = "INVIERNO";
// console.log("Final:", seasons);

console.log("");
