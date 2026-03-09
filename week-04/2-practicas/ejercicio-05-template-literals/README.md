# Ejercicio 05 — Template Literals

## 🎯 Objetivo

Pasar de concatenación con `+` a template literals, e incrustar expresiones.

---

## Paso 1: Interpolación básica

```javascript
const name = "Ana";
const role = "guía del planetario";
console.log(`Hola, soy ${name} — ${role}.`);
```

**Abre `starter/index.js`** y descomenta el Paso 1.

---

## Paso 2: Expresiones aritméticas en `${}`

```javascript
const price = 12_000;
const qty = 3;
console.log(`Total: $${price * qty}`);
```

**Descomenta** el Paso 2.

---

## Paso 3: Métodos de string en `${}`

```javascript
const raw = "  sistema solar  ";
console.log(`Título: ${raw.trim().toUpperCase()}`);
```

**Descomenta** el Paso 3.

---

## Paso 4: String multilínea

```javascript
const card = `
=============================
  EXHIBICIÓN: Sistema Solar
=============================
Capacidad: 45 personas
Duración:  50 minutos
=============================
`;
console.log(card);
```

**Descomenta** el Paso 4.

---

## Paso 5: Ternario dentro del template

```javascript
const isOpen = true;
console.log(`Estado: ${isOpen ? "Abierto" : "Cerrado"}`);
```

**Descomenta** el Paso 5.
