// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Remesas Internacionales
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Definir lista de elementos (arreglo de objetos con name, category y value)

const items = [
  { name: "Remesa USA - Juan", category: "familiar", value: 500 },
  { name: "Remesa España - Empresa", category: "negocio", value: 1200 },
  { name: "Remesa Chile - Ana", category: "personal", value: 300 },
  { name: "Remesa Canadá - Carlos", category: "familiar", value: 700 },
  { name: "Remesa México - Tienda", category: "negocio", value: 950 },
  { name: "Remesa Perú - Luis", category: "personal", value: 400 }
];

// TODO: Definir categorías disponibles
const categories = ["familiar", "negocio", "personal"];

// TODO: Etiqueta para mostrar valores
const valueLabel = "monto USD";


// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================

// TODO: Recorrer todos los elementos usando for...of

console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0; // contador de líneas

for (const item of items) {
  lineNumber++; // incrementa contador
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");


// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================

// TODO: Contar cuántos elementos hay por cada categoría

console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0; // contador por categoría

  for (const item of items) {
    if (item.category === category) count++; // comparación estricta
  }

  console.log(`${category}: ${count} remesa(s)`);
}

console.log("");


// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================

// TODO: Calcular total y promedio de valores

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0; // acumulador

for (const item of items) {
  totalValue += item.value; // suma progresiva
}

// operador ternario para evitar división por 0
const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`); // toFixed limita decimales

console.log("");


// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

// TODO: Encontrar el elemento con mayor y menor valor

console.log("=== MÁXIMO Y MÍNIMO ===");

// ?? asigna valor si es null o undefined
let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {

    if (item.value > maxItem.value) {
      maxItem = item; // nuevo máximo
    }

    if (item.value < minItem.value) {
      minItem = item; // nuevo mínimo
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem.name} (${maxItem.value})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} (${minItem.value})`);
}

console.log("");


// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================

// TODO: Usar for tradicional con índice

console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i]; // acceso por índice

  // TODO: Comparar con el promedio usando ternario
  const comparison = item.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");
