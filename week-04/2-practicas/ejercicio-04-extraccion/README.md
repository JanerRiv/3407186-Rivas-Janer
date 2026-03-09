# Ejercicio 04 — Extracción y Manipulación

## 🎯 Objetivo

Practicar `slice` y `split` para extraer y dividir strings.

---

## Paso 1: `slice(inicio, fin)`

```javascript
const lang = "JavaScript";
console.log(lang.slice(0, 4)); // 'Java'
console.log(lang.slice(4)); // 'Script'
console.log(lang.slice(-6)); // 'Script'
```

**Abre `starter/index.js`** y descomenta el Paso 1.

---

## Paso 2: `split(separador)`

```javascript
const csv = "título,autor,año,género";
const fields = csv.split(",");
console.log(fields); // ['título', 'autor', 'año', 'género']
console.log(fields.length); // 4
```

**Descomenta** el Paso 2.

---

## Paso 3: `split` con espacio

```javascript
const phrase = "Sistema Solar en 3D";
const words = phrase.split(" ");
console.log(words); // ['Sistema', 'Solar', 'en', '3D']
console.log(words.length); // 4
```

**Descomenta** el Paso 3.

---

## Paso 4: Combinando `slice` + `trim`

```javascript
const raw = "  #Astronomía  ";
const tag = raw.trim().slice(1).toLowerCase();
console.log(tag); // 'astronomía'
```

**Descomenta** el Paso 4.
