// ============================================
// EJERCICIO 05: Numeric Separators — ES2021
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: Sin separadores (difícil de leer)
// ============================================
console.log("--- Paso 1: sin separadores ---");

// Observa cuánto te cuesta leer estos números
// Descomenta las siguientes líneas:
// const worldPopulation = 8100000000;
// const distanceMoonKm = 384400;
// const priceInCents = 129900;
// const bytesInGigabyte = 1073741824;

// console.log("Población mundial:", worldPopulation);
// console.log("Distancia a la Luna (km):", distanceMoonKm);
// console.log("Precio en centavos:", priceInCents);
// console.log("Bytes en 1 GB:", bytesInGigabyte);

console.log("");

// ============================================
// PASO 2: Con separadores — ES2021 (fácil de leer)
// ============================================
console.log("--- Paso 2: con separadores ES2021 ---");

// El guión bajo _ actúa como separador visual
// No afecta el valor del número en absoluto
// Descomenta las siguientes líneas:
// const worldPopulation = 8_100_000_000;
// const distanceMoonKm = 384_400;
// const priceInCents = 129_900;
// const bytesInGigabyte = 1_073_741_824;

// console.log("Población mundial:", worldPopulation);
// console.log("Distancia a la Luna (km):", distanceMoonKm);
// console.log("Precio en centavos:", priceInCents);
// console.log("Bytes en 1 GB:", bytesInGigabyte);

console.log("");

// ============================================
// PASO 3: El valor no cambia
// ============================================
console.log("--- Paso 3: mismo valor ---");

// Los separadores son solo cosméticos
// Descomenta las siguientes líneas:
// console.log(1_000 === 1000);              // true
// console.log(1_000_000 === 1000000);       // true
// console.log(1_234.567_89 === 1234.56789); // true
// console.log(typeof 1_000);               // "number"

console.log("");

// ============================================
// PASO 4: En decimales y hexadecimales
// ============================================
console.log("--- Paso 4: decimales y hex ---");

// Se puede usar en cualquier parte del número literal
// Descomenta las siguientes líneas:
// const smallFraction = 0.000_001;      // 0.000001
// const bigDecimal = 1_234_567.89;      // 1234567.89
// const hexWhite = 0xFF_FF_FF;          // 16777215 (blanco en RGB hex)

// console.log("Fracción pequeña:", smallFraction);
// console.log("Decimal grande:", bigDecimal);
// console.log("Blanco en hex:", hexWhite);

console.log("");

// ============================================
// PASO 5: Reescribir para más legibilidad
// ============================================
console.log("--- Paso 5: agrega separadores ---");

// Agrega separadores numéricos a los números de abajo
// para mejorar su legibilidad, luego descomenta:
//
// const annualSalary = 42000000;       → 42_000_000
// const earthRadiusKm = 6371000;       → 6_371_000
// const storageBytes = 536870912;      → 536_870_912
// const speedOfLightMs = 299792458;    → 299_792_458
//
// Descomenta con los separadores ya agregados:
// const annualSalary = 42_000_000;
// const earthRadiusKm = 6_371_000;
// const storageBytes = 536_870_912;
// const speedOfLightMs = 299_792_458;

// console.log("Salario anual:", annualSalary);
// console.log("Radio terrestre (km):", earthRadiusKm);
// console.log("Almacenamiento (bytes):", storageBytes);
// console.log("Velocidad de la luz (m/s):", speedOfLightMs);

console.log("");
