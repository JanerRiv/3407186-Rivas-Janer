# Ejercicio 03: Tipos de Datos

## 🎯 Objetivo

Identificar y distinguir los tres tipos primitivos básicos (string, number, boolean) usando el operador `typeof`.

## ⏱️ Duración estimada

35 minutos

## 📋 Instrucciones

Abre `starter/index.js` y sigue los pasos. En cada uno usarás `typeof` para "preguntarle" a JavaScript qué tipo de dato es un valor.

---

### Paso 1: typeof string

```javascript
// typeof devuelve el tipo como texto
console.log(typeof "Hola"); // "string"
console.log(typeof "JavaScript"); // "string"
console.log(typeof "42"); // "string" — número ENTRE COMILLAS = string
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: typeof number

```javascript
console.log(typeof 42); // "number"
console.log(typeof 3.14); // "number"
console.log(typeof -100); // "number"
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: typeof boolean

```javascript
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: La trampa del número en string

Uno de los errores más comunes al empezar:

```javascript
console.log(typeof 42); // "number"  → número real
console.log(typeof "42"); // "string"  → texto que parece número
```

**Descomenta la sección del Paso 4.**

---

### Paso 5: typeof null — la sorpresa

Este es un famoso error histórico de JavaScript:

```javascript
console.log(typeof null); // "object" (¡no "null"!)
```

**Descomenta la sección del Paso 5** y lee el comentario explicativo.

---

## 🏃 Cómo Ejecutar

```bash
node starter/index.js
```

## ✅ Criterios de Éxito

- [ ] Puedo predecir qué devuelve `typeof` antes de ejecutar el código
- [ ] Entiendo por qué `typeof '42'` devuelve `"string"` y no `"number"`
- [ ] Sé que `typeof null` es `"object"` (quirk histórico)
