// ============================================
// EJERCICIO 04: Mi Primer Programa — SOLUCIÓN
// Ciclo: Entrada → Proceso → Salida
// ============================================

// ============================================
// PASO 1: Entrada
// ============================================
console.log('--- Paso 1: Entrada ---');

console.log('Precio base: 80000');
console.log('Porcentaje de descuento: 10');

console.log('');

// ============================================
// PASO 2: Proceso
// ============================================
console.log('--- Paso 2: Proceso ---');

console.log('Calculando descuento...');
console.log(80000 * 10 / 100);
console.log('Calculando precio final...');
console.log(80000 - (80000 * 10 / 100));

console.log('');

// ============================================
// PASO 3: Salida
// ============================================
console.log('--- Paso 3: Salida ---');

console.log('Precio con descuento: ' + (80000 - 80000 * 0.10));

console.log('');

// ============================================
// PASO 4: Programa completo con formato
// ============================================
console.log('--- Paso 4: Programa completo ---');

console.log('================================');
console.log('         FACTURA DE VENTA       ');
console.log('================================');
console.log('Producto:  Teclado mecánico');
console.log('Precio:    $80,000');
console.log('Descuento: $8,000 (10%)');
console.log('--------------------------------');
console.log('TOTAL:     $72,000');
console.log('================================');

console.log('');

// ============================================
// PASO 5: El ciclo en el código
// ============================================
console.log('--- Paso 5: El ciclo E→P→S ---');

// === ENTRADA ===
console.log('Datos recibidos: precio=50000, iva=19');

// === PROCESO ===
console.log('IVA calculado: ' + (50000 * 19 / 100));

// === SALIDA ===
console.log('Precio con IVA: ' + (50000 + 50000 * 0.19));
