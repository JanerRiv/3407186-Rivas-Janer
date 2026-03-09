# 02 — Métodos de Transformación

## 🎯 Objetivos

- Transformar strings a mayúsculas o minúsculas
- Eliminar espacios innecesarios con `trim`
- Reemplazar partes de un texto con `replace` y `replaceAll`
- Repetir un string con `repeat`

---

## 1. `.toUpperCase()` y `.toLowerCase()`

Devuelven una **copia** del string en mayúsculas o minúsculas. No modifican el original.

```javascript
const title = "JavaScript ES2023";
console.log(title.toUpperCase()); // 'JAVASCRIPT ES2023'
console.log(title.toLowerCase()); // 'javascript es2023'
console.log(title); // 'JavaScript ES2023' — sin cambios
```

Utilidad frecuente: normalizar texto del usuario antes de comparar.

```javascript
const userInput = "  HOLA  ";
const normalized = userInput.trim().toLowerCase();
console.log(normalized); // 'hola'
```

---

## 2. `.trim()`, `.trimStart()`, `.trimEnd()`

Eliminan **espacios en blanco** (espacios, tabs, saltos de línea) de los extremos.

```javascript
const raw = "   hola mundo   ";
console.log(raw.trim()); // 'hola mundo'
console.log(raw.trimStart()); // 'hola mundo   '
console.log(raw.trimEnd()); // '   hola mundo'
```

> `.trimStart()` y `.trimEnd()` llegaron en ES2019. `.trim()` existe desde ES5.

---

## 3. `.replace()` y `.replaceAll()`

`.replace(búsqueda, reemplazo)` reemplaza la **primera** coincidencia.
`.replaceAll(búsqueda, reemplazo)` reemplaza **todas** las coincidencias (ES2021).

```javascript
const message = "El gato come. El gato duerme.";

// Solo la primera ocurrencia
console.log(message.replace("gato", "perro"));
// 'El perro come. El gato duerme.'

// Todas las ocurrencias
console.log(message.replaceAll("gato", "perro"));
// 'El perro come. El perro duerme.'
```

> Ambos son **case-sensitive**: `'Gato'` y `'gato'` son diferentes.

---

## 4. `.repeat(n)`

Devuelve el string repetido `n` veces.

```javascript
const separator = "-".repeat(30);
console.log(separator);
// '------------------------------'

const star = "★ ".repeat(5);
console.log(star);
// '★ ★ ★ ★ ★ '
```

Útil para crear separadores visuales en la consola.

---

## 5. Encadenamiento de métodos

Los métodos pueden encadenarse porque cada uno devuelve un nuevo string:

```javascript
const raw = "  JavaScript ES2023  ";
const clean = raw.trim().toLowerCase().replace(" ", "-");
console.log(clean); // 'javascript-es2023'
```

> Se lee de izquierda a derecha: primero `trim()`, luego `toLowerCase()`, luego `replace()`.

---

## ✅ Checklist de verificación

- [ ] Puedo convertir a mayúsculas y minúsculas con `toUpperCase` / `toLowerCase`
- [ ] Sé eliminar espacios con `trim()`, `trimStart()`, `trimEnd()`
- [ ] Entiendo la diferencia entre `replace` (primera) y `replaceAll` (todas)
- [ ] Puedo repetir strings con `repeat(n)`
- [ ] Sé encadenar métodos en una sola expresión

---

## 📚 Recursos adicionales

- [MDN — String.prototype.trim()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [MDN — String.prototype.replaceAll()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
