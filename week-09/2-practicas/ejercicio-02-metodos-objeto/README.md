# Ejercicio 02: Métodos de Objeto y `Object.*`

## 🎯 Objetivo

Agregar métodos a objetos y usar `Object.keys()`, `Object.values()` y `Object.entries()` para inspeccionar y transformar objetos.

---

## Paso 1: Métodos en un Objeto

Un método es una función almacenada como propiedad:

```javascript
const converter = {
  kmToMiles: (km) => km * 0.621371,
  milesToKm: (miles) => miles * 1.60934,
};

console.log(converter.kmToMiles(100)); // 62.1371
console.log(converter.milesToKm(62)); // 99.779...
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

## Paso 2: `Object.keys()` — Claves

```javascript
const product = { id: 1, name: "Laptop", price: 1200, available: true };

console.log(Object.keys(product)); // ["id", "name", "price", "available"]
console.log(`Propiedades: ${Object.keys(product).length}`); // 4
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

## Paso 3: `Object.values()` — Valores

```javascript
const scores = { math: 85, history: 72, science: 91, language: 78 };

const values = Object.values(scores);
const total = values.reduce((sum, v) => sum + v, 0);
const average = total / values.length;

console.log(`Promedio: ${average.toFixed(1)}`); // 81.5
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

## Paso 4: `Object.entries()` — Formatear Reporte

```javascript
const config = { host: "localhost", port: 3000, debug: false };

Object.entries(config).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});
```

**Abre `starter/index.js`** y descomenta la Sección 4.
