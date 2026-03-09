// ============================================
// EJERCICIO 05: Numeric Separators — SOLUCIÓN
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Sin separadores
// ============================================
console.log("--- Paso 1: sin separadores ---");

const worldPopulationRaw = 8100000000;
const distanceMoonKmRaw = 384400;
const priceInCentsRaw = 129900;
const bytesInGigabyteRaw = 1073741824;

console.log("Población mundial:", worldPopulationRaw);
console.log("Distancia a la Luna (km):", distanceMoonKmRaw);
console.log("Precio en centavos:", priceInCentsRaw);
console.log("Bytes en 1 GB:", bytesInGigabyteRaw);

console.log("");

// ============================================
// PASO 2: Con separadores ES2021
// ============================================
console.log("--- Paso 2: con separadores ---");

const worldPopulation = 8_100_000_000;
const distanceMoonKm = 384_400;
const priceInCents = 129_900;
const bytesInGigabyte = 1_073_741_824;

console.log("Población mundial:", worldPopulation);
console.log("Distancia a la Luna (km):", distanceMoonKm);
console.log("Precio en centavos:", priceInCents);
console.log("Bytes en 1 GB:", bytesInGigabyte);

console.log("");

// ============================================
// PASO 3: El valor no cambia
// ============================================
console.log("--- Paso 3: mismo valor ---");

console.log(1_000 === 1000);              // true
console.log(1_000_000 === 1000000);       // true
console.log(1_234.567_89 === 1234.56789); // true
console.log(typeof 1_000);               // "number"

console.log("");

// ============================================
// PASO 4: En decimales y hexadecimales
// ============================================
console.log("--- Paso 4: decimales y hex ---");

const smallFraction = 0.000_001;
const bigDecimal = 1_234_567.89;
const hexWhite = 0xFF_FF_FF;

console.log("Fracción pequeña:", smallFraction);
console.log("Decimal grande:", bigDecimal);
console.log("Blanco en hex:", hexWhite);

console.log("");

// ============================================
// PASO 5: Reescritos con separadores
// ============================================
console.log("--- Paso 5: con separadores ---");

const annualSalary = 42_000_000;
const earthRadiusKm = 6_371_000;
const storageBytes = 536_870_912;
const speedOfLightMs = 299_792_458;

console.log("Salario anual:", annualSalary);
console.log("Radio terrestre (km):", earthRadiusKm);
console.log("Almacenamiento (bytes):", storageBytes);
console.log("Velocidad de la luz (m/s):", speedOfLightMs);

console.log("");
