# Ejercicio 03 — switch Statement

## 🎯 Objetivo

Practicar `switch` con `case`, `break`, `default` y fall-through intencional.

---

## 📋 Pasos

### Paso 1: `switch` básico con strings

```javascript
const day = "miércoles";
switch (day) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "miércoles":
    console.log("Mitad de semana");
    break;
  default:
    console.log("Otro día");
}
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

Salida esperada:

```
--- Paso 1: switch básico ---
Día: miércoles
Mitad de semana
```

---

### Paso 2: La importancia del `break`

Sin `break`, el código cae al siguiente case (fall-through no deseado):

```javascript
const level = 2;
switch (level) {
  case 1:
    console.log("Básico"); // sin break
  case 2:
    console.log("Intermedio"); // sin break
  case 3:
    console.log("Avanzado");
}
// Muestra: Intermedio, Avanzado (fall-through)
```

**Descomenta** la sección del Paso 2.

Salida esperada:

```
--- Paso 2: fall-through sin break ---
Nivel: 2
Intermedio
Avanzado
```

---

### Paso 3: `default` — caso por defecto

Cuando ningún `case` coincide, se ejecuta `default`:

```javascript
const statusCode = "pending";
switch (statusCode) {
  case "open":
    /* ... */ break;
  case "closed":
    /* ... */ break;
  default:
    console.log("Estado desconocido");
}
```

**Descomenta** la sección del Paso 3.

Salida esperada:

```
--- Paso 3: default ---
Estado: pending
Estado desconocido
```

---

### Paso 4: Fall-through intencional — agrupar casos

Se puede agrupar múltiples `case` que ejecuten el mismo bloque:

```javascript
switch (month) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Invierno");
    break;
}
```

**Descomenta** la sección del Paso 4.

Salida esperada:

```
--- Paso 4: fall-through intencional ---
Mes: enero
Temporada: Invierno
```

---

## 💡 Recuerda

- `switch` compara con `===` (estricto)
- Siempre incluye `break` salvo que el fall-through sea intencional
- `default` es opcional pero recomendado como "red de seguridad"
