# Spread Operator con Arrays

> **Semana 08 — Teoría 05/05**

El **operador spread** `...` permite "expandir" los elementos de un array. Es una de las adiciones más útiles del JavaScript moderno: hace que copiar, fusionar y expandir arrays sea simple y legible.

---

## 🎯 Objetivos

- Copiar un array sin modificar el original usando `[...array]`
- Fusionar dos o más arrays en uno nuevo
- Agregar elementos al inicio o al final de una copia
- Pasar elementos de un array como argumentos a una función

---

## 1. El Problema: Copia por Referencia

Antes de spread, copiar un array con `=` no creaba una copia real:

```javascript
const original = [1, 2, 3];

// ❌ ESTO NO ES UNA COPIA — ambas variables apuntan al mismo array
const notACopy = original;
notACopy.push(4);

console.log(original); // [1, 2, 3, 4] ← ¡el original también cambió!
console.log(notACopy); // [1, 2, 3, 4]
```

Los arrays en JavaScript son **objetos**, y al asignar con `=` solo copias la **referencia** (el puntero), no los datos.

---

## 2. Copiar un Array con Spread

`[...original]` crea una **copia independiente** del array:

```javascript
const original = [1, 2, 3];

// ✅ Copia real con spread
const copy = [...original];
copy.push(4);

console.log(original); // [1, 2, 3] ← sin cambios
console.log(copy); // [1, 2, 3, 4]
```

La sintaxis `...original` "expande" todos los elementos dentro del nuevo array `[]`.

---

## 3. Fusionar Arrays

Spread permite combinar arrays sin `concat()`:

```javascript
const fruits = ["manzana", "pera", "uva"];
const veggies = ["zanahoria", "brócoli", "pepino"];

// Fusionar con spread — más legible que concat
const combined = [...fruits, ...veggies];
console.log(combined);
// ["manzana", "pera", "uva", "zanahoria", "brócoli", "pepino"]

// El orden importa
const veggiesFirst = [...veggies, ...fruits];
console.log(veggiesFirst);
// ["zanahoria", "brócoli", "pepino", "manzana", "pera", "uva"]
```

---

## 4. Agregar Elementos en una Copia

Con spread puedes crear un nuevo array con elementos adicionales, sin modificar el original:

```javascript
const skills = ["HTML", "CSS", "JavaScript"];

// Agregar al final
const updatedSkills = [...skills, "Node.js"];
console.log(skills); // ["HTML", "CSS", "JavaScript"]
console.log(updatedSkills); // ["HTML", "CSS", "JavaScript", "Node.js"]

// Agregar al inicio
const withPython = ["Python", ...skills];
console.log(withPython); // ["Python", "HTML", "CSS", "JavaScript"]

// Agregar en el medio
const withReact = [...skills.slice(0, 2), "React", ...skills.slice(2)];
console.log(withReact); // ["HTML", "CSS", "React", "JavaScript"]
```

---

## 5. Spread en Argumentos de Función

Spread permite pasar los elementos de un array como **argumentos individuales** a una función:

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// Math.max necesita argumentos individuales, no un array
// ❌ Sin spread — no funciona
console.log(Math.max(numbers)); // NaN

// ✅ Con spread — expande el array en argumentos
console.log(Math.max(...numbers)); // 9
console.log(Math.min(...numbers)); // 1

// Mismo patrón con funciones propias
const sum = (a, b, c) => a + b + c;
const values = [10, 20, 30];
console.log(sum(...values)); // 60
```

---

## 6. Spread con Funciones que Reciben Arrays

También puedes combinar arrays literales con spread al pasar argumentos:

```javascript
const baseConfig = ["debug", "verbose"];
const extraConfig = ["cache", "compress"];

// Pasar ambos arrays como un solo spread
const processConfig = (...flags) => {
  console.log(`Procesando ${flags.length} flags: ${flags.join(", ")}`);
};

processConfig(...baseConfig, ...extraConfig);
// Procesando 4 flags: debug, verbose, cache, compress
```

---

## 7. Diferencia: Spread vs Rest

`...` aparece en dos contextos distintos:

```javascript
// SPREAD — expande un array en elementos individuales
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3 — expande al llamar

// REST — agrupa argumentos individuales en un array
const sumAll = (...numbers) => {
  // numbers es un array dentro de la función
  let total = 0;
  for (const n of numbers) total += n;
  return total;
};
console.log(sumAll(1, 2, 3, 4)); // 10 — agrupa al recibir
```

|                     | Spread `...arr`                        | Rest `...args`               |
| ------------------- | -------------------------------------- | ---------------------------- |
| **¿Dónde aparece?** | Al llamar una función o dentro de `[]` | En la firma de la función    |
| **¿Qué hace?**      | Expande array → elementos individuales | Agrupa argumentos → array    |
| **Ejemplo**         | `fn(...arr)`                           | `const fn = (...args) => {}` |

---

## 8. Resumen: Usos de Spread con Arrays

```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];

// 1. Copiar
const copy = [...a];

// 2. Fusionar
const merged = [...a, ...b];

// 3. Agregar al final
const withExtra = [...a, 99];

// 4. Agregar al inicio
const withStart = [0, ...a];

// 5. Expandir como argumentos
Math.max(...a);

// 6. Combinar con literales
const custom = [0, ...a, 10, ...b, 100];
```

---

## ✅ Checklist de Verificación

- [ ] Uso `[...arr]` para copiar un array (no `=`)
- [ ] Uso `[...a, ...b]` para fusionar arrays
- [ ] Uso `[...arr, nuevoElem]` para agregar sin mutar el original
- [ ] Uso `fn(...arr)` para pasar un array como argumentos individuales
- [ ] Entiendo la diferencia entre **spread** (expandir) y **rest** (agrupar)

---

## 📚 Recursos

- [MDN — Spread syntax](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [javascript.info — Spread operator](https://javascript.info/rest-parameters-spread)
