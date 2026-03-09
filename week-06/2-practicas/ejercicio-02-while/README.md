# Ejercicio 02 — `while` y `do...while`

> **Semana 06 · Práctica 2/5**

## 🎯 Objetivo

Practicar los bucles `while` y `do...while`, entender cuándo usar cada uno y evitar los bucles infinitos.

---

## Instrucciones

Abre `starter/index.js` y descomenta las secciones en orden.

---

### Paso 1: `while` básico — contar con condición

`while` es útil cuando el número de repeticiones depende de una condición que puede cambiar.

```javascript
let counter = 1;

while (counter <= 5) {
  console.log(`Contador: ${counter}`);
  counter++;
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `while` para buscar un valor

Un uso muy común: seguir iterando hasta encontrar algo.

```javascript
const queue = [null, null, "ticket-valid", null];
let position = 0;
let result = null;

while (position < queue.length && result === null) {
  result = queue[position];
  position++;
}

console.log(`Resultado encontrado en posición ${position - 1}: ${result}`);
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: `do...while` — ejecutar al menos una vez

`do...while` garantiza que el bloque se ejecuta **siempre al menos una vez**.

```javascript
let attempts = 0;

do {
  attempts++;
  console.log(`Procesando intento ${attempts}...`);
} while (attempts < 3);

console.log(`Total de intentos: ${attempts}`);
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: `while` vs `do...while` con condición inicial falsa

Observa la diferencia clave cuando la condición es falsa desde el inicio.

```javascript
let whileCount = 0;
let doWhileCount = 0;

// Este while NO entra — condición false desde el inicio
while (10 < 5) {
  whileCount++;
}

// Este do...while SÍ entra al menos una vez
do {
  doWhileCount++;
} while (10 < 5);

console.log(`while ejecutó el cuerpo: ${whileCount} veces`);
console.log(`do...while ejecutó el cuerpo: ${doWhileCount} veces`);
```

**Descomenta la sección del Paso 4.**

---

## ✅ Verificación

Salida esperada al ejecutar `solution/index.js`:

```
--- Paso 1: while básico ---
Contador: 1
Contador: 2
Contador: 3
Contador: 4
Contador: 5

--- Paso 2: while buscando valor ---
Resultado encontrado en posición 2: ticket-valid

--- Paso 3: do...while ---
Procesando intento 1...
Procesando intento 2...
Procesando intento 3...
Total de intentos: 3

--- Paso 4: while vs do...while ---
while ejecutó el cuerpo: 0 veces
do...while ejecutó el cuerpo: 1 veces
```
