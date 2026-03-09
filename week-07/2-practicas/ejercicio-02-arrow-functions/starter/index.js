// ============================================
// EJERCICIO 02: Arrow Functions
// ============================================
console.log("=== Ejercicio 02: Arrow Functions ===\n");

// ============================================
// SECCIÓN 1: Arrow function con bloque {}
// ============================================
console.log("--- Sección 1: Arrow function con bloque ---");

// Sintaxis: const nombre = (params) => { return valor; };
// Descomenta las siguientes líneas:

// const greetUser = (name) => {
//   return `Hola, ${name}!`;
// };

// console.log(greetUser("Ana"));
// console.log(greetUser("Carlos"));

console.log("");

// ============================================
// SECCIÓN 2: Retorno implícito
// ============================================
console.log("--- Sección 2: Retorno implícito ---");

// Cuando solo hay una expresión, se omiten {} y return
// Descomenta las siguientes líneas:

// const double  = (n) => n * 2;
// const square  = (n) => n * n;
// const addTax  = (price) => price * 1.19;
// const negate  = (bool) => !bool;

// console.log(double(5));     // 10
// console.log(square(4));     // 16
// console.log(addTax(100));   // 119
// console.log(negate(true));  // false

console.log("");

// ============================================
// SECCIÓN 3: Arrow function sin parámetros
// ============================================
console.log("--- Sección 3: Sin parámetros ---");

// Sin parámetros → () obligatorio antes de =>
// Descomenta las siguientes líneas:

// const getTimestamp = () => Date.now();
// const separator    = () => "─".repeat(30);
// const randomBool   = () => Math.random() > 0.5;

// console.log(`Timestamp: ${getTimestamp()}`);
// console.log(separator());
// console.log(`Aleatorio: ${randomBool()}`);

console.log("");

// ============================================
// SECCIÓN 4: Retorno de objeto literal
// ============================================
console.log("--- Sección 4: Retorno de objeto ---");

// Para retornar un objeto con retorno implícito, envuelve en ()
// Descomenta las siguientes líneas:

// const createPoint = (x, y) => ({ x, y });
// const createUser  = (name, age) => ({ name, age, active: true });

// console.log(createPoint(3, 7));
// console.log(createUser("Ana", 25));

console.log("");
console.log("=== Fin del ejercicio 02 ===");
