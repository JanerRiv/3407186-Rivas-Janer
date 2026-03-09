# Glosario — Semana 05: Condicionales

Términos ordenados alfabéticamente (A–Z).

---

## B

### Boolean

Tipo primitivo con solo dos valores posibles: `true` y `false`. Las condiciones de `if`, `while` y el ternario evalúan sus expresiones como booleanos.

```javascript
const isActive = true;
const isEmpty = false;
```

### `break`

Sentencia que termina la ejecución de un bloque `switch` o de un bucle. En `switch`, evita el fall-through hacia los casos siguientes.

```javascript
switch (type) {
  case "A":
    console.log("Tipo A");
    break; // sin break, el código caería al case siguiente
}
```

---

## C

### Caso por defecto (`default`)

Rama de un `switch` que se ejecuta cuando ningún `case` coincide con la expresión evaluada. Equivale al `else` en un `if/else`.

```javascript
switch (status) {
  case "open":
    /* ... */ break;
  default:
    console.log("Estado desconocido");
}
```

### Condición

Expresión que JavaScript evalúa como `true` o `false` para decidir qué rama ejecutar. Puede ser una comparación, una variable o cualquier expresión con truthiness.

```javascript
if (score >= 70) {
  /* condición: score >= 70 */
}
```

### Cortocircuito (short-circuit)

Comportamiento de `&&` y `||` de dejar de evaluar tan pronto como el resultado está determinado. `&&` se detiene en el primer falsy. `||` se detiene en el primero truthy.

```javascript
false && console.log("nunca se ejecuta");
"valor" || console.log("tampoco se ejecuta");
```

---

## E

### `else`

Rama de un `if` que se ejecuta cuando la condición es `false`. Solo se puede tener un `else` por `if`.

### `else if`

Rama adicional que añade una nueva condición entre `if` y `else`. Permite manejar múltiples casos mutuamente excluyentes.

---

## F

### Fall-through

Comportamiento de un `switch` sin `break`: la ejecución continúa en el siguiente `case` aunque no coincida. Puede ser intencional (para agrupar casos) o un bug si se omitió el `break` por error.

### Falsy

Valor que JavaScript convierte a `false` en un contexto booleano. Los **seis** valores falsy son: `false`, `0`, `""`, `null`, `undefined`, `NaN`.

```javascript
if (!0) console.log("0 es falsy"); // se ejecuta
```

---

## I

### `if`

Sentencia condicional que ejecuta su bloque de código solo si la condición es verdadera (truthy).

```javascript
if (temperature > 30) {
  console.log("Hace calor");
}
```

---

## N

### Nullish

Término que describe los valores `null` y `undefined`. El operador `??` actúa solo sobre valores nullish, a diferencia de `||` que actúa sobre todos los falsy.

### Nullish coalescing (`??`)

Operador ES2020 que devuelve el operando derecho cuando el izquierdo es `null` o `undefined`. Ideal para valores por defecto cuando `0`, `""` y `false` son valores válidos.

```javascript
const timeout = userConfig ?? 3000; // 3000 solo si userConfig es null/undefined
```

---

## O

### Optional chaining (`?.`)

Operador ES2020 que permite acceder a propiedades de un objeto sin lanzar un `TypeError` si algún valor intermedio es `null` o `undefined`. Devuelve `undefined` en ese caso.

```javascript
const city = user?.address?.city; // undefined si address no existe
```

### Operador ternario (`? :`)

Operador de tres operandos: `condición ? valorSiTrue : valorSiFalse`. Es la forma compacta de un `if/else` de dos ramas.

```javascript
const label = isOpen ? "Abierto" : "Cerrado";
```

---

## S

### `switch`

Sentencia que evalúa una expresión y la compara con una serie de valores (`case`) usando `===`. Más legible que una cadena de `else if` cuando se compara la misma variable contra múltiples valores exactos.

### Short-circuit

Ver _Cortocircuito_.

---

## T

### Ternario

Ver _Operador ternario_.

### Truthy

Valor que JavaScript convierte a `true` en un contexto booleano. Todo lo que no sea falsy es truthy, incluyendo `[]`, `{}`, `"0"` y cualquier número distinto de cero.

```javascript
if ([]) console.log("array vacío es truthy"); // se ejecuta
```

---

## V

### Valor por defecto

Valor que se usa cuando el original es `null`, `undefined` o falsy. Se puede proporcionar con `??` (solo nullish) o con `||` (cualquier falsy).

```javascript
const name = savedName ?? "Sin nombre"; // solo null/undefined
const tag = inputTag || "sin-etiqueta"; // cualquier falsy
```
