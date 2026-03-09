# Precedencia de Operadores y Coerción Implícita

> 📁 Semana 03 · Teoría 04

## 🎯 Objetivos

- Leer el orden en que JavaScript evalúa los operadores
- Usar paréntesis para controlar la precedencia
- Identificar situaciones de coerción implícita
- Saber cómo evitar bugs causados por coerción

---

## 1. Precedencia de operadores

Cuando una expresión tiene más de un operador, JavaScript los evalúa en un orden específico llamado **precedencia**. Es similar a las matemáticas: primero se resuelve lo que está entre paréntesis, luego multiplicación/división, luego suma/resta.

### Tabla resumida (de mayor a menor prioridad)

| Prioridad | Operador                 | Descripción                      |
| --------- | ------------------------ | -------------------------------- |
| 17        | `()`                     | Paréntesis (agrupación)          |
| 15        | `**`                     | Potencia                         |
| 14        | `*`, `/`, `%`            | Multiplicación, división, módulo |
| 13        | `+`, `-`                 | Suma y resta                     |
| 12        | `>`, `<`, `>=`, `<=`     | Comparación de orden             |
| 11        | `===`, `!==`, `==`, `!=` | Igualdad                         |
| 6         | `&&`                     | AND lógico                       |
| 5         | `\|\|`                   | OR lógico                        |
| 3         | `=`, `+=`, `-=`…         | Asignación                       |

### Ejemplos

```javascript
// Sin paréntesis: sigue la precedencia
console.log(2 + 3 * 4); // 14 ← primero 3*4=12, luego 2+12
console.log(10 - 2 ** 3); // 2  ← primero 2**3=8, luego 10-8
console.log(true || (false && false)); // true ← primero && luego ||

// Con paréntesis: tú controlas el orden
console.log((2 + 3) * 4); // 20 ← primero 2+3=5, luego 5*4
console.log((true || false) && false); // false
```

### Regla práctica

> 💡 **Usa paréntesis siempre que la intención no sea obvia.** Hacen el código más legible y eliminan ambigüedades.

```javascript
// ❌ Difícil de leer
const result = 100 + 50 * 0.1 - 10 / 2;

// ✅ Intención clara con paréntesis
const subtotal = 100;
const tax = 50 * 0.1;
const shipDiscount = 10 / 2;
const result2 = subtotal + tax - shipDiscount;
console.log(result2); // 100 (ambos dan =100, pero el segundo es legible)
```

---

## 2. Asociatividad

Cuando dos operadores tienen la **misma precedencia**, el orden importa. La mayoría se evalúan de **izquierda a derecha**:

```javascript
console.log(100 / 10 / 2); // 5 ← primero 100/10=10, luego 10/2=5
console.log(2 - 3 - 1); // -2 ← primero 2-3=-1, luego -1-1=-2
```

La potencia `**` es la excepción: se evalúa de **derecha a izquierda**:

```javascript
console.log(2 ** (3 ** 2)); // 512 ← primero 3**2=9, luego 2**9=512
// No es: (2**3)**2 = 64
```

---

## 3. Coerción implícita

La **coerción implícita** ocurre cuando JavaScript **convierte automáticamente** el tipo de un valor para poder ejecutar una operación. Esto puede producir resultados inesperados.

### Casos más comunes

```javascript
// + con string → concatenación, no suma
console.log("5" + 10); // "510"  ← coerción
console.log(10 + "5"); // "105"  ← coerción
console.log(1 + 2 + "3"); // "33"   ← primero 1+2=3, luego 3+"3"="33"
console.log("1" + 2 + 3); // "123"  ← primero "1"+2="12", luego "12"+3="123"

// Otros operadores aritméticos → convierten a number
console.log("5" - 2); // 3     ← "5" se convierte a 5
console.log("5" * "2"); // 10    ← ambos se convierten
console.log("10" / "2"); // 5     ← ambos se convierten
console.log("abc" - 1); // NaN   ← "abc" no se puede convertir

// == hace coerción (por eso es peligroso)
console.log(0 == false); // true  ← coerción
console.log("" == false); // true  ← coerción
console.log(null == 0); // false ← excepción especial
```

### Por qué es un problema

```javascript
// Bug real: el usuario ingresa su saldo como texto
const balanceInput = "1000";
const withdrawal = 200;

// ❌ Con coerción implícita
const newBalance = balanceInput - withdrawal; // 800 ← funciona por casualidad
const totalBad = balanceInput + withdrawal; // "1000200" ← BUG

// ✅ Con conversión explícita
const balance = Number(balanceInput);
const total = balance + withdrawal; // 1200 ← correcto
```

---

## 4. Cómo evitar la coerción implícita

Tres reglas simples:

1. **Convierte explícitamente** antes de operar: usa `Number()`, `String()`, `Boolean()`
2. **Usa siempre `===`** en lugar de `==`
3. **Nombra bien tus variables**: si se llama `userAgeText`, sabes que es string

```javascript
// ✅ Código defensivo y claro
const rawInput = "42"; // viene de un formulario
const userAge = Number(rawInput); // conversión explícita

const isAdult = userAge >= 18;
console.log(`¿Es adulto? ${isAdult}`); // ¿Es adulto? true

// ✅ Comparación estricta siempre
const expected = 42;
console.log(userAge === expected); // true ← mismo tipo y valor
```

---

## ✅ Checklist de verificación

- [ ] Sé que `*` y `/` se evalúan antes que `+` y `-`
- [ ] Uso paréntesis para aclarar el orden cuando la expresión es compleja
- [ ] Entiendo qué es la coerción implícita y en qué operaciones ocurre
- [ ] Convierto explícitamente los valores antes de operar con ellos

---

## 📚 Recursos adicionales

- [MDN — Precedencia de operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- [javascript.info — Conversión de tipos básica](https://javascript.info/type-conversions)

---

[← Anterior](./03-operadores-logicos.md) | [README semana →](../README.md)
