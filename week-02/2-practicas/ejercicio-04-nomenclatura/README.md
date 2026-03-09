# Ejercicio 04: Nomenclatura

## 🎯 Objetivo

Aplicar las convenciones de nomenclatura: `camelCase` para variables y funciones, `UPPER_SNAKE_CASE` para constantes globales, y prefijos semánticos (`is`, `has`, `can`) para booleanos.

## ⏱️ Duración estimada

25 minutos

## 📋 Instrucciones

Abre el archivo `starter/index.js` y descomenta cada sección en orden.

```bash
node starter/index.js
```

---

### Paso 1: camelCase para variables y funciones

La convención en JavaScript es `camelCase`: primera palabra en minúscula, cada nueva palabra con mayúscula inicial.

```javascript
// ✅ Correcto
const firstName = "María";
const productPrice = 49.99;
const maxRetryCount = 3;

// ❌ Incorrecto
// const first_name = "María";    // snake_case
// const ProductPrice = 49.99;    // PascalCase (reservado para clases)
// const MAXRETRYCOUNT = 3;       // UPPERCASE sin guiones
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: `UPPER_SNAKE_CASE` para constantes globales

Las constantes que representan configuración o valores que nunca cambian se escriben en mayúsculas con guiones bajos.

```javascript
const MAX_ITEMS_PER_PAGE = 20;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_LANGUAGE = "es";
```

**Abre `starter/index.js`** y descomenta la sección del Paso 2.

---

### Paso 3: Prefijos semánticos para booleanos

Usa `is`, `has`, `can`, `should` como prefijo para que sea obvio que una variable es booleana.

```javascript
const isActive = true;
const hasPermission = false;
const canDelete = true;
const shouldNotify = false;

// Sin prefijo es ambiguo:
// const active = true;      ← ¿es boolean o string "active"?
// const permission = false; ← no es claro
```

**Abre `starter/index.js`** y descomenta la sección del Paso 3.

---

### Paso 4: Nombres descriptivos

Un buen nombre comunica la intención sin necesidad de comentario.

```javascript
// ❌ Confuso
const x = 86400;
const d = new Date();
const arr = [];

// ✅ Descriptivo
const SECONDS_PER_DAY = 86400;
const currentDate = new Date();
const pendingOrders = [];
```

**Abre `starter/index.js`** y descomenta la sección del Paso 4.

---

### Paso 5: Identificar y corregir nombres incorrectos

Lee el bloque de código y corrige las convenciones antes de descomentarlo.

**Abre `starter/index.js`** y sigue las instrucciones del Paso 5.

---

## ✅ Al terminar

- ¿Cuándo usas `camelCase` y cuándo `UPPER_SNAKE_CASE`?
- ¿Qué prefijo usas para variables booleanas?
- ¿Por qué los nombres descriptivos ayudan a mantener el código?

Compara tu solución con `solution/index.js`.
