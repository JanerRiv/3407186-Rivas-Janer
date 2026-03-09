# Ejercicio 03 — Parámetros por Defecto

## 🎯 Objetivo

Usar parámetros por defecto para que las funciones sean más flexibles y seguras.

---

## 📋 Pasos

### Paso 1: String como valor por defecto

```javascript
const formatLabel = (text, prefix = "INFO") => `[${prefix}] ${text}`;

console.log(formatLabel("Sistema iniciado")); // "[INFO] Sistema iniciado"
console.log(formatLabel("Error grave", "ERROR")); // "[ERROR] Error grave"
console.log(formatLabel("Advertencia", "WARN")); // "[WARN] Advertencia"
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: Número como valor por defecto

```javascript
const calculateWithTax = (price, taxRate = 0.19) =>
  +(price * (1 + taxRate)).toFixed(2);

console.log(calculateWithTax(100)); // 119
console.log(calculateWithTax(100, 0.08)); // 108
console.log(calculateWithTax(200)); // 238
```

**Descomenta la Sección 2** en el starter.

---

### Paso 3: Boolean como valor por defecto

```javascript
const formatData = (value, verbose = false) => {
  if (verbose) {
    return `[DETALLE] tipo=${typeof value} valor=${value}`;
  }
  return String(value);
};

console.log(formatData(42)); // "42"
console.log(formatData(42, true)); // "[DETALLE] tipo=number valor=42"
```

**Descomenta la Sección 3** en el starter.

---

### Paso 4: Múltiples parámetros con defecto

```javascript
const buildUrl = (path, protocol = "https", domain = "api.example.com") =>
  `${protocol}://${domain}/${path}`;

console.log(buildUrl("users")); // "https://api.example.com/users"
console.log(buildUrl("items", "http")); // "http://api.example.com/items"
console.log(buildUrl("posts", "https", "blog.io")); // "https://blog.io/posts"
```

**Descomenta la Sección 4** en el starter.
