# Ejercicio 05 — Scope y Funciones Puras

## 🎯 Objetivo

Entender la diferencia entre scope local y global, identificar efectos secundarios y escribir funciones puras.

---

## 📋 Pasos

### Paso 1: Variables locales no accesibles desde fuera

```javascript
const calculateBonus = (salary) => {
  const bonusRate = 0.15; // variable local
  return salary * bonusRate;
};

console.log(calculateBonus(3000)); // 450
// console.log(bonusRate); // ReferenceError — no existe aquí
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: Constantes globales vs variables locales

```javascript
const TAX_RATE = 0.19; // constante global — UPPER_SNAKE_CASE
const CURRENCY = "USD"; // constante global

const formatPrice = (price) => {
  const finalPrice = price * (1 + TAX_RATE); // variable local
  return `${CURRENCY} ${finalPrice.toFixed(2)}`;
};

console.log(formatPrice(100)); // "USD 119.00"
console.log(formatPrice(250)); // "USD 297.50"
```

**Descomenta la Sección 2** en el starter.

---

### Paso 3: Identificar funciones puras vs impuras

```javascript
// Función pura — siempre mismo resultado para mismo input
const calculateArea = (w, h) => w * h;

// Función impura — depende de estado externo cambiante
let taxRate = 0.19;
const priceWithTax = (price) => price * (1 + taxRate); // ← depende de taxRate global mutable

// Versión pura — todo por parámetro
const priceWithTaxPure = (price, rate) => price * (1 + rate);

console.log(calculateArea(4, 5)); // siempre 20
console.log(priceWithTaxPure(100, 0.19)); // siempre 119
```

**Descomenta la Sección 3** en el starter.

---

### Paso 4: Separar cálculo de efecto

```javascript
// Funciones puras de cálculo
const applyDiscount = (price, discountPct) =>
  +(price * (1 - discountPct / 100)).toFixed(2);
const isAffordable = (price, budget) => price <= budget;
const formatPrice = (price, currency = "USD") =>
  `${currency} ${price.toFixed(2)}`;

// Función de efecto — usa las puras y muestra resultado
const displayProduct = (name, price, discount, budget) => {
  const discounted = applyDiscount(price, discount);
  const label = formatPrice(discounted);
  const affordable = isAffordable(discounted, budget);
  console.log(`${name}: ${label} — ${affordable ? "✅ Asequible" : "❌ Caro"}`);
};

displayProduct("Laptop", 1200, 10, 1100); // "Laptop: USD 1080.00 — ✅ Asequible"
displayProduct("Monitor", 800, 5, 700); // "Monitor: USD 760.00 — ❌ Caro"
```

**Descomenta la Sección 4** en el starter.
