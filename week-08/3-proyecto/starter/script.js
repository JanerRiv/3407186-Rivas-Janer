// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Remesas Internacionales
// ============================================

// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

const DOMAIN_NAME = "TransWorld Remesas";
const VALUE_LABEL = "remesas";

// ============================================
// 1. ARRAY INICIAL
// ============================================

// TODO: Definir el array con mínimo 5 objetos del dominio
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

/**
 * Agrega un nuevo elemento al inventario
 */
const addItem = (newItem) => {
  // TODO: usar push
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento
 */
const removeLastItem = () => {
  // TODO: usar pop
  const removed = items.pop();
  console.log(`Eliminado último: ${removed?.name}`);
  return removed;
};

/**
 * Agrega elemento prioritario
 */
const addPriorityItem = (priorityItem) => {
  // TODO: usar unshift
  items.unshift(priorityItem);
  console.log(`Prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina por índice
 */
const removeByIndex = (index) => {
  // TODO: usar splice
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

/**
 * Obtener activos
 */
const getActiveItems = () => {
  // TODO: usar filter
  return items.filter(item => item.active === true);
};

/**
 * Buscar por nombre
 */
const findByName = (name) => {
  // TODO: usar find
  return items.find(item => item.name === name);
};

/**
 * Formatear elemento
 */
const formatItem = (item) => {
  // TODO: personalizar salida
  return `[${item.id}] ${item.name} — ${item.type} — USD ${item.amount} — ${item.country}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`Inventario inicial (${items.length} ${VALUE_LABEL}):`);

// TODO: usar forEach
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// TODO: agregar nuevo elemento
addItem({ id: 6, name: "Remesa Perú - Luis", amount: 400, active: true, country: "Perú", type: "personal" });

// TODO: agregar prioritario
addPriorityItem({ id: 0, name: "Remesa Urgente - VIP", amount: 2000, active: true, country: "USA", type: "negocio" });

// TODO: eliminar del medio
removeByIndex(2);

// TODO: eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

// TODO: mostrar actualizado
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// TODO: búsqueda
const found = findByName("Remesa USA - Juan");
console.log("Resultado búsqueda:", found);

// TODO: activos
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

// TODO: snapshot con spread
const snapshot = [...items, { id: 99, name: "Simulación", amount: 999, active: false, country: "Test", type: "test" }];
console.log("Snapshot creado:", snapshot.length);

console.log("\n--- Transformación con map ---\n");

// TODO: nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// TODO: transformación numérica
const amountsWithFee = items.map(item => (item.amount * 0.95).toFixed(2));
console.log("Montos con comisión:", amountsWithFee);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("Reporte completado");
console.log(`${"=".repeat(50)}\n`);
