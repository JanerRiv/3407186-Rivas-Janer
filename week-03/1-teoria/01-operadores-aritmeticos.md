# Operadores Aritméticos

> 📁 Semana 03 · Teoría 01

## 🎯 Objetivos

- Conocer los seis operadores aritméticos de JavaScript
- Entender el comportamiento de la división entera, el módulo y la potencia
- Combinar operadores en expresiones multi-paso

---

## 1. Los seis operadores aritméticos

JavaScript tiene exactamente seis operadores aritméticos:

| Operador | Nombre         | Ejemplo  | Resultado  |
| -------- | -------------- | -------- | ---------- |
| `+`      | Suma           | `10 + 3` | `13`       |
| `-`      | Resta          | `10 - 3` | `7`        |
| `*`      | Multiplicación | `10 * 3` | `30`       |
| `/`      | División       | `10 / 3` | `3.333...` |
| `%`      | Módulo (resto) | `10 % 3` | `1`        |
| `**`     | Potencia       | `2 ** 8` | `256`      |

```javascript
const price = 50_000;
const quantity = 3;

const total = price * quantity;
console.log("Total:", total); // 150000

const discount = total * 0.1;
console.log("Descuento 10%:", discount); // 15000

const finalPrice = total - discount;
console.log("Precio final:", finalPrice); // 135000
```

---

## 2. División y módulo

La división en JavaScript **siempre devuelve decimal** cuando el resultado no es entero:

```javascript
console.log(7 / 2); // 3.5
console.log(10 / 3); // 3.3333333333333335
console.log(8 / 2); // 4   ← resultado exacto, no hay decimales
```

El **módulo** `%` devuelve el **resto** de una división entera. Es muy útil para:

```javascript
// ¿Es par o impar?
console.log(10 % 2); // 0 ← par (sin resto)
console.log(7 % 2); // 1 ← impar (resto 1)

// ¿Es múltiplo de N?
console.log(15 % 5); // 0 ← sí es múltiplo de 5
console.log(17 % 5); // 2 ← no es múltiplo de 5

// Distribuir ítems en grupos
const totalBooks = 23;
const shelvesCount = 4;
const booksPerShelf = Math.floor(totalBooks / shelvesCount); // 5
const leftover = totalBooks % shelvesCount; // 3
console.log(`${booksPerShelf} libros por estante, sobran ${leftover}`);
```

---

## 3. Potencia `**`

El operador `**` calcula potencias. Es equivalente a `Math.pow()` pero más legible:

```javascript
console.log(2 ** 10); // 1024
console.log(3 ** 3); // 27
console.log(9 ** 0.5); // 3 ← raíz cuadrada (exponente 0.5)
console.log(10 ** -2); // 0.01

// Equivalente más antiguo:
console.log(Math.pow(2, 10)); // 1024 ← mismo resultado
```

---

## 4. El operador `+` con strings

El `+` con strings hace **concatenación**, no suma. Este comportamiento puede causar bugs:

```javascript
console.log(10 + 20); // 30   ← suma de numbers
console.log("10" + 20); // "1020" ← concatenación
console.log(10 + "20"); // "1020" ← concatenación
console.log("10" + "20"); // "1020" ← concatenación

// Solución: convertir a number antes de operar
const input = "42";
console.log(Number(input) + 8); // 50 ← suma correcta
```

> 💡 Esto se profundiza en la teoría de **coerción implícita** (tema 04).

---

## 5. Incremento y decremento

Los operadores `++` y `--` incrementan o decrementan en 1. Se usan frecuentemente en bucles:

```javascript
let counter = 0;

counter++;
console.log(counter); // 1

counter++;
console.log(counter); // 2

counter--;
console.log(counter); // 1
```

> ⚠️ Prefiere `counter += 1` sobre `counter++` cuando el orden importa. Para recuentos simples ambos funcionan igual.

---

## 6. Expresiones multi-operador

Puedes combinar operadores en una sola expresión. JavaScript evalúa según **precedencia** (ver tema 04):

```javascript
const basePrice = 100_000;
const taxRate = 0.19;
const discount = 15_000;

// Precio con impuesto menos descuento
const finalPrice = basePrice * (1 + taxRate) - discount;
console.log("Precio final:", finalPrice); // 104000

// Área de un triángulo
const base = 8;
const height = 5;
const area = (base * height) / 2;
console.log("Área:", area); // 20
```

---

## ✅ Checklist de verificación

- [ ] Sé cuándo el `+` suma y cuándo concatena
- [ ] Entiendo qué devuelve el módulo `%`
- [ ] Puedo calcular potencias con `**`
- [ ] Sé cómo evitar resultados inesperados convirtiendo tipos antes de operar

---

## 📚 Recursos adicionales

- [MDN — Operadores aritméticos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
- [javascript.info — Operadores básicos y matemáticas](https://javascript.info/operators)

---

[← README semana](../README.md) | [Siguiente: Asignación y comparación →](./02-operadores-asignacion-comparacion.md)
