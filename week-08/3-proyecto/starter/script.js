// ============================================
// PROYECTO SEMANA 08 — PROYECTO: Gestión de Inventario
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

const DOMAIN_NAME = "TransWorld Remesas"; // constante que guarda el nombre del sistema
const VALUE_LABEL = "remesas"; // etiqueta para mostrar el tipo de elementos

// ============================================
// 1. ARRAY INICIAL
// ============================================

// arreglo principal que almacena todas las remesas como objetos
const items = [
  { id: 1, name: "Remesa USA - Juan", amount: 500, active: true, country: "USA", type: "familiar" }, // objeto con datos de una remesa
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
const addItem = (newItem) => { // función que recibe una nueva remesa
  items.push(newItem); // agrega esa remesa al FINAL del array
  console.log(`Agregado: ${newItem.name}`); // muestra mensaje confirmando el nombre agregado
};

/**
 * Elimina el último elemento
 */
const removeLastItem = () => { // función sin parámetros
  const removed = items.pop(); // elimina el último elemento del array y lo guarda
  console.log(`Eliminado último: ${removed?.name}`); // muestra el nombre del eliminado (?. evita error si no existe)
  return removed; // retorna el elemento eliminado
};

/**
 * Agrega elemento prioritario
 */
const addPriorityItem = (priorityItem) => { // recibe un elemento prioritario
  items.unshift(priorityItem); // lo agrega al INICIO del array
  console.log(`Prioritario agregado: ${priorityItem.name}`); // muestra mensaje
};

/**
 * Elimina por índice
 */
const removeByIndex = (index) => { // recibe la posición
  const removed = items.splice(index, 1); // elimina 1 elemento en esa posición
  console.log(`Eliminado por índice: ${removed[0]?.name}`); // muestra el nombre eliminado
};

/**
 * Obtener activos
 */
const getActiveItems = () => { 
  return items.filter(item => item.active === true); // filtra y devuelve solo los que estén activos
};

/**
 * Buscar por nombre
 */
const findByName = (name) => { 
  return items.find(item => item.name === name); // busca el primer elemento que coincida con ese nombre
};

/**
 * Formatear elemento
 */
const formatItem = (item) => { 
  return `[${item.id}] ${item.name} — ${item.type} — USD ${item.amount} — ${item.country}`; 
  // construye un texto con los datos del objeto
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`); // imprime una línea separadora
console.log(`GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`); // muestra el título en mayúsculas
console.log(`${"=".repeat(50)}\n`); // otra línea separadora

// Estado inicial
console.log(`Inventario inicial (${items.length} ${VALUE_LABEL}):`); // muestra cantidad de elementos

// recorre el array y muestra cada elemento formateado
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`); // imprime cada remesa usando la función de formato
});

console.log("\n--- Operaciones de mutación ---\n"); // separador de sección

// agrega una nueva remesa al final
addItem({ id: 6, name: "Remesa Perú - Luis", amount: 400, active: true, country: "Perú", type: "personal" });

// agrega una remesa al inicio (prioritaria)
addPriorityItem({ id: 0, name: "Remesa Urgente - VIP", amount: 2000, active: true, country: "USA", type: "negocio" });

// elimina un elemento en la posición 2
removeByIndex(2);

// elimina el último elemento del array
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

// muestra el array actualizado después de cambios
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// busca una remesa específica por nombre
const found = findByName("Remesa USA - Juan");
console.log("Resultado búsqueda:", found); // muestra el objeto encontrado

// obtiene las remesas activas
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`); // muestra cuántos hay

// crea una copia del array sin modificar el original usando spread (...)
const snapshot = [...items, { id: 99, name: "Simulación", amount: 999, active: false, country: "Test", type: "test" }];
console.log("Snapshot creado:", snapshot.length); // muestra tamaño del nuevo array

console.log("\n--- Transformación con map ---\n");

// crea un array solo con los nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// crea un array con los montos aplicando comisión del 5%
const amountsWithFee = items.map(item => (item.amount * 0.95).toFixed(2));
console.log("Montos con comisión:", amountsWithFee);

console.log("\n--- Resumen final ---\n");

// muestra total de elementos
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

// cuenta activos e inactivos
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("Reporte completado"); // mensaje final
console.log(`${"=".repeat(50)}\n`);
