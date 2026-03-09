// ============================================
// EJERCICIO 05: Spread Operator con Arrays
// ============================================

// ============================================
// SECCIÓN 1: El Problema de las Referencias
// ============================================
console.log("=== Sección 1: Referencias vs Copia ===");

// ❌ Asignación con = NO crea una copia: ambas variables
// apuntan al mismo array en memoria

// Descomenta las siguientes líneas:
// const original = [1, 2, 3];
// const wrongCopy = original; // ← misma referencia
//
// wrongCopy.push(4);
// console.log("original:", original);   // [1, 2, 3, 4] ← cambió!
// console.log("wrongCopy:", wrongCopy); // [1, 2, 3, 4]
//
// // ✅ Spread crea una copia real (nueva referencia)
// const original2 = [10, 20, 30];
// const safeCopy = [...original2];
//
// safeCopy.push(40);
// console.log("original2:", original2); // [10, 20, 30] ← intacto
// console.log("safeCopy:", safeCopy);   // [10, 20, 30, 40]

console.log("");

// ============================================
// SECCIÓN 2: Fusionar Arrays
// ============================================
console.log("=== Sección 2: Fusionar Arrays ===");

// Spread permite combinar arrays sin modificar los originales

// Descomenta las siguientes líneas:
// const fruits = ["manzana", "naranja", "durazno"];
// const vegetables = ["zanahoria", "espinaca", "brócoli"];
//
// const groceries = [...fruits, ...vegetables];
// console.log("frutas:", fruits);
// console.log("verduras:", vegetables);
// console.log("lista de compras:", groceries);
//
// // También puedes agregar elementos fijos en el medio
// const withSeparator = [...fruits, "---", ...vegetables];
// console.log("con separador:", withSeparator);

console.log("");

// ============================================
// SECCIÓN 3: Agregar Items sin Mutar
// ============================================
console.log("=== Sección 3: Agregar Items sin Mutar ===");

// Spread te permite crear un nuevo array con items adicionales
// sin modificar el array original

// Descomenta las siguientes líneas:
// const tasks = ["revisar correos", "reunión de equipo", "actualizar docs"];
//
// // Agregar al final (sin mutar)
// const withDeadline = [...tasks, "entregar reporte"];
//
// // Agregar al inicio (sin mutar)
// const withUrgent = ["llamada urgente", ...tasks];
//
// // Agregar en el medio (sin mutar)
// const [first, ...rest] = tasks;
// const withMiddle = [first, "tarea nueva", ...rest];
//
// console.log("tareas originales:", tasks);
// console.log("con tarea al final:", withDeadline);
// console.log("con tarea urgente al inicio:", withUrgent);
// console.log("con tarea en el medio:", withMiddle);

console.log("");

// ============================================
// SECCIÓN 4: Spread como Argumentos de Función
// ============================================
console.log("=== Sección 4: Spread como Argumentos ===");

// Spread "expande" el array como argumentos individuales

// Descomenta las siguientes líneas:
// const temperatures = [18, 23, 15, 28, 21, 10, 26];
//
// const maxTemp = Math.max(...temperatures);
// const minTemp = Math.min(...temperatures);
//
// console.log("Temperaturas:", temperatures);
// console.log(`Máxima: ${maxTemp}°C`);
// console.log(`Mínima: ${minTemp}°C`);
// console.log(`Rango: ${maxTemp - minTemp}°C`);
//
// // También funciona con funciones propias
// const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);
// const total = sumAll(...temperatures);
// console.log(`Suma total: ${total}`);
// console.log(`Promedio: ${(total / temperatures.length).toFixed(1)}°C`);
