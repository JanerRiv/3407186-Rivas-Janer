# Arrays: Crear y Acceder

> **Semana 08 — Teoría 01/05**

Un **array** es una lista ordenada de valores. Es la estructura de datos más usada en JavaScript: permite agrupar elementos relacionados y trabajar con colecciones completas.

---

## 🎯 Objetivos

- Crear arrays con la sintaxis de corchetes `[]`
- Acceder a elementos por su índice (base 0)
- Usar `.length` para conocer el tamaño del array
- Usar `.at()` para acceder con índices negativos (ES2022)
- Entender que los arrays pueden contener cualquier tipo de dato

---

## 1. ¿Qué es un Array?

Imagina que tienes cinco notas escritas en papeles separados. Un array es como una **carpeta numerada** donde cada papel ocupa un lugar específico.

```javascript
// Un array de nombres — lista ordenada
const fruits = ["manzana", "naranja", "uva", "pera", "mango"];
//              índice 0    índice 1   índice 2  índice 3  índice 4
```

Los arrays usan **corchetes** `[]` y los elementos se separan con **comas**.

---

## 2. Crear Arrays

```javascript
// Array vacío (se llenará después)
const names = [];

// Array de strings
const colors = ["rojo", "verde", "azul"];

// Array de números
const scores = [85, 92, 78, 95, 61];

// Array de booleanos
const flags = [true, false, true, true];

// Array mixto (evitar en código de producción, útil para aprender)
const mixed = ["texto", 42, true, null];

// Array con const: el array sí puede modificarse, pero no reasignarse
const items = ["a", "b", "c"];
items.push("d"); // ✅ válido — modifica el contenido
// items = ["x", "y"]; // ❌ error — no se puede reasignar const
```

---

## 3. Acceder por Índice

Los índices **comienzan en 0**, no en 1.

```javascript
const planets = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter"];
//               índice 0     índice 1  índice 2  índice 3  índice 4

console.log(planets[0]); // "Mercurio" — primer elemento
console.log(planets[2]); // "Tierra"   — tercer elemento
console.log(planets[4]); // "Júpiter"  — quinto elemento (último)

// Índice fuera de rango — devuelve undefined (no error)
console.log(planets[10]); // undefined
```

---

## 4. La Propiedad `.length`

`.length` devuelve el número total de elementos del array.

```javascript
const colors = ["rojo", "verde", "azul", "amarillo"];

console.log(colors.length); // 4

// Truco para acceder al último elemento (antes de .at())
const lastColor = colors[colors.length - 1];
console.log(lastColor); // "amarillo"
```

---

## 5. `.at()` — Índices Negativos (ES2022)

El método `.at()` acepta índices negativos: `-1` es el último elemento, `-2` el penúltimo, etc.

```javascript
const scores = [85, 92, 78, 95, 61];

// Con bracket notation (requiere cálculo manual)
console.log(scores[scores.length - 1]); // 61 — último
console.log(scores[scores.length - 2]); // 95 — penúltimo

// Con .at() — más limpio y legible
console.log(scores.at(-1)); // 61 — último
console.log(scores.at(-2)); // 95 — penúltimo
console.log(scores.at(0)); // 85 — primero (también funciona con positivos)
```

### ¿Por qué usar `.at()`?

- Código más legible: `array.at(-1)` vs `array[array.length - 1]`
- Estándar moderno ES2022 — usar siempre en código nuevo
- Funciona igual que el acceso por índice para positivos

---

## 6. Arrays con Datos Tipados

En la práctica, los arrays buenos tienen **un solo tipo de dato**:

```javascript
// ✅ Array de strings — lista de nombres
const productNames = ["laptop", "teclado", "monitor", "ratón"];

// ✅ Array de números — lista de precios
const prices = [1299.99, 45.5, 399.0, 25.0];

// ✅ Array de booleanos — disponibilidad
const available = [true, false, true, true];

// ✅ Array de objetos (semana 09) — lista estructurada
// const products = [{ name: "laptop", price: 1299.99 }, ...];
```

---

## 7. Modificar Elementos Directamente

```javascript
const seasons = ["primavera", "verano", "otoño", "invierno"];

// Modificar el elemento en índice 1
seasons[1] = "VERANO";
console.log(seasons); // ["primavera", "VERANO", "otoño", "invierno"]
```

> ⚠️ La modificación directa por índice funciona, pero en la mayoría de casos es mejor usar los métodos de arrays que veremos en los siguientes temas.

---

## 8. Arrays dentro de Arrays (Anidados)

```javascript
// Tabla de datos 2D (matriz)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Acceder: matrix[fila][columna]
console.log(matrix[0][0]); // 1 — fila 0, columna 0
console.log(matrix[1][2]); // 6 — fila 1, columna 2
console.log(matrix[2][1]); // 8 — fila 2, columna 1
```

---

## 📊 Resumen Visual

| Concepto         | Sintaxis                 | Ejemplo                              |
| ---------------- | ------------------------ | ------------------------------------ |
| Crear array      | `const arr = ["a", "b"]` | `const fruits = ["manzana", "pera"]` |
| Primer elemento  | `arr[0]`                 | `fruits[0]` → `"manzana"`            |
| Último (manual)  | `arr[arr.length - 1]`    | `fruits[fruits.length - 1]`          |
| Último (moderno) | `arr.at(-1)`             | `fruits.at(-1)` → `"pera"`           |
| Cantidad         | `arr.length`             | `fruits.length` → `2`                |
| Modificar        | `arr[i] = valor`         | `fruits[0] = "limón"`                |

---

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de poder:

- [ ] Crear un array de al menos 5 strings
- [ ] Acceder al primer, tercer y último elemento
- [ ] Obtener el tamaño con `.length`
- [ ] Usar `.at(-1)` para el último y `.at(-2)` para el penúltimo
- [ ] Modificar un elemento directamente por índice

---

## 📚 Recursos

- [MDN — Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Array.prototype.at()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [javascript.info — Arrays](https://javascript.info/array)
