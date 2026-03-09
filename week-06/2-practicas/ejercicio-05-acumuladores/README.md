# Ejercicio 05 — Contadores y Acumuladores

> **Semana 06 · Práctica 5/5**

## 🎯 Objetivo

Implementar los patrones fundamentales de procesamiento de datos con bucles: contador, acumulador, máximo y mínimo.

---

## Instrucciones

Abre `starter/index.js` y descomenta las secciones en orden.

---

### Paso 1: Contador — contar ocurrencias

Contar cuántos elementos cumplen una condición.

```javascript
const results = ["pass", "fail", "pass", "pass", "fail", "pass"];
let passCount = 0;

for (const result of results) {
  if (result === "pass") {
    passCount++;
  }
}

console.log(`Aprobados: ${passCount} de ${results.length}`);
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Acumulador — sumar valores

Calcular el total sumando cada elemento.

```javascript
const prices = [15.5, 8.0, 23.0, 6.5, 12.0];
let total = 0;

for (const price of prices) {
  total += price;
}

const average = total / prices.length;
console.log(`Total: $${total}`);
console.log(`Promedio: $${average.toFixed(2)}`);
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: Máximo y mínimo

Encontrar el valor más alto y el más bajo de una lista.

```javascript
const measurements = [34, 67, 21, 89, 45, 12, 78];
let maxVal = measurements[0];
let minVal = measurements[0];

for (const value of measurements) {
  if (value > maxVal) maxVal = value;
  if (value < minVal) minVal = value;
}

console.log(`Máximo: ${maxVal}`);
console.log(`Mínimo: ${minVal}`);
console.log(`Rango: ${maxVal - minVal}`);
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: Combinar contador + acumulador

Usar múltiples patrones en el mismo bucle.

```javascript
const evaluations = [72, 88, 45, 91, 63, 55, 84, 77];
let totalScore = 0;
let passedCount = 0;
let highestScore = evaluations[0];

for (const score of evaluations) {
  totalScore += score;
  if (score >= 60) passedCount++;
  if (score > highestScore) highestScore = score;
}

const avgScore = totalScore / evaluations.length;
console.log(`Promedio:  ${avgScore.toFixed(1)}`);
console.log(`Aprobados: ${passedCount}/${evaluations.length}`);
console.log(`Más alto:  ${highestScore}`);
```

**Descomenta la sección del Paso 4.**

---

### Paso 5: Acumular en un array — construir lista filtrada

Usar un array vacío como acumulador para recopilar elementos que cumplen una condición.

```javascript
const allItems = [
  "activo",
  "inactivo",
  "activo",
  "pendiente",
  "activo",
  "inactivo",
];
const activeItems = [];

for (const item of allItems) {
  if (item === "activo") {
    activeItems.push(item);
  }
}

console.log(`Total: ${allItems.length}`);
console.log(`Activos: ${activeItems.length}`);
```

**Descomenta la sección del Paso 5.**

---

## ✅ Verificación

Salida esperada de `solution/index.js`:

```
--- Paso 1: contador ---
Aprobados: 4 de 6

--- Paso 2: acumulador ---
Total: $65
Promedio: $13.00

--- Paso 3: máximo y mínimo ---
Máximo: 89
Mínimo: 12
Rango: 77

--- Paso 4: combinar patrones ---
Promedio:  71.9
Aprobados: 6/8
Más alto:  91

--- Paso 5: acumular en array ---
Total: 6
Activos: 3
```
