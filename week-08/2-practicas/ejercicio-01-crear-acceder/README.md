# Ejercicio 01: Crear y Acceder Arrays

## 🎯 Objetivo

Practicar la creación de arrays, el acceso por índice, la propiedad `.length` y el método `.at()` de ES2022.

---

## Paso 1: Crear un Array

Un array se crea con corchetes `[]`. Los elementos van separados por comas.

```javascript
const colors = ["rojo", "verde", "azul", "amarillo", "naranja"];
console.log(colors); // ["rojo", "verde", "azul", "amarillo", "naranja"]
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

## Paso 2: Acceder por Índice

El primer índice es **0**. Para el último usamos `array.length - 1` o mejor aún, `.at(-1)`.

```javascript
console.log(colors[0]); // "rojo"    — primero
console.log(colors[2]); // "azul"    — tercero
console.log(colors.at(-1)); // "naranja" — último (ES2022)
console.log(colors.at(-2)); // "amarillo" — penúltimo
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

## Paso 3: Propiedad `.length`

`.length` devuelve siempre el número total de elementos.

```javascript
console.log(`Total de colores: ${colors.length}`); // 5
console.log(`Último índice: ${colors.length - 1}`); // 4

const empty = [];
console.log(empty.length); // 0
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

## Paso 4: Modificar un Elemento

Puedes cambiar el valor de una posición directamente con `array[indice] = nuevoValor`.

```javascript
const seasons = ["primavera", "verano", "otoño", "invierno"];
seasons[1] = "VERANO";
console.log(seasons); // ["primavera", "VERANO", "otoño", "invierno"]
```

**Abre `starter/index.js`** y descomenta la Sección 4.
