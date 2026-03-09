// ============================================
// EJERCICIO 02: Integración — Etapa 0 Completa
// SOLUCIÓN COMPLETA
// Dominio de referencia: Mini Catálogo de Productos
// ============================================

// ============================================
// SECCIÓN 1: Datos y Configuración (Semanas 01–02)
// ============================================
console.log("=== Sección 1: Datos ===");

// const/let · tipos primitivos · separadores numéricos (ES2021)
const DOMAIN_NAME = "Mini Catálogo";
const MAX_ITEMS = 1_000;

// Array de objetos — estructura base de toda app de consola
const items = [
  { id: 1, name: "Laptop", price: 1200, available: true, category: "tech" },
  { id: 2, name: "Mouse", price: 35, available: true, category: "tech", discount: 10 },
  { id: 3, name: "Silla", price: 280, available: false, category: "furniture" },
];

console.log(`Dominio: ${DOMAIN_NAME}  | Límite: ${MAX_ITEMS}`);
console.log(`Items cargados: ${items.length}`);

console.log("");

// ============================================
// SECCIÓN 2: Strings y Template Literals (Semanas 03–04)
// ============================================
console.log("=== Sección 2: Strings ===");

// template literals · .padEnd() · operadores aritméticos
const formatLine = (item) =>
  `  [${item.id}] ${item.name.padEnd(18)} $${item.price}`;

console.log("Listado:");
items.forEach((item) => console.log(formatLine(item)));

console.log("");

// ============================================
// SECCIÓN 3: Funciones + Condicionales (Semanas 05–07)
// ============================================
console.log("=== Sección 3: Funciones y Condicionales ===");

// arrow functions · if ternario · ?? nullish coalescing · ?. optional chaining
const getStatus = (item) => (item.available ? "disponible" : "agotado");

// ?? retorna el lado derecho solo si el izquierdo es null o undefined
const getDiscount = (item) => item.discount ?? 0;

items.forEach((item) => {
  const status = getStatus(item);
  const disc = getDiscount(item);
  console.log(
    `${item.name.padEnd(7)} → ${status.padEnd(11)} (descuento: ${disc}%)`
  );
});

console.log("");

// ============================================
// SECCIÓN 4: Arrays + Bucles (Semanas 06–08)
// ============================================
console.log("=== Sección 4: Arrays y Bucles ===");

// filter · map · find · sort · forEach · for...of
const available = items.filter((i) => i.available);
const names = available.map((i) => i.name);
console.log(`Disponibles (${available.length}): ${names.join(", ")}`);

// map con objeto → retornar objeto literal desde arrow: i => ({ ...i, ... })
const withTax = items.map((i) => ({
  ...i,
  total: +(i.price * 1.19).toFixed(2),
}));
console.log("Con IVA (19%):");
withTax.forEach((i) => {
  console.log(`  ${i.name.padEnd(8)} → $${i.total.toFixed(2)}`);
});

// find devuelve el PRIMER elemento que cumple la condición
const found = items.find((i) => i.id === 2);
console.log(`Encontrado id=2: ${found?.name}`);

// [...items].sort() — copiar antes de ordenar para no mutar el original
const sorted = [...items].sort((a, b) => a.price - b.price);
console.log("Por precio ascendente:", sorted.map((i) => i.name).join(" < "));

console.log("");

// ============================================
// SECCIÓN 5: Objects + Object.* + Spread (Semana 09)
// ============================================
console.log("=== Sección 5: Object.* y Spread ===");

// Object.keys · Object.values · Object.entries · Object.hasOwn · for...in · spread
const laptop = items[0];

// Object.keys — array de claves
console.log(`Propiedades de Laptop: ${Object.keys(laptop).join(", ")}`);

// Object.values — solo valores numéricos usando filter
const numericValues = Object.values(laptop).filter(
  (v) => typeof v === "number"
);
console.log(`Valores numéricos: ${numericValues.join(", ")}`);

// Object.entries — formatear propiedades
console.log("Detalle con entries:");
Object.entries(laptop).forEach(([key, value]) => {
  console.log(`  ${key.padEnd(10)}: ${value}`);
});

// Spread — actualización inmutable (no muta el original)
const discountedLaptop = { ...laptop, price: 999 };
console.log(
  `Laptop actualizado (precio 999): original sigue en ${laptop.price}`
);

// Object.hasOwn — verificar propiedad opcional (ES2022)
const mouse = items[1];
console.log(`'discount' en Mouse: ${Object.hasOwn(mouse, "discount")}`);
console.log(`'discount' en Silla: ${Object.hasOwn(items[2], "discount")}`);

// for...in con hasOwn para iterar solo propiedades propias
console.log("for...in en Mouse:");
for (const key in mouse) {
  if (Object.hasOwn(mouse, key)) {
    console.log(`  ${key}: ${mouse[key]}`);
  }
}
