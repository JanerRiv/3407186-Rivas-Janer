# Glosario — Semana 02: Variables y Tipos de Datos

Términos clave de la semana ordenados alfabéticamente.

---

## B

### boolean

Tipo primitivo con solo dos valores posibles: `true` o `false`. Se usa para representar condiciones, estados o respuestas sí/no.

```javascript
const isActive = true;
const hasDiscount = false;
```

## C

### camelCase

Convención de nomenclatura donde la primera palabra va en minúsculas y cada palabra subsiguiente comienza con letra mayúscula. Estándar para variables y funciones en JavaScript.

```javascript
const firstName = "Ana";
const productPrice = 99.99;
```

### const

Palabra clave para declarar una variable cuyo valor **no se puede reasignar**. Es la opción por defecto en JavaScript moderno.

```javascript
const PI = 3.14159;
```

### coerción de tipos (type coercion)

Conversión automática o manual de un tipo de dato a otro. La **coerción implícita** la hace JavaScript automáticamente; la **coerción explícita** la hace el programador usando `Number()`, `String()` o `Boolean()`.

```javascript
// Implícita (automática, puede causar bugs)
"5" + 3; // "53"

// Explícita (controlada)
Number("5") + 3; // 8
```

## F

### falsy

Valor que se evalúa como `false` en un contexto booleano. Solo existen **6 valores falsy** en JavaScript: `false`, `0`, `""`, `null`, `undefined`, `NaN`.

```javascript
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
```

## L

### let

Palabra clave para declarar una variable que **sí puede reasignarse**. Se usa cuando el valor cambia a lo largo del programa.

```javascript
let counter = 0;
counter = counter + 1;
```

## N

### NaN

_Not a Number_. Resultado de una operación o conversión numérica inválida. Tiene tipo `"number"` pero no representa ningún número. Se detecta con `isNaN()`.

```javascript
Number("texto"); // NaN
isNaN(NaN); // true
NaN === NaN; // false ← NaN no es igual a sí mismo
```

### null

Tipo primitivo que representa la **ausencia intencional** de valor. Lo asigna el programador; `typeof null === "object"` es un bug histórico de JavaScript.

```javascript
const currentUser = null; // no hay usuario seleccionado
currentUser === null; // true ← forma correcta de detectarlo
```

### numeric separator

Guión bajo `_` usado en literales numéricos para mejorar legibilidad. Característica de ES2021. No afecta el valor del número.

```javascript
const million = 1_000_000; // igual a 1000000
const price = 29_900; // igual a 29900
```

## S

### string

Tipo primitivo que representa texto. Se delimita con comillas simples `'`, dobles `"` o backticks `` ` ``.

```javascript
const name = "JavaScript";
const greeting = `Hola, ${name}!`;
```

## T

### typeof

Operador unario que devuelve el tipo de un valor como `string`.

```javascript
typeof "hola"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" ← bug histórico
```

### truthy

Valor que se evalúa como `true` en un contexto booleano. Todo lo que **no es falsy** es truthy. Incluye `1`, `"texto"`, `[]`, `{}`, etc.

## U

### undefined

Tipo primitivo que representa una variable **declarada pero sin valor asignado**. JavaScript lo asigna automáticamente.

```javascript
let notSet;
console.log(notSet); // undefined
```

### UPPER_SNAKE_CASE

Convención de nomenclatura para constantes globales de configuración: todas las letras en mayúscula, palabras separadas por guiones bajos.

```javascript
const MAX_RETRY_COUNT = 3;
const DEFAULT_LANGUAGE = "es";
```

## V

### var

Palabra clave obsoleta para declarar variables. Tiene alcance de función (no de bloque), puede redeclararse sin error y se eleva (_hoisting_). **Se debe evitar** en JavaScript moderno.

```javascript
// ❌ No usar
var oldStyle = "evitar";
```

---

## 🔗 Recursos adicionales

- [MDN — Tipos de datos](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
- [javascript.info — Tipos de datos](https://javascript.info/types)

---

[← Recursos](../4-recursos/) | [README semana](../README.md)
