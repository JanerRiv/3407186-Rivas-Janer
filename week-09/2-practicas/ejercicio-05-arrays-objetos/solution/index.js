// ============================================
// EJERCICIO 05: Arrays de Objetos
// SOLUCIÓN COMPLETA
// ============================================

// Datos de ejemplo
const items = [
  { id: 1, name: "Laptop", price: 1200, available: true, category: "tech" },
  { id: 2, name: "Mouse", price: 35, available: true, category: "tech" },
  { id: 3, name: "Teclado", price: 89, available: false, category: "tech" },
  { id: 4, name: "Silla", price: 280, available: false, category: "furniture" },
  { id: 5, name: "Monitor", price: 450, available: true, category: "tech" },
];

// ============================================
// SECCIÓN 1: Acceder a Objetos en Array
// ============================================
console.log("=== Sección 1: Acceder a Objetos en Array ===");

console.log(`Primer elemento: ${items[0].name}`);
console.log(`Precio del tercero: ${items[2].price}`);
console.log("---");

items.forEach((item) => {
  console.log(`${item.id}. ${item.name} ($${item.price}) — ${item.category}`);
});

console.log("");

// ============================================
// SECCIÓN 2: filter() y find() sobre Objetos
// ============================================
console.log("=== Sección 2: filter() y find() ===");

const available = items.filter((item) => item.available);
console.log(`Disponibles (${available.length}):`);
available.forEach((i) => console.log(`  - ${i.name} $${i.price}`));

const expensive = items.filter((item) => item.price > 200);
console.log(`Precio > $200 (${expensive.length}):`);
expensive.forEach((i) => console.log(`  - ${i.name} $${i.price}`));

const found = items.find((item) => item.id === 3);
console.log(`Buscar id=3: ${found?.name}`);

const notFound = items.find((item) => item.id === 99);
console.log(`Buscar id=99: ${notFound}`);

console.log("");

// ============================================
// SECCIÓN 3: map() para Transformar Objetos
// ============================================
console.log("=== Sección 3: map() para transformar ===");

// Los paréntesis en ({ ...item, ... }) son obligatorios al retornar
// un objeto literal desde una arrow function sin llaves de bloque
const withTax = items.map((item) => ({
  ...item,
  priceWithTax: +(item.price * 1.19).toFixed(2),
}));

console.log("Productos con IVA (19%):");
withTax.forEach((i) => {
  console.log(
    `  ${i.name.padEnd(12)} $${i.price.toString().padEnd(5)} → $${i.priceWithTax.toFixed(2)}`
  );
});

console.log("");

// ============================================
// SECCIÓN 4: Pipeline filter + sort + map
// ============================================
console.log("=== Sección 4: Pipeline filter + sort + map ===");

// [...items] crea una copia antes de sort() para no mutar el original
const result = [...items]
  .filter((i) => i.available && i.category === "tech")
  .sort((a, b) => a.price - b.price) // precio ascendente
  .map((i) => `${i.name} ($${i.price})`);

console.log("Tech disponible, precio ascendente:");
result.forEach((line) => console.log(`  ${line}`));
