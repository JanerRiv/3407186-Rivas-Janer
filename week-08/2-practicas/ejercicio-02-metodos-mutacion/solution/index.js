// ============================================
// EJERCICIO 02: Métodos de Mutación — SOLUCIÓN
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: push() y pop()
// ============================================
console.log("--- Sección 1: push() y pop() ---");

const tasks = ["diseñar", "codear"];
console.log("Inicial:", tasks);

const newSize = tasks.push("testear");
console.log("Después de push('testear'):", tasks);
console.log("Nuevo tamaño:", newSize);

tasks.push("desplegar", "documentar");
console.log("Después de push múltiple:", tasks);

const lastRemoved = tasks.pop();
console.log("Elemento eliminado (pop):", lastRemoved);
console.log("Array tras pop:", tasks);

console.log("");

// ============================================
// SECCIÓN 2: unshift() y shift()
// ============================================
console.log("--- Sección 2: unshift() y shift() ---");

const list = ["segundo", "tercero"];
console.log("Inicial:", list);

list.unshift("primero");
console.log("Después de unshift('primero'):", list);

const firstRemoved = list.shift();
console.log("Elemento eliminado (shift):", firstRemoved);
console.log("Array tras shift:", list);

console.log("");

// ============================================
// SECCIÓN 3: splice()
// ============================================
console.log("--- Sección 3: splice() ---");

const months = ["ene", "feb", "BORRAR", "abr"];
console.log("Inicial:", months);

const removed = months.splice(2, 1);
console.log("Elemento(s) eliminado(s):", removed);
console.log("Después de splice(2, 1):", months);

months.splice(2, 0, "mar");
console.log("Después de splice(2, 0, 'mar'):", months);

months.splice(0, 1, "enero");
console.log("Después de reemplazar:", months);

console.log("");

// ============================================
// SECCIÓN 4: Simulación de Cola (Queue)
// ============================================
console.log("--- Sección 4: Cola con push + shift ---");

const orderQueue = [];

orderQueue.push("Pedido A");
orderQueue.push("Pedido B");
orderQueue.push("Pedido C");
console.log("Cola de pedidos:", orderQueue);

const nextOrder = orderQueue.shift();
console.log(`Procesando: ${nextOrder}`);
console.log("Cola restante:", orderQueue);

const anotherOrder = orderQueue.shift();
console.log(`Procesando: ${anotherOrder}`);
console.log("Cola restante:", orderQueue);

console.log("");
