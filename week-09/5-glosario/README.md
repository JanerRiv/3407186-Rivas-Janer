# 📖 Glosario — Semana 09: Objetos en JavaScript

Términos clave de la semana ordenados alfabéticamente.

---

## A

### Acceso por corchetes (`[]`)

Sintaxis para leer o escribir una propiedad usando una expresión o variable como clave.

```javascript
const key = "name";
obj[key]; // equivale a obj.name
obj["mi clave"]; // claves con espacios requieren corchetes
```

### Acceso por punto (`.`)

Sintaxis más común para leer o escribir una propiedad cuando el nombre es un identificador válido.

```javascript
const user = { name: "Ana" };
console.log(user.name); // "Ana"
```

### Array de objetos

Array cuyos elementos son objetos. Estructura de datos fundamental para colecciones.

```javascript
const products = [
  { id: 1, name: "Mouse", price: 35 },
  { id: 2, name: "Teclado", price: 89 },
];
```

---

## C

### Clave (`key`)

El nombre de una propiedad en un objeto. Siempre es un string (o Symbol) internamente.

```javascript
const obj = { name: "Ana" }; // "name" es la clave
```

### Copia superficial (`shallow copy`)

Copia de un objeto en la que los valores primitivos se duplican, pero las propiedades que son objetos/arrays siguen apuntando a la misma referencia.

```javascript
const copy = { ...original }; // copia superficial
// copy.address === original.address si address es un objeto
```

---

## D

### Destructuring de objetos

Sintaxis para extraer propiedades de un objeto en variables individuales.

```javascript
const { name, age } = user;
// equivale a: const name = user.name; const age = user.age;
```

---

## F

### `for...in`

Bucle que itera sobre todas las propiedades **enumerables** de un objeto, incluyendo las heredadas.

```javascript
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    console.log(key, obj[key]);
  }
}
```

---

## I

### Inmutabilidad

Principio de no modificar los datos originales; en cambio, crear nuevas versiones con los cambios aplicados.

```javascript
// Patrón inmutable con spread
const updated = { ...product, price: 999 }; // no muta product
```

---

## M

### Método de objeto

Función almacenada como valor de una propiedad del objeto.

```javascript
const calculator = {
  add: (a, b) => a + b,
};
calculator.add(2, 3); // 5
```

### Mutación

Modificación directa de un objeto existente. Generalmente se evita en programación funcional moderna.

```javascript
obj.price = 999; // ← mutación directa
```

---

## O

### `Object.entries()`

Retorna un array de pares `[clave, valor]` para cada propiedad enumerable propia del objeto.

```javascript
Object.entries({ a: 1, b: 2 }); // [["a", 1], ["b", 2]]
```

### `Object.hasOwn()` (ES2022)

Método estático que verifica si un objeto tiene una propiedad **propia** (no heredada). Reemplaza a `hasOwnProperty()`.

```javascript
Object.hasOwn(user, "name"); // true
Object.hasOwn(user, "phone"); // false
```

### `Object.keys()`

Retorna un array con las claves (nombres de propiedades) propias y enumerables del objeto.

```javascript
Object.keys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
```

### `Object.values()`

Retorna un array con los valores de las propiedades propias y enumerables del objeto.

```javascript
Object.values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
```

### Objeto literal

Forma de crear un objeto directamente usando la sintaxis `{}` con pares clave-valor.

```javascript
const car = { brand: "Toyota", year: 2023 };
```

### Operador `in`

Verifica si una propiedad existe en un objeto **o en su cadena de herencia**.

```javascript
"name" in user; // true (propia)
"toString" in user; // true (heredada de Object)
```

---

## P

### Propiedad

Par clave-valor que forma parte de un objeto.

```javascript
const user = { name: "Ana" }; // name es la propiedad; "Ana" es su valor
```

### Propiedad heredada

Propiedad que un objeto recibe a través de su cadena de prototipos, no definida directamente en él.

### Propiedad opcional

Propiedad que no está presente en todos los objetos de una colección. Se verifica con `Object.hasOwn()` antes de usarla.

---

## R

### Referencia (por referencia)

Los objetos se asignan y pasan por referencia: varias variables pueden apuntar al mismo objeto en memoria.

```javascript
const a = { x: 1 };
const b = a; // b apunta AL MISMO objeto que a
b.x = 99;
console.log(a.x); // 99 — a también cambió
```

---

## S

### Spread operator con objetos (`{...obj}`)

Operador que expande las propiedades de un objeto dentro de otro, creando una copia superficial o fusionando objetos.

```javascript
const copy = { ...original }; // copia
const merged = { ...defaults, ...userConfig }; // fusión
const updated = { ...item, price: 999 }; // actualización inmutable
```

---

## V

### Valor (`value`)

El dato almacenado en una propiedad de un objeto. Puede ser cualquier tipo: primitivo, array, función u otro objeto.

```javascript
const obj = {
  count: 5, // number
  name: "Ana", // string
  active: true, // boolean
  tags: ["a", "b"], // array
  address: { city: "Bogotá" }, // objeto anidado
};
```
