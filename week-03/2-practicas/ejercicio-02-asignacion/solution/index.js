// ============================================
// EJERCICIO 02: Operadores de Asignación — SOLUCIÓN
// Semana 03 — Operadores y Expresiones
// ============================================

// ============================================
// PASO 1: += y -=
// ============================================
console.log("--- Paso 1: += y -= ---");

let stock = 100;
console.log("Stock inicial:", stock);
stock += 50;    // recibe 50 unidades → stock = stock + 50
console.log("Tras recibir pedido:", stock);   // 150
stock -= 30;    // vende 30 unidades → stock = stock - 30
console.log("Tras venta:", stock);            // 120

console.log("");

// ============================================
// PASO 2: *= y /=
// ============================================
console.log("--- Paso 2: *= y /= ---");

let price = 80_000;
console.log("Precio original:", price);
price *= 1.19;   // precio con IVA 19% → price = price * 1.19
console.log("Precio con IVA:", price);  // 95200

let total = 240_000;
console.log("Total:", total);
total /= 3;      // dividir en 3 cuotas → total = total / 3
console.log("Valor por cuota:", total); // 80000

console.log("");

// ============================================
// PASO 3: %=
// ============================================
console.log("--- Paso 3: %= ---");

let number = 17;
console.log("Número original:", number);
number %= 5;    // número = número % 5 = resto de 17/5
console.log("17 % 5 =", number); // 2

console.log("");

// ============================================
// PASO 4: Simulación de caja
// ============================================
console.log("--- Paso 4: simulación de caja ---");

let cashRegister = 500_000;
console.log("Saldo inicial:", cashRegister);

cashRegister += 120_000;  // pago del cliente
console.log("Tras cobrar:", cashRegister);    // 620000

cashRegister -= 80_000;   // dar cambio
console.log("Tras dar cambio:", cashRegister); // 540000

cashRegister *= 0.99;     // descontar 1% de comisión
console.log("Tras comisión (1%):", cashRegister); // 534600

console.log("");
