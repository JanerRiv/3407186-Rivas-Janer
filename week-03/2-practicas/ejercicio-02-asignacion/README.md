# Ejercicio 02: Operadores de Asignación

## 🎯 Objetivo

Practicar los operadores de asignación compuesta: `+=`, `-=`, `*=`, `/=`, `%=`. Simular un escenario que requiere actualizar un valor varias veces.

## ⏱️ Duración estimada

25 minutos

## 📋 Instrucciones

Abre el archivo `starter/index.js` y descomenta cada sección en orden.

```bash
node starter/index.js
```

---

### Paso 1: Asignación básica con `+=` y `-=`

```javascript
let stock = 100;
stock += 50; // recibe 50 unidades
console.log(stock); // 150
stock -= 30; // vende 30 unidades
console.log(stock); // 120
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `*=` y `/=`

```javascript
let price = 80_000;
price *= 1.19; // aplicar IVA 19%
console.log(price); // 95200

let total = 240_000;
total /= 3; // dividir entre 3 cuotas
console.log(total); // 80000
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

### Paso 3: `%=`

```javascript
let number = 17;
number %= 5; // resto de 17 / 5
console.log(number); // 2
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Simulación de caja

Simula una caja que recibe pagos, entrega cambio y cobra comisión:

```javascript
let cashRegister = 500_000;
cashRegister += 120_000; // pago
cashRegister -= 80_000; // cambio
cashRegister *= 0.99; // descuenta 1% de comisión
console.log("Caja final:", cashRegister);
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

## ✅ Al terminar

- ¿Qué diferencia hay entre `price = price * 2` y `price *= 2`?
- ¿Cuándo usarías `%=`?

Compara tu solución con `solution/index.js`.
