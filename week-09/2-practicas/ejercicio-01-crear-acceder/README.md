# Ejercicio 01: Crear y Acceder a Objetos

## 🎯 Objetivo

Practicar la creación de objetos literales y el acceso a sus propiedades con notación de punto y de corchetes.

---

## Paso 1: Crear un Objeto Literal

Un objeto agrupa propiedades relacionadas bajo un mismo nombre:

```javascript
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
  available: true,
};

console.log(book.title); // "JavaScript: The Good Parts"
console.log(book.author); // "Douglas Crockford"
```

**Abre `starter/index.js`** y descomenta la Sección 1.

---

## Paso 2: Notación de Corchetes y Acceso Dinámico

Los corchetes permiten usar claves dinámicas (variables) o claves con caracteres especiales:

```javascript
const item = { id: 1, name: "Laptop", "display-size": 15.6 };

// Clave dinámica con variable
const field = "name";
console.log(item[field]); // "Laptop"

// Clave con guion — solo corchetes
console.log(item["display-size"]); // 15.6
```

**Abre `starter/index.js`** y descomenta la Sección 2.

---

## Paso 3: Modificar, Agregar y Eliminar Propiedades

```javascript
const user = { name: "Ana", age: 28 };

user.age = 29; // modificar
user.city = "Madrid"; // agregar nueva propiedad
delete user.age; // eliminar

console.log(user); // { name: "Ana", city: "Madrid" }
```

**Abre `starter/index.js`** y descomenta la Sección 3.

---

## Paso 4: Objetos Anidados y Optional Chaining

```javascript
const employee = {
  name: "Carlos",
  department: {
    name: "Engineering",
    floor: 3,
  },
};

console.log(employee.department.name); // "Engineering"
console.log(employee?.address?.city); // undefined (no error)
```

**Abre `starter/index.js`** y descomenta la Sección 4.
