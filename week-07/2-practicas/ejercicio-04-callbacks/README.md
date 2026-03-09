# Ejercicio 04 — Funciones como Valores y Callbacks

## 🎯 Objetivo

Practicar el paso de funciones como argumentos y la creación de funciones de orden superior.

---

## 📋 Pasos

### Paso 1: Funciones asignadas a variables

```javascript
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// Las funciones se pueden guardar en un objeto
const operations = { add, subtract, multiply };

console.log(operations.add(5, 3)); // 8
console.log(operations.subtract(5, 3)); // 2
console.log(operations.multiply(5, 3)); // 15
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: Pasar función como argumento

```javascript
const applyOperation = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(applyOperation(4, 5, add)); // 9
console.log(applyOperation(4, 5, multiply)); // 20
// Callback anónimo inline
console.log(applyOperation(10, 3, (a, b) => a % b)); // 1
```

**Descomenta la Sección 2** en el starter.

---

### Paso 3: Callback con lógica de formato

```javascript
const formatItem = (item, formatter) => formatter(item);

const toUpperCase = (text) => text.toUpperCase();
const addBrackets = (text) => `[${text}]`;
const addBullet = (text) => `• ${text}`;

const items = ["manzana", "banana", "cereza"];
for (const item of items) {
  console.log(formatItem(item, addBullet));
}
```

**Descomenta la Sección 3** en el starter.

---

### Paso 4: Función que devuelve una función

```javascript
const createMultiplier = (factor) => (number) => number * factor;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(tenTimes(5)); // 50
```

**Descomenta la Sección 4** en el starter.
