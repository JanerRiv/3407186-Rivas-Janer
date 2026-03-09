# Glosario — Semana 03: Operadores y Expresiones

Términos ordenados alfabéticamente (A–Z).

---

## A

### AND (`&&`)

Operador lógico que devuelve `true` **solo si ambos** operandos son verdaderos. Si el primero es falsy, no evalúa el segundo (cortocircuito).

```javascript
true && true; // true
true && false; // false
false && true; // false (cortocircuito: no evalúa el segundo)
```

### Aritmético (operador)

Operador que realiza una operación matemática: `+`, `-`, `*`, `/`, `%`, `**`.

---

## C

### Coerción implícita

Conversión automática de tipos que realiza JavaScript al operar con valores de tipos diferentes. El `+` con un string convierte el resultado a string; los demás operadores intentan convertir a número.

```javascript
"5" + 10; // "510" — string
"5" - 10; // -5  — número
```

### Comparación estricta

Comparación con `===` o `!==` que verifica **valor Y tipo** simultáneamente. No realiza coerción.

```javascript
5 === "5"; // false — mismo valor, tipos diferentes
5 === 5; // true
```

### Comparación débil

Comparación con `==` o `!=` que realiza coerción de tipos antes de comparar. **Evitar en todo el bootcamp**.

```javascript
5 == "5"; // true  ← peligroso
0 == false; // true  ← peligroso
```

### Cortocircuito (short-circuit)

Comportamiento de `&&` y `||` de dejar de evaluar en cuanto el resultado es determinado. `&&` se detiene en el primer falsy. `||` se detiene en el primero truthy.

---

## E

### Expresión

Cualquier fragmento de código que produce un valor. `5 + 3`, `true && false`, `"hola"` son expresiones.

---

## F

### Falsy

Valor que se comporta como `false` en un contexto booleano. Los seis valores falsy en JavaScript son: `false`, `0`, `""`, `null`, `undefined`, `NaN`.

---

## M

### Módulo (`%`)

Operador aritmético que devuelve el **resto** de una división entera.

```javascript
10 % 3; // 1 — 10 = 3*3 + 1
7 % 2; // 1 — impar
8 % 2; // 0 — par
```

---

## N

### NOT (`!`)

Operador lógico que **invierte** el valor booleano de su operando.

```javascript
!true; // false
!false; // true
!0; // true  — 0 es falsy
```

---

## O

### OR (`||`)

Operador lógico que devuelve `true` si **al menos uno** de sus operandos es verdadero.

```javascript
true || false; // true
false || false; // false
false || true; // true
```

### Operador de asignación compuesta

Versión abreviada de un operador aritmético combinado con asignación. `x += 5` es equivalente a `x = x + 5`.

---

## P

### Potencia (`**`)

Operador aritmético que eleva un número a una potencia (ES2016+).

```javascript
2 ** 10; // 1024
9 ** 0.5; // 3 — raíz cuadrada
```

### Precedencia de operadores

Orden en que JavaScript evalúa los operadores cuando hay más de uno en una expresión. Los paréntesis `()` tienen la mayor precedencia, `**` sigue, luego `*`, `/`, `%`, y finalmente `+`, `-`.

---

## S

### Short-circuit

Ver _Cortocircuito_.

---

## T

### Truthy

Valor que se comporta como `true` en un contexto booleano. Todo lo que no sea falsy es truthy.

### Typeof

Operador unario que devuelve un string con el tipo del operando.

```javascript
typeof 42; // "number"
typeof "hola"; // "string"
typeof true; // "boolean"
```

---

## V

### Valor booleano

Resultado de una expresión que produce `true` o `false`. Todas las comparaciones y operadores lógicos devuelven booleanos.
