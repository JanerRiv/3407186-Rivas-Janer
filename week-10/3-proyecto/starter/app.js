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
const DOMAIN_NAME = "REMITTANCE_SYSTEM";
const VALUE_LABEL = "remesas";

// TODO: Ajustar al límite razonable para tu dominio
// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

const items = [
  { id: 1, name: "Remesa USA - Juan", amount: 500, active: true, category: "familiar" },
  { id: 2, name: "Remesa España - Empresa", amount: 1200, active: true, category: "negocio", note: "urgente" },
  { id: 3, name: "Remesa Chile - Ana", amount: 300, active: false, category: "personal" },
  { id: 4, name: "Remesa Canadá - Carlos", amount: 700, active: true, category: "familiar" },
  { id: 5, name: "Remesa México - Tienda", amount: 950, active: true, category: "negocio" },
  { id: 6, name: "Remesa Perú - Luis", amount: 400, active: false, category: "personal" }
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

const addItem = (item) => {
  // TODO: Implementar
  if (items.length >= MAX_ITEMS) {
    console.log("No se pueden agregar más remesas");
    return;
  }
  items.push(item);
  console.log(`Remesa agregada: ${item.name}`);
};

const findById = (id) => {
  // TODO: Implementar usando .find()
  return items.find(item => item.id === id);
};

const getActive = () => {
  // TODO: Implementar usando .filter() con la propiedad booleana
  return items.filter(item => item.active);
};

const filterByField = (field, value) => {
  // TODO: Implementar usando .filter()
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]);

  const total = values.reduce((a, b) => a + b, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

const formatItem = (item) => {
  return `[${String(item.id).padEnd(3)}] ${item.name.padEnd(30)} ${String(item.amount).padStart(6)} ${item.active ? "Activa" : "Inactiva"} ${item.note ?? ""}`;
};

const buildReport = () => {
  console.log(`Reporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(40));

  items.forEach(item => console.log(formatItem(item)));

  const active = getActive();
  console.log(`\nActivas: ${active.length} | Inactivas: ${items.length - active.length}`);

  const stats = calculateStats("amount");
  console.log(`\nEstadísticas: min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)} total=${stats.total}`);

  console.log("\nPropiedades del primer elemento:");
  Object.entries(items[0]).forEach(([k, v]) => {
    console.log(k, ":", v);
  });

  console.log("\nTotal de elementos:", items.length);
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado");
console.log("");

// Paso 2: Listar activos
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3: Filtrar por campo
const filtered = filterByField("category", "familiar");
console.log(`Filtro category=familiar: ${filtered.length} resultados`);
console.log("");

// Paso 4: Actualizar con spread
const updated = updateItem(1, { amount: 999 });
console.log(`Actualizado id=1: amount=${updated.find(i => i.id === 1)?.amount}`);
console.log("");

// Paso 5: Estadísticas
const stats = calculateStats("amount");
console.log(`Estadísticas (amount): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
console.log("");

// Paso 6: Reporte completo
buildReport();

// TODO: Agregar un nuevo elemento usando addItem
addItem({ id: 7, name: "Remesa Argentina - Pedro", amount: 600, active: true, category: "personal" });