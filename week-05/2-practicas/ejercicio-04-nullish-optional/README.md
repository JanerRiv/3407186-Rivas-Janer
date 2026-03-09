# Ejercicio 04 — Nullish Coalescing `??` y Optional Chaining `?.`

## 🎯 Objetivo

Practicar `??` para valores por defecto y `?.` para acceso seguro a propiedades opcionales.

---

## 📋 Pasos

### Paso 1: `??` para valor por defecto

`??` devuelve el lado derecho solo si el izquierdo es `null` o `undefined`:

```javascript
const savedTimeout = null;
const timeout = savedTimeout ?? 3000;
console.log(timeout); // 3000
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

Salida esperada:

```
--- Paso 1: nullish coalescing ?? ---
Timeout guardado: null
Timeout a usar: 3000
```

---

### Paso 2: `??` vs `||` — diferencia clave

`||` activa con cualquier valor falsy; `??` solo con `null`/`undefined`:

```javascript
const count = 0;
console.log(count || 10); // 10  (0 es falsy — incorrecto)
console.log(count ?? 10); // 0   (0 no es null/undefined — correcto)
```

**Descomenta** la sección del Paso 2.

Salida esperada:

```
--- Paso 2: ?? vs || ---
Conteo: 0
Con ||: 10
Con ??: 0
```

---

### Paso 3: `?.` para acceder a propiedades opcionales

`?.` devuelve `undefined` si la propiedad no existe, en vez de lanzar un error:

```javascript
const exhibit = { name: "Luna", location: { wing: "B" } };
console.log(exhibit?.location?.wing); // "B"
console.log(exhibit?.schedule?.opening); // undefined (sin error)
```

**Descomenta** la sección del Paso 3.

Salida esperada:

```
--- Paso 3: optional chaining ?. ---
Ala: B
Apertura: undefined
```

---

### Paso 4: Combinar `?.` con `??`

El patrón más común: acceso seguro con valor por defecto:

```javascript
const item = { name: "Saturno" };
const rating = item?.rating ?? "Sin calificación";
console.log(rating); // "Sin calificación"
```

**Descomenta** la sección del Paso 4.

Salida esperada:

```
--- Paso 4: combinación ?. con ?? ---
Nombre: Saturno
Calificación: Sin calificación
Ala: Sin asignar
```

---

## 💡 Recuerda

- `??` = valor por defecto solo cuando es `null` o `undefined`
- `?.` = acceso seguro que no lanza errores
- `||` = valor por defecto para cualquier falsy (incluyendo `0`, `""`, `false`)
