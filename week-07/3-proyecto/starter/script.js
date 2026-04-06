// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Remesas Internacionales
// ============================================

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
const DOMAIN_NAME = "TransWorld Remesas";
const VALUE_LABEL = "monto USD";

// TODO: Define un array con al menos 5 elementos de tu dominio.
const items = [
  { id: 1, name: "Remesa USA - Juan", category: "familiar", value: 500, active: true },
  { id: 2, name: "Remesa España - Empresa", category: "negocio", value: 1200, active: true },
  { id: 3, name: "Remesa Chile - Ana", category: "personal", value: 300, active: false },
  { id: 4, name: "Remesa Canadá - Carlos", category: "familiar", value: 700, active: true },
  { id: 5, name: "Remesa México - Tienda", category: "negocio", value: 950, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (item) => {
  return `${item.name} [${item.category}] — USD ${item.value}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateValue = (baseValue, factor = 0.95) => {
  return +(baseValue * factor).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (item) => {
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = "USD") => {
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\nNo hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\nListado:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }

  console.log(`\nElementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const item of items) {
    totalValue += calculateValue(item.value ?? 0);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);
