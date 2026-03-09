# Ejercicio 01 — Propiedades de Strings

## 🎯 Objetivo

Explorar la propiedad `.length` y el acceso a caracteres individuales por índice.

---

## Paso 1: La propiedad `.length`

`.length` devuelve el número total de caracteres, incluyendo espacios.

```javascript
const language = "JavaScript";
console.log(language.length); // 10
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

## Paso 2: Acceso por índice

El índice empieza en `0`. El último carácter está en `length - 1`.

```javascript
const word = "Hola";
console.log(word[0]); // 'H'
console.log(word[word.length - 1]); // 'a'
```

**Descomenta** la sección del Paso 2.

---

## Paso 3: Strings con espacios y especiales

Los espacios cuentan como un carácter. Las secuencias de escape (`\n`, `\t`) también cuentan.

```javascript
const withSpace = "Hola mundo";
console.log(withSpace.length); // 10
```

**Descomenta** la sección del Paso 3.

---

## Paso 4: String vacío

Un string vacío tiene `length` igual a `0`.

```javascript
const empty = "";
console.log(empty.length); // 0
```

**Descomenta** la sección del Paso 4.

---

## Resultado esperado

```
--- Paso 1: .length ---
Longitud de 'JavaScript': 10
Longitud de 'Hola mundo': 10

--- Paso 2: Acceso por índice ---
Primer carácter: J
Último carácter: t
Carácter en índice 4: S

--- Paso 3: Espacios y escapes ---
'Hola mundo' tiene 10 caracteres (el espacio cuenta)

--- Paso 4: String vacío ---
Longitud de '': 0
```
