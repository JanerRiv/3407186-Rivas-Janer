// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Remesas Internacionales
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Definir variables principales del elemento (nombre, estado, valor, tipo y objeto adicional)

// Datos básicos de la remesa (variables tipo string, number y objeto)
const elementName = "Remesa desde USA"; // nombre de la remesa
const elementStatus = "active"; // estado de la remesa
const elementValue = 850; // monto en USD (number)
const elementType = "family"; // tipo de remesa

// TODO: Crear objeto con información adicional

// Objeto con información adicional
const elementInfo = {
  detail: "Envío mensual a familiares", // descripción
  country: "Estados Unidos" // país de origen
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasificar el valor en alto, medio o bajo

// Variable para guardar la clasificación
let classification;

// Condicional para clasificar según el valor de la remesa
if (elementValue >= 1000) {
  classification = "Remesa de alto valor"; // valor alto
} else if (elementValue >= 300) {
  classification = "Remesa de valor medio"; // valor medio
} else {
  classification = "Remesa de bajo valor"; // valor bajo
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usar operador ternario para definir estado

// Operador ternario para definir si está pagada o pendiente
const statusLabel = elementStatus === "active" ? "Pagada" : "Pendiente";
// === compara valor y tipo (comparación estricta)

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usar switch para clasificar el tipo

// Variable para almacenar el tipo en texto
let typeLabel;

// Switch para clasificar el tipo de remesa
switch (elementType) {
  case "family":
    typeLabel = "Familiar"; // remesa familiar
    break;
  case "business":
    typeLabel = "Negocio"; // remesa de negocio
    break;
  case "personal":
    typeLabel = "Personal"; // remesa personal
    break;
  default:
    typeLabel = "Otro tipo"; // valor por defecto
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usar ?? para valores por defecto

// Operador ?? asigna un valor si la variable es null o undefined
const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Acceder de forma segura a propiedades del objeto

// ?. evita errores si la propiedad no existe
const safeProperty = elementInfo?.country ?? "País no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Mostrar resultados usando template literals

// repeat() crea separadores visuales
console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

// template literals para mostrar información dinámica
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`País: ${safeProperty}`);

console.log("=".repeat(40));
