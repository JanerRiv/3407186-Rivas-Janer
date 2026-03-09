# 01 — Condicionales: `if`, `else if`, `else`

## 🎯 Objetivos

- Entender qué es el flujo de ejecución y por qué necesitamos controlarlo
- Escribir condiciones con `if`, `else if` y `else`
- Combinar condiciones con los operadores `&&`, `||` y `!`
- Anidar condicionales cuando sea necesario (con precaución)

---

## 1. ¿Qué es un condicional?

Un **condicional** le permite al programa **tomar decisiones**: ejecutar un bloque de código solo si se cumple una condición y ejecutar otro bloque si no se cumple.

Sin condicionales, un programa siempre haría exactamente lo mismo. Con condicionales, el programa puede reaccionar a diferentes situaciones.

```
¿Se cumple la condición?
       ↓
    SÍ  →  ejecuta el bloque A
    NO  →  ejecuta el bloque B
```

---

## 2. Sintaxis de `if` / `else if` / `else`

```javascript
if (condición) {
  // se ejecuta si la condición es true
} else if (otraCondición) {
  // se ejecuta si la primera condición fue false
  // y esta segunda es true
} else {
  // se ejecuta si todas las condiciones anteriores fueron false
}
```

> JavaScript evalúa las condiciones **de arriba hacia abajo** y ejecuta solo el **primer bloque** cuya condición sea `true`. Los demás bloques se ignoran.

---

## 3. Ejemplos progresivos

### Ejemplo 1 — `if` simple

```javascript
const temperature = 35;

if (temperature > 30) {
  console.log("Hace mucho calor.");
}
// Salida: "Hace mucho calor."
```

### Ejemplo 2 — `if` / `else`

```javascript
const temperature = 18;

if (temperature > 30) {
  console.log("Hace mucho calor.");
} else {
  console.log("La temperatura es agradable.");
}
// Salida: "La temperatura es agradable."
```

### Ejemplo 3 — `if` / `else if` / `else`

```javascript
const score = 75;

if (score >= 90) {
  console.log("Excelente — Aprobado con distinción");
} else if (score >= 70) {
  console.log("Satisfactorio — Aprobado");
} else if (score >= 50) {
  console.log("En proceso — Requiere revisión");
} else {
  console.log("No aprobado");
}
// Salida: "Satisfactorio — Aprobado"
```

### Ejemplo 4 — Condición compuesta con `&&`

```javascript
const age = 22;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("Puede ingresar al evento.");
} else {
  console.log("No puede ingresar.");
}
// Salida: "Puede ingresar al evento."
```

### Ejemplo 5 — Condición con `||`

```javascript
const day = "sábado";

if (day === "sábado" || day === "domingo") {
  console.log("Es fin de semana.");
} else {
  console.log("Es día hábil.");
}
// Salida: "Es fin de semana."
```

### Ejemplo 6 — Negación con `!`

```javascript
const isActive = false;

if (!isActive) {
  console.log("El elemento está inactivo.");
}
// Salida: "El elemento está inactivo."
```

---

## 4. Condiciones con `typeof` y comparación

A veces necesitamos verificar el tipo de un valor antes de operar:

```javascript
const input = "42";

if (typeof input === "string") {
  console.log(`El valor es un texto: "${input}"`);
} else if (typeof input === "number") {
  console.log(`El valor es un número: ${input}`);
}
// Salida: 'El valor es un texto: "42"'
```

---

## 5. Early return — salidas tempranas

Cuando hay una condición que invalida el resto del código, conviene retornar o saltar temprano para evitar anidamiento profundo:

```javascript
// ❌ Anidamiento profundo — difícil de leer
const validateCode = (code) => {
  if (typeof code === "string") {
    if (code.length > 0) {
      if (code.startsWith("EXH")) {
        console.log("Código válido");
      }
    }
  }
};

// ✅ Early return — más legible
const validateCode = (code) => {
  if (typeof code !== "string") return "Error: no es un string";
  if (code.length === 0) return "Error: código vacío";
  if (!code.startsWith("EXH")) return "Error: prefijo incorrecto";
  return "Código válido";
};
```

---

## 6. Buenas prácticas

| ✅ Hacer                                           | ❌ Evitar                                    |
| -------------------------------------------------- | -------------------------------------------- |
| Usar `===` (comparación estricta)                  | Usar `==` (comparación débil — provoca bugs) |
| Nombres de variables descriptivos en condiciones   | Condiciones como `if (x)` sin contexto       |
| Preferir early return para reducir anidamiento     | Anidar más de 2–3 niveles de `if`            |
| Agrupar condiciones relacionadas con `&&` o `\|\|` | Duplicar bloques de código en cada rama      |

---

## 📚 Recursos adicionales

- [MDN — if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)
- [javascript.info — Conditional branching: if, '?'](https://javascript.info/ifelse)

---

## ✅ Checklist de verificación

- [ ] Entiendo la diferencia entre `if`, `else if` y `else`
- [ ] Sé combinar condiciones con `&&` y `||`
- [ ] Uso `===` en lugar de `==`
- [ ] Reconozco cuándo aplicar early return para simplificar el código
