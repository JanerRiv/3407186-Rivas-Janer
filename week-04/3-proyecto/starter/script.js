// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Construir un generador de mensajes
//    en consola usando métodos de string y
//    template literals.
//
// 📋 TU DOMINIO: Adapta cada TODO al dominio
//    que te fue asignado por el instructor.
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe
//    ser única y coherente con tu dominio.
//    Usa dominios no asignables como referencia
//    conceptual, pero NO copies valores.
//
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define el nombre de tu dominio
const DOMAIN_NAME = "Remesas Internacionales";

// TODO: Define el nombre de la entidad principal
// Inclúyelo con espacios y mayúsculas/minúsculas
// para poder aplicar transformaciones después
const rawEntityName = "  TransWorld Remittance Service  ";

// TODO: Define una categoría o tipo (string)
const entityCategory = "Transferencia internacional de dinero";

// TODO: Define un código identificador (string)
// Elige un prefijo coherente con tu dominio
const entityCode = "REM-001";

// TODO: Define una descripción corta (string)
// Debe contener varias palabras para usar includes/slice
const entityDescription = "Servicio digital de remesas para enviar dinero entre países de forma rápida y segura.";

// TODO: Define un dato numérico relevante (number)
const mainValue = 500; // monto de la remesa en USD

// TODO: Define un estado booleano
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// TODO: Limpia el nombre con trim()
const entityName = rawEntityName.trim();

// TODO: Obtén el nombre en mayúsculas para el encabezado
const entityNameUpper = entityName.toUpperCase();

// TODO: Obtén el nombre en minúsculas para el código
const entityNameLower = entityName.toLowerCase();

// TODO: Extrae las primeras letras del código con slice()
// para usarlas como prefijo de referencia
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// TODO: Verifica si el código empieza con el prefijo correcto
// Usa startsWith() con el prefijo que definiste
const hasValidPrefix = entityCode.startsWith(codePrefix);

// TODO: Verifica si la descripción contiene una palabra clave
// Usa includes() con una palabra importante de tu dominio
const descriptionIsRelevant = entityDescription.includes("remesas");

// TODO: Verifica si el código termina con los dígitos
// Usa endsWith() con algo coherente de tu dominio
const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

// TODO: Construye la ficha multilínea usando template literals
// Usa TODAS las variables transformadas arriba
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
// TODO: Muestra los resultados de las validaciones con template literals
console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'remesas'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// TODO: Construye un mensaje corto de una línea
// Usa template literal con el nombre limpio y el código
const notification = `📢 Nueva remesa registrada: ${entityName} (${entityCode})`;
console.log(notification);
console.log("");
