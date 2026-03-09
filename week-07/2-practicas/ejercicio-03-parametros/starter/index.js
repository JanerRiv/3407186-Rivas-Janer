// ============================================
// EJERCICIO 03: Parámetros por Defecto
// ============================================
console.log("=== Ejercicio 03: Parámetros por Defecto ===\n");

// ============================================
// SECCIÓN 1: String como valor por defecto
// ============================================
console.log("--- Sección 1: Default string ---");

// El parámetro prefix tiene "INFO" como valor por defecto
// Si no se pasa ese argumento, usa el valor por defecto
// Descomenta las siguientes líneas:

// const formatLabel = (text, prefix = "INFO") => `[${prefix}] ${text}`;

// console.log(formatLabel("Sistema iniciado"));        // [INFO] Sistema iniciado
// console.log(formatLabel("Error grave", "ERROR"));    // [ERROR] Error grave
// console.log(formatLabel("Advertencia", "WARN"));     // [WARN] Advertencia

console.log("");

// ============================================
// SECCIÓN 2: Número como valor por defecto
// ============================================
console.log("--- Sección 2: Default número ---");

// taxRate tiene 0.19 (19%) por defecto
// Descomenta las siguientes líneas:

// const calculateWithTax = (price, taxRate = 0.19) =>
//   +(price * (1 + taxRate)).toFixed(2);

// console.log(calculateWithTax(100));         // 119
// console.log(calculateWithTax(100, 0.08));   // 108
// console.log(calculateWithTax(200));         // 238
// console.log(calculateWithTax(50, 0));       // 50 — tasa 0%

console.log("");

// ============================================
// SECCIÓN 3: Boolean como valor por defecto
// ============================================
console.log("--- Sección 3: Default boolean ---");

// verbose = false por defecto → muestra menos información
// verbose = true → muestra detalles extra
// Descomenta las siguientes líneas:

// const formatData = (value, verbose = false) => {
//   if (verbose) {
//     return `[DETALLE] tipo=${typeof value} valor=${value}`;
//   }
//   return String(value);
// };

// console.log(formatData(42));          // "42"
// console.log(formatData(42, true));    // "[DETALLE] tipo=number valor=42"
// console.log(formatData("hola"));      // "hola"
// console.log(formatData("hola", true)); // "[DETALLE] tipo=string valor=hola"

console.log("");

// ============================================
// SECCIÓN 4: Múltiples parámetros con defecto
// ============================================
console.log("--- Sección 4: Múltiples defaults ---");

// buildUrl necesita path, pero protocol y domain tienen valores por defecto
// Descomenta las siguientes líneas:

// const buildUrl = (path, protocol = "https", domain = "api.example.com") =>
//   `${protocol}://${domain}/${path}`;

// console.log(buildUrl("users"));
// console.log(buildUrl("items", "http"));
// console.log(buildUrl("posts", "https", "blog.io"));

console.log("");
console.log("=== Fin del ejercicio 03 ===");
