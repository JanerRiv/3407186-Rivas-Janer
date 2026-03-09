# Ejercicio 02 — Operador Ternario

## 🎯 Objetivo

Practicar el operador ternario `? :` para simplificar condiciones de dos ramas y usarlo dentro de template literals.

---

## 📋 Pasos

### Paso 1: Asignación básica con ternario

El ternario asigna un valor según una condición:

```javascript
const stock = 5;
const availability = stock > 0 ? "Disponible" : "Sin stock";
console.log(availability); // "Disponible"
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

Salida esperada:

```
--- Paso 1: asignación básica ---
Stock: 5
Disponible
```

---

### Paso 2: Ternario dentro de template literals

El ternario puede vivir dentro de `${}`:

```javascript
const isOpen = true;
console.log(`Estado: ${isOpen ? "Abierto" : "Cerrado"}`);
```

**Descomenta** la sección del Paso 2.

Salida esperada:

```
--- Paso 2: ternario en template literal ---
Estado: Abierto
```

---

### Paso 3: Ternario con cálculo numérico

El ternario también puede devolver el resultado de una operación:

```javascript
const visitors = 120;
const total = visitors > 100 ? visitors * 0.9 : visitors;
console.log(`Total: ${total}`);
```

**Descomenta** la sección del Paso 3.

Salida esperada:

```
--- Paso 3: ternario con cálculo ---
Visitantes: 120
Total con descuento: 108
```

---

### Paso 4: Cuando NO usar el ternario

Para tres o más ramas, el `if/else if` es más legible:

```javascript
// ❌ Ternario anidado — difícil de leer
const cat = s >= 90 ? "A" : s >= 70 ? "B" : "C";

// ✅ if/else if — más claro
let cat;
if (s >= 90) {
  cat = "A";
} else if (s >= 70) {
  cat = "B";
} else {
  cat = "C";
}
```

**Descomenta** la sección del Paso 4.

Salida esperada:

```
--- Paso 4: cuándo no usar ternario ---
Puntaje: 82
Categoría if/else: B
```

---

## 💡 Recuerda

- Ternario = condición de **dos** ramas en una línea
- Evita anidar ternarios: el código se vuelve ilegible
