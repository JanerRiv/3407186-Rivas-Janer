# Ejercicio 01 — if / else if / else

## 🎯 Objetivo

Practicar estructuras de control `if`, `else if` y `else` con condiciones simples y compuestas.

---

## 📋 Pasos

### Paso 1: `if` simple

Un `if` ejecuta su bloque solo si la condición es `true`:

```javascript
const temperature = 35;
if (temperature > 30) {
  console.log("Hace calor");
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

Salida esperada:

```
--- Paso 1: if simple ---
Temperatura: 35
Hace calor
```

---

### Paso 2: `if` / `else`

Agrega una rama alternativa:

```javascript
const score = 45;
if (score >= 70) {
  console.log("Aprobado");
} else {
  console.log("No aprobado");
}
```

**Descomenta** la sección del Paso 2.

Salida esperada:

```
--- Paso 2: if / else ---
Puntaje: 45
No aprobado
```

---

### Paso 3: `if` / `else if` / `else`

Múltiples ramas para distintos rangos:

```javascript
if (score >= 90) {
  console.log("Excelente");
} else if (score >= 70) {
  console.log("Satisfactorio");
} else {
  console.log("En proceso");
}
```

**Descomenta** la sección del Paso 3.

Salida esperada:

```
--- Paso 3: if / else if / else ---
Puntaje: 75
Satisfactorio
```

---

### Paso 4: Condición compuesta con `&&`

Combina dos condiciones:

```javascript
const age = 22;
const hasPass = true;
if (age >= 18 && hasPass) {
  console.log("Puede ingresar");
}
```

**Descomenta** la sección del Paso 4.

Salida esperada:

```
--- Paso 4: condición compuesta ---
Edad: 22 | Pase: true
Puede ingresar
```

---

## 💡 Recuerda

- Siempre usa `===` y nunca `==`
- Puedes combinar condiciones con `&&` (ambas deben ser true) y `||` (basta con una)
