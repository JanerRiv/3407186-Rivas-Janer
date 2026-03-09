# Glosario — Semana 04: Strings y Template Literals

Términos ordenados alfabéticamente (A–Z).

---

## B

### Backtick

Carácter `` ` `` (acento grave invertido) utilizado para delimitar template literals en JavaScript. Permite interpolación de expresiones y strings multilínea sin concatenación.

```javascript
const msg = `Hola, mundo`; // backticks
const msg2 = "Hola, mundo"; // comillas normales
```

---

## C

### Carácter

Unidad mínima de texto: una letra, dígito, símbolo o espacio. En JavaScript, los strings están compuestos por una secuencia de caracteres, cada uno accesible por su índice.

```javascript
const word = "Luna";
word[0]; // "L"
word[3]; // "a"
```

### Concatenación

Operación de unir dos o más strings con el operador `+`. En código moderno se prefiere la interpolación con template literals.

```javascript
const name = "Marte";
// ❌ Concatenación clásica
const msg1 = "Planeta: " + name + ", diámetro: " + 6779 + " km";
// ✅ Template literal
const msg2 = `Planeta: ${name}, diámetro: ${6779} km`;
```

---

## E

### Encadenamiento de métodos

Técnica de llamar varios métodos en secuencia sobre el mismo valor, aprovechando que cada método devuelve un nuevo string.

```javascript
const result = "  sistema solar  ".trim().toUpperCase().replace(" ", "_");
// "SISTEMA_SOLAR"
```

### Escape (secuencia de)

Combinación de caracteres iniciada con `\` que representa un carácter especial dentro de un string: `\n` (salto de línea), `\t` (tabulación), `\\` (barra invertida), `\"` o `\'` (comilla).

```javascript
console.log("Línea 1\nLínea 2"); // separa en dos líneas
console.log("Ruta: C:\\Users\\astro"); // muestra la barra
```

---

## I

### Índice

Posición numérica de un carácter dentro de un string. Los índices comienzan en `0`. El último carácter tiene índice `longitud - 1`.

```javascript
const planet = "Venus";
planet[0]; // "V"  ← índice 0
planet[4]; // "s"  ← índice 4 (último)
```

### Inmutabilidad

Propiedad de los strings en JavaScript: una vez creado, su contenido no puede modificarse. Los métodos de string siempre devuelven un **nuevo** string; el original permanece intacto.

```javascript
const original = "nebulosa";
const upper = original.toUpperCase(); // "NEBULOSA"
console.log(original); // "nebulosa" — sin cambios
```

### Interpolación

Inserción de una expresión JavaScript dentro de un template literal mediante la sintaxis `${expresión}`. El resultado de la expresión se convierte automáticamente a string.

```javascript
const name = "Andrómeda";
const distance = 2.537;
console.log(`Galaxia: ${name}, distancia: ${distance} millones de años luz`);
```

---

## L

### `.length`

Propiedad de los strings que devuelve la cantidad de caracteres que contiene. No es un método (no lleva paréntesis).

```javascript
"Saturno".length; // 7
"".length; // 0
```

### Literal de string

String escrito directamente en el código fuente usando comillas simples, dobles o backticks, en contraposición a un string construido dinámicamente.

```javascript
const a = "comillas dobles";
const b = "comillas simples";
const c = `backticks`;
```

---

## M

### Método

Función asociada a un tipo de dato. Los strings tienen muchos métodos (funciones integradas) que se llaman con la notación punto: `string.metodo()`.

```javascript
"cosmos".toUpperCase(); // "COSMOS"
"  estrella  ".trim(); // "estrella"
```

### Multilínea

Característica de los template literals que permite escribir strings en varias líneas sin caracteres de escape especiales.

```javascript
const haiku = `Vía Láctea —
espiral de polvo y luz,
noche sin final.`;
```

---

## P

### Plantilla (template literal)

Ver _Template literal_.

---

## S

### `slice(inicio, fin)`

Método de string que extrae y devuelve una subcadena desde la posición `inicio` hasta (sin incluir) la posición `fin`. Acepta índices negativos (cuentan desde el final).

```javascript
"Saturno".slice(0, 6); // "Saturn"
"Saturno".slice(-3); // "rno"
```

### `split(separador)`

Método que divide un string en un array de substrings según el separador indicado.

```javascript
"Mercurio,Venus,Tierra".split(","); // ["Mercurio", "Venus", "Tierra"]
"Vía Láctea".split(" "); // ["Vía", "Láctea"]
```

### String

Tipo de dato primitivo que representa texto en JavaScript. Se delimit con `'`, `"` o `` ` ``. Los strings son inmutables: las operaciones sobre ellos producen nuevos strings.

---

## T

### Template literal

Forma moderna de escribir strings en JavaScript usando backticks (`` ` ``). Permite: interpolación con `${}`, strings multilínea y expresiones arbitrarias dentro del string.

```javascript
const star = "Sol";
const age = 4.6;
console.log(`La estrella ${star} tiene ${age} mil millones de años.`);
```

### `trim()`

Método que elimina los espacios en blanco (y tabulaciones) del inicio y del final de un string. No modifica espacios internos.

```javascript
"  asteroide  ".trim(); // "asteroide"
"  Cinturón de Kuiper  ".trimStart(); // "Cinturón de Kuiper  "
"  Cinturón de Kuiper  ".trimEnd(); // "  Cinturón de Kuiper"
```

---

## U

### UTF-16

Codificación de caracteres que JavaScript usa internamente para representar strings. La mayoría de caracteres comunes ocupan una unidad de código (16 bits), lo que hace que su índice coincida con su posición visual.

---

## Z

### Zero-based indexing

Convención de que el primer elemento de una secuencia tiene índice `0`. Aplica a strings, arrays y la mayoría de estructuras de JavaScript.

```javascript
"Júpiter"[0]; // "J" ← primer carácter, índice 0
"Júpiter"[6]; // "r" ← séptimo carácter, índice 6
```
