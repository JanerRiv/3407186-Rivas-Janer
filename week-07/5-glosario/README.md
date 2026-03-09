# 📖 Glosario — Semana 07: Funciones

Términos clave de la semana, ordenados alfabéticamente.

---

## A

### Acumulador

Variable que va sumando (o concatenando) valores dentro de un bucle. Con funciones puras, el acumulador es un parámetro o variable local; nunca una variable global mutable.

```javascript
// Acumulador dentro de una función pura (local, sin efectos secundarios)
const sumAll = (numbers) => {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
};
```

### Argumento

Valor concreto que se pasa a una función al momento de **llamarla** (invocarla). No confundir con "parámetro".

```javascript
greet("María"); // "María" es el argumento
```

### Arrow function (función flecha)

Sintaxis compacta para escribir funciones introducida en ES6. Usa el operador `=>`.

```javascript
const double = (x) => x * 2;
```

---

## B

### Bloque de función

El cuerpo de la función delimitado por llaves `{ }`. Contiene las instrucciones que se ejecutan al llamar la función.

---

## C

### Callback

Función que se pasa como argumento a otra función, para que sea llamada en un momento determinado.

```javascript
const executeOperation = (a, b, operation) => operation(a, b);
executeOperation(4, 2, (x, y) => x + y); // callback inline
```

### Cierre / Closure

Capacidad de una función de recordar las variables del scope en el que fue creada, incluso después de que ese scope ya no esté activo. Ver semanas 11-12 para profundizar.

```javascript
const createCounter = () => {
  let count = 0;
  return () => ++count; // recuerda `count`
};
```

### Cuerpo (de función)

Bloque de código `{ ... }` que contiene las instrucciones de la función. Se ejecuta cada vez que se llama la función.

---

## D

### Declaración de función

Forma de definir una función usando la palabra clave `function`. Es **hoisted** (disponible antes de su posición en el código).

```javascript
function greet(name) {
  return `Hola, ${name}!`;
}
```

---

## E

### Efecto secundario

Cualquier acción de una función que modifica algo fuera de su propio scope: imprimir en consola, modificar una variable externa, hacer una petición a servidor, etc. Las funciones con efectos secundarios **no son funciones puras**.

### Expresión de función

Función asignada a una variable. No es hoisted.

```javascript
const greet = function (name) {
  return `Hola, ${name}!`;
};
```

---

## F

### Función

Bloque de código reutilizable que realiza una tarea específica. Recibe datos (parámetros), los procesa, y puede devolver un resultado (`return`).

```javascript
const sum = (a, b) => a + b;
```

### Función anónima

Función sin nombre. Común en callbacks y en expresiones de función.

```javascript
const result = [1, 2, 3].map(function (n) {
  return n * 2;
});
```

### Función de orden superior (Higher-Order Function)

Función que recibe otra función como argumento, o que devuelve una función como resultado.

```javascript
const applyTwice = (fn, x) => fn(fn(x));
```

### Función flecha → ver _Arrow function_

### Función pura

Función que siempre devuelve el mismo resultado para los mismos argumentos y no produce efectos secundarios.

```javascript
// Pura: mismo input → mismo output, no modifica nada externo
const calculateTax = (price, rate) => +(price * rate).toFixed(2);
```

---

## H

### Hoisting

Comportamiento de JavaScript que "eleva" las declaraciones de función al inicio del scope antes de ejecutar el código. **Solo aplica a `function` declaration**, no a `const`/`let` ni a arrow functions.

```javascript
// Funciona por hoisting:
greet("Ana");
function greet(name) {
  console.log(`Hola, ${name}`);
}
```

---

## I

### Implícita, retorno (return implícito)

En arrow functions de una sola expresión, el `return` se puede omitir.

```javascript
const square = (x) => x * x; // return implícito
```

---

## L

### Llamada (call / invocación)

Ejecutar una función usando su nombre seguido de paréntesis `()`.

```javascript
greet("Carlos"); // llamada / invocación
```

---

## P

### Parámetro

Nombre de variable definido en la firma de la función, que recibe el valor del argumento al llamarla.

```javascript
const greet = (name) => `Hola, ${name}`;
//             ^^^^  ← parámetro
```

### Parámetro por defecto

Valor que toma un parámetro cuando el argumento correspondiente es `undefined` o se omite.

```javascript
const greet = (name = "visitante") => `Hola, ${name}`;
```

---

## R

### `return`

Instrucción que termina la ejecución de una función y devuelve un valor al código que la llamó. Si no se usa `return`, la función devuelve `undefined`.

```javascript
const add = (a, b) => {
  return a + b; // devuelve el resultado
};
```

---

## S

### Scope (Ámbito)

Región del código donde una variable es accesible. JavaScript tiene scope global y scope local (dentro de funciones y bloques).

### Scope global

Zona accesible desde cualquier parte del programa. Las variables globales deben ser constantes (`UPPER_SNAKE_CASE`).

### Scope local

Zona accesible solo dentro de la función donde se declaró la variable. Las variables locales se destruyen al terminar la ejecución de la función.

---

## U

### `undefined`

Valor que devuelve una función sin `return` explícito, o cuando se accede a una variable declarada pero sin valor asignado.

```javascript
const noReturn = () => {
  console.log("sin return");
};
console.log(noReturn()); // undefined
```

---

## V

### Valor de primera clase (First-class value)

En JavaScript, las funciones son "ciudadanos de primera clase": se pueden asignar a variables, pasar como argumentos y devolver como resultados, igual que cualquier otro valor.

```javascript
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
```

---

_Total: 20 términos | Semana 07 — Funciones_
