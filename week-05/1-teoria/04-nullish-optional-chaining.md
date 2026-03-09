# 04 — Nullish Coalescing `??` y Optional Chaining `?.` (ES2020)

## 🎯 Objetivos

- Usar `??` para proporcionar valores por defecto de forma precisa
- Entender la diferencia entre `??` y `||`
- Acceder de forma segura a propiedades anidadas con `?.`
- Combinar `??` y `?.` para manejar datos opcionales

---

## 1. Nullish Coalescing `??`

El operador **nullish coalescing** (`??`) devuelve el operando derecho cuando el izquierdo es `null` o `undefined`. En cualquier otro caso, devuelve el operando izquierdo.

```javascript
const result = value ?? defaultValue;
```

"Nullish" significa "nulo o indefinido". El operador `??` **solo** considera `null` y `undefined` como valores ausentes.

---

## 2. `??` vs `||` — diferencia clave

El operador `||` devuelve el operando derecho cuando el izquierdo es **falsy** (incluye `0`, `""`, `false`). Esto puede causar bugs cuando `0` o `false` son valores válidos.

```javascript
const capacity = 0; // cero es un valor válido

// ❌ Con || — incorrecto cuando 0 es válido
const seats = capacity || 50; // 50 (incorrecto: 0 es falsy)

// ✅ Con ?? — correcto
const seats = capacity ?? 50; // 0 (correcto: 0 no es null/undefined)
```

```javascript
const isActive = false; // false es un valor válido

// ❌ Con ||
const status = isActive || true; // true (incorrecto)

// ✅ Con ??
const status = isActive ?? true; // false (correcto)
```

> **Regla**: Usa `??` cuando `0`, `""` o `false` son valores válidos. Usa `||` cuando todos los valores falsy deben tratarse como "ausentes".

---

## 3. Ejemplos de `??`

```javascript
// Configuración con valor por defecto
const userTimeout = null;
const timeout = userTimeout ?? 3000;
console.log(timeout); // 3000

// Nombre con valor por defecto
const inputName = "";
const displayName = inputName ?? "Visitante";
console.log(displayName); // "" (string vacío no es null ni undefined)

// Conteo inicial
const savedCount = undefined;
const count = savedCount ?? 0;
console.log(count); // 0
```

---

## 4. Optional Chaining `?.`

El operador **optional chaining** (`?.`) permite acceder a propiedades de un objeto de forma segura. Si la propiedad no existe (el valor es `null` o `undefined`), devuelve `undefined` en lugar de lanzar un error.

```javascript
// Sin optional chaining — puede lanzar TypeError
const city = user.address.city; // ❌ Error si address es undefined

// Con optional chaining — seguro
const city = user?.address?.city; // ✅ undefined si address es undefined
```

---

## 5. Sintaxis de `?.`

### Acceso a propiedades

```javascript
const exhibit = {
  name: "Sistema Solar",
  location: {
    wing: "A",
    floor: 2,
  },
};

console.log(exhibit?.location?.wing); // "A"
console.log(exhibit?.schedule?.opening); // undefined (sin error)
```

### Llamada a métodos opcionales

```javascript
// Si el método existe, lo llama; si no, devuelve undefined
exhibit?.getDescription?.();
```

### Acceso a elementos de array

```javascript
const items = ["Marte", "Júpiter"];
console.log(items?.[0]); // "Marte"
console.log(items?.[10]); // undefined (sin error)
```

---

## 6. Combinación de `?.` con `??`

La combinación más potente: acceso seguro Y valor por defecto.

```javascript
const exhibit = {
  name: "Nebulosa de Orión",
  // rating no existe
};

// Accede de forma segura y provee valor por defecto si es null/undefined
const rating = exhibit?.rating ?? "Sin calificación";
console.log(rating); // "Sin calificación"

const wing = exhibit?.location?.wing ?? "Sin asignar";
console.log(wing); // "Sin asignar"
```

---

## 7. Resumen comparativo

| Operador | Activa cuando el valor es...                    | Ejemplo              |
| -------- | ----------------------------------------------- | -------------------- |
| `\|\|`   | Falsy (`null`, `undefined`, `0`, `""`, `false`) | `val \|\| "default"` |
| `??`     | Nullish (`null` o `undefined`)                  | `val ?? "default"`   |
| `?.`     | `null` o `undefined` (no lanza error)           | `obj?.prop`          |

---

## 📚 Recursos adicionales

- [MDN — Nullish coalescing operator (??)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [MDN — Optional chaining (?.)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [javascript.info — Nullish coalescing operator '??'](https://javascript.info/nullish-coalescing-operator)

---

## ✅ Checklist de verificación

- [ ] Entiendo por qué `??` es más preciso que `||` para valores por defecto
- [ ] Sé cuándo elegir `??` sobre `||` (cuando `0`, `false` o `""` son válidos)
- [ ] Uso `?.` para acceder a propiedades opcionales de forma segura
- [ ] Combino `?.` con `??` para acceso seguro con valor por defecto
