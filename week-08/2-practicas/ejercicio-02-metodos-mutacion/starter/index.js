// ============================================
// EJERCICIO 02: Métodos de Mutación
// Semana 08 — Arrays
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: push() y pop()
// ============================================
console.log("--- Sección 1: push() y pop() ---");

// Descomenta las siguientes líneas:
// const tasks = ["diseñar", "codear"];
// console.log("Inicial:", tasks);

// Agregar con push
// const newSize = tasks.push("testear");
// console.log("Después de push('testear'):", tasks);
// console.log("Nuevo tamaño:", newSize);

// Agregar múltiples con push
// tasks.push("desplegar", "documentar");
// console.log("Después de push múltiple:", tasks);

// Eliminar con pop
// const lastRemoved = tasks.pop();
// console.log("Elemento eliminado (pop):", lastRemoved);
// console.log("Array tras pop:", tasks);

console.log("");

// ============================================
// SECCIÓN 2: unshift() y shift()
// ============================================
console.log("--- Sección 2: unshift() y shift() ---");

// Descomenta las siguientes líneas:
// const list = ["segundo", "tercero"];
// console.log("Inicial:", list);

// Agregar al inicio con unshift
// list.unshift("primero");
// console.log("Después de unshift('primero'):", list);

// Eliminar del inicio con shift
// const firstRemoved = list.shift();
// console.log("Elemento eliminado (shift):", firstRemoved);
// console.log("Array tras shift:", list);

console.log("");

// ============================================
// SECCIÓN 3: splice()
// ============================================
console.log("--- Sección 3: splice() ---");

// Descomenta las siguientes líneas:
// const months = ["ene", "feb", "BORRAR", "abr"];
// console.log("Inicial:", months);

// Eliminar "BORRAR" (1 elemento en índice 2)
// const removed = months.splice(2, 1);
// console.log("Elemento(s) eliminado(s):", removed);
// console.log("Después de splice(2, 1):", months);

// Insertar "mar" en índice 2, sin eliminar ninguno
// months.splice(2, 0, "mar");
// console.log("Después de splice(2, 0, 'mar'):", months);

// Reemplazar "ene" por "enero" (índice 0, eliminar 1, insertar 1)
// months.splice(0, 1, "enero");
// console.log("Después de reemplazar:", months);

console.log("");

// ============================================
// SECCIÓN 4: Simulación de Cola (Queue)
// ============================================
console.log("--- Sección 4: Cola con push + shift ---");

// Descomenta las siguientes líneas:
// const orderQueue = [];

// Agregar pedidos a la cola
// orderQueue.push("Pedido A");
// orderQueue.push("Pedido B");
// orderQueue.push("Pedido C");
// console.log("Cola de pedidos:", orderQueue);

// Procesar el primer pedido (FIFO: primero en entrar, primero en salir)
// const nextOrder = orderQueue.shift();
// console.log(`Procesando: ${nextOrder}`);
// console.log("Cola restante:", orderQueue);

// Procesar otro pedido
// const anotherOrder = orderQueue.shift();
// console.log(`Procesando: ${anotherOrder}`);
// console.log("Cola restante:", orderQueue);

console.log("");
