# Ejercicio 05: Precedencia y Coerción

## 🎯 Objetivo

Comprender el orden en que JavaScript evalúa las operaciones, usar paréntesis para controlar la precedencia y detectar las trampas de la coerción implícita.

## ⏱️ Duración estimada

30 minutos

## 📋 Instrucciones

Abre `starter/index.js` y sigue los pasos descomentando cada sección.
Cuando termines, compara tu resultado con `solution/index.js`.

Ejecuta con:

```bash
node starter/index.js
```

---

## Paso 1: Precedencia básica

JavaScript aplica un orden fijo de evaluación. `*` y `/` **siempre** se evalúan antes que `+` y `-`.

```javascript
console.log(2 + 3 * 4); // 14, NO 20 (primero 3*4=12, luego 2+12)
console.log((2 + 3) * 4); // 20 — los paréntesis fuerzan el orden
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Usando paréntesis para claridad

Aunque la precedencia sea correcta, los paréntesis hacen el código más legible y evitan ambigüedades.

```javascript
// Fórmula sin paréntesis — difícil de leer:
const discount = 50000 - (50000 * 10) / 100;

// Con paréntesis — intención clara:
const discount2 = 50000 - (50000 * 10) / 100;
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

## Paso 3: Trampas de coerción implícita

JavaScript convierte tipos automáticamente. Esto puede producir resultados inesperados con el operador `+`.

```javascript
console.log("5" + 10); // "510" ← concatena, no suma
console.log(1 + 2 + "3"); // "33" ← 1+2=3, luego 3+"3"="33"
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

## Paso 4: Cómo evitar la coerción

Usa `Number()` para convertir strings a número antes de operar.

```javascript
const input = "42";
const result = Number(input) + 10;
console.log(result); // 52 — correcto
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

## ✅ Checklist

- [ ] `*` y `/` tienen mayor precedencia que `+` y `-`
- [ ] Los paréntesis siempre tienen la mayor precedencia
- [ ] El `+` con un string convierte el resultado a string (concatenación)
- [ ] `Number()` convierte strings a números antes de operar
