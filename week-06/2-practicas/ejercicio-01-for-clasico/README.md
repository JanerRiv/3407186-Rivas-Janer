# Ejercicio 01 — Bucle `for` Clásico

> **Semana 06 · Práctica 1/5**

## 🎯 Objetivo

Practicar el bucle `for` en sus variantes principales: contar hacia adelante, contar hacia atrás y saltar de n en n.

---

## Instrucciones

Abre `starter/index.js` y sigue los pasos descomentando código sección por sección.

---

### Paso 1: `for` básico — contar del 1 al 5

El `for` más simple: repetir algo un número fijo de veces.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Iteración ${i}`);
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

Observa la salida: ¿cuántas líneas aparecen? ¿Cuál es el primer y último número?

---

### Paso 2: `for` con array — acceso por índice

Cuando necesitas el índice para acceder a elementos de un array.

```javascript
const stations = ["Norte", "Centro", "Sur", "Este", "Oeste"];

for (let i = 0; i < stations.length; i++) {
  console.log(`Estación ${i + 1}: ${stations[i]}`);
}
```

**Descomenta la sección del Paso 2.**

Observa: ¿por qué se usa `i + 1` en el template literal pero `stations[i]` para acceder?

---

### Paso 3: `for` hacia atrás — cuenta regresiva

Cambia la dirección del contador e invierte la condición.

```javascript
for (let i = 5; i >= 1; i--) {
  console.log(`${i}...`);
}
console.log("¡Fin!");
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: `for` con paso distinto — de 2 en 2

Usar `i += 2` en lugar de `i++` para saltar valores.

```javascript
const evenNumbers = [];
for (let i = 0; i <= 10; i += 2) {
  evenNumbers.push(i);
}
console.log("Pares:", evenNumbers);
```

**Descomenta la sección del Paso 4.**

Modifica el incremento a `i += 3` y observa qué números aparecen.

---

## ✅ Verificación

Al ejecutar `solution/index.js` debes ver exactamente:

```
--- Paso 1: for básico ---
Iteración 1
Iteración 2
Iteración 3
Iteración 4
Iteración 5

--- Paso 2: for con array ---
Estación 1: Norte
Estación 2: Centro
Estación 3: Sur
Estación 4: Este
Estación 5: Oeste

--- Paso 3: cuenta regresiva ---
5...
4...
3...
2...
1...
¡Fin!

--- Paso 4: saltar de 2 en 2 ---
Pares: [ 0, 2, 4, 6, 8, 10 ]
```
