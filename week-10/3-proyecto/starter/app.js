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
// DOMINIO ASIGNADO: Sistema de Remesas
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

// TODO: Renombrar con el nombre de tu dominio (en inglés, UPPER_SNAKE_CASE)
const DOMAIN_NAME = "REMITTANCE_SYSTEM"; // Nombre del sistema en inglés

const VALUE_LABEL = "remesas"; // Cómo se llaman los elementos en el sistema

// TODO: Ajustar al límite razonable para tu dominio
// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000; // Máximo de remesas que se pueden guardar

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

const items = [
  { id: 1, name: "Remesa USA - Juan", amount: 500, active: true, category: "familiar" }, // Remesa básica
  { id: 2, name: "Remesa España - Empresa", amount: 1200, active: true, category: "negocio", note: "urgente" }, // Tiene nota
  { id: 3, name: "Remesa Chile - Ana", amount: 300, active: false, category: "personal" }, // Inactiva
  { id: 4, name: "Remesa Canadá - Carlos", amount: 700, active: true, category: "familiar" }, // Activa
  { id: 5, name: "Remesa México - Tienda", amount: 950, active: true, category: "negocio" }, // Negocio
  { id: 6, name: "Remesa Perú - Luis", amount: 400, active: false, category: "personal" } // Inactiva
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

const addItem = (item) => {
  // TODO: Implementar
  if (items.length >= MAX_ITEMS) { // Si ya llegaste al límite
    console.log("No se pueden agregar más remesas"); // Aviso
    return; // Detiene la función
  }
  items.push(item); // Agrega la nueva remesa
  console.log(`Remesa agregada: ${item.name}`); // Confirma
};

const findById = (id) => {
  // TODO: Implementar usando .find()
  return items.find(item => item.id === id); // Busca una remesa por id
};

const getActive = () => {
  // TODO: Implementar usando .filter() con la propiedad booleana
  return items.filter(item => item.active); // Devuelve solo las activas
};

const filterByField = (field, value) => {
  // TODO: Implementar usando .filter()
  return items.filter(item => item[field] === value); // Filtra por cualquier campo
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

const updateItem = (id, changes) => {
  return items.map(item => // Recorre todas las remesas
    item.id === id ? { ...item, ...changes } : item // Si coincide el id, lo actualiza
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]); // Saca los valores numéricos

  const total = values.reduce((a, b) => a + b, 0); // Suma todo
  const min = Math.min(...values); // El más pequeño
  const max = Math.max(...values); // El más grande
  const avg = total / values.length; // Promedio

  return { min, max, avg, total }; // Devuelve todo
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

const formatItem = (item) => {
  return `[${String(item.id).padEnd(3)}] ${item.name.padEnd(30)} ${String(item.amount).padStart(6)} ${item.active ? "Activa" : "Inactiva"} ${item.note ?? ""}`; 
  // Formatea bonito el texto para mostrarlo en consola
};

const buildReport = () => {
  console.log(`Reporte de ${DOMAIN_NAME}`); // Título
  console.log("=".repeat(40)); // Línea decorativa

  items.forEach(item => console.log(formatItem(item))); // Muestra todas las remesas

  const active = getActive(); // Obtiene activas
  console.log(`\nActivas: ${active.length} | Inactivas: ${items.length - active.length}`); // Cuenta

  const stats = calculateStats("amount"); // Calcula estadísticas
  console.log(`\nEstadísticas: min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)} total=${stats.total}`); // Muestra stats

  console.log("\nPropiedades del primer elemento:");
  Object.entries(items[0]).forEach(([k, v]) => {
    console.log(k, ":", v); // Muestra cada propiedad del primero
  });

  console.log("\nTotal de elementos:", items.length); // Total final
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40)); // Línea
console.log(`  ${DOMAIN_NAME.toUpperCase()}`); // Nombre del sistema
console.log("=".repeat(40)); // Línea
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`); // Cantidad actual
console.log("");

// Paso 1: Buscar por id
const found = findById(1); // Busca la remesa con id 1
console.log("Encontrado id=1:", found?.name ?? "no encontrado"); // Muestra resultado
console.log("");

// Paso 2: Listar activos
const active = getActive(); // Obtiene activas
console.log(`Activos: ${active.length}`); // Cantidad
active.forEach(item => console.log(" ", formatItem(item))); // Muestra cada una
console.log("");

// Paso 3: Filtrar por campo
const filtered = filterByField("category", "familiar"); // Filtra por categoría
console.log(`Filtro category=familiar: ${filtered.length} resultados`); // Resultado
console.log("");

// Paso 4: Actualizar con spread
const updated = updateItem(1, { amount: 999 }); // Actualiza el monto
console.log(`Actualizado id=1: amount=${updated.find(i => i.id === 1)?.amount}`); // Muestra cambio
console.log("");

// Paso 5: Estadísticas
const stats = calculateStats("amount"); // Calcula estadísticas
console.log(`Estadísticas (amount): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`); // Muestra
console.log("");

// Paso 6: Reporte completo
buildReport(); // Ejecuta el reporte

// TODO: Agregar un nuevo elemento usando addItem
addItem({ id: 7, name: "Remesa Argentina - Pedro", amount: 600, active: true, category: "personal" }); // Agrega nueva remesa
