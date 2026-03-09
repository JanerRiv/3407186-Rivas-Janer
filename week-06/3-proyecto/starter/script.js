// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: [tu dominio asignado]
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Cada objeto representa un elemento de tu dominio.
// Adapta las propiedades según tu contexto.
//
// NOTA PARA EL APRENDIZ:
// Ejemplos de adaptación:
//   Biblioteca  → { name: "El Principito", category: "ficción", value: 96 }
//   Farmacia    → { name: "Ibuprofeno", category: "analgésico", value: 150 }
//   Gimnasio    → { name: "Bicicleta", category: "cardio", value: 6.5 }
//   Restaurante → { name: "Ensalada César", category: "entrada", value: 8.5 }

// TODO: Define al menos 6 elementos de tu dominio
// Reemplaza el nombre de la constante por algo representativo:
// (ej: books, medicines, machines, dishes, patients...)
const items = [
  // TODO: Agrega tus elementos aquí
  // { name: "nombre del elemento", category: "categoría", value: 0 }
];

// TODO: Define las categorías relevantes para tu dominio
// (ej: para Biblioteca sería ["ficción", "no-ficción", "ciencia"])
const categories = [
  // TODO: lista tus categorías
];

// TODO: Define un nombre descriptivo para el valor numérico
// (ej: "páginas", "stock", "horas de uso", "precio", "duración")
const valueLabel = "valor"; // ← cambiar

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

// TODO: Usa for...of para imprimir cada elemento
// Formato sugerido: "1. [nombre] — [categoría] — [valueLabel]: [value]"
// Pista: usa una variable externa para el contador de número de línea
let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  // TODO: Reemplaza este console.log con la información de tu dominio
  console.log(`${lineNumber}. ${item.name}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

// TODO: Para cada categoría, cuenta cuántos elementos tiene
// Pista: usa un for...of exterior (categorías) con un contador
//        y un for...of interior (items) para contar

for (const category of categories) {
  let count = 0;

  // TODO: Completa el bucle para contar items de esta categoría
  // for (const item of items) {
  //   if (item.category === category) count++;
  // }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

// TODO: Inicializa el acumulador correctamente
let totalValue = 0;

for (const item of items) {
  // TODO: Acumula el valor de cada elemento
  // totalValue += item.value;
}

// TODO: Calcula el promedio
const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

// TODO: Variables para el máximo y mínimo
// Pista: inicializa con items[0] si el array no está vacío
let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  // TODO: Recorre con for...of y compara values para encontrar max y min
  for (const item of items) {
    // TODO: Comparar y actualizar maxItem y minItem
  }

  // TODO: Imprime los resultados
  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

// TODO: Usa for clásico para generar el reporte
// Indica si cada elemento está sobre o bajo el promedio
for (let i = 0; i < items.length; i++) {
  const item = items[i];

  // TODO: Determina si el item está sobre o bajo el promedio
  // Pista: usa el operador ternario o if/else
  const comparison = ""; // TODO: "sobre el promedio" o "bajo el promedio"

  // TODO: Imprime la línea del reporte
  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");
