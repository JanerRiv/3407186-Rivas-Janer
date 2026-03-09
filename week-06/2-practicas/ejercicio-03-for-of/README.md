# Ejercicio 03 — `for...of`

> **Semana 06 · Práctica 3/5**

## 🎯 Objetivo

Usar `for...of` para iterar sobre arrays y strings de forma limpia y expresiva.

---

## Instrucciones

Abre `starter/index.js` y descomenta las secciones en orden.

---

### Paso 1: `for...of` sobre un array

La forma más limpia de recorrer un array cuando no necesitas el índice.

```javascript
const cities = ["Madrid", "Barcelona", "Sevilla", "Valencia"];

for (const city of cities) {
  console.log(`Ciudad: ${city}`);
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `for...of` con condicional dentro

Combinar `for...of` con `if/else` para procesar solo ciertos elementos.

```javascript
const temperatures = [28, 35, 19, 31, 22, 38, 15];

for (const temp of temperatures) {
  if (temp >= 30) {
    console.log(`🌡 Caluroso: ${temp}°C`);
  } else {
    console.log(`   Normal:   ${temp}°C`);
  }
}
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: `for...of` sobre un string

Los strings también son iterables — cada iteración da un carácter.

```javascript
const code = "JS2023";

for (const char of code) {
  console.log(char);
}
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: `for...of` con `.entries()` — índice + valor

Cuando necesitas tanto el índice como el valor.

```javascript
const podium = ["Oro", "Plata", "Bronce"];

for (const [position, medal] of podium.entries()) {
  console.log(`Puesto ${position + 1}: ${medal}`);
}
```

**Descomenta la sección del Paso 4.**

---

## ✅ Verificación

Salida esperada al ejecutar `solution/index.js`:

```
--- Paso 1: for...of básico ---
Ciudad: Madrid
Ciudad: Barcelona
Ciudad: Sevilla
Ciudad: Valencia

--- Paso 2: for...of con condicional ---
   Normal:   28°C
🌡 Caluroso: 35°C
   Normal:   19°C
🌡 Caluroso: 31°C
   Normal:   22°C
🌡 Caluroso: 38°C
   Normal:   15°C

--- Paso 3: for...of sobre string ---
J
S
2
0
2
3

--- Paso 4: for...of con entries() ---
Puesto 1: Oro
Puesto 2: Plata
Puesto 3: Bronce
```
