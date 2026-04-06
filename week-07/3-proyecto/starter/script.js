

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "TransWorld Remesas";
const VALUE_LABEL = "monto USD";
const CURRENCY = "USD";

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
  return ` ${item.name} [${item.category}] — ${CURRENCY} ${item.value}`;
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// calcular monto con comisión del 5%
const calculateValue = (baseValue, feeRate = 0.05) => {
  return +(baseValue * (1 - feeRate)).toFixed(2);
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

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n  No hay elementos.");
} else {
  // --- Listado ---
  console.log("\n Listado:");
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
  console.log(`\n✅ Remesas válidas: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    totalValue += calculateValue(item.value);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);