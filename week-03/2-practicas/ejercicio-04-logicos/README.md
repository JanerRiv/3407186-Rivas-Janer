# Ejercicio 04: Operadores Lógicos

## 🎯 Objetivo

Practicar `&&` (AND), `||` (OR) y `!` (NOT), entender la evaluación por cortocircuito y usarlos para construir condiciones compuestas.

## ⏱️ Duración estimada

30 minutos

## 📋 Instrucciones

Abre `starter/index.js` y sigue los pasos descomentando cada sección.
Cuando termines, compara tu resultado con `solution/index.js`.

Ejecuta con:

```bash
node starter/index.js
```

---

## Paso 1: AND (`&&`)

`&&` devuelve `true` **solo si ambos** operandos son verdaderos.

```javascript
const hasTicket = true;
const hasId = true;
console.log(hasTicket && hasId); // true — puede entrar
```

Si el primero es `false`, el segundo **ni se evalúa** (cortocircuito).

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

## Paso 2: OR (`||`)

`||` devuelve `true` **si al menos uno** es verdadero.

```javascript
const hasCard = false;
const hasCash = true;
console.log(hasCard || hasCash); // true — puede pagar
```

Si el primero es `true`, el segundo **ni se evalúa** (cortocircuito).

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

## Paso 3: NOT (`!`)

`!` invierte el valor booleano.

```javascript
const isLoggedIn = false;
console.log(!isLoggedIn); // true — no está logueado → mostrar login
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

## Paso 4: Condiciones compuestas

Las condiciones reales combinan operadores lógicos y de comparación.

```javascript
const age = 25;
const hasLicense = true;
const canDrive = age >= 18 && hasLicense;
console.log("¿Puede conducir?", canDrive); // true
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

## ✅ Checklist

- [ ] `&&` requiere que AMBOS sean verdaderos
- [ ] `||` requiere que AL MENOS UNO sea verdadero
- [ ] `!` invierte el booleano
- [ ] Puedo combinar comparadores y lógicos en una sola expresión
