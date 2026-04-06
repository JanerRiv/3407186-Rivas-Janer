// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Remesas Internacionales
// ============================================

const DOMAIN_NAME = "TransWorld Remesas";
const VALUE_LABEL = "remesas";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Remesa USA - Juan", amount: 500, active: true, country: "USA", type: "familiar" },
  { id: 2, name: "Remesa España - Empresa", amount: 1200, active: true, country: "España", type: "negocio" },
  { id: 3, name: "Remesa Chile - Ana", amount: 300, active: false, country: "Chile", type: "personal" },
  { id: 4, name: "Remesa Canadá - Carlos", amount: 700, active: true, country: "Canadá", type: "familiar" },
  { id: 5, name: "Remesa México - Tienda", amount: 950, active: true, country: "México", type: "negocio" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado último: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.type} — USD ${item.amount} — ${item.country}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// agregar nuevo
addItem({ id: 6, name: "Remesa Perú - Luis", amount: 400, active: true, country: "Perú", type: "personal" });

// agregar prioritario
addPriorityItem({ id: 0, name: "Remesa Urgente - VIP", amount: 2000, active: true, country: "USA", type: "negocio" });

// eliminar del medio
removeByIndex(2);

// eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// búsqueda
const found = findByName("Remesa USA - Juan");
console.log("Resultado búsqueda:", found);

// activos
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

// snapshot
const snapshot = [...items, { id: 99, name: "Simulación", amount: 999, active: false, country: "Test", type: "test" }];
console.log("Snapshot creado (sin modificar original):", snapshot.length);

console.log("\n--- Transformación con map ---\n");

// nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// montos con comisión
const amountsWithFee = items.map(item => (item.amount * 0.95).toFixed(2));
console.log("Montos con comisión:", amountsWithFee);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);