// ============================================
// EJERCICIO 05: Scope y Funciones Puras
// ============================================
console.log("=== Ejercicio 05: Scope y Funciones Puras ===\n");

// ============================================
// SECCIÓN 1: Variables locales
// ============================================
console.log("--- Sección 1: Variables locales ---");

// Las variables declaradas dentro de una función
// solo existen dentro de esa función (scope local)
// Descomenta las siguientes líneas:

// const calculateBonus = (salary) => {
//   const bonusRate = 0.15;           // local — existe solo aquí
//   return salary * bonusRate;
// };

// console.log(calculateBonus(3000)); // 450
// console.log(calculateBonus(5000)); // 750

// // Si intentas acceder a bonusRate aquí, da ReferenceError
// // console.log(bonusRate); // ← descomenta solo si quieres ver el error

console.log("");

// ============================================
// SECCIÓN 2: Constantes globales
// ============================================
console.log("--- Sección 2: Constantes globales ---");

// Las constantes globales en UPPER_SNAKE_CASE son visibles
// en todas las funciones del programa
// Descomenta las siguientes líneas:

// const TAX_RATE = 0.19;
// const CURRENCY = "USD";

// const formatPrice = (price) => {
//   // Usa las constantes globales TAX_RATE y CURRENCY
//   const finalPrice = price * (1 + TAX_RATE); // variable local
//   return `${CURRENCY} ${finalPrice.toFixed(2)}`;
// };

// console.log(formatPrice(100)); // "USD 119.00"
// console.log(formatPrice(250)); // "USD 297.50"

console.log("");

// ============================================
// SECCIÓN 3: Función pura vs impura
// ============================================
console.log("--- Sección 3: Pura vs impura ---");

// Una función pura: mismo input → siempre mismo output
// Una función impura: depende de estado externo variable
// Descomenta las siguientes líneas:

// // ✅ Pura — no depende de nada externo
// const calculateArea = (w, h) => w * h;
// console.log(calculateArea(4, 5)); // siempre 20

// // ❌ Impura — depende de una variable global mutable
// let taxRate = 0.19;
// const priceWithTax = (price) => price * (1 + taxRate);
// console.log(priceWithTax(100)); // 119
// taxRate = 0.21;
// console.log(priceWithTax(100)); // 121 — ¡cambió sin cambiar los argumentos!

// // ✅ Versión pura — todo lo necesario llega por parámetro
// const priceWithTaxPure = (price, rate) => price * (1 + rate);
// console.log(priceWithTaxPure(100, 0.19)); // siempre 119
// console.log(priceWithTaxPure(100, 0.19)); // siempre 119

console.log("");

// ============================================
// SECCIÓN 4: Separar cálculo de efecto
// ============================================
console.log("--- Sección 4: Cálculo vs efecto ---");

// Descomenta las siguientes líneas:

// // Funciones puras de cálculo (no imprimen nada)
// const applyDiscount = (price, discountPct) =>
//   +(price * (1 - discountPct / 100)).toFixed(2);

// const isAffordable = (price, budget) => price <= budget;

// const formatPrice = (price, currency = "USD") =>
//   `${currency} ${price.toFixed(2)}`;

// // Función de efecto — usa las puras y muestra el resultado
// const displayProduct = (name, price, discount, budget) => {
//   const discounted = applyDiscount(price, discount);
//   const label      = formatPrice(discounted);
//   const affordable = isAffordable(discounted, budget);
//   console.log(`${name}: ${label} — ${affordable ? "✅ Asequible" : "❌ Caro"}`);
// };

// displayProduct("Laptop", 1200, 10, 1100);
// displayProduct("Monitor", 800, 5, 700);
// displayProduct("Teclado", 150, 20, 130);

console.log("");
console.log("=== Fin del ejercicio 05 ===");
