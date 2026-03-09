# Operadores Lógicos

> 📁 Semana 03 · Teoría 03

## 🎯 Objetivos

- Combinar condiciones con `&&` (AND) y `||` (OR)
- Invertir una condición con `!` (NOT)
- Entender el comportamiento de "cortocircuito"
- Leer y construir expresiones lógicas compuestas

---

## 1. AND — `&&`

El operador `&&` (AND) devuelve `true` solo si **ambas** condiciones son verdaderas:

```
A   && B   → resultado
true  && true  → true
true  && false → false
false && true  → false
false && false → false
```

```javascript
const age = 22;
const hasId = true;

// Los dos deben cumplirse para entrar
const canEnter = age >= 18 && hasId;
console.log("¿Puede entrar?", canEnter); // true

// Si cambiamos uno:
const hasIdB = false;
const canEnterB = age >= 18 && hasIdB;
console.log("¿Puede entrar (sin ID)?", canEnterB); // false
```

---

## 2. OR — `||`

El operador `||` (OR) devuelve `true` si **al menos una** condición es verdadera:

```
A   || B   → resultado
true  || true  → true
true  || false → true
false || true  → true
false || false → false
```

```javascript
const isAdmin = false;
const isModerator = true;

// Al menos uno debe ser verdad para tener acceso
const hasAccess = isAdmin || isModerator;
console.log("¿Tiene acceso?", hasAccess); // true

const isStudent = false;
const isTeacher = false;
const canViewCourse = isStudent || isTeacher;
console.log("¿Puede ver el curso?", canViewCourse); // false
```

---

## 3. NOT — `!`

El operador `!` (NOT) **invierte** el valor booleano:

```javascript
console.log(!true); // false
console.log(!false); // true

const isBlocked = false;
const canLogin = !isBlocked;
console.log("¿Puede iniciar sesión?", canLogin); // true

// Doble negación — puede usarse para forzar boolean
const value = "texto";
console.log(!value); // false (porque "texto" es truthy)
console.log(!!value); // true  (doble negación = boolean del valor)
```

---

## 4. Cortocircuito (short-circuit evaluation)

JavaScript **no evalúa la segunda parte** de una expresión lógica si el resultado ya está determinado:

### `&&` cortocircuita en `false`

Si la **primera parte es falsa**, el resultado ya es `false`. La segunda no se evalúa:

```javascript
const user = null;

// Sin cortocircuito esto lanzaría error, pero && lo previene:
const name = user && user.name; // user es null (falsy) → devuelve null
console.log(name); // null ← no hay error

// Si user existe:
const activeUser = { name: "Ana" };
const activeName = activeUser && activeUser.name;
console.log(activeName); // "Ana"
```

### `||` cortocircuita en `true`

Si la **primera parte es verdadera**, el resultado ya es `true`. La segunda no se evalúa:

```javascript
// Valor por defecto con ||
const userInput = "";
const displayName = userInput || "Anónimo";
console.log(displayName); // "Anónimo" ← porque "" es falsy

const userInput2 = "María";
const displayName2 = userInput2 || "Anónimo";
console.log(displayName2); // "María"
```

> 💡 Este patrón (`valor || default`) fue muy común antes de ES2020. En la semana 05 verás el operador `??` que hace esto mejor cuando el valor puede ser `0` o `""` válidos.

---

## 5. Combinaciones

Puedes combinar múltiples operadores lógicos. Usa paréntesis para dejar clara tu intención:

```javascript
const isAdult = true;
const hasMembership = false;
const hasInvitation = true;

// (es adulto Y tiene membresía) O tiene invitación
const canAttend = (isAdult && hasMembership) || hasInvitation;
console.log("¿Puede asistir?", canAttend); // true

// es adulto Y (tiene membresía O tiene invitación)
const canAttend2 = isAdult && (hasMembership || hasInvitation);
console.log("¿Puede asistir (v2)?", canAttend2); // true
```

---

## 6. Operadores lógicos con valores no booleanos

En JavaScript, `&&` y `||` no siempre devuelven `true` o `false`. Devuelven **uno de los operandos**:

```javascript
// && devuelve el primer valor falsy, o el último si todos son truthy
console.log("texto" && 42); // 42
console.log(0 && "texto"); // 0 ← 0 es falsy

// || devuelve el primer valor truthy, o el último si todos son falsy
console.log("" || "default"); // "default"
console.log("Ana" || "default"); // "Ana"
console.log(null || undefined); // undefined ← ambos falsy, devuelve el último
```

> 💡 Este comportamiento es el que permite el patrón de valor por defecto con `||`.

---

## ✅ Checklist de verificación

- [ ] Sé usar `&&` para combinar condiciones (ambas deben ser verdaderas)
- [ ] Sé usar `||` para alternar condiciones (al menos una debe ser verdadera)
- [ ] Sé invertir un valor con `!`
- [ ] Entiendo cómo funciona el cortocircuito
- [ ] Uso paréntesis para aclarar el orden en expresiones complejas

---

## 📚 Recursos adicionales

- [MDN — Operadores lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [javascript.info — Operadores lógicos](https://javascript.info/logical-operators)

---

[← Anterior](./02-operadores-asignacion-comparacion.md) | [Siguiente: Precedencia y coerción →](./04-precedencia-coercion.md)
