// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio

const REMITTANCE_AMOUNT = 500;      // monto enviado en USD
const TRANSACTION_FEE_RATE = 0.05;  // comisión del 5%
const EXCHANGE_RATE = 4000;         // tasa de cambio USD → COP
const MAX_DAILY_TRANSACTIONS = 100; // máximo de remesas por día


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// cálculo de comisión
const feeAmount = REMITTANCE_AMOUNT * TRANSACTION_FEE_RATE;
console.log("Comisión de la remesa:", feeAmount);

// dinero que recibe el destinatario
const receivedAmount = REMITTANCE_AMOUNT - feeAmount;
console.log("Monto recibido:", receivedAmount);

// conversión a moneda local
const receivedInCOP = receivedAmount * EXCHANGE_RATE;
console.log("Monto recibido en COP:", receivedInCOP);

// ejemplo de porcentaje de comisión
const feePercent = TRANSACTION_FEE_RATE * 100;
console.log("Porcentaje de comisión:", feePercent, "%");

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let dailyTotal = 0;

dailyTotal += 500;
console.log("Tras primera remesa:", dailyTotal);

dailyTotal += 300;
console.log("Tras segunda remesa:", dailyTotal);

dailyTotal += 200;
console.log("Tras tercera remesa:", dailyTotal);

// aplicar descuento promocional del 10%
dailyTotal *= 0.90;
console.log("Total con descuento promocional:", dailyTotal);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const transactionsToday = 80;

const isLimitReached = transactionsToday === MAX_DAILY_TRANSACTIONS;
console.log("¿Se alcanzó el límite diario?", isLimitReached);

const hasRemainingCapacity = transactionsToday < MAX_DAILY_TRANSACTIONS;
console.log("¿Hay capacidad para más remesas?", hasRemainingCapacity);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const isSystemOnline = true;
const amountToSend = 500;

// condición con &&
const canProcessRemittance = isSystemOnline && amountToSend > 0;
console.log("¿Se puede procesar la remesa?", canProcessRemittance);

// condición con ||
const qualifiesForPriority = amountToSend >= 1000 || isSystemOnline;
console.log("¿Califica para prioridad?", qualifiesForPriority);

// negación
const systemOffline = !isSystemOnline;
console.log("¿El sistema está fuera de línea?", systemOffline);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Monto enviado:", REMITTANCE_AMOUNT);
console.log("Comisión aplicada:", feeAmount);
console.log("Monto recibido:", receivedAmount);
console.log("Monto en moneda local:", receivedInCOP);
console.log("Total procesado hoy:", dailyTotal);

console.log("");
