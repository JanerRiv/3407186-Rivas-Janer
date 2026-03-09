# Ejercicio 03: Operadores de Comparación

## 🎯 Objetivo

Practicar el uso de `===`, `!==`, `>`, `<`, `>=`, `<=` y comprender por qué **siempre** debes usar `===` en lugar de `==`.

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

## Paso 1: `===` y `!==` — Comparación estricta

Los operadores `===` y `!==` comparan **valor Y tipo** al mismo tiempo.

```javascript
const a = 10;
const b = 10;
console.log(a === b); // true — mismo valor, mismo tipo

const c = "10";
console.log(a === c); // false — mismo valor, ¡pero tipos diferentes!
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Por qué NO usar `==`

El operador `==` hace **coerción de tipos** antes de comparar. Esto genera resultados inesperados y es fuente de bugs difíciles de detectar.

```javascript
console.log(0 == false); // true  ← ¡peligroso!
console.log("" == false); // true  ← ¡peligroso!
console.log(0 === false); // false ← correcto
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

## Paso 3: Operadores de orden (`>`, `<`, `>=`, `<=`)

Comparan valores numéricos (y también strings de forma lexicográfica).

```javascript
console.log(10 > 5); // true
console.log(10 >= 10); // true — mayor O igual
console.log(3 < 2); // false
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

## Paso 4: Validaciones prácticas

Las comparaciones son la base de toda validación. Combínalas para construir condiciones reales.

```javascript
const age = 20;
const canVote = age >= 18;
console.log("¿Puede votar?", canVote); // true
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

## ✅ Checklist

- [ ] Entiendo la diferencia entre `===` y `==`
- [ ] Sé por qué `==` es peligroso con los ejemplos del Paso 2
- [ ] Uso `===` y `!==` en mis comparaciones
- [ ] Los operadores `>`, `<`, `>=`, `<=` funcionan correctamente
