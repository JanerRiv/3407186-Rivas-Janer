# Ejercicio 04: Mi Primer Programa

## 🎯 Objetivo

Aplicar el ciclo Entrada → Proceso → Salida en un programa real. Identificar qué parte del código es cada fase.

## ⏱️ Duración estimada

35 minutos

## 📋 Instrucciones

Abre `starter/index.js`. En este ejercicio vas a construir un programa completo que calcula el precio final de un producto aplicando el ciclo fundamental de programación.

---

### Paso 1: Definir la entrada (datos)

La entrada son los datos con los que el programa trabaja. Por ahora los escribimos directamente en el código:

```javascript
// Entrada: precio base y porcentaje de descuento
console.log("Precio base: 80000");
console.log("Descuento: 10");
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: El proceso (cálculo)

El proceso es donde el programa hace algo con los datos:

```javascript
// Proceso: calcular el descuento en pesos
console.log((80000 * 10) / 100); // → 8000
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: La salida (resultado)

La salida es lo que el usuario final ve:

```javascript
// Salida: mostrar el precio final
console.log("Precio final: " + (80000 - 8000)); // → "Precio final: 72000"
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: Programa completo con formato

Unir todo con una salida bien presentada:

```javascript
console.log("=== FACTURA ===");
console.log("Producto:  Teclado mecánico");
console.log("Precio:    80000");
console.log("Descuento: 8000");
console.log("Total:     72000");
console.log("===============");
```

**Descomenta la sección del Paso 4.**

---

### Paso 5: Identificar el ciclo en el código

Agrega comentarios que identifiquen explícitamente cada fase:

```javascript
// === ENTRADA ===
// === PROCESO ===
// === SALIDA ===
```

**Descomenta la sección del Paso 5.**

---

## 🏃 Cómo Ejecutar

```bash
node starter/index.js
```

## ✅ Criterios de Éxito

- [ ] Identifico claramente qué parte es ENTRADA, PROCESO y SALIDA
- [ ] El cálculo es correcto
- [ ] La salida está formateada y es legible
