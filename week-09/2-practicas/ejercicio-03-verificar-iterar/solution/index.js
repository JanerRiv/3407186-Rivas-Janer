// ============================================
// EJERCICIO 03: Verificar e Iterar Propiedades
// SOLUCIÓN COMPLETA
// ============================================

// ============================================
// SECCIÓN 1: Object.hasOwn() — Verificación
// ============================================
console.log("=== Sección 1: Object.hasOwn() ===");

const profile = {
  name: "Lucía Ramos",
  email: "lucia@mail.com",
  active: true,
};

console.log(`¿Tiene 'name'? ${Object.hasOwn(profile, "name")}`);
console.log(`¿Tiene 'phone'? ${Object.hasOwn(profile, "phone")}`);
console.log(`¿Tiene 'active'? ${Object.hasOwn(profile, "active")}`);

// Contar campos usando hasOwn
const fieldNames = ["name", "email", "active", "age", "phone"];
const existing = fieldNames.filter((field) => Object.hasOwn(profile, field));
console.log(`Campos del perfil: ${existing.length}`);
existing.forEach((f) => console.log(`  - ${f}`));

console.log("");

// ============================================
// SECCIÓN 2: Operador 'in' — Herencia incluida
// ============================================
console.log("=== Sección 2: Operador 'in' ===");

const settings = {
  theme: "dark",
  language: "es",
  notifications: true,
};

console.log(`¿Tiene 'theme'? ${"theme" in settings}`);
console.log(`¿Tiene 'fontSize'? ${"fontSize" in settings}`);

// toString viene heredado de Object.prototype, no es propiedad propia
console.log(`'toString' in settings: ${"toString" in settings}`);
console.log(
  `Object.hasOwn para 'toString': ${Object.hasOwn(settings, "toString")}`
);

console.log("");

// ============================================
// SECCIÓN 3: for...in — Iterar Propiedades
// ============================================
console.log("=== Sección 3: for...in ===");

const product = {
  name: "Teclado Mecánico",
  price: 89,
  stock: 25,
  category: "tech",
};

console.log("Propiedades de product:");
for (const key in product) {
  if (Object.hasOwn(product, key)) {
    console.log(`  ${key.padEnd(12)}: ${product[key]}`);
  }
}

console.log("");

// ============================================
// SECCIÓN 4: Propiedades Opcionales
// ============================================
console.log("=== Sección 4: Propiedades opcionales ===");

const printItem = (item) => {
  console.log(`Nombre: ${item.name}`);
  console.log(`Precio: ${item.price}`);

  if (Object.hasOwn(item, "discount")) {
    console.log(`  Descuento: ${item.discount}%`);
  }

  if (Object.hasOwn(item, "notes")) {
    console.log(`  Notas: ${item.notes}`);
  }
};

const basicItem = { name: "Monitor Básico", price: 180 };
const extraItem = {
  name: "Monitor Pro",
  price: 350,
  discount: 10,
  notes: "Últimas 3 unidades",
};

console.log("--- Artículo básico ---");
printItem(basicItem);
console.log("\n--- Artículo con extras ---");
printItem(extraItem);
