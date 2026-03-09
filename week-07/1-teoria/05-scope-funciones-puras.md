# 05 — Scope y Funciones Puras

## 🎯 Objetivos

- Distinguir scope local de scope global
- Entender por qué las variables locales no son accesibles desde fuera
- Identificar qué hace a una función "pura"
- Reconocer los beneficios de las funciones puras para el código predecible

---

## 1. ¿Qué es el scope?

El **scope** (ámbito) es la región del código donde una variable existe y puede ser usada.

```javascript
// ─── Scope global ───
const appName = "Mi App"; // existe en todo el programa

const showBanner = () => {
  // ─── Scope local (dentro de la función) ───
  const version = "1.0"; // solo existe dentro de este bloque
  console.log(`${appName} v${version}`); // ✅ puede acceder a appName
};

showBanner(); // "Mi App v1.0"
console.log(version); // ❌ ReferenceError: version is not defined
```

---

## 2. Scope local: variables dentro de funciones

Cada función crea su propio scope. Las variables declaradas con `const` o `let` dentro de una función **no se pueden ver desde fuera**:

```javascript
const calculateBonus = (salary) => {
  const bonusRate = 0.15; // variable local — solo existe aquí
  const bonus = salary * bonusRate;
  return bonus;
};

console.log(calculateBonus(3000)); // 450
console.log(bonusRate); // ❌ Error — bonusRate no existe aquí
```

**¿Por qué es útil?**

- Evita errores accidentales al reutilizar nombres
- Cada función tiene su propio espacio de trabajo
- Las variables locales desaparecen al terminar la función

---

## 3. Scope global: variables que todos pueden ver

Las variables declaradas fuera de cualquier función están en el scope global:

```javascript
// Variables globales — visibles en todo el programa
const TAX_RATE = 0.19;
const CURRENCY = "USD";

const formatPrice = (price) => {
  // Puede acceder a las variables globales TAX_RATE y CURRENCY
  const finalPrice = price * (1 + TAX_RATE);
  return `${CURRENCY} ${finalPrice.toFixed(2)}`;
};

const calculateTotal = (items) => {
  // También puede usar TAX_RATE
  let total = 0;
  for (const item of items) {
    total += item.price * (1 + TAX_RATE);
  }
  return total;
};
```

> **Convención**: Las constantes globales se escriben en `UPPER_SNAKE_CASE` para distinguirlas fácilmente.

---

## 4. El problema con modificar variables globales

Las funciones que modifican variables globales son difíciles de predecir y de depurar:

```javascript
// ❌ Mal patrón — la función modifica una variable global
let totalSales = 0; // global

const addSale = (amount) => {
  totalSales += amount; // efecto secundario — modifica el exterior
};

addSale(100);
addSale(200);
console.log(totalSales); // 300 — pero ¿cuándo cambió? ¿por qué?
```

```javascript
// ✅ Mejor — la función devuelve el nuevo valor sin modificar el exterior
const addSale = (currentTotal, amount) => currentTotal + amount;

let totalSales = 0;
totalSales = addSale(totalSales, 100);
totalSales = addSale(totalSales, 200);
console.log(totalSales); // 300 — el cambio es explícito y rastreable
```

---

## 5. Funciones puras

Una **función pura** es aquella que cumple dos condiciones:

1. **Mismo input → siempre mismo output**: para los mismos argumentos, siempre devuelve el mismo resultado
2. **Sin efectos secundarios**: no modifica nada fuera de su scope (no cambia variables externas, no hace peticiones, no imprime nada)

```javascript
// ✅ Función pura
const calculateArea = (width, height) => width * height;

calculateArea(3, 4); // siempre 12
calculateArea(3, 4); // siempre 12
// No modifica nada externo

// ❌ NO es pura — depende de algo externo variable
let taxRate = 0.19;
const calculateWithTax = (price) => price * (1 + taxRate); // depende de taxRate global mutable

// ✅ Versión pura — todo lo que necesita lo recibe como parámetro
const calculateWithTax = (price, taxRate) => price * (1 + taxRate);
```

---

## 6. Efectos secundarios comunes

| Efecto secundario          | Ejemplo                                 |
| -------------------------- | --------------------------------------- |
| Imprimir en consola        | `console.log(...)` dentro de la función |
| Modificar variable global  | `counter++` en variable externa         |
| Modificar un array externo | `externalArray.push(item)`              |
| Peticiones de red          | `fetch(url)` (lo veremos en Semana 28)  |
| Leer `Date.now()`          | El resultado cambia con el tiempo       |

> Las funciones puras evitan todos estos efectos.
> En la práctica, **siempre necesitamos** algunos efectos secundarios (imprimir, guardar datos).
> La clave es **separarlos**: funciones de cálculo (puras) vs funciones de efecto (impuras).

---

## 7. Patrón recomendado: separar cálculo de efecto

```javascript
// ─── Funciones puras: solo calculan ───
const applyDiscount = (price, discountPct) => price * (1 - discountPct / 100);
const formatPrice = (price, currency = "USD") =>
  `${currency} ${price.toFixed(2)}`;
const isAffordable = (price, budget) => price <= budget;

// ─── Función de efecto: usa las funciones puras y muestra el resultado ───
const showProductSummary = (product, budget) => {
  const discounted = applyDiscount(product.price, product.discount);
  const formatted = formatPrice(discounted);
  const affordable = isAffordable(discounted, budget);

  console.log(
    `${product.name}: ${formatted} — ${affordable ? "✅ Asequible" : "❌ Muy caro"}`,
  );
};

const laptop = { name: "Laptop Pro", price: 1200, discount: 10 };
showProductSummary(laptop, 1100); // "Laptop Pro: USD 1080.00 — ✅ Asequible"
```

---

## ✅ Checklist de Verificación

- [ ] ¿Las variables de trabajo de una función están declaradas dentro de ella?
- [ ] ¿Las funciones de cálculo reciben todo lo que necesitan por parámetro?
- [ ] ¿Separas las funciones que calculan de las que imprimen o modifican estado?
- [ ] ¿Las constantes globales usan `UPPER_SNAKE_CASE`?

---

## 📚 Recursos

- [MDN: Closures y scope](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)
- [javascript.info: Variable scope, closure](https://es.javascript.info/closure)
