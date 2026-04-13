// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Remesas Internacionales
// ============================================

"use strict"; // activa el modo estricto — ayuda a evitar errores y obliga a escribir código más seguro

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
const DOMAIN_NAME = "TransWorld Remesas"; // constante que guarda el nombre del sistema
const VALUE_LABEL = "monto USD"; // etiqueta para mostrar los valores (dinero)

// TODO: Define un array con al menos 5 elementos de tu dominio.
const items = [
  { id: 1, name: "Remesa USA - Juan", category: "familiar", value: 500, active: true }, // objeto con datos de una remesa
  { id: 2, name: "Remesa España - Empresa", category: "negocio", value: 1200, active: true },
  { id: 3, name: "Remesa Chile - Ana", category: "personal", value: 300, active: false },
  { id: 4, name: "Remesa Canadá - Carlos", category: "familiar", value: 700, active: true },
  { id: 5, name: "Remesa México - Tienda", category: "negocio", value: 950, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (item) => { // función flecha que recibe un objeto "item"
  return `${item.name} [${item.category}] — USD ${item.value}`; 
  // retorna un texto formateado usando template literals
  // muestra nombre, categoría y valor
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateValue = (baseValue, factor = 0.95) => { 
  // función pura: siempre da el mismo resultado con los mismos datos
  // baseValue = monto original
  // factor = porcentaje aplicado (0.95 = 95%, es decir, 5% de comisión)
  
  return +(baseValue * factor).toFixed(2); 
  // multiplica el valor por el factor (aplica comisión)
  // toFixed(2) deja solo 2 decimales
  // el + convierte el resultado a número (porque toFixed devuelve string)
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (item) => { 
  return item.active === true; 
  // verifica si la remesa está activa
  // === compara valor y tipo (más seguro que ==)
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = "USD") => { 
  // función con valores por defecto
  // si no se envían label o currency, usa los definidos
  
  return `${label}: ${currency} ${value}`; 
  // devuelve un texto con formato: etiqueta + moneda + valor
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`); 
// imprime una línea decorativa repitiendo el símbolo ═

console.log(`   REPORTE — ${DOMAIN_NAME}`); 
// muestra el título del reporte

console.log(`${"═".repeat(45)}`); 
// otra línea decorativa

if (items.length === 0) { 
  // condicional: si no hay elementos en el array
  console.log("\nNo hay elementos. Agrega datos en la Sección 1.");
} else {
  // si hay datos, ejecuta el reporte

  // --- Listado ---
  console.log("\nListado:");
  let lineNumber = 1; // contador para numerar las remesas

  for (const item of items) { 
    // recorre cada objeto del array
    console.log(`  ${lineNumber}. ${formatItem(item)}`); 
    // muestra cada remesa usando la función de formato
    lineNumber++; 
    // incrementa el contador (por eso numeración 1, 2, 3...)
  }

  // --- Validación ---
  let validCount = 0; 
  // contador de remesas activas

  for (const item of items) { 
    if (isValid(item)) { 
      // usa la función isValid para verificar
      validCount++; 
      // suma si es válida
    }
  }

  console.log(`\nElementos válidos: ${validCount} / ${items.length}`); 
  // muestra cuántas remesas están activas vs total

  // --- Cálculo ---
  let totalValue = 0; 
  // acumulador para sumar valores

  for (const item of items) { 
    totalValue += calculateValue(item.value ?? 0); 
    // suma cada valor aplicando la función calculateValue
    // ?? 0 asegura que si value es null o undefined use 0
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`)); 
  // muestra el total usando la función con formato
}

console.log(`\n${"═".repeat(45)}\n`); 
// línea final decorativa
