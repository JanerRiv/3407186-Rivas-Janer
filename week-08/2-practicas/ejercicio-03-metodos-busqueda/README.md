# Ejercicio 03: Métodos de Búsqueda y Extracción

## 🎯 Objetivo

Practicar `includes`, `indexOf`, `slice`, `find` y `findIndex` — todos **sin modificar el original**.

---

## Paso 1: `includes()` e `indexOf()`

`includes()` responde sí/no. `indexOf()` dice en qué posición.

```javascript
const ingredients = ["harina", "azúcar", "huevos", "mantequilla", "sal"];

console.log(ingredients.includes("huevos")); // true
console.log(ingredients.includes("levadura")); // false
console.log(ingredients.indexOf("azúcar")); // 1
console.log(ingredients.indexOf("pimienta")); // -1
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

## Paso 2: `slice()` — Extraer Sin Modificar

`slice(inicio, fin)` devuelve una copia de la porción indicada. El `fin` no se incluye.

```javascript
const letters = ["a", "b", "c", "d", "e", "f"];

console.log(letters.slice(1, 4)); // ["b", "c", "d"]
console.log(letters.slice(3)); // ["d", "e", "f"]
console.log(letters.slice(-2)); // ["e", "f"]
console.log(letters.slice()); // ["a","b","c","d","e","f"] — copia
console.log(letters); // sin cambios
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

## Paso 3: `find()` — Buscar por Condición

`find()` devuelve el **primer elemento** que hace que el callback retorne `true`.

```javascript
const scores = [45, 82, 60, 91, 38, 75];

const firstPassing = scores.find((score) => score >= 60);
console.log(firstPassing); // 82

const firstHigh = scores.find((score) => score >= 90);
console.log(firstHigh); // 91

const notFound = scores.find((score) => score >= 100);
console.log(notFound); // undefined
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

## Paso 4: `findIndex()` — Posición por Condición

`findIndex()` devuelve el **índice** del primer elemento que cumple la condición, o `-1`.

```javascript
const names = ["Ana", "Beatriz", "Carlos", "Diana"];

const longNameIndex = names.findIndex((name) => name.length > 6);
console.log(longNameIndex); // 1 — "Beatriz" tiene 7 letras

const notFoundIndex = names.findIndex((name) => name === "Luis");
console.log(notFoundIndex); // -1
```

**Abre `starter/index.js`** y descomenta la Sección 4.
