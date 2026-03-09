# Arrays: Métodos de Búsqueda y Extracción

> **Semana 08 — Teoría 03/05**

Saber **buscar** dentro de un array y **extraer** porciones son habilidades esenciales. Estos métodos **no modifican el array original** — trabajan sobre una copia o devuelven un valor.

---

## 🎯 Objetivos

- Verificar si un elemento existe con `includes()`
- Encontrar la posición de un elemento con `indexOf()`
- Extraer una porción del array con `slice()`
- Buscar el primer elemento que cumpla una condición con `find()` y `findIndex()`

---

## 1. `includes()` — ¿Existe el Elemento?

`includes()` devuelve `true` si el elemento **se encuentra** en el array, `false` en caso contrario.

```javascript
const roles = ["admin", "editor", "viewer", "moderator"];

console.log(roles.includes("admin")); // true
console.log(roles.includes("editor")); // true
console.log(roles.includes("superuser")); // false

// Uso práctico: validar permisos
const currentRole = "editor";
if (roles.includes(currentRole)) {
  console.log(`Rol válido: ${currentRole}`);
} else {
  console.log("Rol no reconocido");
}
```

> **Nota**: `includes()` usa comparación estricta (`===`). Distingue entre `"1"` (string) y `1` (number).

---

## 2. `indexOf()` — ¿En qué Posición Está?

`indexOf()` devuelve el **índice** de la primera aparición del elemento, o `-1` si no se encuentra.

```javascript
const letters = ["a", "b", "c", "b", "d"];

console.log(letters.indexOf("b")); // 1 — primera aparición
console.log(letters.indexOf("d")); // 4
console.log(letters.indexOf("z")); // -1 — no encontrado

// Patrón clásico: verificar existencia con indexOf
const hasItem = letters.indexOf("c") !== -1;
console.log(hasItem); // true

// Mejor usar includes() para verificar existencia (más legible)
const hasItemModern = letters.includes("c");
console.log(hasItemModern); // true
```

### Cuándo usar `indexOf()` vs `includes()`

| ¿Qué necesito saber?   | Método       |
| ---------------------- | ------------ |
| ¿Existe en el array?   | `includes()` |
| ¿En qué posición está? | `indexOf()`  |

---

## 3. `slice()` — Extraer una Porción

`slice()` extrae una **copia** de una porción del array. **No modifica el original**.

```javascript
// array.slice(inicio, fin)  ← fin es exclusivo (no se incluye)
const numbers = [10, 20, 30, 40, 50, 60];
//               0   1   2   3   4   5

// Del índice 1 al 3 (sin incluir el 3)
const portion = numbers.slice(1, 3);
console.log(portion); // [20, 30]
console.log(numbers); // [10, 20, 30, 40, 50, 60] — sin cambios

// Solo con inicio: desde el índice 2 hasta el final
const fromTwo = numbers.slice(2);
console.log(fromTwo); // [30, 40, 50, 60]

// Índices negativos: los últimos 2 elementos
const lastTwo = numbers.slice(-2);
console.log(lastTwo); // [50, 60]

// Copiar todo el array (patrón de copia superficial)
const copy = numbers.slice();
console.log(copy); // [10, 20, 30, 40, 50, 60]
```

> ⚠️ La diferencia con `splice()` es importante: `slice()` **no modifica** el original; `splice()` sí.

---

## 4. `find()` — Buscar por Condición

`find()` ejecuta una función en cada elemento y devuelve el **primer elemento** que cumpla la condición. Si ninguno cumple, devuelve `undefined`.

```javascript
const products = [
  { id: 1, name: "laptop", price: 1299, available: true },
  { id: 2, name: "mouse", price: 25, available: false },
  { id: 3, name: "monitor", price: 399, available: true },
];

// Buscar el primer producto con precio > 300
const expensive = products.find((product) => product.price > 300);
console.log(expensive);
// { id: 1, name: "laptop", price: 1299, available: true }

// Buscar por id
const byId = products.find((product) => product.id === 2);
console.log(byId.name); // "mouse"

// Si no hay coincidencia, devuelve undefined
const notFound = products.find((product) => product.price > 5000);
console.log(notFound); // undefined
```

---

## 5. `findIndex()` — Posición por Condición

`findIndex()` es igual que `find()` pero devuelve el **índice** en lugar del elemento. Devuelve `-1` si no encuentra.

```javascript
const scores = [72, 85, 91, 60, 78];

// Índice del primer puntaje mayor a 88
const highScoreIndex = scores.findIndex((score) => score > 88);
console.log(highScoreIndex); // 2

// Uso práctico: actualizar un elemento encontrado
const users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Pedro", active: false },
  { id: 3, name: "Lucía", active: true },
];

const targetIndex = users.findIndex((user) => user.id === 2);
if (targetIndex !== -1) {
  users[targetIndex].active = true;
  console.log(`Usuario activado: ${users[targetIndex].name}`);
}
```

---

## 6. Resumen Comparativo

| Método               | Busca            | Devuelve               | Modifica original |
| -------------------- | ---------------- | ---------------------- | ----------------- |
| `includes(valor)`    | Por valor exacto | `true` / `false`       | ❌ No             |
| `indexOf(valor)`     | Por valor exacto | Índice o `-1`          | ❌ No             |
| `slice(inicio, fin)` | Rango de índices | Nuevo array            | ❌ No             |
| `find(fn)`           | Por condición    | Elemento o `undefined` | ❌ No             |
| `findIndex(fn)`      | Por condición    | Índice o `-1`          | ❌ No             |

---

## 7. Ejemplo Integrado

```javascript
const inventory = ["camiseta", "pantalón", "zapatos", "sombrero", "camiseta"];

// ¿Hay camisetas?
console.log(inventory.includes("camiseta")); // true

// ¿En qué posición está el sombrero?
console.log(inventory.indexOf("sombrero")); // 3

// Los primeros 3 artículos
console.log(inventory.slice(0, 3)); // ["camiseta", "pantalón", "zapatos"]

// Primer artículo con más de 8 letras
const longName = inventory.find((item) => item.length > 8);
console.log(longName); // "pantalón"
```

---

## ✅ Checklist de Verificación

- [ ] Uso `includes()` para saber si un valor existe
- [ ] Uso `indexOf()` cuando necesito la posición exacta
- [ ] Uso `slice()` para copiar una porción sin modificar el original
- [ ] Uso `find()` para obtener el primer elemento que cumple una condición
- [ ] Uso `findIndex()` cuando necesito el índice del elemento encontrado

---

## 📚 Recursos

- [MDN — Array.prototype.includes()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN — Array.prototype.slice()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [MDN — Array.prototype.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN — Array.prototype.findIndex()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
