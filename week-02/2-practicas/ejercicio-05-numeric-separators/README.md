# Ejercicio 05: Numeric Separators (ES2021)

## 🎯 Objetivo

Practicar el uso de separadores numéricos (`_`) para mejorar la legibilidad de números grandes en JavaScript moderno. Característica introducida en ES2021.

## ⏱️ Duración estimada

20 minutos

## 📋 Instrucciones

Abre el archivo `starter/index.js` y descomenta cada sección en orden.

```bash
node starter/index.js
```

---

### Paso 1: Números sin separadores (antes de ES2021)

Sin separadores, los números grandes son difíciles de leer:

```javascript
const population = 1250000000;
const priceInCents = 29900;
const distanceKm = 384400;
```

¿Cuántos ceros tiene `1250000000`? ¿Es millones, miles de millones...?

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Números con separadores (ES2021)

El guión bajo `_` actúa como separador visual. No afecta el valor del número.

```javascript
const population = 1_250_000_000; // 1.25 mil millones
const priceInCents = 29_900; // 29 mil 900
const distanceKm = 384_400; // 384 mil 400 km (Luna-Tierra)
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

### Paso 3: El valor no cambia

Los separadores son solo visuales. `1_000 === 1000` es `true`.

```javascript
console.log(1_000 === 1000); // true
console.log(1_000_000 === 1000000); // true
console.log(1_234.567_89 === 1234.56789); // true
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Se puede usar en decimales y fracciones pequeñas

```javascript
const smallNumber = 0.000_001; // 0.000001
const bigDecimal = 1_234_567.89; // 1234567.89
const hexColor = 0xff_ff_ff; // 16777215 (blanco en hex)
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

### Paso 5: Reescribir números para mayor legibilidad

Corrige los números del bloque del Paso 5 agregando separadores donde mejoren la lectura.

**Abre `starter/index.js`** y sigue las instrucciones del Paso 5.

---

## ✅ Al terminar

- ¿En qué situaciones usarías separadores numéricos?
- ¿Afectan el rendimiento o el valor del número?
- ¿Es `1_000` lo mismo que `1000`?

Compara tu solución con `solution/index.js`.
