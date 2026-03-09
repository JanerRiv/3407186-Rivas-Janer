# Arrays: Iteración y Transformación

> **Semana 08 — Teoría 04/05**

Recorrer un array elemento por elemento es la operación más frecuente en programación. JavaScript ofrece varios métodos para iterar y transformar arrays de forma elegante: `forEach`, `map` y `filter`.

---

## 🎯 Objetivos

- Recorrer arrays ejecutando código por cada elemento con `forEach()`
- Transformar todos los elementos de un array con `map()`
- Seleccionar elementos que cumplen una condición con `filter()`
- Distinguir cuándo usar cada método

---

## 1. `for...of` — Recordatorio

Ya lo conoces de semana 06. Es la forma más directa de iterar:

```javascript
const fruits = ["manzana", "naranja", "uva"];

for (const fruit of fruits) {
  console.log(`Fruta: ${fruit}`);
}
// Fruta: manzana
// Fruta: naranja
// Fruta: uva
```

`for...of` es ideal cuando necesitas `break` o `continue`. Los métodos siguientes son más expresivos para casos comunes.

---

## 2. `forEach()` — Ejecutar una Acción por Elemento

`forEach()` ejecuta una función **una vez por cada elemento** del array. Es como un `for...of` pero con sintaxis de callback.

- **Devuelve**: `undefined` (no crea un nuevo array)
- **Propósito**: efectos secundarios (imprimir, modificar algo externo)

```javascript
const numbers = [1, 2, 3, 4, 5];

// Con function anónima
numbers.forEach(function (number) {
  console.log(`Número: ${number}`);
});

// Con arrow function (estilo ES2023 — preferido)
numbers.forEach((number) => {
  console.log(`Número: ${number}`);
});

// El callback recibe también el índice (opcional)
numbers.forEach((number, index) => {
  console.log(`[${index}] → ${number}`);
});
// [0] → 1
// [1] → 2
// ...
```

---

## 3. `map()` — Transformar Cada Elemento

`map()` crea un **nuevo array** con los resultados de aplicar una función a cada elemento. El array original **no se modifica**.

- **Devuelve**: nuevo array con el mismo número de elementos
- **Propósito**: transformar / procesar cada elemento

```javascript
const prices = [100, 250, 80, 320];

// Calcular precios con IVA (19%)
const pricesWithTax = prices.map((price) => +(price * 1.19).toFixed(2));
console.log(pricesWithTax); // [119, 297.5, 95.2, 380.8]
console.log(prices); // [100, 250, 80, 320] — sin cambios

// Transformar strings
const names = ["ana", "pedro", "lucía"];
const capitalizedNames = names.map(
  (name) => name[0].toUpperCase() + name.slice(1),
);
console.log(capitalizedNames); // ["Ana", "Pedro", "Lucía"]

// Extraer una propiedad de objetos (semana 09 con más detalle)
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Pedro" },
];
const userNames = users.map((user) => user.name);
console.log(userNames); // ["Ana", "Pedro"]
```

### ⚠️ Error Común con `map()`

```javascript
// ❌ INCORRECTO — usar map para efectos (como si fuera forEach)
const doubled = numbers.map((n) => {
  console.log(n * 2); // efecto — no retorna nada
});
console.log(doubled); // [undefined, undefined, ...]  ← mal!

// ✅ CORRECTO — map siempre retorna el nuevo valor
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

---

## 4. `filter()` — Seleccionar Elementos

`filter()` crea un **nuevo array** con todos los elementos que pasan la condición del callback. El array original **no se modifica**.

- **Devuelve**: nuevo array con los elementos que cumplieron la condición (puede ser vacío)
- **Propósito**: filtrar / seleccionar elementos
- **El callback debe devolver**: `true` (incluir) o `false` (excluir)

```javascript
const scores = [45, 82, 60, 91, 38, 75, 88];

// Filtrar puntajes aprobatorios (>= 60)
const passing = scores.filter((score) => score >= 60);
console.log(passing); // [82, 60, 91, 75, 88]
console.log(scores); // [45, 82, 60, 91, 38, 75, 88] — sin cambios

// Filtrar strings por longitud
const words = ["sol", "nube", "tormenta", "viento", "lluvia"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); // ["tormenta", "viento", "lluvia"]

// Filtrar por propiedad de objeto
const products = [
  { name: "laptop", available: true },
  { name: "mouse", available: false },
  { name: "monitor", available: true },
];
const inStock = products.filter((product) => product.available);
console.log(inStock.map((p) => p.name)); // ["laptop", "monitor"]
```

---

## 5. Comparativa: `forEach` vs `map` vs `filter`

|                          | `forEach`           | `map`              | `filter`              |
| ------------------------ | ------------------- | ------------------ | --------------------- |
| **¿Crea nuevo array?**   | ❌ No               | ✅ Sí              | ✅ Sí                 |
| **Tamaño resultado**     | —                   | Igual que original | ≤ original            |
| **El callback devuelve** | Nada                | Nuevo valor        | `true`/`false`        |
| **Uso principal**        | Efectos secundarios | Transformar        | Filtrar / Seleccionar |
| **Ejemplo**              | Imprimir            | Calcular precios   | Seleccionar activos   |

---

## 6. Encadenamiento (Preview)

`map` y `filter` se pueden encadenar porque ambos devuelven arrays:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Filtrar pares, luego duplicar
const result = numbers
  .filter((n) => n % 2 === 0) // [2, 4, 6, 8]
  .map((n) => n * 2); // [4, 8, 12, 16]

console.log(result); // [4, 8, 12, 16]
```

> El encadenamiento de métodos de array se profundiza en semana 12.

---

## 7. Cuándo Usar Cada Uno

```
¿Necesito mostrar / guardar datos externos?
  → forEach

¿Necesito transformar cada elemento y tener el resultado?
  → map

¿Necesito solo los elementos que cumplan una condición?
  → filter

¿Necesito recorrer y poder salir del bucle con break?
  → for...of
```

---

## ✅ Checklist de Verificación

- [ ] Uso `forEach()` para efectos secundarios (imprimir, guardar)
- [ ] Uso `map()` para transformar → el callback siempre retorna el nuevo valor
- [ ] Uso `filter()` para seleccionar → el callback retorna `true` o `false`
- [ ] Entiendo que `map` y `filter` no modifican el array original

---

## 📚 Recursos

- [MDN — Array.prototype.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN — Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN — Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [javascript.info — Array methods](https://javascript.info/array-methods)
