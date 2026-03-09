# 03 — Métodos de Búsqueda y Extracción

## 🎯 Objetivos

- Buscar texto dentro de un string con `includes`, `startsWith`, `endsWith`
- Encontrar la posición de un texto con `indexOf`
- Extraer partes de un string con `slice`
- Dividir un string en partes con `split`

---

## 1. Métodos de búsqueda (devuelven boolean)

### `.includes(texto)`

Devuelve `true` si el string contiene el texto buscado.

```javascript
const title = "JavaScript ES2023";
console.log(title.includes("ES2023")); // true
console.log(title.includes("Python")); // false
```

### `.startsWith(texto)` y `.endsWith(texto)`

Comprueban si el string **empieza** o **termina** con el texto indicado.

```javascript
const filename = "reporte-enero.pdf";
console.log(filename.startsWith("reporte")); // true
console.log(filename.endsWith(".pdf")); // true
console.log(filename.startsWith("informe")); // false
```

> Los tres son **case-sensitive**.

---

## 2. `.indexOf(texto)`

Devuelve la **posición** (índice) de la primera coincidencia, o `-1` si no la encuentra.

```javascript
const phrase = "El sol brilla hoy";
console.log(phrase.indexOf("sol")); // 3
console.log(phrase.indexOf("luna")); // -1
console.log(phrase.indexOf("l")); // 2 ← primera 'l'
```

Patrón común: verificar existencia usando `indexOf`:

```javascript
if (phrase.indexOf("sol") !== -1) {
  console.log('La frase contiene "sol"');
}
// Equivalente moderno con includes:
if (phrase.includes("sol")) {
  console.log('La frase contiene "sol"');
}
```

---

## 3. `.slice(inicio, fin)`

Extrae una parte del string desde `inicio` hasta `fin` (sin incluir `fin`).

```javascript
const language = "JavaScript";
//                0123456789

console.log(language.slice(0, 4)); // 'Java'
console.log(language.slice(4)); // 'Script' — hasta el final
console.log(language.slice(-6)); // 'Script' — desde el final
console.log(language.slice(4, 10)); // 'Script'
```

> Con índices negativos cuenta desde el final: `-1` es el último carácter.

---

## 4. `.split(separador)`

Divide el string en un **array** de partes, cortando en cada aparición del separador.

```javascript
const csv = "nombre,email,ciudad";
const fields = csv.split(",");
console.log(fields);
// ['nombre', 'email', 'ciudad']

const sentence = "Hola mundo JavaScript";
const words = sentence.split(" ");
console.log(words);
// ['Hola', 'mundo', 'JavaScript']
console.log(words.length); // 3
```

Con separador vacío `''` divide en caracteres individuales:

```javascript
const word = "Hola";
console.log(word.split(""));
// ['H', 'o', 'l', 'a']
```

---

## 5. Combinando métodos

```javascript
const rawTag = "  #JavaScript  ";

// Limpiar, extraer sin el # y pasar a minúsculas
const tag = rawTag.trim().slice(1).toLowerCase();
console.log(tag); // 'javascript'
```

---

## ✅ Checklist de verificación

- [ ] Puedo buscar texto con `includes`, `startsWith`, `endsWith`
- [ ] Sé encontrar posiciones con `indexOf` (y que devuelve `-1` si no existe)
- [ ] Puedo extraer partes de un string con `slice`
- [ ] Sé dividir strings en arrays con `split`
- [ ] Entiendo que los índices negativos cuentan desde el final

---

## 📚 Recursos adicionales

- [MDN — String.prototype.slice()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [MDN — String.prototype.split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [javascript.info — Strings](https://javascript.info/string)
