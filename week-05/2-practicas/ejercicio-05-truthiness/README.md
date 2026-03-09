# Ejercicio 05 — Truthiness y Falsy Values

## 🎯 Objetivo

Identificar los valores falsy de JavaScript y usar operadores lógicos como condicionales compactos.

---

## 📋 Pasos

### Paso 1: Detectar valores falsy

Solo 6 valores son falsy en JavaScript:

```javascript
const values = [false, 0, "", null, undefined, NaN];
values.forEach((v) => {
  if (!v) console.log(`${String(v)} es falsy`);
});
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

Salida esperada:

```
--- Paso 1: valores falsy ---
false es falsy
0 es falsy
 es falsy
null es falsy
undefined es falsy
NaN es falsy
```

---

### Paso 2: Casos sorprendentes — truthy

`[]` y `{}` son truthy aunque estén vacíos. `"0"` también es truthy:

```javascript
console.log([] ? "array vacío es truthy" : "es falsy");
console.log({} ? "objeto vacío es truthy" : "es falsy");
console.log("0" ? '"0" es truthy' : "es falsy");
```

**Descomenta** la sección del Paso 2.

Salida esperada:

```
--- Paso 2: casos sorprendentes ---
array vacío es truthy
objeto vacío es truthy
"0" es truthy
```

---

### Paso 3: `&&` como condicional compacto

`&&` ejecuta el lado derecho solo si el izquierdo es truthy:

```javascript
const userName = "Copérnico";
userName && console.log(`Bienvenido, ${userName}`);
```

**Descomenta** la sección del Paso 3.

Salida esperada:

```
--- Paso 3: && como condicional ---
Bienvenido, Copérnico
(sin nombre: no se imprime nada)
```

---

### Paso 4: `||` para valor por defecto (falsy)

`||` devuelve el primer valor truthy:

```javascript
const input = "";
const displayName = input || "Visitante";
console.log(displayName); // "Visitante"
```

**Descomenta** la sección del Paso 4.

Salida esperada:

```
--- Paso 4: || para valor por defecto ---
Con input vacío: Visitante
Con input "Galileo": Galileo
```

---

### Paso 5: Conversión explícita con `Boolean()` y `!!`

```javascript
Boolean("texto"); // true
!!"texto"; // true
Boolean(0); // false
!!undefined; // false
```

**Descomenta** la sección del Paso 5.

Salida esperada:

```
--- Paso 5: Boolean() y !! ---
Boolean("texto"): true
Boolean(0): false
!!"texto": true
!!null: false
```

---

## 💡 Recuerda

- Solo 6 valores son falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- `[]` y `{}` son **truthy** aunque estén vacíos
- `&&` = ejecuta si es truthy | `||` = valor alternativo si es falsy
