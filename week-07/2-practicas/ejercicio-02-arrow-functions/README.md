# Ejercicio 02 — Arrow Functions

## 🎯 Objetivo

Reescribir funciones clásicas como arrow functions y practicar el retorno implícito.

---

## 📋 Pasos

### Paso 1: Arrow function con cuerpo de bloque

La misma función pero con sintaxis `=>` y `{}`:

```javascript
const greetUser = (name) => {
  return `Hola, ${name}!`;
};
console.log(greetUser("Ana")); // "Hola, Ana!"
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: Retorno implícito

Cuando la función solo evalúa una expresión, se omiten `{}` y `return`:

```javascript
const double = (n) => n * 2;
const square = (n) => n * n;
const addTax = (price) => price * 1.19;

console.log(double(5)); // 10
console.log(square(4)); // 16
console.log(addTax(100)); // 119
```

**Descomenta la Sección 2** en el starter.

---

### Paso 3: Arrow function sin parámetros

```javascript
const getTimestamp = () => Date.now();
const separator = () => "─".repeat(30);

console.log(getTimestamp()); // número de ms desde 1970
console.log(separator()); // "──────────────────────────────"
```

**Descomenta la Sección 3** en el starter.

---

### Paso 4: Retorno implícito de objeto literal

Para retornar un objeto hay que envolver en `()`:

```javascript
const createPoint = (x, y) => ({ x, y });
const createUser = (name, age) => ({ name, age, active: true });

console.log(createPoint(3, 7)); // { x: 3, y: 7 }
console.log(createUser("Ana", 25)); // { name: 'Ana', age: 25, active: true }
```

**Descomenta la Sección 4** en el starter.
