# Ejercicio 02: Métodos de Mutación

## 🎯 Objetivo

Practicar los métodos que **modifican el array original**: `push`, `pop`, `shift`, `unshift` y `splice`.

---

## Paso 1: `push()` y `pop()`

`push()` agrega al final. `pop()` elimina del final y devuelve el elemento.

```javascript
const queue = ["tarea1", "tarea2"];

queue.push("tarea3");
console.log(queue); // ["tarea1", "tarea2", "tarea3"]

const removed = queue.pop();
console.log(removed); // "tarea3"
console.log(queue); // ["tarea1", "tarea2"]
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

## Paso 2: `unshift()` y `shift()`

`unshift()` agrega al inicio. `shift()` elimina del inicio y devuelve el elemento.

```javascript
const list = ["segundo", "tercero"];

list.unshift("primero");
console.log(list); // ["primero", "segundo", "tercero"]

const first = list.shift();
console.log(first); // "primero"
console.log(list); // ["segundo", "tercero"]
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

## Paso 3: `splice()` — Eliminar e Insertar

`splice(inicio, cantEliminar, ...agregar)` puede eliminar, insertar o reemplazar.

```javascript
const months = ["ene", "feb", "BORRAR", "abr"];

// Eliminar "BORRAR" (1 elemento en índice 2)
months.splice(2, 1);
console.log(months); // ["ene", "feb", "abr"]

// Insertar "mar" en índice 2 (sin eliminar)
months.splice(2, 0, "mar");
console.log(months); // ["ene", "feb", "mar", "abr"]
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

## Paso 4: Simulación de Cola (Queue)

Una **cola** es una estructura FIFO: el primero en entrar es el primero en salir. Se construye con `push` (agregar al final) y `shift` (tomar del inicio).

```javascript
const orderQueue = [];

orderQueue.push("Pedido A");
orderQueue.push("Pedido B");
orderQueue.push("Pedido C");
console.log(orderQueue); // ["Pedido A", "Pedido B", "Pedido C"]

const nextOrder = orderQueue.shift();
console.log(`Procesando: ${nextOrder}`); // "Pedido A"
console.log(orderQueue); // ["Pedido B", "Pedido C"]
```

**Abre `starter/index.js`** y descomenta la Sección 4.
