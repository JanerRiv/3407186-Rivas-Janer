# Ejercicio 01: Operadores Aritméticos

## 🎯 Objetivo

Practicar los seis operadores aritméticos: `+`, `-`, `*`, `/`, `%`, `**`. Identificar cuándo `+` suma y cuándo concatena.

## ⏱️ Duración estimada

30 minutos

## 📋 Instrucciones

Abre el archivo `starter/index.js` y descomenta cada sección en orden.

```bash
node starter/index.js
```

---

### Paso 1: Operaciones básicas

```javascript
const a = 20;
const b = 6;
console.log(a + b); // 26
console.log(a - b); // 14
console.log(a * b); // 120
console.log(a / b); // 3.333...
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Módulo `%`

El módulo devuelve el **resto** de la división entera:

```javascript
console.log(20 % 6); // 2 ← 20 = 3×6 + 2
console.log(15 % 5); // 0 ← múltiplo exacto
console.log(7 % 2); // 1 ← impar
console.log(8 % 2); // 0 ← par
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Potencia `**`

```javascript
console.log(2 ** 10); // 1024
console.log(3 ** 3); // 27
console.log(9 ** 0.5); // 3 ← raíz cuadrada
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

### Paso 4: `+` con strings — concatenación

Cuando uno de los operandos es string, `+` concatena en vez de sumar:

```javascript
console.log(10 + 20); // 30  ← suma
console.log("10" + 20); // "1020" ← concatenación
console.log(10 + "20"); // "1020" ← concatenación
console.log(Number("10") + 20); // 30 ← correcto
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

### Paso 5: Aplicación práctica

Calcula el precio final de un producto aplicando impuesto y descuento:

```javascript
const basePrice = 100_000;
const taxRate = 0.19; // 19%
const discount = 15_000;

const priceWithTax = basePrice * (1 + taxRate);
const finalPrice = priceWithTax - discount;
console.log("Precio con impuesto:", priceWithTax);
console.log("Precio final:", finalPrice);
```

**Abre `starter/index.js`** y descomenta la sección del Paso 5.

---

## ✅ Al terminar

- ¿Cuándo `+` suma y cuándo concatena?
- ¿Cómo usas `%` para saber si un número es par?
- ¿Cómo calculas la raíz cuadrada con `**`?

Compara tu solución con `solution/index.js`.
