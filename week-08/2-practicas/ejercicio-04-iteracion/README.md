# Ejercicio 04: Iteración y Transformación

## 🎯 Objetivo

Dominar `forEach`, `map` y `filter` — los tres métodos de iteración más importantes de JavaScript.

---

## Paso 1: `forEach()` — Recorrer y Mostrar

`forEach` ejecuta una acción por cada elemento. No devuelve nada.

```javascript
const animals = ["perro", "gato", "conejo", "pez", "hamster"];

animals.forEach((animal, index) => {
  console.log(`${index + 1}. ${animal}`);
});
// 1. perro
// 2. gato
// ...
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

## Paso 2: `map()` — Transformar Cada Elemento

`map` crea un **nuevo array** con cada elemento transformado. El callback **siempre debe retornar** el nuevo valor.

```javascript
const prices = [100, 250, 80, 320, 45];

// Calcular precios con 19% IVA
const pricesWithTax = prices.map((price) => +(price * 1.19).toFixed(2));
console.log(pricesWithTax); // [119, 297.5, 95.2, 380.8, 53.55]
console.log(prices); // sin cambios
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

## Paso 3: `filter()` — Seleccionar Elementos

`filter` crea un **nuevo array** solo con los elementos que pasan la condición (callback retorna `true`).

```javascript
const scores = [45, 82, 60, 91, 38, 75, 55, 88];

const passing = scores.filter((score) => score >= 60);
console.log(passing); // [82, 60, 91, 75, 88]
console.log(scores); // sin cambios
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

## Paso 4: Combinar `filter` + `map`

Puedes encadenar métodos porque `filter` y `map` devuelven nuevos arrays.

```javascript
const items = ["Laptop", "Mouse", "Monitor", "Teclado", "Webcam"];

// Seleccionar los que tienen más de 5 letras y ponerlos en mayúsculas
const result = items
  .filter((item) => item.length > 5)
  .map((item) => item.toUpperCase());

console.log(result); // ["LAPTOP", "MONITOR", "TECLADO", "WEBCAM"]
```

**Abre `starter/index.js`** y descomenta la Sección 4.
