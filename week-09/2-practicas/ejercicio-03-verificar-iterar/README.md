# Ejercicio 03: Verificar e Iterar Propiedades

## 🎯 Objetivo

Practicar cómo verificar si un objeto tiene una propiedad específica usando `Object.hasOwn()` (ES2022), el operador `in`, y cómo iterar las propiedades con `for...in`.

## ⏱️ Tiempo estimado: 30 minutos

## 📋 Instrucciones

Abre `starter/index.js` y descomenta cada sección siguiendo los pasos indicados.

---

## 📚 Pasos

### Paso 1: Object.hasOwn() — Verificar si existe una propiedad

`Object.hasOwn(obj, key)` devuelve `true` si el objeto tiene esa propiedad **propia** (no heredada).

```javascript
const user = { name: "Ana", age: 28, email: "ana@mail.com" };

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "phone")); // false
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

### Paso 2: Operador `in` — Herencia incluida

El operador `in` devuelve `true` si la propiedad existe en el objeto **o en su cadena de herencia**.
`Object.hasOwn()` solo verifica propiedades **propias**.

```javascript
const settings = { theme: "dark", language: "es" };

console.log("theme" in settings); // true  (propiedad propia)
console.log("toString" in settings); // true  (heredada de Object)
console.log(Object.hasOwn(settings, "toString")); // false (no es propia)
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

### Paso 3: for...in — Iterar propiedades

`for...in` recorre todas las propiedades enumerables de un objeto, incluyendo las heredadas.
Normalmente se combina con `Object.hasOwn()` para filtrar solo las propias.

```javascript
const product = { name: "Mouse", price: 35, stock: 10 };

for (const key in product) {
  // Solo procesar propiedades propias del objeto
  if (Object.hasOwn(product, key)) {
    console.log(`${key}: ${product[key]}`);
  }
}
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

### Paso 4: Combinar — Acceso condicional a propiedades opcionales

Cuando un objeto puede tener propiedades opcionales, verificar antes de usarlas evita errores.

```javascript
const printDetail = (item) => {
  console.log(`Nombre: ${item.name}`);

  if (Object.hasOwn(item, "discount")) {
    console.log(`  Descuento: ${item.discount}%`);
  }

  if (Object.hasOwn(item, "notes")) {
    console.log(`  Notas: ${item.notes}`);
  }
};
```

**Abre `starter/index.js`** y descomenta la Sección 4.

---

## ✅ Resultado esperado

```
=== Sección 1: Object.hasOwn() ===
¿Tiene 'name'? true
¿Tiene 'phone'? false
¿Tiene 'active'? true
Campos del perfil: 3
  - name
  - email
  - active

=== Sección 2: Operador 'in' ===
¿Tiene 'theme'? true
¿Tiene 'fontSize'? false
'toString' in settings: true
Object.hasOwn para 'toString': false

=== Sección 3: for...in ===
Propiedades de product:
  name       : Teclado Mecánico
  price      : 89
  stock      : 25
  category   : tech

=== Sección 4: Propiedades opcionales ===
--- Artículo básico ---
Nombre: Monitor Básico
Precio: 180

--- Artículo con extras ---
Nombre: Monitor Pro
Precio: 350
  Descuento: 10%
  Notas: Últimas 3 unidades
```

## 🔗 Recursos

- [Object.hasOwn() — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [for...in — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in)
