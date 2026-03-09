# Ejercicio 02: Tipos Primitivos Completos

## 🎯 Objetivo

Explorar los cinco tipos primitivos de JavaScript: `string`, `number`, `boolean`, `null` y `undefined`. Usar `typeof` para identificar el tipo de cualquier valor.

## ⏱️ Duración estimada

30 minutos

## 📋 Instrucciones

Abre el archivo `starter/index.js` y descomenta cada sección en orden.

```bash
node starter/index.js
```

---

### Paso 1: `string` y `number`

Los dos tipos más comunes en el día a día:

```javascript
const city = "Bogotá";
const population = 8_000_000;
console.log(typeof city); // "string"
console.log(typeof population); // "number"
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `boolean`

Solo dos valores posibles: `true` o `false`.

```javascript
const isOpen = true;
const hasPaid = false;
console.log(typeof isOpen); // "boolean"
console.log(typeof hasPaid); // "boolean"
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

### Paso 3: `undefined`

Una variable declarada pero **sin valor asignado** es `undefined`.

```javascript
let notAssigned;
console.log(notAssigned); // undefined
console.log(typeof notAssigned); // "undefined"
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

### Paso 4: `null` — ausencia intencional

`null` significa "intencionalmente vacío". Lo asignamos nosotros.

```javascript
const selectedUser = null; // no hay usuario seleccionado aún
console.log(selectedUser); // null
console.log(typeof selectedUser); // "object" ← bug histórico de JS
console.log(selectedUser === null); // true ← así se detecta null
```

> ⚠️ `typeof null === "object"` es un **bug histórico** de JavaScript que no se puede corregir para no romper código antiguo. Siempre detecta `null` con `=== null`.

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

### Paso 5: `typeof` para todos los tipos

Usa `typeof` como herramienta de diagnóstico:

```javascript
console.log(typeof "hola"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ← bug histórico
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
```

**Abre `starter/index.js`** y descomenta la sección del Paso 5.

---

## ✅ Al terminar

- ¿Cuál es la diferencia entre `null` y `undefined`?
- ¿Por qué `typeof null` devuelve `"object"`?
- ¿Cómo detectas correctamente si algo es `null`?

Compara tu solución con `solution/index.js`.
