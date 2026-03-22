// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Remesas Internacionales
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Remesa desde USA";
const elementStatus = "active"; // pagada
const elementValue = 850; // monto en USD
const elementType = "family";
const elementInfo = {
  detail: "Envío mensual a familiares",
  country: "Estados Unidos"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 1000) {
  classification = "Remesa de alto valor";
} else if (elementValue >= 300) {
  classification = "Remesa de valor medio";
} else {
  classification = "Remesa de bajo valor";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Pagada" : "Pendiente";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "family":
    typeLabel = "Familiar";
    break;
  case "business":
    typeLabel = "Negocio";
    break;
  case "personal":
    typeLabel = "Personal";
    break;
  default:
    typeLabel = "Otro tipo";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.country ?? "País no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`País: ${safeProperty}`);

console.log("=".repeat(40));