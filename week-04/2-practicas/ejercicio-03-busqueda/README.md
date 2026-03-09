# Ejercicio 03 — Métodos de Búsqueda

## 🎯 Objetivo

Practicar `includes`, `startsWith`, `endsWith` e `indexOf`.

---

## Paso 1: `includes`

```javascript
const description = "Exhibición interactiva de astronomía";
console.log(description.includes("astronomía")); // true
console.log(description.includes("biología")); // false
```

**Abre `starter/index.js`** y descomenta el Paso 1.

---

## Paso 2: `startsWith` y `endsWith`

```javascript
const filename = "informe-2026.pdf";
console.log(filename.startsWith("informe")); // true
console.log(filename.endsWith(".pdf")); // true
```

**Descomenta** el Paso 2.

---

## Paso 3: `indexOf`

Devuelve la posición de la primera coincidencia, o `-1`.

```javascript
const text = "La Luna orbita la Tierra";
console.log(text.indexOf("Luna")); // 3
console.log(text.indexOf("Marte")); // -1
```

**Descomenta** el Paso 3.

---

## Paso 4: Combinando búsquedas

Usa `includes` para validar antes de procesar.

```javascript
const email = "usuario@ejemplo.com";
const isEmail = email.includes("@") && email.endsWith(".com");
console.log("¿Es email válido?", isEmail); // true
```

**Descomenta** el Paso 4.
