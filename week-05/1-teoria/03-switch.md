# 03 — `switch` Statement

## 🎯 Objetivos

- Entender cuándo `switch` es más legible que `if/else if`
- Escribir sentencias `switch` correctamente con `case`, `break` y `default`
- Comprender el comportamiento de fall-through (caída entre casos)
- Usar `switch` con strings y números

---

## 1. ¿Qué es `switch`?

`switch` es una estructura de control que evalúa una **expresión** y la compara con una serie de **valores posibles** (`case`). Es una alternativa más legible que una cadena larga de `else if` cuando se compara la misma variable contra múltiples valores exactos.

```javascript
switch (expresión) {
  case valor1:
    // código si expresión === valor1
    break;
  case valor2:
    // código si expresión === valor2
    break;
  default:
  // código si ningún case coincidió
}
```

> `switch` usa **comparación estricta** (`===`) internamente. Un string `"1"` no coincide con el número `1`.

---

## 2. Ejemplo básico

```javascript
const day = "miércoles";

switch (day) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "miércoles":
    console.log("Mitad de semana");
    break;
  case "viernes":
    console.log("¡Casi es fin de semana!");
    break;
  default:
    console.log("Otro día de la semana");
}
// Salida: "Mitad de semana"
```

---

## 3. La importancia del `break`

Sin `break`, el código **continúa ejecutándose** en los casos siguientes aunque no coincidan. Esto se llama **fall-through**:

```javascript
const level = 2;

switch (level) {
  case 1:
    console.log("Nivel básico");
  case 2:
    console.log("Nivel intermedio"); // ← se ejecuta
  case 3:
    console.log("Nivel avanzado"); // ← también se ejecuta (fall-through)
  default:
    console.log("Nivel desconocido"); // ← y este también
}
// Salida: "Nivel intermedio", "Nivel avanzado", "Nivel desconocido"
// (faltaron los break)
```

**Siempre agrega `break`** al final de cada `case` a menos que el fall-through sea intencional.

---

## 4. Fall-through intencional — agrupar casos

A veces el fall-through es útil para que varios `case` ejecuten el mismo código:

```javascript
const month = "febrero";

switch (month) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Temporada de invierno");
    break;
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Temporada de primavera");
    break;
  default:
    console.log("Otra temporada");
}
// Salida: "Temporada de invierno"
```

---

## 5. `switch` vs `if/else if`

| Situación                                            | Recomendación        |
| ---------------------------------------------------- | -------------------- |
| Comparar la misma variable vs muchos valores exactos | `switch`             |
| Condiciones distintas o rangos numéricos             | `if/else if`         |
| Solo dos ramas                                       | `if/else` o ternario |

```javascript
// switch — ideal para valores exactos
switch (category) {
  case "A":
    /* ... */ break;
  case "B":
    /* ... */ break;
  case "C":
    /* ... */ break;
}

// if/else — ideal para rangos
if (score >= 90) {
  /* excelente */
} else if (score >= 70) {
  /* aprobado */
} else {
  /* reprobado */
}
```

---

## 6. `switch` con variables de resultado

Una buena práctica es usar `switch` para asignar un valor a una variable:

```javascript
const statusCode = "open";
let statusLabel;

switch (statusCode) {
  case "open":
    statusLabel = "Abierto al público";
    break;
  case "closed":
    statusLabel = "Cerrado";
    break;
  case "maintenance":
    statusLabel = "En mantenimiento";
    break;
  default:
    statusLabel = "Estado desconocido";
}

console.log(`Estado actual: ${statusLabel}`);
```

---

## 📚 Recursos adicionales

- [MDN — switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)
- [javascript.info — The "switch" statement](https://javascript.info/switch)

---

## ✅ Checklist de verificación

- [ ] Entiendo la sintaxis de `switch`, `case`, `break` y `default`
- [ ] Sé que `switch` usa comparación estricta (`===`)
- [ ] Siempre agrego `break` excepto cuando el fall-through es intencional
- [ ] Identifico qué casos son más apropiados para `switch` vs `if/else`
