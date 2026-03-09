# Ejercicio 02 — Métodos de Transformación

## 🎯 Objetivo

Practicar `toUpperCase`, `toLowerCase`, `trim`, `replace`, `replaceAll` y `repeat`.

---

## Paso 1: `toUpperCase` y `toLowerCase`

```javascript
const title = "JavaScript ES2023";
console.log(title.toUpperCase()); // 'JAVASCRIPT ES2023'
console.log(title.toLowerCase()); // 'javascript es2023'
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

## Paso 2: `trim`, `trimStart`, `trimEnd`

```javascript
const raw = "   hola mundo   ";
console.log(raw.trim()); // 'hola mundo'
console.log(raw.trimStart()); // 'hola mundo   '
console.log(raw.trimEnd()); // '   hola mundo'
```

**Descomenta** la sección del Paso 2.

---

## Paso 3: `replace` vs `replaceAll`

```javascript
const msg = "El gato y el gato";
console.log(msg.replace("gato", "perro")); // 'El perro y el gato'
console.log(msg.replaceAll("gato", "perro")); // 'El perro y el perro'
```

**Descomenta** la sección del Paso 3.

---

## Paso 4: `repeat`

```javascript
const line = "=".repeat(20);
console.log(line); // '===================='
```

**Descomenta** la sección del Paso 4.

---

## Paso 5: Encadenamiento

```javascript
const input = "  JavaScript  ";
const result = input.trim().toLowerCase().replace(" ", "-");
```

**Descomenta** la sección del Paso 5.
