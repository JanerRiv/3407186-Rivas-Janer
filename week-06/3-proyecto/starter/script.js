// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Remesas Internacionales
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Definir lista de elementos (arreglo de objetos con name, category y value)

// Array de objetos: cada objeto representa una remesa
const items = [
  { name: "Remesa USA - Juan", category: "familiar", value: 500 },
  { name: "Remesa España - Empresa", category: "negocio", value: 1200 },
  { name: "Remesa Chile - Ana", category: "personal", value: 300 },
  { name: "Remesa Canadá - Carlos", category: "familiar", value: 700 },
  { name: "Remesa México - Tienda", category: "negocio", value: 950 },
  { name: "Remesa Perú - Luis", category: "personal", value: 400 }
];

// TODO: Definir categorías disponibles
// Array con los tipos de remesas posibles
const categories = ["familiar", "negocio", "personal"];

// TODO: Etiqueta para mostrar valores
// Texto que se usará al imprimir los montos
const valueLabel = "monto USD";


// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================

// TODO: Recorrer todos los elementos usando for...of

console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0; // contador de líneas (numeración del listado)

// for...of recorre cada elemento del array items
for (const item of items) {
  lineNumber++; // incrementa el contador en 1 (1, 2, 3...)
  
  // Muestra cada remesa con su información
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log(""); // espacio en consola


// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================

// TODO: Contar cuántos elementos hay por cada categoría

console.log("=== CONTEO POR CATEGORÍA ===");

// Recorre cada categoría (familiar, negocio, personal)
for (const category of categories) {
  let count = 0; // contador para cada categoría

  // Recorre todas las remesas
  for (const item of items) {
    // Si la categoría coincide, aumenta el contador
    if (item.category === category) count++; // === comparación estricta
  }

  // Muestra cuántas remesas hay por categoría
  console.log(`${category}: ${count} remesa(s)`);
}

console.log("");


// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================

// TODO: Calcular total y promedio de valores

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0; // acumulador para sumar todos los valores

// Recorre todas las remesas
for (const item of items) {
  totalValue += item.value; // suma progresiva (acumulando valores)
}

// operador ternario para evitar división por 0
// Si hay elementos, calcula promedio; si no, deja 0
const averageValue = items.length > 0 ? totalValue / items.length : 0;

// Muestra total y promedio
console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`); // toFixed limita decimales

console.log("");


// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

// TODO: Encontrar el elemento con mayor y menor valor

console.log("=== MÁXIMO Y MÍNIMO ===");

// ?? asigna valor si es null o undefined
// Toma el primer elemento como referencia inicial
let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

// Verifica que el array no esté vacío
if (items.length > 0) {

  // Recorre todas las remesas
  for (const item of items) {

    // Si encuentra un valor mayor, lo guarda
    if (item.value > maxItem.value) {
      maxItem = item; // nuevo máximo
    }

    // Si encuentra un valor menor, lo guarda
    if (item.value < minItem.value) {
      minItem = item; // nuevo mínimo
    }
  }

  // Muestra el mayor y menor valor
  console.log(`Mayor ${valueLabel}: ${maxItem.name} (${maxItem.value})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} (${minItem.value})`);
}

console.log("");


// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================

// TODO: Usar for tradicional con índice

console.log("=== REPORTE DETALLADO ===");

// for clásico: usa índice i
for (let i = 0; i < items.length; i++) {
  const item = items[i]; // acceso al elemento por posición

  // TODO: Comparar con el promedio usando ternario
  // Si el valor es mayor o igual al promedio → "sobre el promedio"
  // Si no → "bajo el promedio"
  const comparison = item.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  // Muestra el resultado con numeración (i + 1)
  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");
