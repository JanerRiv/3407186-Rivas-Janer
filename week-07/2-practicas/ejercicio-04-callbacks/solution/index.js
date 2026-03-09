// ============================================
// EJERCICIO 04: Funciones como Valores y Callbacks — SOLUCIÓN
// ============================================
console.log("=== Ejercicio 04: Funciones como Valores y Callbacks ===\n");

// ============================================
// SECCIÓN 1: Funciones asignadas a variables
// ============================================
console.log("--- Sección 1: Funciones en objeto ---");

const add      = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const operations = { add, subtract, multiply };

console.log(operations.add(5, 3));      // 8
console.log(operations.subtract(5, 3)); // 2
console.log(operations.multiply(5, 3)); // 15

console.log("");

// ============================================
// SECCIÓN 2: Pasar función como argumento
// ============================================
console.log("--- Sección 2: Pasar función como argumento ---");

const applyOperation = (a, b, operation) => operation(a, b);

console.log(applyOperation(4, 5, add));               // 9
console.log(applyOperation(4, 5, multiply));          // 20
console.log(applyOperation(10, 3, (a, b) => a % b)); // 1
console.log(applyOperation(10, 3, (a, b) => a ** b)); // 1000

console.log("");

// ============================================
// SECCIÓN 3: Callback de formato
// ============================================
console.log("--- Sección 3: Callback de formato ---");

const formatItem = (item, formatter) => formatter(item);

const toUpperCase = (text) => text.toUpperCase();
const addBrackets = (text) => `[${text}]`;
const addBullet   = (text) => `• ${text}`;

const items = ["manzana", "banana", "cereza"];

console.log("Con addBullet:");
for (const item of items) {
  console.log(formatItem(item, addBullet));
}

console.log("Con addBrackets:");
for (const item of items) {
  console.log(formatItem(item, addBrackets));
}

console.log("");

// ============================================
// SECCIÓN 4: Función que devuelve función
// ============================================
console.log("--- Sección 4: Función que devuelve función ---");

const createMultiplier = (factor) => (number) => number * factor;

const double   = createMultiplier(2);
const triple   = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(tenTimes(5)); // 50

const multipliers = [double, triple, tenTimes];
for (const fn of multipliers) {
  console.log(fn(4));
}

console.log("");
console.log("=== Fin del ejercicio 04 ===");
