# Operadores de Asignación y Comparación

> 📁 Semana 03 · Teoría 02

## 🎯 Objetivos

- Usar los operadores de asignación compuesta para simplificar código
- Comparar valores con igualdad **estricta** (`===`, `!==`)
- Entender la diferencia crítica entre `==` y `===`
- Aplicar comparaciones de orden (`>`, `<`, `>=`, `<=`)

---

## 1. Operadores de asignación compuesta

En lugar de escribir `counter = counter + 1` puedes abreviar con operadores de asignación compuesta:

| Operador | Equivale a   | Ejemplo (counter = 10) | Resultado |
| -------- | ------------ | ---------------------- | --------- |
| `+=`     | `x = x + n`  | `counter += 3`         | `13`      |
| `-=`     | `x = x - n`  | `counter -= 2`         | `8`       |
| `*=`     | `x = x * n`  | `counter *= 5`         | `50`      |
| `/=`     | `x = x / n`  | `counter /= 2`         | `5`       |
| `%=`     | `x = x % n`  | `counter %= 3`         | `1`       |
| `**=`    | `x = x ** n` | `counter **= 2`        | `100`     |

```javascript
let stock = 100;

// Llega un pedido de 30 unidades
stock += 30;
console.log("Tras recibir pedido:", stock); // 130

// Se venden 15 unidades
stock -= 15;
console.log("Tras venta:", stock); // 115

// Aplicar descuento del 50%
let price = 80_000;
price *= 0.5;
console.log("Precio con descuento:", price); // 40000
```

---

## 2. Igualdad estricta: `===` y `!==`

JavaScript tiene **dos** tipos de igualdad:

| Operador | Nombre                 | Qué hace                                   |
| -------- | ---------------------- | ------------------------------------------ |
| `===`    | Igualdad **estricta**  | Compara valor **y** tipo                   |
| `==`     | Igualdad **abstracta** | Compara solo valor (convierte tipos antes) |
| `!==`    | Desigualdad estricta   | Opuesto de `===`                           |
| `!=`     | Desigualdad abstracta  | Opuesto de `==`                            |

### ✅ Siempre usa `===`

```javascript
// Igualdad estricta — compara valor Y tipo
console.log(5 === 5); // true  ← mismo valor, mismo tipo
console.log(5 === "5"); // false ← mismo valor, DISTINTO tipo
console.log(5 === 6); // false ← distinto valor

// Desigualdad estricta
console.log(5 !== "5"); // true  ← son diferentes (number vs string)
console.log(5 !== 5); // false ← son iguales

// Validar si el usuario ingresó algo concreto
const userInput = "42";
const expectedCode = 42;
console.log(userInput === expectedCode); // false ← tipos distintos
console.log(Number(userInput) === expectedCode); // true ← conversión explícita primero
```

### ❌ Por qué no usar `==`

`==` convierte tipos automáticamente antes de comparar. Esto produce resultados confusos:

```javascript
// == hace conversiones inesperadas
console.log(5 == "5"); // true  ← peligroso, son tipos distintos
console.log(0 == false); // true  ← peligroso
console.log("" == false); // true  ← peligroso
console.log(null == undefined); // true ← comportamiento especial

// Regla: NUNCA uses == ni != en código profesional
```

> 💡 **Regla de oro**: Usa siempre `===` y `!==`. Si necesitas comparar un string con un number, convierte explícitamente primero con `Number()` o `String()`.

---

## 3. Operadores de orden

Comparan si un valor es mayor o menor que otro. Devuelven `true` o `false`:

```javascript
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true  ← mayor O igual
console.log(10 <= 9); // false ← menor O igual

// Comparación de strings (orden alfabético/lexicográfico)
console.log("apple" < "banana"); // true  ← 'a' antes de 'b'
console.log("zebra" > "ant"); // true
console.log("10" > "9"); // false ← "1" < "9" en orden lexicográfico ⚠️

// Para comparar numbers que vienen como strings, convierte primero:
console.log(Number("10") > Number("9")); // true ← correcto
```

---

## 4. Comparar con `null` y `undefined`

```javascript
// Solo estos dos valores son "vacíos":
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === undefined); // false ← distintos tipos

// Detectar si algo no tiene valor:
const userEmail = null;
console.log(userEmail === null); // true ← forma correcta
```

---

## 5. Ejemplo integrador

```javascript
const MIN_AGE = 18;
const MAX_ITEMS = 50;

let userAge = 20;
let cartItems = 48;

// ¿Puede comprar?
const canPurchase = userAge >= MIN_AGE;
console.log("¿Puede comprar?", canPurchase); // true

// Agregar 5 ítems más
cartItems += 5;
const isCartFull = cartItems >= MAX_ITEMS;
console.log("Ítems en carrito:", cartItems); // 53
console.log("¿Carrito lleno?", isCartFull); // true
```

---

## ✅ Checklist de verificación

- [ ] Sé usar `+=`, `-=`, `*=`, `/=` para simplificar asignaciones
- [ ] Siempre uso `===` y `!==`, nunca `==` ni `!=`
- [ ] Entiendo por qué `5 == "5"` es `true` y por qué es peligroso
- [ ] Sé comparar con `>`, `<`, `>=`, `<=`

---

## 📚 Recursos adicionales

- [MDN — Operadores de asignación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- [MDN — Operadores de comparación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [javascript.info — Comparaciones](https://javascript.info/comparison)

---

[← Anterior](./01-operadores-aritmeticos.md) | [Siguiente: Operadores lógicos →](./03-operadores-logicos.md)
