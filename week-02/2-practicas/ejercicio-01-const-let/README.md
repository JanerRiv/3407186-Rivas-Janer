# Ejercicio 01: `const` y `let`

## 🎯 Objetivo

Practicar la declaración de variables con `const` y `let`, entender cuándo usar cada uno, y comprobar por qué `var` ya no se usa en JavaScript moderno.

## ⏱️ Duración estimada

30 minutos

## 📋 Instrucciones

Abre el archivo `starter/index.js` y sigue los pasos en orden. En cada paso, **descomenta** el bloque indicado para ver el resultado en consola.

Para ejecutar el script en cada paso:

```bash
node starter/index.js
```

---

### Paso 1: Declarar con `const`

`const` es para valores que **no cambian**. Es la opción por defecto en JavaScript moderno.

```javascript
const productName = "Laptop";
const productPrice = 1299.99;
console.log(productName, productPrice);
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Declarar con `let`

`let` es para valores que **sí cambian** a lo largo del programa.

```javascript
let score = 0;
score = score + 10;
console.log("Puntaje:", score);
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

### Paso 3: `const` protege contra reasignación

Si intentas reasignar una constante, JavaScript lanza un `TypeError`. Observa el error.

```javascript
const appName = "MiApp";
appName = "OtraApp"; // ← esto lanza error
```

**Abre `starter/index.js`** y lee el bloque del Paso 3 (ya está comentado a propósito).

> 💡 El error te explica cuál es la regla: las constantes **no se pueden reasignar**.

---

### Paso 4: Por qué no usar `var`

`var` tiene comportamientos confusos: se puede redeclarar, se eleva (_hoisting_) y tiene alcance de función en lugar de bloque.

```javascript
// var se puede redeclarar sin error (¡peligroso!)
var oldStyle = "primero";
var oldStyle = "segundo"; // sin error
console.log(oldStyle);

// const y let lanzan error si intentas redeclararlos
const modern = "primero";
// const modern = "segundo"; // ← Error: already declared
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

### Paso 5: Alcance de bloque (`let` vs `var`)

`let` respeta el bloque `{ }` donde se declara. `var` lo ignora.

```javascript
if (true) {
  let blockScoped = "solo aquí";
  console.log("Dentro:", blockScoped); // funciona
}
// console.log("Fuera:", blockScoped); // ← Error con let
```

**Abre `starter/index.js`** y descomenta la sección del Paso 5.

---

## ✅ Al terminar

- ¿Cuándo usarías `const` y cuándo `let`?
- ¿En qué caso `var` puede causar bugs difíciles de encontrar?

Compara tu solución con `solution/index.js`.
