# 02 — Arrow Functions

## 🎯 Objetivos

- Escribir funciones con la sintaxis de arrow function `=>`
- Usar el retorno implícito para funciones de una línea
- Entender cuándo usar arrow function vs declaración clásica

---

## 1. ¿Qué es una arrow function?

Una **arrow function** es la forma moderna y concisa de escribir funciones en JavaScript (introducida en ES2015). Es la sintaxis preferida en ES2023 para la mayoría de los casos.

```javascript
// Función clásica
function add(a, b) {
  return a + b;
}

// Arrow function equivalente
const add = (a, b) => a + b;
```

---

## 2. Anatomía de una arrow function

```javascript
//  ┌─ nombre (asignada a const)
//  │        ┌─ parámetros
//  │        │      ┌─ flecha "arrow"
//  │        │      │   ┌─ cuerpo / retorno
const multiply = (a, b) => a * b;
```

---

## 3. Formas de escritura

### Cuerpo de bloque `{}` con `return` explícito

Para funciones con múltiples instrucciones:

```javascript
const calculateDiscount = (price, percentage) => {
  // múltiples instrucciones → llaves {} obligatorias
  const discount = price * (percentage / 100);
  return price - discount; // return explícito
};
```

### Retorno implícito (una expresión)

Cuando la función solo calcula y retorna un valor, se omiten `{}` y `return`:

```javascript
// Con {} y return explícito
const double = (n) => {
  return n * 2;
};

// Sin {} — retorno implícito (preferido en ES2023)
const double = (n) => n * 2;

console.log(double(5)); // 10
```

### Paréntesis en parámetros

```javascript
// Sin parámetros → () obligatorio
const greetUser = () => "¡Hola!";

// Un parámetro → () opcional (pero se recomienda mantenerlos)
const shout = (text) => text.toUpperCase();

// Múltiples parámetros → () obligatorio
const sum = (a, b) => a + b;
```

> **Convención ES2023**: Mantener los paréntesis incluso con un solo parámetro para mayor claridad.

---

## 4. Retorno implícito de objetos

Si el retorno implícito es un objeto literal, se envuelve en paréntesis para evitar ambigüedad con las llaves del cuerpo:

```javascript
// ❌ Error — las {} se interpretan como cuerpo de función
const createUser = (name, age) => {
  (name, age);
};

// ✅ Correcto — () envuelve el objeto literal
const createUser = (name, age) => ({ name, age });

console.log(createUser("Ana", 25)); // { name: 'Ana', age: 25 }
```

---

## 5. Comparación: función clásica vs arrow function

```javascript
// Función clásica
function greet(name) {
  return `Hola, ${name}!`;
}

// Arrow function — bloque
const greet = (name) => {
  return `Hola, ${name}!`;
};

// Arrow function — implícita (más concisa)
const greet = (name) => `Hola, ${name}!`;
```

| Característica    | `function`    | Arrow function             |
| ----------------- | ------------- | -------------------------- |
| Sintaxis          | Más verbosa   | Más concisa                |
| Hoisting          | Sí (se eleva) | No (declarada en la línea) |
| Uso como callback | Válido        | Preferido                  |
| Uso general       | Válido        | ✅ Recomendado en ES2023   |

---

## 6. Arrow functions como callbacks

Las arrow functions son especialmente útiles como callbacks (funciones que se pasan como argumentos):

```javascript
const numbers = [1, 2, 3, 4, 5];

// Arrow function en callback de forEach
numbers.forEach((n) => console.log(n * 2));

// Arrow function en callback de filter (Semana 08)
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]
```

---

## 7. Cuándo usar cada estilo

```javascript
// ✅ Arrow function — para la mayoría de casos
const formatPrice = (price) => `$${price.toFixed(2)}`;
const isValid = (value) => value !== null && value !== undefined;

// ✅ Función clásica — cuando necesitas hoisting (uso antes de declarar)
function setupApp() {
  initialize();
  loadData();
}
```

> En este bootcamp **usamos arrow functions por defecto** para todo el código nuevo,
> excepto en casos donde se necesite hoisting.

---

## ✅ Checklist de Verificación

- [ ] ¿Usas `const` para declarar la arrow function (no `var`)?
- [ ] ¿Si tiene una sola expresión, usas retorno implícito?
- [ ] ¿Si retorna un objeto, lo envuelves en `()`?
- [ ] ¿Los paréntesis están presentes en los parámetros?
- [ ] ¿El nombre describe claramente qué hace la función?

---

## 📚 Recursos

- [MDN: Arrow function expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [javascript.info: Arrow functions](https://es.javascript.info/arrow-functions-basics)
