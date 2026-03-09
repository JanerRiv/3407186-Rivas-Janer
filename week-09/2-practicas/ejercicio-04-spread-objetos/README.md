# Ejercicio 04: Spread con Objetos

## 🎯 Objetivo

Dominar el operador spread `{...obj}` para copiar objetos, fusionar múltiples objetos y aplicar el patrón de **actualización inmutable** sin mutar el objeto original.

## ⏱️ Tiempo estimado: 35 minutos

## 📋 Instrucciones

Abre `starter/index.js` y descomenta cada sección siguiendo los pasos indicados.

---

## 📚 Pasos

### Paso 1: Problema de Referencias (= no copia)

Asignar un objeto con `=` no crea una copia — solo copia la referencia.
Modificar la "copia" afecta el original.

```javascript
const original = { name: "Ana", score: 85 };
const copy = original; // ⚠️ solo copia la referencia

copy.score = 100;
console.log(original.score); // 100 — ¡el original también cambió!
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: Copia Superficial con Spread `{...obj}`

El spread crea un **nuevo objeto** con las mismas propiedades.
Modificar la copia no afecta el original.

```javascript
const original = { name: "Ana", score: 85 };
const copy = { ...original }; // ✅ copia real

copy.score = 100;
console.log(original.score); // 85 — el original no cambió
console.log(copy.score); // 100
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

### Paso 3: Fusionar Objetos

Se pueden combinar múltiples objetos con spread.
Si dos objetos tienen la misma clave, **el último gana**.

```javascript
const defaults = { theme: "light", language: "en", fontSize: 14 };
const userConfig = { theme: "dark", language: "es" };

const finalConfig = { ...defaults, ...userConfig };
// { theme: "dark", language: "es", fontSize: 14 }
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

### Paso 4: Actualización Inmutable

El patrón más usado en JavaScript moderno: crear un nuevo objeto con una o más propiedades cambiadas, sin tocar el original.

```javascript
const product = { id: 1, name: "Laptop", price: 1200, available: true };

// Actualizar el precio sin mutar el objeto
const discounted = { ...product, price: 999 };
// product.price sigue siendo 1200
// discounted.price es 999
```

También funciona para agregar propiedades nuevas al vuelo:

```javascript
const withRating = { ...product, rating: 4.8, reviews: 142 };
```

**Abre `starter/index.js`** y descomenta la Sección 4.

---

## ✅ Resultado esperado

```
=== Sección 1: Problema de Referencias ===
Modificando 'copy' con =
original.score: 100 ← ¡también cambió!
copy.score: 100

=== Sección 2: Copia con Spread ===
Modificando 'spreadCopy'
original.score: 85 ← sin cambios ✓
spreadCopy.score: 100

=== Sección 3: Fusionar Objetos ===
Defaults:    { theme: 'light', language: 'en', fontSize: 14, animations: true }
User config: { theme: 'dark', language: 'es' }
Final config:
  theme      : dark
  language   : es
  fontSize   : 14
  animations : true

=== Sección 4: Actualización Inmutable ===
Original: { id: 1, name: 'Laptop', price: 1200, available: true }
Descuento: { id: 1, name: 'Laptop', price: 999, available: true }
Con rating: { id: 1, name: 'Laptop', price: 1200, available: true, rating: 4.8 }
original.price sigue siendo: 1200
```

## 🔗 Recursos

- [Spread syntax — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Object.assign() vs spread — javascript.info](https://javascript.info/object-copy)
