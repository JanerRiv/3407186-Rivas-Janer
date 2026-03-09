# 02 — Operador Ternario `? :`

## 🎯 Objetivos

- Comprender la sintaxis del operador ternario
- Identificar cuándo es apropiado usarlo vs `if/else`
- Combinar el ternario con template literals
- Evitar ternarios anidados que dificultan la lectura

---

## 1. ¿Qué es el operador ternario?

El **operador ternario** es la versión compacta de un `if/else` de dos ramas. Recibe su nombre porque trabaja con **tres partes**: condición, valor si es verdadera y valor si es falsa.

```
condición ? valorSiTrue : valorSiFalse
```

Es el único operador de JavaScript que recibe tres operandos.

---

## 2. Equivalencia con `if/else`

```javascript
// Con if/else (4 líneas)
let label;
if (score >= 70) {
  label = "Aprobado";
} else {
  label = "No aprobado";
}

// Con operador ternario (1 línea)
const label = score >= 70 ? "Aprobado" : "No aprobado";
```

> Ambos producen el mismo resultado. El ternario es preferible cuando el resultado cabe cómodamente en una línea.

---

## 3. Ejemplos progresivos

### Ejemplo 1 — Asignación básica

```javascript
const stock = 5;
const availability = stock > 0 ? "Disponible" : "Sin stock";
console.log(availability); // "Disponible"
```

### Ejemplo 2 — Dentro de template literals

El operador ternario funciona perfectamente dentro de `${}`:

```javascript
const capacity = 45;
const isFull = capacity >= 50;
console.log(`Estado: ${isFull ? "Lleno" : "Con capacidad disponible"}`);
// "Estado: Con capacidad disponible"
```

### Ejemplo 3 — Con números y operaciones

```javascript
const visitorsCount = 120;
const fee = visitorsCount > 100 ? visitorsCount * 0.9 : visitorsCount;
console.log(`Total con descuento: ${fee}`); // "Total con descuento: 108"
```

### Ejemplo 4 — Seleccionar un ícono según estado

```javascript
const isOpen = true;
const icon = isOpen ? "🟢" : "🔴";
console.log(`${icon} El local está ${isOpen ? "abierto" : "cerrado"}`);
// "🟢 El local está abierto"
```

---

## 4. Cuándo NO usar el ternario

El ternario es ideal para condiciones simples de dos resultados. **Evítalo** cuando:

- Necesitas más de dos ramas (usa `if/else if/else` o `switch`)
- La condición o los valores son complejos (el código pierde legibilidad)
- Produces efectos secundarios (llamadas a funciones, modificaciones de estado)

```javascript
// ❌ Ternario anidado — difícil de leer
const category =
  score >= 90 ? "excelente" : score >= 70 ? "satisfactorio" : "en proceso";

// ✅ if/else if — más claro para 3+ ramas
let category;
if (score >= 90) {
  category = "excelente";
} else if (score >= 70) {
  category = "satisfactorio";
} else {
  category = "en proceso";
}
```

---

## 5. Regla de oro

> Usa el operador ternario cuando la condición es simple y el resultado cabe en una línea.
> Si necesitas explicar qué hace, probablemente sea mejor un `if/else`.

---

## 📚 Recursos adicionales

- [MDN — Conditional (ternary) operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [javascript.info — Conditional operator '?'](https://javascript.info/ifelse#conditional-operator)

---

## ✅ Checklist de verificación

- [ ] Entiendo las tres partes del operador ternario
- [ ] Sé usar el ternario dentro de template literals con `${}`
- [ ] Identifico cuándo el ternario mejora la legibilidad y cuándo la empeora
- [ ] Evito los ternarios anidados
