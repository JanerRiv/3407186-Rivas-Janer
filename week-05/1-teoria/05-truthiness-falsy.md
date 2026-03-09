# 05 — Truthiness, Falsy Values y Operadores Lógicos como Condicionales

## 🎯 Objetivos

- Identificar los seis valores falsy de JavaScript
- Distinguir cuándo una condición se evalúa como verdadera o falsa
- Usar operadores lógicos `&&` y `||` como expresiones condicionales concisas
- Comprender el cortocircuito (short-circuit evaluation)

---

## 1. ¿Qué es truthiness?

En JavaScript, cualquier valor puede usarse como condición. El intérprete convierte automáticamente el valor a `true` o `false` para evaluarlo.

- Un valor **truthy** se comporta como `true` en un contexto booleano.
- Un valor **falsy** se comporta como `false` en un contexto booleano.

---

## 2. Los seis valores falsy

Solo **seis valores** son falsy en JavaScript. Memoriza esta lista:

```javascript
false; // el booleano false
0; // el número cero (incluye -0 y 0n)
(""); // string vacío (comillas simples, dobles o backticks vacíos)
null; // ausencia intencional de valor
undefined; // variable declarada pero sin valor asignado
NaN; // Not a Number (resultado de operación matemática inválida)
```

**Todo lo demás es truthy**, incluyendo:

```javascript
true
1          // cualquier número distinto de 0
-1
"0"        // string con contenido (aunque sea "0" o " ")
" "        // string con espacios
[]         // array vacío ← sorprendente pero truthy
{}         // objeto vacío ← sorprendente pero truthy
"false"    // el string "false" ← truthy (no es el booleano false)
```

---

## 3. Cómo aprovecharlo en `if`

Como `if` evalúa truthiness, no siempre necesitas comparar explícitamente:

```javascript
const name = "Andrómeda";

// En lugar de:
if (name !== "" && name !== null && name !== undefined) { ... }

// Puedes escribir:
if (name) {
  console.log(`Nombre: ${name}`);
}
```

```javascript
const items = []; // array vacío — truthy

if (items) {
  console.log("La lista existe"); // ← se ejecuta
}

// Si quieres verificar que tenga elementos, usa .length:
if (items.length > 0) {
  console.log("La lista tiene elementos"); // ← no se ejecuta
}
```

---

## 4. Cortocircuito (short-circuit evaluation)

Los operadores `&&` y `||` no siempre evalúan ambos operandos. Se detienen tan pronto como el resultado está determinado.

### `&&` — se detiene en el primer falsy

```javascript
false && console.log("nunca se verá"); // false detiene la evaluación
true && console.log("esto sí aparece"); // "esto sí aparece"
```

`&&` devuelve el primer valor falsy, o el último valor si todos son truthy:

```javascript
"hola" && 42 && true; // true (todos truthy, devuelve el último)
"hola" && 0 && true; // 0   (primer falsy encontrado)
```

### `||` — se detiene en el primer truthy

```javascript
null || undefined || "valor por defecto"; // "valor por defecto"
"primero" || "segundo"; // "primero" (primer truthy)
```

---

## 5. Operadores lógicos como condicionales

Gracias al cortocircuito, `&&` y `||` se pueden usar como forma compacta de condicionales:

### Patrón `&&` — ejecutar solo si la condición es truthy

```javascript
const isLoggedIn = true;

// Equivale a: if (isLoggedIn) { console.log(...) }
isLoggedIn && console.log("Bienvenido al sistema");
```

```javascript
const label = "Exposición temporal";

// Mostrar el label solo si existe
label && console.log(`Título: ${label}`);
```

### Patrón `||` — valor por defecto (cuando el valor es falsy)

```javascript
const inputName = "";
const displayName = inputName || "Visitante anónimo";
console.log(displayName); // "Visitante anónimo"
```

> ⚠️ Recuerda: `||` trata `0`, `""` y `false` como ausentes. Para ese caso, usa `??` (ver archivo 04).

---

## 6. Convertir explícitamente a booleano

Cuando necesitas un valor estrictamente `true` o `false`, usa `Boolean()` o el doble `!!`:

```javascript
Boolean("hola"); // true
Boolean(""); // false
Boolean(0); // false
Boolean([]); // true

!!"texto"; // true  ← !! es el doble negado
!!0; // false
!!null; // false
```

---

## 7. Tabla de referencia rápida

| Valor       | Truthy / Falsy | Contexto booleano |
| ----------- | -------------- | ----------------- |
| `false`     | falsy          | `false`           |
| `0`         | falsy          | `false`           |
| `""`        | falsy          | `false`           |
| `null`      | falsy          | `false`           |
| `undefined` | falsy          | `false`           |
| `NaN`       | falsy          | `false`           |
| `true`      | truthy         | `true`            |
| `1`         | truthy         | `true`            |
| `"texto"`   | truthy         | `true`            |
| `[]`        | truthy         | `true`            |
| `{}`        | truthy         | `true`            |

---

## 📚 Recursos adicionales

- [MDN — Falsy](https://developer.mozilla.org/es/docs/Glossary/Falsy)
- [MDN — Truthy](https://developer.mozilla.org/es/docs/Glossary/Truthy)
- [javascript.info — Logical operators](https://javascript.info/logical-operators)

---

## ✅ Checklist de verificación

- [ ] Memoricé los seis valores falsy de JavaScript
- [ ] Sé que `[]` y `{}` son truthy aunque estén vacíos
- [ ] Entiendo el cortocircuito de `&&` y `||`
- [ ] Uso `&&` y `||` como condicionales compactos cuando corresponde
- [ ] Sé cuándo usar `Boolean()` o `!!` para conversión explícita
