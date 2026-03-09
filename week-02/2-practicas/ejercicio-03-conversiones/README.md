# Ejercicio 03: Conversión de Tipos

## 🎯 Objetivo

Practicar las conversiones explícitas entre tipos mediante `Number()`, `String()` y `Boolean()`. Entender los valores falsy y la diferencia entre coerción implícita y explícita.

## ⏱️ Duración estimada

30 minutos

## 📋 Instrucciones

Abre el archivo `starter/index.js` y descomenta cada sección en orden.

```bash
node starter/index.js
```

---

### Paso 1: Convertir a `Number()`

`Number()` convierte string, boolean u otros tipos a número:

```javascript
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("")); // 0
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `NaN` — Not a Number

`NaN` es el resultado de una conversión o operación numérica inválida.

```javascript
const result = Number("hola");
console.log(result); // NaN
console.log(typeof result); // "number" ← NaN es de tipo number
console.log(isNaN(result)); // true ← así se detecta NaN
console.log(result === NaN); // false ← NaN nunca es igual a sí mismo
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Convertir a `String()`

`String()` convierte cualquier valor a su representación textual:

```javascript
console.log(String(42)); // "42"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Convertir a `Boolean()`

Conocer los **valores falsy** es esencial:

```javascript
// Exactamente 6 valores son falsy en JavaScript:
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Todo lo demás es truthy:
console.log(Boolean(1)); // true
console.log(Boolean("hola")); // true
console.log(Boolean([])); // true ← array vacío es truthy
console.log(Boolean({})); // true ← objeto vacío es truthy
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

### Paso 5: Coerción implícita vs explícita

```javascript
// Implícita: JavaScript convierte automáticamente (puede causar bugs)
console.log("5" + 3); // "53" ← concatenación, no suma
console.log("5" - 3); // 2    ← resta fuerza conversión a number

// Explícita: tú controlas la conversión (recomendado)
console.log(Number("5") + 3); // 8 ← intención clara
```

**Abre `starter/index.js`** y descomenta la sección del Paso 5.

---

## ✅ Al terminar

- ¿Cuáles son los 6 valores falsy?
- ¿Por qué `"5" + 3` da `"53"` y `"5" - 3` da `2`?
- ¿Por qué preferimos coerción explícita?

Compara tu solución con `solution/index.js`.
