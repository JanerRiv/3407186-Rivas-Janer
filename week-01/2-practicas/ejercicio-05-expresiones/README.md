# Ejercicio 05: Valores y Expresiones

## 🎯 Objetivo

Distinguir entre valores literales y expresiones. Observar cómo JavaScript evalúa expresiones automáticamente antes de mostrarlas.

## ⏱️ Duración estimada

20 minutos

## 📋 Instrucciones

Abre `starter/index.js`. En cada paso, **antes de ejecutar el código**, intenta predecir qué va a mostrar la consola. Luego descomenta y verifica.

---

### Paso 1: Valores literales

Un valor que ya está ahí, sin calcular:

```javascript
console.log("JavaScript"); // → JavaScript
console.log(2026); // → 2026
console.log(true); // → true
```

**Descomenta la sección del Paso 1.** ¿Coincidió con tu predicción?

---

### Paso 2: Expresiones aritméticas

JavaScript calcula primero, luego muestra:

```javascript
console.log(10 + 5); // → ¿cuánto?
console.log(10 - 5); // → ¿cuánto?
console.log(10 * 5); // → ¿cuánto?
console.log(10 / 5); // → ¿cuánto?
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: Expresiones con strings

El `+` con strings **concatena** (une), no suma:

```javascript
console.log("Hola" + " " + "mundo"); // → ¿qué aparece?
console.log("Java" + "Script"); // → ¿qué aparece?
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: La trampa del + mixto

Cuando un operando es string y el otro número:

```javascript
console.log(10 + 5); // → 15    (dos números → suma)
console.log("10" + 5); // → ?     (string + número → ?)
console.log(10 + "5"); // → ?     (número + string → ?)
```

**Predice, luego descomenta la sección del Paso 4.**

---

### Paso 5: console.log evalúa cualquier expresión

`console.log` muestra el resultado de evaluar lo que le pasas:

```javascript
console.log(2 ** 10); // → 1024
console.log(typeof "hola"); // → "string"
console.log(100 > 50); // → true
```

**Descomenta la sección del Paso 5.**

---

## 🏃 Cómo Ejecutar

```bash
node starter/index.js
```

## ✅ Criterios de Éxito

- [ ] Pude predecir correctamente la mayoría de los resultados
- [ ] Entiendo por qué `'10' + 5` produce `"105"` y no `15`
- [ ] Confirmo que `console.log()` evalúa la expresión, no la imprime tal cual
