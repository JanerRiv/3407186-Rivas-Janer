# 04 — Funciones como Valores y Callbacks

## 🎯 Objetivos

- Entender que las funciones son valores en JavaScript
- Asignar funciones a variables e invocarlas
- Pasar funciones como argumentos (callbacks básicos)
- Reconocer el patrón de función de orden superior

---

## 1. Funciones como valores (first-class functions)

En JavaScript, las funciones son **valores de primera clase**: se pueden asignar a variables, pasar como argumentos y devolver desde otras funciones. Esto es diferente a otros lenguajes.

```javascript
// Las funciones son valores — se pueden asignar a variables
const double = (n) => n * 2;
const triple = (n) => n * 3;

// Se pueden guardar en un array
const operations = [double, triple];
console.log(operations[0](5)); // 10
console.log(operations[1](5)); // 15

// Se pueden pasar como argumentos
const applyOperation = (value, operation) => operation(value);
console.log(applyOperation(4, double)); // 8
console.log(applyOperation(4, triple)); // 12
```

---

## 2. Callbacks — funciones que se pasan como argumentos

Un **callback** es una función que se pasa como argumento a otra función para que la ejecute en cierto momento.

```javascript
// Función que acepta un callback
const processData = (data, callback) => {
  // procesa el dato y luego llama al callback con el resultado
  const processed = data.trim().toUpperCase();
  return callback(processed);
};

// Diferentes callbacks para diferentes propósitos
const addBrackets = (text) => `[${text}]`;
const addArrow = (text) => `→ ${text}`;

console.log(processData("  hola mundo  ", addBrackets)); // "[HOLA MUNDO]"
console.log(processData("  hola mundo  ", addArrow)); // "→ HOLA MUNDO"
```

> El callback le da flexibilidad a `processData` sin necesidad de modificarla.

---

## 3. Callbacks con funciones anónimas

Se puede pasar una arrow function directamente sin necesidad de darle nombre:

```javascript
const applyOperation = (value, operation) => operation(value);

// Callback nombrado (función ya definida)
const square = (n) => n * n;
console.log(applyOperation(5, square)); // 25

// Callback anónimo — definido en el lugar (inline)
console.log(applyOperation(5, (n) => n * n)); // 25
console.log(applyOperation(5, (n) => n + 100)); // 105
```

---

## 4. Callbacks en funciones de array

Los métodos de array que veremos en la Semana 08 usan callbacks. Aquí un adelanto:

```javascript
const prices = [100, 250, 80, 320, 150];

// forEach — ejecuta el callback por cada elemento
prices.forEach((price) => {
  console.log(`Precio: $${price}`);
});

// filter — devuelve los elementos donde el callback retorna true
const expensive = prices.filter((price) => price > 150);
console.log(expensive); // [250, 320]

// map — transforma cada elemento usando el callback
const withTax = prices.map((price) => price * 1.19);
console.log(withTax); // [119, 297.5, 95.2, 380.8, 178.5]
```

---

## 5. Funciones de orden superior (Higher-Order Functions)

Una **función de orden superior** es aquella que:

- Recibe una función como parámetro, **o**
- Devuelve una función como resultado

```javascript
// ─── Recibe una función como parámetro ───

const runTwice = (fn, value) => {
  const first = fn(value);
  return fn(first);
};

const double = (n) => n * 2;
console.log(runTwice(double, 3)); // 12 → double(3)=6, double(6)=12

// ─── Devuelve una función como resultado ───

const createMultiplier = (factor) => {
  // devuelve una nueva función que usa 'factor' del scope externo
  return (number) => number * factor;
};

const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(triple(5)); // 15
console.log(tenTimes(5)); // 50
```

> Las funciones que devuelven funciones usan **closures** — un concepto que veremos en profundidad en la Semana 11.

---

## 6. Ejemplo del mundo real

```javascript
// Librería de formateo reutilizable
const formatCurrency = (value, currency = "USD") =>
  `${currency} ${value.toFixed(2)}`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES");
};

const formatStatus = (isActive) => (isActive ? "Activo" : "Inactivo");

// Función que aplica el formato correcto según el tipo de campo
const renderField = (label, value, formatter) => {
  const formatted = formatter(value);
  return `${label}: ${formatted}`;
};

console.log(renderField("Precio", 1500, formatCurrency)); // "Precio: USD 1500.00"
console.log(renderField("Precio", 1500, (v) => `$${v}`)); // "Precio: $1500"
console.log(renderField("Estado", true, formatStatus)); // "Estado: Activo"
```

---

## ✅ Checklist de Verificación

- [ ] ¿El callback tiene un nombre descriptivo cuando está definido aparte?
- [ ] ¿La función que recibe el callback nombra el parámetro de forma clara (`callback`, `formatter`, `handler`)?
- [ ] ¿Entiendes la diferencia entre pasar la función (`fn`) y llamarla (`fn()`)?
- [ ] ¿Puedes reemplazar el callback por otro sin modificar la función principal?

---

## 📚 Recursos

- [MDN: Funciones de primera clase](https://developer.mozilla.org/es/docs/Glossary/First-class_Function)
- [javascript.info: Function expressions](https://es.javascript.info/function-expressions)
