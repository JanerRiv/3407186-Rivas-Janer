// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [completar con tu dominio]
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

// TODO: Renombrar con el nombre de tu dominio (en inglés, UPPER_SNAKE_CASE)
const DOMAIN_NAME = "Mi Aplicación";
const VALUE_LABEL = "elementos";

// TODO: Ajustar al límite razonable para tu dominio
// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

// TODO: Definir el array con MÍNIMO 6 objetos
// Requisitos:
// - Mínimo 5 propiedades por objeto (tipos mixtos)
// - Al menos 1 propiedad numérica (para calcular estadísticas)
// - Al menos 1 propiedad booleana (para filtrar activos/inactivos)
// - Al menos 1 propiedad OPCIONAL (no todos los objetos la tienen)
//
// Nota para el aprendiz — Adaptaciones por dominio:
// - Biblioteca:    { id, title, author, year, pages, available, notes? }
// - Farmacia:      { id, name, price, stock, laboratory, active, prescription? }
// - Gimnasio:      { id, name, memberType, fee, joinDate, active, plan? }
// - Restaurante:   { id, name, category, price, calories, available, allergens? }
// - Banco:         { id, owner, type, balance, rate, active, creditLimit? }

const items = [
  // TODO: Reemplazar con objetos de tu dominio
  {
    id: 1,
    name: "Elemento 1",
    value: 100,
    active: true,
    category: "tipo-a",
  },
  {
    id: 2,
    name: "Elemento 2",
    value: 200,
    active: true,
    category: "tipo-b",
    notes: "Propiedad opcional de ejemplo",
  },
  {
    id: 3,
    name: "Elemento 3",
    value: 150,
    active: false,
    category: "tipo-a",
  },
  // TODO: Agregar al menos 3 objetos más (mínimo 6 en total)
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

/**
 * Agrega un nuevo elemento al array principal
 * @param {Object} item - El elemento a agregar
 */
const addItem = (item) => {
  // TODO: Implementar
  // 1. Verificar que no supere MAX_ITEMS (usar items.length)
  // 2. Agregar el item al array con .push()
  // 3. Mostrar confirmación con console.log y template literal
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} - El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Implementar usando .find()
  return null;
};

/**
 * Retorna todos los elementos activos
 * @returns {Object[]}
 */
const getActive = () => {
  // TODO: Implementar usando .filter() con la propiedad booleana
  return [];
};

/**
 * Filtra elementos por el valor de un campo
 * @param {string} field - El nombre de la propiedad
 * @param {*} value - El valor a buscar
 * @returns {Object[]}
 */
const filterByField = (field, value) => {
  // TODO: Implementar usando .filter()
  return [];
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

/**
 * Actualiza un elemento de forma inmutable usando spread
 * @param {number} id - Id del elemento a actualizar
 * @param {Object} changes - Objeto con los cambios a aplicar
 * @returns {Object[]} - Nuevo array con el elemento actualizado
 */
const updateItem = (id, changes) => {
  // TODO: Implementar
  // 1. Usar .map() para crear un nuevo array
  // 2. Para el item con el id buscado: retornar { ...item, ...changes }
  // 3. Para los demás: retornar el item sin cambios
  return items.map((item) => item); // reemplazar esta línea
};

/**
 * Calcula estadísticas de un campo numérico
 * @param {string} field - El nombre de la propiedad numérica
 * @returns {{ min: number, max: number, avg: number, total: number }}
 */
const calculateStats = (field) => {
  // TODO: Implementar
  // 1. Extraer los valores numéricos con Object.values o .map()
  // 2. Calcular: min (Math.min), max (Math.max), avg (sum/length), total (sum)
  // Pista: const values = items.map(i => i[field]);
  return { min: 0, max: 0, avg: 0, total: 0 };
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

/**
 * Formatea un elemento para mostrar en consola (una línea)
 * @param {Object} item - El elemento a formatear
 * @returns {string}
 */
const formatItem = (item) => {
  // TODO: Implementar usando template literals
  // 1. Usar .padEnd() o .padStart() para alinear columnas
  // 2. Usar ?? y ?. para propiedades opcionales
  // 3. Retornar string (NO hacer console.log aquí)
  return `[${item.id}] ${item.name}`;
};

/**
 * Genera el reporte completo del dominio
 * Usa: Object.entries, forEach, filter, map, calculateStats
 */
const buildReport = () => {
  // TODO: Implementar
  // 1. Cabecera: título del dominio con template literal
  // 2. Listado completo usando formatItem + forEach
  // 3. Sección de activos vs inactivos (getActive)
  // 4. Estadísticas con calculateStats para la propiedad numérica
  // 5. Propiedades del primer elemento con Object.entries
  // 6. Pie de reporte con conteo total
  console.log(`Reporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(40));
  items.forEach((item) => console.log(formatItem(item)));
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================
//
// TODO: Descomentar a medida que implementes cada función
//

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
// const found = findById(1);
// console.log("Encontrado id=1:", found?.name ?? "no encontrado");
// console.log("");

// Paso 2: Listar activos
// const active = getActive();
// console.log(`Activos: ${active.length}`);
// active.forEach(item => console.log(" ", formatItem(item)));
// console.log("");

// Paso 3: Filtrar por campo
// const filtered = filterByField("category", "tipo-a");
// console.log(`Filtro category=tipo-a: ${filtered.length} resultados`);
// console.log("");

// Paso 4: Actualizar con spread
// const updated = updateItem(1, { value: 999 });
// console.log(`Actualizado id=1: value=${updated.find(i => i.id === 1)?.value}`);
// console.log("");

// Paso 5: Estadísticas
// const stats = calculateStats("value");
// console.log(`Estadísticas (value): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
// console.log("");

// Paso 6: Reporte completo
// buildReport();

// TODO: Agregar un nuevo elemento usando addItem
// addItem({ id: 7, name: "Nuevo elemento", value: 300, active: true, category: "tipo-a" });
