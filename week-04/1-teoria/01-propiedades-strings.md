# 01 — Propiedades de Strings: `.length`

## 🎯 Objetivos

- Entender qué es un string y cómo JavaScript lo representa en memoria
- Usar la propiedad `.length` para obtener la longitud de un texto
- Acceder a caracteres individuales con notación de índice `[]`

---

## 1. ¿Qué es un string?

Un **string** es una cadena de caracteres: letras, números, espacios, símbolos. En JavaScript se escribe entre comillas simples, dobles o backticks.

```javascript
const name = "JavaScript";
const greeting = "Hola mundo";
const template = `Bienvenido al bootcamp`;
```

Los tres son strings válidos. La diferencia principal es que los **backticks** (`` ` ``) permiten interpolación y texto multilínea — los vemos en la teoría 04.

---

## 2. La propiedad `.length`

`.length` devuelve el número de caracteres del string, incluyendo espacios.

```javascript
const language = "JavaScript";
console.log(language.length); // 10

const empty = "";
console.log(empty.length); // 0

const sentence = "Hola mundo";
console.log(sentence.length); // 10 (incluye el espacio)
```

> `.length` es una **propiedad**, no un método — no lleva paréntesis `()`.

---

## 3. Acceso por índice

Cada carácter tiene una posición llamada **índice**, que empieza en `0`.

```javascript
const word = "Hola";
//            0123

console.log(word[0]); // 'H'
console.log(word[1]); // 'o'
console.log(word[3]); // 'a'
```

Para acceder al **último carácter** sin conocer la longitud:

```javascript
const word = "JavaScript";
const lastChar = word[word.length - 1];
console.log(lastChar); // 't'
```

> En ES2022 se puede usar `.at(-1)` — lo veremos cuando lleguemos a arrays.

---

## 4. Los strings son inmutables

En JavaScript **no puedes cambiar un carácter individual** de un string:

```javascript
let word = "Hola";
word[0] = "h"; // no genera error, pero tampoco funciona
console.log(word); // 'Hola' — sin cambios
```

Para modificar un string debes crear uno nuevo con los métodos que veremos en las siguientes teorías.

---

## 5. Strings con caracteres especiales

Algunos caracteres se escriben con una **secuencia de escape** usando `\`:

| Escape | Significado     |
| ------ | --------------- |
| `\n`   | Salto de línea  |
| `\t`   | Tabulación      |
| `\\`   | Barra invertida |
| `\'`   | Comilla simple  |
| `\"`   | Comilla doble   |

```javascript
console.log("Línea 1\nLínea 2");
// Línea 1
// Línea 2

console.log("Columna1\tColumna2");
// Columna1    Columna2

console.log('Ella dijo: \"hola\"');
// Ella dijo: "hola"
```

---

## ✅ Checklist de verificación

- [ ] Sé qué es un string y cómo declararlo
- [ ] Puedo obtener la longitud con `.length`
- [ ] Puedo acceder a un carácter por su índice `[n]`
- [ ] Entiendo que el primer índice es `0`, no `1`
- [ ] Conozco las secuencias de escape más comunes

---

## 📚 Recursos adicionales

- [MDN — String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- [javascript.info — Strings](https://javascript.info/string)
