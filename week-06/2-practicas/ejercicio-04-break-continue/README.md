# Ejercicio 04 — `break` y `continue`

> **Semana 06 · Práctica 4/5**

## 🎯 Objetivo

Controlar el flujo de bucles con `break` (salir) y `continue` (saltar iteración).

---

## Instrucciones

Abre `starter/index.js` y descomenta las secciones en orden.

---

### Paso 1: `break` — salir al encontrar un valor

Detener el bucle tan pronto como encontramos lo que buscábamos.

```javascript
const inventory = ["silla", "mesa", null, "lámpara", "sofá"];

for (const item of inventory) {
  if (item === null) {
    console.log("Registro vacío encontrado, deteniendo búsqueda.");
    break;
  }
  console.log(`Elemento: ${item}`);
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `continue` — saltar elementos inválidos

Omitir ciertos elementos y seguir procesando el resto.

```javascript
const readings = [42, null, 35, null, 28, 51, null];

for (const reading of readings) {
  if (reading === null) {
    continue; // saltar lecturas vacías
  }
  console.log(`Lectura válida: ${reading}`);
}
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: `break` en `for` clásico — buscar por índice

`break` también funciona en `for` clásico. Es útil para buscar y guardar la posición.

```javascript
const codes = [101, 204, 308, 415, 502];
const targetCode = 308;
let foundAt = -1;

for (let i = 0; i < codes.length; i++) {
  if (codes[i] === targetCode) {
    foundAt = i;
    break;
  }
}

console.log(
  foundAt !== -1
    ? `Código ${targetCode} en posición ${foundAt}`
    : `Código ${targetCode} no encontrado`,
);
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: `continue` para filtrar con condición compuesta

Usar `continue` con varias condiciones para procesar solo los elementos que nos interesan.

```javascript
const scores = [45, 88, 72, 30, 95, 60, 15, 83];

console.log("Calificaciones entre 60 y 90:");
for (const score of scores) {
  if (score < 60 || score > 90) {
    continue; // saltar los que están fuera del rango
  }
  console.log(`  ${score}`);
}
```

**Descomenta la sección del Paso 4.**

---

## ✅ Verificación

Salida esperada de `solution/index.js`:

```
--- Paso 1: break ---
Elemento: silla
Elemento: mesa
Registro vacío encontrado, deteniendo búsqueda.

--- Paso 2: continue ---
Lectura válida: 42
Lectura válida: 35
Lectura válida: 28
Lectura válida: 51

--- Paso 3: break con índice ---
Código 308 en posición 2

--- Paso 4: continue con rango ---
Calificaciones entre 60 y 90:
  88
  72
  60
  83
```
