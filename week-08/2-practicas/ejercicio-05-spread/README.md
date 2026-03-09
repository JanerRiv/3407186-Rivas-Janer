# Ejercicio 05: Spread Operator con Arrays

## 🎯 Objetivo

Usar el operador spread `...` para copiar, fusionar y manipular arrays sin mutarlos.

---

## Paso 1: El Problema de las Referencias

Cuando asignas un array con `=`, ambas variables apuntan al **mismo espacio en memoria**. Modificar una cambia la otra.

```javascript
const original = [1, 2, 3];
const copy = original; // ❌ NO es una copia, es la misma referencia

copy.push(4);
console.log(original); // [1, 2, 3, 4] ← ¡el original cambió!
```

**La solución**: usar spread para crear una copia real:

```javascript
const safeCopy = [...original]; // ✅ nueva referencia

safeCopy.push(99);
console.log(original); // [1, 2, 3] ← intacto
console.log(safeCopy); // [1, 2, 3, 99]
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

## Paso 2: Fusionar Arrays

Con spread puedes fusionar dos o más arrays en uno nuevo:

```javascript
const fruits = ["manzana", "naranja"];
const vegetables = ["zanahoria", "espinaca"];

const groceries = [...fruits, ...vegetables];
console.log(groceries); // ["manzana", "naranja", "zanahoria", "espinaca"]
```

También puedes insertar items en posiciones específicas:

```javascript
const separator = ["---"];
const combined = [...fruits, ...separator, ...vegetables];
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

## Paso 3: Agregar Items sin Mutar

Spread te permite crear un nuevo array con items adicionales al inicio o al final:

```javascript
const tasks = ["revisar correos", "reunión de equipo"];

// Agregar al final (inmutable)
const withDeadline = [...tasks, "entregar reporte"];

// Agregar al inicio (inmutable)
const withUrgent = ["llamada urgente", ...tasks];

console.log(tasks); // sin cambios
console.log(withDeadline); // con nueva tarea al final
console.log(withUrgent); // con tarea urgente al inicio
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

## Paso 4: Spread como Argumentos de Función

Spread puede "expandir" un array en argumentos individuales para cualquier función:

```javascript
const temperatures = [18, 23, 15, 28, 21, 10, 26];

const maxTemp = Math.max(...temperatures); // equivale a Math.max(18, 23, 15, ...)
const minTemp = Math.min(...temperatures);

console.log(`Máxima: ${maxTemp}°C`); // 28
console.log(`Mínima: ${minTemp}°C`); // 10
```

**Abre `starter/index.js`** y descomenta la Sección 4.
