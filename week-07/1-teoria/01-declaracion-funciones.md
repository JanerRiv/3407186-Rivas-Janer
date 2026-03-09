# 01 — Declaración de Funciones

## 🎯 Objetivos

- Entender qué es una función y por qué es útil
- Declarar funciones con la palabra clave `function`
- Usar parámetros para que las funciones reciban información
- Usar `return` para que las funciones devuelvan un resultado

---

## 1. ¿Qué es una función?

Una función es un **bloque de código reutilizable** al que le damos un nombre. En lugar de escribir el mismo código varias veces, lo escribimos una vez dentro de una función y lo llamamos cuando lo necesitamos.

```
función = nombre + parámetros + cuerpo + return
```

**Sin funciones** — código repetido:

```javascript
// ❌ Código repetido — difícil de mantener
console.log("Bienvenido, Ana. Hoy es lunes.");
console.log("Bienvenido, Carlos. Hoy es martes.");
console.log("Bienvenido, María. Hoy es miércoles.");
```

**Con funciones** — código organizado:

```javascript
// ✅ Una función que reutilizamos
const greet = (name, day) => `Bienvenido, ${name}. Hoy es ${day}.`;

console.log(greet("Ana", "lunes"));
console.log(greet("Carlos", "martes"));
console.log(greet("María", "miércoles"));
```

---

## 2. Anatomía de una función

```javascript
//    ┌─ palabra clave
//    │     ┌─ nombre de la función
//    │     │         ┌─ parámetros (información que recibe)
//    │     │         │
function calculateArea(width, height) {
  // ───── cuerpo de la función ─────
  const area = width * height;
  return area; // ← devuelve el resultado
  //└─────────────────────────────────┘
}
```

| Parte             | Descripción                                        |
| ----------------- | -------------------------------------------------- |
| `function`        | Palabra clave que declara la función               |
| `calculateArea`   | Nombre en camelCase (descriptivo, en inglés)       |
| `(width, height)` | Parámetros — variables locales de la función       |
| `{ ... }`         | Cuerpo — el código que se ejecuta                  |
| `return`          | Devuelve el resultado hacia quien llamó la función |

---

## 3. Declarar y llamar una función

Declarar una función **no la ejecuta**. Para ejecutarla, hay que **llamarla**.

```javascript
// Declaración — define qué hace la función
function sayHello(name) {
  return `Hola, ${name}!`;
}

// Llamada — la ejecuta y usa el resultado
const message = sayHello("Ana");
console.log(message); // "Hola, Ana!"

// Se puede llamar múltiples veces con distintos argumentos
console.log(sayHello("Carlos")); // "Hola, Carlos!"
console.log(sayHello("María")); // "Hola, María!"
```

> **Parámetro** = variable en la declaración (`name`)
> **Argumento** = valor real al llamar (`"Ana"`)

---

## 4. `return` — devolver valores

`return` hace dos cosas:

1. **Devuelve** un valor al código que llamó la función
2. **Termina** la ejecución de la función

```javascript
// Función que devuelve un valor calculado
function calculateDiscount(price, percentage) {
  const discount = price * (percentage / 100);
  return price - discount; // devuelve el precio final
}

// El valor devuelto se puede usar en cualquier expresión
const finalPrice = calculateDiscount(100, 20);
console.log(finalPrice); // 80

// También directamente en console.log
console.log(calculateDiscount(200, 10)); // 180
```

### ¿Qué pasa si no hay `return`?

Si una función no tiene `return`, devuelve `undefined`:

```javascript
function greetWithoutReturn(name) {
  console.log(`Hola, ${name}`); // solo imprime, no devuelve
}

const result = greetWithoutReturn("Ana");
console.log(result); // undefined ← nada fue devuelto
```

---

## 5. Múltiples parámetros y sin parámetros

```javascript
// Sin parámetros — no recibe información externa
function showCurrentYear() {
  return new Date().getFullYear();
}
console.log(showCurrentYear()); // 2026

// Un parámetro
function doubleValue(number) {
  return number * 2;
}
console.log(doubleValue(5)); // 10

// Múltiples parámetros
function formatFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(formatFullName("Juan", "Pérez")); // "Juan Pérez"
```

---

## 6. Hoisting — funciones declaradas vs expresiones

Las funciones declaradas con `function` se **"elevan"** al inicio del scope: puedes llamarlas antes de declararlas.

```javascript
// ✅ Funciona aunque la llamada va antes que la declaración
console.log(add(3, 4)); // 7

function add(a, b) {
  return a + b;
}
```

> Esto se llama **hoisting**. En la Semana 11 lo exploraremos en profundidad.
> Por ahora, conviene declarar las funciones antes de usarlas para mayor claridad.

---

## ✅ Checklist de Verificación

- [ ] ¿La función tiene un nombre descriptivo en camelCase?
- [ ] ¿Los parámetros tienen nombres que describen qué representan?
- [ ] ¿La función devuelve un valor con `return` (cuando corresponde)?
- [ ] ¿Se está usando el valor devuelto por `return`?
- [ ] ¿La función hace una sola cosa?

---

## 📚 Recursos

- [MDN: function declaration](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function)
- [javascript.info: Functions](https://es.javascript.info/function-basics)
