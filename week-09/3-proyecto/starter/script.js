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
const DOMAIN_NAME = "Sistema de Remesas"; // Define el nombre del sistema

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "remesas"; // Define cómo se llaman los elementos

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
  { id: 1, name: "Remesa USA - Juan", amount: 500, active: true, type: "familiar", fee: 25 }, // Objeto con comisión
  { id: 2, name: "Remesa España - Empresa", amount: 1200, active: true, type: "negocio" }, // Objeto sin opcional
  { id: 3, name: "Remesa Chile - Ana", amount: 300, active: false, type: "personal", note: "pendiente" }, // Tiene nota
  { id: 4, name: "Remesa Canadá - Carlos", amount: 700, active: true, type: "familiar" }, // Activa
  { id: 5, name: "Remesa México - Tienda", amount: 950, active: true, type: "negocio", fee: 40 }, // Con fee
  { id: 6, name: "Remesa Perú - Luis", amount: 400, active: false, type: "personal" } // Inactiva
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`); // Imprime el nombre del objeto
  // TODO: Usar Object.entries() + forEach para imprimir cada clave y valor
  // Alinear las claves con padEnd para formato de tabla
  Object.entries(item).forEach(([key, value]) => { // Recorre cada propiedad
    console.log(key.padEnd(15), ":", value); // Muestra clave alineada y valor
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
  const values = items.map(item => item[numericKey]); // Extrae los valores numéricos

  const total = values.reduce((a, b) => a + b, 0); // Suma todos los valores
  const promedio = total / values.length; // Calcula el promedio
  const max = Math.max(...values); // Encuentra el máximo
  const min = Math.min(...values); // Encuentra el mínimo

  console.log("\nEstadísticas:"); // Título
  console.log("Total:", total); // Muestra suma total
  console.log("Promedio:", promedio); // Muestra promedio
  console.log("Máximo:", max); // Muestra valor mayor
  console.log("Mínimo:", min); // Muestra valor menor
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
  console.log(`\n→ ${item.name}`); // Muestra el nombre
  // TODO: Mostrar propiedades básicas siempre
  // TODO: Usar Object.hasOwn() para verificar propiedades opcionales
  //       y mostrarlas solo si existen
  console.log("Monto:", item.amount); // Imprime el monto
  console.log("Activa:", item.active); // Imprime si está activa

  if (Object.hasOwn(item, "fee")) { // Verifica si tiene fee
    console.log("Comisión:", item.fee); // Muestra la comisión
  }

  if (Object.hasOwn(item, "note")) { // Verifica si tiene nota
    console.log("Nota:", item.note); // Muestra la nota
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
  console.log(`\n Propiedades de "${item.name}":`); // Título
  // TODO: Usar for...in + Object.hasOwn() para recorrer propiedades propias
  // Imprimir cada clave y su valor
  for (const key in item) { // Recorre claves
    if (Object.hasOwn(item, key)) { // Verifica propiedad propia
      console.log(key, ":", item[key]); // Imprime clave y valor
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
  return { ...item, ...changes }; // Crea copia y aplica cambios
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
  return items.filter(item => item.active); // Filtra activos
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Usar find()
  return items.find(item => item.id === id); // Busca por id
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  // TODO: Usar map() para agregar una propiedad calculada
  // Ejemplos: priceWithTax, totalPages, formattedDuration
  // Recuerda: item => ({ ...item, newProp: calculation })
  return items.map(item => ({ // Recorre cada objeto
    ...item, // Copia el objeto
    netAmount: item.amount - (item.fee || 0) // Calcula monto neto
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
  return [...items].sort((a, b) => // Copia y ordena
    ascending ? a.amount - b.amount : b.amount - a.amount // Ordena según parámetro
  );
};

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50)); // Línea decorativa
  console.log(` CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`); // Título
  console.log("=".repeat(50)); // Línea

  // TODO: Mostrar cantidad total de elementos
  console.log("Total:", items.length); // Cantidad total

  // TODO: Mostrar cuántos están disponibles/activos
  console.log("Activas:", getAvailable().length); // Cantidad activas

  // TODO: Mostrar estadísticas de la propiedad numérica principal
  calculateStats("amount"); // Llama estadísticas

  // TODO: Listar todos los elementos ordenados (usar sortByNumericProp)
  sortByNumericProp().forEach(item => { // Recorre ordenados
    console.log(item.name, "-", item.amount); // Imprime datos
  });

  // TODO: Mostrar el elemento con el valor numérico más alto y más bajo
  const ordenados = sortByNumericProp(); // Guarda ordenados
  console.log("Mayor:", ordenados[ordenados.length - 1].name); // Mayor
  console.log("Menor:", ordenados[0].name); // Menor

  console.log("=".repeat(50)); // Línea final
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`); // Inicio
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`); // Total

// TODO: Llamar a las funciones implementadas en este orden:
inspectItem(items[0]); // Inspecciona primer elemento

calculateStats("amount"); // Calcula estadísticas

items.forEach(showWithOptionals); // Muestra todos

printAllProperties(items[0]); // Propiedades del primero

const updated = updateItem(items[0], { amount: 600 }); // Actualiza
console.log(updated); // Muestra actualizado

console.log(getAvailable()); // Muestra activos

console.log(findById(2)); // Busca existente
console.log(findById(99)); // Busca inexistente

console.log(addCalculatedProp()); // Muestra con cálculo

console.log(sortByNumericProp()); // Muestra ordenados

buildReport(); // Genera reporte
