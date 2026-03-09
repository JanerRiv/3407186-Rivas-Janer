# 📖 Glosario — Semana 08: Arrays

Términos clave de la semana ordenados alfabéticamente.

---

## A

### Acumulador

Variable que acumula un resultado parcial durante una iteración. Usado en `reduce` (semanas futuras) pero también en patrones con `forEach`.

```javascript
let total = 0;
const prices = [100, 200, 300];
prices.forEach((price) => {
  total += price;
});
// total = 600
```

### Array (arreglo)

Estructura de datos que almacena una colección ordenada de elementos. En JavaScript, puede contener elementos de cualquier tipo y su tamaño es dinámico.

```javascript
const mixed = [1, "hola", true, null, { name: "Ana" }];
```

---

## C

### Callback

Función que se pasa como argumento a otra función para ser ejecutada. Los métodos `forEach`, `map`, `filter`, `find` reciben callbacks.

```javascript
const double = (n) => n * 2;
const result = [1, 2, 3].map(double); // [2, 4, 6]
```

### Copia superficial (shallow copy)

Copia de un array o un objeto en el primer nivel. Con spread `[...arr]`, se crea un nuevo array, pero si los elementos son objetos, estos siguen siendo referencias.

```javascript
const original = [{ id: 1 }, { id: 2 }];
const copy = [...original];
copy[0].id = 99; // ¡modifica el original! (los objetos internos no se copian)
```

---

## E

### Elemento (element)

Cada item almacenado en un array. Se accede por su índice.

```javascript
const fruits = ["manzana", "pera", "uva"];
console.log(fruits[1]); // "pera" ← elemento en índice 1
```

---

## F

### `filter`

Método de array que retorna un **nuevo array** con los elementos que pasan una condición. No modifica el original.

```javascript
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter((n) => n % 2 === 0); // [2, 4]
```

### `find`

Método que retorna el **primer elemento** que satisface la condición de un callback. Si no encuentra ninguno, retorna `undefined`.

```javascript
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
];
const found = users.find((u) => u.id === 2); // { id: 2, name: "Luis" }
```

### `findIndex`

Como `find`, pero retorna el **índice** del elemento encontrado en lugar del elemento. Retorna `-1` si no hay coincidencia.

```javascript
const idx = [10, 20, 30].findIndex((n) => n === 20); // 1
```

### `forEach`

Método que ejecuta una función por cada elemento del array. Retorna `undefined`, no crea un nuevo array. Se usa para efectos secundarios (imprimir, modificar estado externo).

```javascript
["a", "b", "c"].forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
```

---

## I

### Índice (index)

Posición numérica de un elemento en un array. Comienza en `0` para el primer elemento.

```javascript
const arr = ["x", "y", "z"];
// índices:    0     1     2
```

### `includes`

Método que devuelve `true` si el array contiene el valor buscado, `false` si no. Usa igualdad estricta (`===`).

```javascript
const tags = ["js", "css", "html"];
console.log(tags.includes("css")); // true
```

### `indexOf`

Método que retorna el índice de la primera ocurrencia de un valor. Retorna `-1` si no existe.

```javascript
const arr = [10, 20, 30, 20];
console.log(arr.indexOf(20)); // 1 (primera ocurrencia)
```

### Iteración

Proceso de recorrer todos los elementos de un array uno por uno para ejecutar una operación.

---

## L

### `length`

Propiedad que indica la cantidad de elementos de un array.

```javascript
const arr = [1, 2, 3];
console.log(arr.length); // 3
```

---

## M

### `map`

Método de array que crea un **nuevo array** aplicando un callback a cada elemento. El nuevo array tiene el mismo tamaño que el original. El callback **debe retornar** el nuevo valor.

```javascript
const prices = [100, 200, 300];
const withTax = prices.map((p) => p * 1.19); // [119, 238, 357]
```

### Método de mutación

Método que modifica el array original en lugar de crear uno nuevo. Ejemplos: `push`, `pop`, `shift`, `unshift`, `splice`.

### Método inmutable

Método que no modifica el array original sino que retorna un nuevo array. Ejemplos: `map`, `filter`, `slice`, `toSorted()`.

---

## P

### `pop`

Método que elimina el **último** elemento del array y lo retorna. Muta el array.

```javascript
const arr = [1, 2, 3];
const last = arr.pop(); // last = 3, arr = [1, 2]
```

### Predicado

Función que retorna `true` o `false`. Los callbacks de `filter`, `find`, `findIndex` son predicados.

```javascript
const isEven = (n) => n % 2 === 0; // predicado
[1, 2, 3, 4].filter(isEven); // [2, 4]
```

### `push`

Método que agrega uno o más elementos al **final** del array. Muta el array y retorna la nueva longitud.

```javascript
const arr = [1, 2];
arr.push(3, 4); // arr = [1, 2, 3, 4]
```

---

## R

### Referencia (por referencia)

Cuando asignas un array con `=`, ambas variables apuntan al mismo espacio en memoria. Modificar una afecta a la otra.

```javascript
const a = [1, 2, 3];
const b = a; // misma referencia
b.push(4);
console.log(a); // [1, 2, 3, 4]
```

---

## S

### `shift`

Método que elimina el **primer** elemento del array y lo retorna. Muta el array.

```javascript
const arr = [1, 2, 3];
const first = arr.shift(); // first = 1, arr = [2, 3]
```

### `slice`

Método que retorna una **copia** de una porción del array (del índice `start` al `end`, exclusivo). No muta el original.

```javascript
const arr = [0, 1, 2, 3, 4];
const portion = arr.slice(1, 3); // [1, 2]
```

### `splice`

Método que muta el array: puede eliminar, insertar o reemplazar elementos a partir de un índice.

```javascript
const arr = [1, 2, 3, 4];
arr.splice(1, 2); // elimina 2 elementos desde índice 1 → arr = [1, 4]
```

### Spread operator (`...`)

Operador que expande los elementos de un array (u objeto). Con arrays, permite copiar, fusionar y pasar elementos como argumentos.

```javascript
const copy = [...original];
const merged = [...arr1, ...arr2];
Math.max(...nums);
```

---

## T

### Transformación

Operación que convierte cada elemento de un array en un nuevo valor usando `map`.

---

## U

### `unshift`

Método que agrega uno o más elementos al **inicio** del array. Muta el array y retorna la nueva longitud.

```javascript
const arr = [2, 3];
arr.unshift(0, 1); // arr = [0, 1, 2, 3]
```

---

> 📚 Para más detalles sobre cualquier método, consultar [MDN Web Docs — Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array).
