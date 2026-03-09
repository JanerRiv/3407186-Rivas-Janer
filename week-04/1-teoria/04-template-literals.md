# 04 — Template Literals

## 🎯 Objetivos

- Entender qué son los template literals y por qué reemplazaron la concatenación
- Usar interpolación de variables y expresiones con `${}`
- Crear strings multilínea sin `\n`
- Embeber expresiones y operaciones directamente en el texto

---

## 1. El problema con la concatenación

Antes de ES2015 la única forma de construir strings dinámicos era concatenar con `+`:

```javascript
const name = "Ana";
const age = 25;
// ❌ Concatenación — difícil de leer
const msg = "Hola, me llamo " + name + " y tengo " + age + " años.";
```

Esto funciona, pero es propenso a errores (espacios olvidados, `+` extras) y difícil de leer.

---

## 2. Template literals con backticks

Los **template literals** se escriben entre backticks `` ` `` y permiten incrustar variables con `${}`:

```javascript
const name = "Ana";
const age = 25;
// ✅ Template literal — legible y limpio
const msg = `Hola, me llamo ${name} y tengo ${age} años.`;
console.log(msg);
// 'Hola, me llamo Ana y tengo 25 años.'
```

> `${}` puede contener cualquier expresión JavaScript, no solo variables.

---

## 3. Expresiones dentro de `${}`

Dentro de las llaves puedes escribir cualquier expresión:

```javascript
const price = 15_000;
const quantity = 3;

// Operación aritmética directamente en el template
console.log(`Subtotal: $${price * quantity}`);
// 'Subtotal: $45000'

// Llamada a método
const rawName = "  maría  ";
console.log(`Nombre: ${rawName.trim().toUpperCase()}`);
// 'Nombre: MARÍA'

// Expresión condicional (ternario)
const stock = 0;
console.log(`Estado: ${stock > 0 ? "disponible" : "sin stock"}`);
// 'Estado: sin stock'
```

---

## 4. Strings multilínea

Con backticks los saltos de línea se escriben **directamente**:

```javascript
// ❌ Con concatenación o \n
const old = "Línea 1\nLínea 2\nLínea 3";

// ✅ Con template literal
const modern = `Línea 1
Línea 2
Línea 3`;

console.log(modern);
// Línea 1
// Línea 2
// Línea 3
```

Muy útil para generar fichas o reportes en consola.

---

## 5. Template literal para fichas estructuradas

```javascript
const exhibitionName = "Sistema Solar en 3D";
const capacity = 45;
const duration = 50;
const isAvailable = true;

const card = `
=========================================
EXHIBICIÓN: ${exhibitionName.toUpperCase()}
=========================================
Capacidad:  ${capacity} personas
Duración:   ${duration} minutos
Disponible: ${isAvailable ? "Sí" : "No"}
=========================================
`;

console.log(card);
```

---

## 6. Concatenación vs template literals — comparativa final

| Situación    | Concatenación `+`     | Template literal                  |
| ------------ | --------------------- | --------------------------------- |
| Una variable | `'Hola ' + name`      | `` `Hola ${name}` ``              |
| Expresión    | `'Total: ' + (a * b)` | `` `Total: ${a * b}` ``           |
| Multilínea   | `'L1\nL2\nL3'`        | `` `L1\nL2\nL3` `` (o salto real) |
| Legibilidad  | Baja con muchas vars  | Alta siempre                      |

> **Regla del bootcamp**: usa siempre template literals cuando necesites combinar texto con variables o expresiones.

---

## ✅ Checklist de verificación

- [ ] Sé escribir template literals con backticks `` ` ``
- [ ] Puedo interpolar variables con `${variable}`
- [ ] Puedo embeber expresiones en `${expresión}`
- [ ] Sé crear strings multilínea sin `\n`
- [ ] Entiendo cuándo usar template literals vs strings simples

---

## 📚 Recursos adicionales

- [MDN — Template literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
- [javascript.info — Template literals](https://javascript.info/string#template-literals)
