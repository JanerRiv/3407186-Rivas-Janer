// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 TU DOMINIO: Reemplaza cada TODO con datos
//    coherentes con el dominio que te fue asignado.
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe ser
//    única y coherente con tu dominio asignado.
//    Implementaciones copiadas serán detectadas.
//
// Adapta cada TODO al contexto de tu dominio asignado.
// Los ejemplos en este archivo usan dominios NO asignables.
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// TODO: Reemplaza "Mi Dominio" con el nombre de tu dominio
const DOMAIN_NAME = "Remesas Internacionales";

// TODO: Cambia "Nombre del elemento" por algo de tu dominio
const itemName = "Transferencia de dinero Colombia → México";

// TODO: Agrega una categoría, tipo o descripción corta (string)
const itemCategory = "Envío familiar internacional";

// TODO: Agrega un número relevante a tu dominio (integer o decimal)
const itemQuantity = 500; // monto de la remesa en USD

// TODO: Agrega un boolean con prefijo semántico (is/has/can/should)
const isItemAvailable = true; // la remesa fue procesada correctamente

// TODO: Declara un valor null que signifique "no asignado aún"
// en tu dominio
const exchangeRateAssigned = null; // tasa de cambio aún no asignada


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// TODO: Muestra al menos 4 datos del dominio
// Usa console.log con template literals
console.log(`Remesa:        ${itemName}`);
console.log(`Tipo envío:    ${itemCategory}`);
console.log(`Monto enviado: ${itemQuantity} USD`);
console.log(`Procesada:     ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

// TODO: Usa typeof para mostrar el tipo de al menos 3 variables
console.log("typeof itemName:       ", typeof itemName);
console.log("typeof itemQuantity:   ", typeof itemQuantity);
console.log("typeof isItemAvailable:", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// TODO: Realiza al menos UNA conversión explícita
// Convertimos el monto a texto
const amountAsText = String(itemQuantity);

console.log("Monto como texto:", amountAsText);
console.log("typeof (convertido):", typeof amountAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

// TODO: Muestra el valor null y verifica con === null
console.log("Tasa de cambio pendiente:", exchangeRateAssigned);
console.log("typeof null:", typeof exchangeRateAssigned);
console.log("¿Es null?:", exchangeRateAssigned === null);
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA - SISTEMA DE REMESAS TRANSWORLD");
console.log("===========================");