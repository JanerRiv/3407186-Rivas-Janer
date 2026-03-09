# Ejercicio 02: Integración — Mini-App con Todos los Conceptos

## 🎯 Objetivo

Observar cómo los 9 conceptos de la Etapa 0 conviven en un mismo archivo JavaScript. Este ejercicio es un **mapa de referencia** que puedes consultar mientras implementas tu proyecto.

## ⏱️ Tiempo estimado: 40 minutos

## 📋 Instrucciones

Abre `starter/index.js` y descomenta cada sección siguiendo los pasos.
Cada sección demuestra uno o más conceptos de la Etapa 0 aplicados juntos.

---

## 📚 Pasos

### Paso 1: Datos y Configuración (Semanas 01–02)

Variables bien nombradas, tipos correctos, separadores numéricos.

```javascript
const DOMAIN_NAME = "Mini Catálogo";
const MAX_ITEMS = 1_000;
const items = [];
```

**Descomenta la Sección 1.**

---

### Paso 2: Strings y Template Literals (Semanas 03–04)

Formatear salida con template literals, `.padEnd()`, operadores.

```javascript
const formatLine = (item) =>
  `  [${item.id}] ${item.name.padEnd(18)} $${item.price}`;
```

**Descomenta la Sección 2.**

---

### Paso 3: Funciones + Condicionales (Semanas 05–07)

Funciones arrow con lógica condicional, `??`, `?.`.

```javascript
const getStatus = (item) => (item.available ? "disponible" : "agotado");

const getDiscount = (item) => item.discount ?? 0;
```

**Descomenta la Sección 3.**

---

### Paso 4: Arrays + Bucles (Semanas 06–08)

`.filter()`, `.map()`, `.find()`, `.sort()`, `forEach`.

```javascript
const available = items.filter((i) => i.available);
const withTax = items.map((i) => ({ ...i, total: i.price * 1.19 }));
```

**Descomenta la Sección 4.**

---

### Paso 5: Objetos + Object.\* + Spread (Semana 09)

`Object.keys/values/entries`, `Object.hasOwn()`, spread, `for...in`.

```javascript
Object.entries(items[0]).forEach(([k, v]) => ...);
const updated = { ...item, price: 99 };
```

**Descomenta la Sección 5.**

---

## ✅ Resultado esperado

```
=== Sección 1: Datos ===
Dominio: Mini Catálogo  | Límite: 1000

=== Sección 2: Strings ===
  [1] Laptop             $1200
  [2] Mouse              $35

=== Sección 3: Funciones y Condicionales ===
Laptop → disponible (descuento: 0%)
Mouse  → disponible (descuento: 10%)
Silla  → agotado   (descuento: 0%)

=== Sección 4: Arrays y Bucles ===
Disponibles (2): Laptop, Mouse
Con IVA:
  Laptop → $1428.00
  Mouse  → $41.65

=== Sección 5: Object.* y Spread ===
Propiedades de Laptop: id, name, price, available, category
Valores numéricos: 1200, 35, 280
Laptop actualizado (precio 999): original sigue en 1200
'discount' en Mouse: true
```
