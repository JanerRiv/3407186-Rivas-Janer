// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "Sistema de Remesas";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "remesas";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
  { id: 1, name: "Remesa USA - Juan", amount: 500, active: true, type: "familiar", fee: 25 },
  { id: 2, name: "Remesa España - Empresa", amount: 1200, active: true, type: "negocio" },
  { id: 3, name: "Remesa Chile - Ana", amount: 300, active: false, type: "personal", note: "pendiente" },
  { id: 4, name: "Remesa Canadá - Carlos", amount: 700, active: true, type: "familiar" },
  { id: 5, name: "Remesa México - Tienda", amount: 950, active: true, type: "negocio", fee: 40 },
  { id: 6, name: "Remesa Perú - Luis", amount: 400, active: false, type: "personal" }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  // TODO: Usar Object.entries() + forEach para imprimir cada clave y valor
  // Alinear las claves con padEnd para formato de tabla
  Object.entries(item).forEach(([key, value]) => {
    console.log(key.padEnd(15), ":", value);
  });
};

/**
 * Calcula estadísticas numéricas del catálogo
 * @param {string} numericKey - El nombre de la propiedad numérica a analizar
 */
const calculateStats = (numericKey) => {
  // TODO: Usar Object.values() sobre el array de valores numéricos
  // Calcular: total, promedio, máximo, mínimo
  // Imprimir los resultados
  const values = items.map(item => item[numericKey]);

  const total = values.reduce((a, b) => a + b, 0);
  const promedio = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log("\nEstadísticas:");
  console.log("Total:", total);
  console.log("Promedio:", promedio);
  console.log("Máximo:", max);
  console.log("Mínimo:", min);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  // TODO: Mostrar propiedades básicas siempre
  // TODO: Usar Object.hasOwn() para verificar propiedades opcionales
  //       y mostrarlas solo si existen
  console.log("Monto:", item.amount);
  console.log("Activa:", item.active);

  if (Object.hasOwn(item, "fee")) {
    console.log("Comisión:", item.fee);
  }

  if (Object.hasOwn(item, "note")) {
    console.log("Nota:", item.note);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n Propiedades de "${item.name}":`);
  // TODO: Usar for...in + Object.hasOwn() para recorrer propiedades propias
  // Imprimir cada clave y su valor
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(key, ":", item[key]);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  // TODO: Retornar un nuevo objeto usando spread + changes
  // El objeto original NO debe modificarse
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  // TODO: Usar filter() por la propiedad booleana de tu dominio
  return items.filter(item => item.active);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Usar find()
  return items.find(item => item.id === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  // TODO: Usar map() para agregar una propiedad calculada
  // Ejemplos: priceWithTax, totalPages, formattedDuration
  // Recuerda: item => ({ ...item, newProp: calculation })
  return items.map(item => ({
    ...item,
    netAmount: item.amount - (item.fee || 0)
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */
const sortByNumericProp = (ascending = true) => {
  // TODO: Usar [...items].sort() con un comparador
  // No mutar el array original
  return [...items].sort((a, b) =>
    ascending ? a.amount - b.amount : b.amount - a.amount
  );
};

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(` CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  // TODO: Mostrar cantidad total de elementos
  console.log("Total:", items.length);

  // TODO: Mostrar cuántos están disponibles/activos
  console.log("Activas:", getAvailable().length);

  // TODO: Mostrar estadísticas de la propiedad numérica principal
  calculateStats("amount");

  // TODO: Listar todos los elementos ordenados (usar sortByNumericProp)
  sortByNumericProp().forEach(item => {
    console.log(item.name, "-", item.amount);
  });

  // TODO: Mostrar el elemento con el valor numérico más alto y más bajo
  const ordenados = sortByNumericProp();
  console.log("Mayor:", ordenados[ordenados.length - 1].name);
  console.log("Menor:", ordenados[0].name);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

// TODO: Llamar a las funciones implementadas en este orden:
inspectItem(items[0]);

calculateStats("amount");

items.forEach(showWithOptionals);

printAllProperties(items[0]);

const updated = updateItem(items[0], { amount: 600 });
console.log(updated);

console.log(getAvailable());

console.log(findById(2));
console.log(findById(99));

console.log(addCalculatedProp());

console.log(sortByNumericProp());

buildReport();