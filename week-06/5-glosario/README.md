# Glosario — Semana 06: Bucles

Términos clave ordenados alfabéticamente.

---

## A

### Acumulador

Variable inicializada antes de un bucle que **acumula** un resultado a lo largo de las iteraciones. Puede acumular una suma, un string, un array o cualquier otro valor.

```javascript
let total = 0; // inicialización del acumulador
for (const price of prices) {
  total += price; // acumulación
}
```

---

## B

### Break

Sentencia que **termina inmediatamente** la ejecución de un bucle o bloque `switch`. Cuando se ejecuta, el programa continúa con la línea siguiente al bucle.

```javascript
for (const item of inventory) {
  if (item === null) break; // sale del bucle
  console.log(item);
}
```

### Bucle

Estructura de control que **repite** un bloque de código mientras una condición sea verdadera. También llamado _loop_ en inglés.

### Bucle anidado

Un bucle que contiene **otro bucle** en su interior. El bucle interno se ejecuta completamente por cada iteración del bucle externo.

```javascript
for (let i = 0; i < 3; i++) {
  // externo: 3 veces
  for (let j = 0; j < 3; j++) {
    // interno: 3 veces por cada externo
    console.log(i, j); // total: 9 ejecuciones
  }
}
```

### Bucle infinito

Bucle cuya condición de parada **nunca se vuelve falsa**, por lo que se ejecuta para siempre. Congela el programa. Causa común: olvidar actualizar la variable de control.

```javascript
// ❌ Bucle infinito — i nunca aumenta
let i = 0;
while (i < 5) {
  console.log(i); // i siempre es 0
}
```

---

## C

### Condición de parada

Expresión booleana evaluada en cada iteración que determina si el bucle **continúa o termina**. Cuando evalúa a `false`, el bucle termina.

### Continue

Sentencia que **salta al siguiente ciclo** del bucle, omitiendo el resto del cuerpo de la iteración actual.

```javascript
for (const value of values) {
  if (value === null) continue; // salta este valor
  process(value); // solo se ejecuta si value !== null
}
```

### Contador

Variable que se **incrementa** (o decrementa) en cada iteración para llevar la cuenta de cuántas veces ocurrió algo.

```javascript
let activeCount = 0;
for (const user of users) {
  if (user.active) activeCount++;
}
```

### Cuerpo del bucle

El bloque de código encerrado entre las llaves `{}` del bucle que se **ejecuta en cada iteración**.

---

## D

### do...while

Variante del bucle `while` que **ejecuta el cuerpo al menos una vez**, porque la condición se evalúa al final.

```javascript
do {
  // esto siempre se ejecuta al menos una vez
} while (condition);
```

---

## F

### for

Bucle de uso general con **tres partes explícitas**: inicialización, condición y actualización. Ideal cuando se conoce el número de iteraciones.

```javascript
for (let i = 0; i < 5; i++) {
  /* ... */
}
//   inicialización  condición  actualización
```

### for...of

Bucle moderno para **iterar sobre iterables** (arrays, strings, Sets, Maps). Accede directamente al valor sin necesidad de índice.

```javascript
for (const item of items) {
  console.log(item); // valor directo
}
```

---

## I

### Índice

Posición numérica de un elemento en un array. Comienza en `0`. Se usa en el `for` clásico para acceder a elementos por posición.

```javascript
const fruits = ["apple", "banana", "cherry"];
//               índice 0    índice 1    índice 2
```

### Inicialización

Primera parte del `for`. Se ejecuta **una sola vez** antes de que comience el bucle. Generalmente declara e inicializa la variable de control.

### Iteración

Una **ejecución completa** del cuerpo de un bucle. Si el bucle se repite 5 veces, hay 5 iteraciones.

### Iterable

Objeto que puede ser recorrido con `for...of`. Los arrays y strings son iterables. Los objetos literales `{}` no lo son.

---

## W

### while

Bucle que repite su cuerpo **mientras la condición sea verdadera**. Evalúa la condición antes de cada iteración, por lo que puede ejecutarse cero veces si la condición es falsa desde el inicio.

```javascript
while (condition) {
  // se repite mientras condition === true
}
```
