# Ejercicio 01 — Declaración de Funciones

## 🎯 Objetivo

Practicar la declaración de funciones con `function`, el uso de parámetros y el uso de `return`.

---

## 📋 Pasos

### Paso 1: Primera función con `return`

Una función que recibe un nombre y devuelve un saludo.

```javascript
function greetUser(name) {
  return `Hola, ${name}! Bienvenido al programa.`;
}
console.log(greetUser("Ana")); // "Hola, Ana! Bienvenido al programa."
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: Función con dos parámetros

Una función que calcula el área de un rectángulo.

```javascript
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 3)); // 15
```

**Descomenta la Sección 2** en el starter.

---

### Paso 3: Función que usa el valor de `return`

El valor devuelto por una función se puede usar en otras expresiones.

```javascript
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const name = getFullName("Juan", "Pérez");
const message = `El usuario es: ${name}`;
console.log(message); // "El usuario es: Juan Pérez"
```

**Descomenta la Sección 3** en el starter.

---

### Paso 4: Función sin parámetros

Una función que siempre devuelve el mismo valor.

```javascript
function getAppVersion() {
  return "v1.0.0";
}
console.log(`Versión: ${getAppVersion()}`); // "Versión: v1.0.0"
```

**Descomenta la Sección 4** en el starter.
