// ============================================
// EJERCICIO 05: Scope y Funciones Puras — SOLUCIÓN
// ============================================
console.log("=== Ejercicio 05: Scope y Funciones Puras ===\n");

// ============================================
// SECCIÓN 1: Variables locales
// ============================================
console.log("--- Sección 1: Variables locales ---");

const calculateBonus = (salary) => {
  const bonusRate = 0.15; // local
  return salary * bonusRate;
};

console.log(calculateBonus(3000)); // 450
console.log(calculateBonus(5000)); // 750

console.log("");

// ============================================
// SECCIÓN 2: Constantes globales
// ============================================
console.log("--- Sección 2: Constantes globales ---");

const TAX_RATE = 0.19;
const CURRENCY = "USD";

const formatPrice = (price) => {
  const finalPrice = price * (1 + TAX_RATE);
  return `${CURRENCY} ${finalPrice.toFixed(2)}`;
};

console.log(formatPrice(100)); // "USD 119.00"
console.log(formatPrice(250)); // "USD 297.50"

console.log("");

// ============================================
// SECCIÓN 3: Función pura vs impura
// ============================================
console.log("--- Sección 3: Pura vs impura ---");

// ✅ Pura
const calculateArea = (w, h) => w * h;
console.log(calculateArea(4, 5)); // 20

// ❌ Impura
let taxRate = 0.19;
const priceWithTax = (price) => price * (1 + taxRate);
console.log(priceWithTax(100)); // 119
taxRate = 0.21;
console.log(priceWithTax(100)); // 121 — cambió sin cambiar argumentos

// ✅ Versión pura
const priceWithTaxPure = (price, rate) => price * (1 + rate);
console.log(priceWithTaxPure(100, 0.19)); // siempre 119
console.log(priceWithTaxPure(100, 0.19)); // siempre 119

console.log("");

// ============================================
// SECCIÓN 4: Separar cálculo de efecto
// ============================================
console.log("--- Sección 4: Cálculo vs efecto ---");

const applyDiscount = (price, discountPct) =>
  +(price * (1 - discountPct / 100)).toFixed(2);

const isAffordable = (price, budget) => price <= budget;

const formatPriceLabel = (price, currency = "USD") =>
  `${currency} ${price.toFixed(2)}`;

const displayProduct = (name, price, discount, budget) => {
  const discounted = applyDiscount(price, discount);
  const label      = formatPriceLabel(discounted);
  const affordable = isAffordable(discounted, budget);
  console.log(`${name}: ${label} — ${affordable ? "✅ Asequible" : "❌ Caro"}`);
};

displayProduct("Laptop", 1200, 10, 1100);
displayProduct("Monitor", 800, 5, 700);
displayProduct("Teclado", 150, 20, 130);

console.log("");
console.log("=== Fin del ejercicio 05 ===");
