# 📋 Revisión Etapa 0 — Cheatsheet Semanas 1 a 9

> Esta hoja de referencia rápida resume los conceptos más importantes de las semanas 1 a 9.
> Úsala para repasar antes de planificar y construir tu proyecto integrador.

---

## Semana 01–02: Variables, Tipos y Strings

```javascript
// Declaración — usar const por defecto, let solo si necesitas reasignar
const PI = 3.14159;
let counter = 0;
counter++; // reasignación válida con let

// Tipos primitivos
typeof "texto"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof null; // "object" ← comportamiento histórico de JS
typeof undefined; // "undefined"

// Conversión explícita
Number("42"); // 42
String(100); // "100"
Boolean(0); // false — falsy values: 0, "", null, undefined, NaN

// Separador numérico (ES2021) — solo visual, no afecta el valor
const billion = 1_000_000_000;
```

---

## Semana 03: Operadores

```javascript
// Aritméticos
10 % 3; // 1 — módulo (resto)
2 ** 8; // 256 — potencia

// Comparación — SIEMPRE usar === y !==
"5" === 5; // false — estricto: compara valor Y tipo
"5" == 5; // true  — ❌ evitar, coerciona tipos

// Asignación compuesta
x += 10;
x -= 5;
x *= 2;
x /= 4;

// Lógicos
true && false; // false
true || false; // true
!true; // false
```

---

## Semana 04: Strings

```javascript
const name = "Ana";

// Template literals — preferir siempre sobre concatenación
const msg = `Hola, ${name}! Tienes ${30 + 1} años.`;

// Métodos más usados
"  hola  ".trim(); // "hola"
"JavaScript".toLowerCase(); // "javascript"
"hola".includes("ol"); // true
"abc".repeat(3); // "abcabcabc"
"hola mundo".slice(5, 10); // "mundo"
"a,b,c".split(","); // ["a", "b", "c"]
"hola".startsWith("ho"); // true
"texto".padEnd(8, "."); // "texto..."
```

---

## Semana 05: Condicionales

```javascript
// if / else if / else
if (score >= 90) {
  console.log("Excelente");
} else if (score >= 70) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// Ternario — para asignaciones simples
const label = score >= 70 ? "Aprobado" : "Reprobado";

// Nullish coalescing — usa el valor de la derecha solo si el izquierdo es null/undefined
const timeout = config.timeout ?? 3000;

// Optional chaining — evita TypeError si el objeto no existe
const city = user?.address?.city; // undefined en lugar de error
```

---

## Semana 06: Bucles

```javascript
// for clásico
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of — la forma moderna para iterar arrays
for (const item of items) {
  console.log(item.name);
}

// forEach — con función arrow
items.forEach((item) => {
  console.log(`${item.id}. ${item.name}`);
});

// while
let attempts = 0;
while (attempts < 3) {
  attempts++;
}

// break y continue
for (const item of items) {
  if (!item.active) continue; // saltar elemento
  if (item.id === 99) break; // salir del bucle
  console.log(item.name);
}
```

---

## Semana 07: Funciones

```javascript
// Arrow function — sintaxis moderna preferida
const greet = (name) => `Hola, ${name}!`;

// Con bloque y return explícito
const calculateTotal = (price, tax) => {
  const taxAmount = price * tax;
  return price + taxAmount;
};

// Parámetros por defecto
const createUser = (name, role = "user", active = true) => ({
  name,
  role,
  active,
});

// Función como callback
const prices = [100, 200, 300];
const total = prices.reduce((sum, p) => sum + p, 0);
```

---

## Semana 08: Arrays

```javascript
const items = ["a", "b", "c"];

// Acceso y longitud
items[0]          // "a"
items.at(-1)      // "c" — índice negativo (ES2022)
items.length      // 3

// Modificar
items.push("d");        // agrega al final
items.pop();            // elimina del final, retorna el elemento
items.unshift("z");     // agrega al inicio
items.shift();          // elimina del inicio

// Buscar
items.includes("b")     // true
items.indexOf("b")      // 1

// Métodos funcionales — retornan NUEVO array
items.filter((x) => x !== "b")         // ["a", "c"]
items.map((x) => x.toUpperCase())      // ["A", "B", "C"]
items.find((x) => x === "b")           // "b"
[...items].sort((a, b) => a > b ? 1 : -1)  // sin mutar original
```

---

## Semana 09: Objetos

```javascript
// Crear y acceder
const user = { name: "Ana", age: 28, active: true };
user.name; // "Ana"
user["active"]; // true

// Modificar y agregar
user.age = 29;
user.email = "ana@mail.com";

// Métodos Object.*
Object.keys(user); // ["name", "age", "active", "email"]
Object.values(user); // ["Ana", 29, true, "ana@mail.com"]
Object.entries(user); // [["name","Ana"], ["age",29], ...]

// Verificar propiedad (ES2022)
Object.hasOwn(user, "email"); // true
Object.hasOwn(user, "phone"); // false

// for...in
for (const key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(`${key}: ${user[key]}`);
  }
}

// Spread — copia y actualización inmutable
const copy = { ...user };
const updated = { ...user, age: 30 }; // user.age sigue siendo 29

// Arrays de objetos
const users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Luis", active: false },
];
const active = users.filter((u) => u.active);
const found = users.find((u) => u.id === 2);
const withLabel = users.map((u) => ({ ...u, label: u.name.toUpperCase() }));
```

---

## ✅ Checklist de Conceptos — Integrador

Antes de empezar tu proyecto, verifica que puedes responder:

- [ ] ¿Cuándo uso `const` y cuándo `let`?
- [ ] ¿Por qué prefiero template literals sobre concatenación?
- [ ] ¿Cuál es la diferencia entre `===` y `==`?
- [ ] ¿Cómo escribo una función arrow con y sin `return` implícito?
- [ ] ¿Qué devuelven `.filter()`, `.map()` y `.find()`?
- [ ] ¿Cuál es la diferencia entre `{...obj}` y `obj2 = obj`?
- [ ] ¿Por qué uso `Object.hasOwn()` en lugar de `in` para propiedades propias?
- [ ] ¿Por qué uso `[...arr].sort()` en lugar de `arr.sort()`?
