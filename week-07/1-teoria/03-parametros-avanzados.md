# 03 — Parámetros Avanzados

## 🎯 Objetivos

- Usar parámetros por defecto para hacer valores opcionales
- Manejar múltiples parámetros correctamente
- Entender qué pasa cuando se omiten argumentos

---

## 1. El problema sin parámetros por defecto

¿Qué pasa cuando alguien llama una función sin pasar todos los argumentos?

```javascript
const greet = (name, greeting) => `${greeting}, ${name}!`;

console.log(greet("Ana", "Hola")); // "Hola, Ana!"
console.log(greet("Carlos")); // "undefined, Carlos!" ← problema
```

Sin un valor por defecto, el parámetro faltante vale `undefined`.

---

## 2. Parámetros por defecto (Default Parameters)

Desde ES2015, podemos asignar un valor por defecto directamente en la definición del parámetro:

```javascript
//                              ┌─ valor por defecto
const greet = (name, greeting = "Hola") => `${greeting}, ${name}!`;

console.log(greet("Ana", "Buenos días")); // "Buenos días, Ana!"
console.log(greet("Carlos")); // "Hola, Carlos!" ← usa el default
console.log(greet("María", undefined)); // "Hola, María!" ← undefined activa default
```

> El valor por defecto se usa cuando el argumento es `undefined` (omitido) o literalmente `undefined`.

---

## 3. Valores por defecto con distintos tipos

Los valores por defecto pueden ser cualquier expresión válida:

```javascript
// String por defecto
const formatLabel = (text, prefix = "INFO") => `[${prefix}] ${text}`;
console.log(formatLabel("Sistema iniciado")); // "[INFO] Sistema iniciado"
console.log(formatLabel("Error grave", "ERROR")); // "[ERROR] Error grave"

// Número por defecto
const calculateTax = (price, taxRate = 0.19) => price * (1 + taxRate);
console.log(calculateTax(100)); // 119
console.log(calculateTax(100, 0.08)); // 108

// Boolean por defecto
const showData = (data, verbose = false) => {
  if (verbose) {
    return `[DETALLE] ${JSON.stringify(data)}`;
  }
  return String(data);
};
console.log(showData(42)); // "42"
console.log(showData(42, true)); // "[DETALLE] 42"
```

---

## 4. Parámetros por defecto como expresiones

El valor por defecto puede ser una expresión calculada, incluso usando otros parámetros:

```javascript
// El segundo parámetro usa el primero como referencia
const createRange = (start, end = start + 10) => ({ start, end });

console.log(createRange(5)); // { start: 5, end: 15 }
console.log(createRange(0, 100)); // { start: 0, end: 100 }
```

> **Orden importante**: Los parámetros con defecto deben ir al final. Un parámetro sin defecto no puede ir después de uno con defecto.

```javascript
// ❌ MAL — parámetro sin defecto después de uno con defecto
const bad = (a = 1, b) => a + b;

// ✅ BIEN — parámetros sin defecto primero
const good = (a, b = 1) => a + b;
console.log(good(5)); // 6
console.log(good(5, 3)); // 8
```

---

## 5. Número variable de parámetros

### Acceder a argumentos extra

Si se pasan más argumentos de los declarados, los extras se ignoran:

```javascript
const add = (a, b) => a + b;
console.log(add(1, 2, 3, 4)); // 3 — los extras se ignoran
```

### Rest parameters `...` (preview)

Para aceptar cualquier número de argumentos, se usa el operador `...rest`. Lo exploraremos en profundidad en la Semana 12:

```javascript
// Preview — se profundiza en Semana 12
const addAll = (...numbers) => {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
};

console.log(addAll(1, 2, 3)); // 6
console.log(addAll(10, 20, 30, 40)); // 100
```

---

## 6. Buenas prácticas con parámetros

```javascript
// ✅ Nombres descriptivos
const calculateFinalPrice = (
  basePrice,
  discountPercentage = 0,
  taxRate = 0.19,
) => {
  const discounted = basePrice * (1 - discountPercentage / 100);
  return discounted * (1 + taxRate);
};

// ✅ Validar parámetros críticos cuando sea necesario
const divide = (dividend, divisor) => {
  if (divisor === 0) {
    return "Error: no se puede dividir entre cero";
  }
  return dividend / divisor;
};

// ❌ Nombres sin sentido — evitar
const calc = (x, y = 1, z = 0) => x + y - z;
```

---

## ✅ Checklist de Verificación

- [ ] ¿Los parámetros opcionales tienen un valor por defecto significativo?
- [ ] ¿Los parámetros con defecto están al final de la lista?
- [ ] ¿Los nombres de parámetros describen qué tipo de dato esperan?
- [ ] ¿Validás el valor cuando el parámetro es crítico para el funcionamiento?

---

## 📚 Recursos

- [MDN: Parámetros por defecto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [javascript.info: Function parameters](https://es.javascript.info/function-basics#default-values)
