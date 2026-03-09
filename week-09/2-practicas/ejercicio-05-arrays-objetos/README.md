# Ejercicio 05: Arrays de Objetos

## 🎯 Objetivo

Trabajar con arrays que contienen objetos: acceder a propiedades, filtrar, buscar, transformar y encadenar operaciones sobre colecciones de datos estructurados.

## ⏱️ Tiempo estimado: 40 minutos

## 📋 Instrucciones

Abre `starter/index.js` y descomenta cada sección siguiendo los pasos indicados.

---

## 📚 Pasos

### Paso 1: Acceder a Objetos en un Array

Cada elemento del array es un objeto completo.
Se accede con el índice `[i]` y luego la propiedad con punto.

```javascript
const items = [
  { id: 1, name: "Mouse", price: 35 },
  { id: 2, name: "Teclado", price: 89 },
];

console.log(items[0].name); // "Mouse"
console.log(items[1].price); // 89

items.forEach((item) => {
  console.log(`${item.id}. ${item.name} — $${item.price}`);
});
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: filter() y find() sobre Objetos

`filter()` retorna un nuevo array con los elementos que cumplen la condición.
`find()` retorna **el primer** elemento que cumple la condición (o `undefined`).

```javascript
const available = items.filter((item) => item.available);
const expensive = items.filter((item) => item.price > 100);
const found = items.find((item) => item.id === 3);
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

### Paso 3: map() para Transformar Objetos

`map()` crea un nuevo array aplicando una transformación a cada elemento.
Al retornar un objeto literal desde una arrow function, **se envuelve en paréntesis `({})`** para distinguirlo del bloque `{}`.

```javascript
// ✅ Los paréntesis son obligatorios cuando se retorna un objeto literal
const withTax = items.map((item) => ({
  ...item,
  priceWithTax: +(item.price * 1.19).toFixed(2),
}));
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

### Paso 4: Encadenar filter + sort + map

Las operaciones se pueden encadenar para construir pipelines de datos.
`sort()` muta el array original — siempre usar `[...arr].sort()` para no afectarlo.

```javascript
const result = items
  .filter((i) => i.available && i.category === "tech")
  .sort((a, b) => a.price - b.price) // menor a mayor precio
  .map((i) => `${i.name} ($${i.price})`);
```

**Abre `starter/index.js`** y descomenta la Sección 4.

---

## ✅ Resultado esperado

```
=== Sección 1: Acceder a Objetos en Array ===
Primer elemento: Laptop
Precio del tercero: 89
---
1. Laptop ($1200) — tech
2. Mouse ($35) — tech
3. Teclado ($89) — tech
4. Silla ($280) — furniture
5. Monitor ($450) — tech

=== Sección 2: filter() y find() ===
Disponibles (3):
  - Laptop $1200
  - Mouse $35
  - Monitor $450
Precio > $200 (2):
  - Laptop $1200
  - Monitor $450
Buscar id=3: Teclado
Buscar id=99: undefined

=== Sección 3: map() para transformar ===
Productos con IVA (19%):
  Laptop       $1200 → $1428.00
  Mouse        $35   → $41.65
  Teclado      $89   → $105.91
  Silla        $280  → $333.20
  Monitor      $450  → $535.50

=== Sección 4: Pipeline filter + sort + map ===
Tech disponible, precio ascendente:
  Mouse ($35)
  Monitor ($450)
  Laptop ($1200)
```

## 🔗 Recursos

- [Array.prototype.filter() — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.map() — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.sort() — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
