// ============================================
// EJERCICIO 01: Crear y Acceder a Objetos
// ============================================

// ============================================
// SECCIÓN 1: Crear un Objeto Literal
// ============================================
console.log("=== Sección 1: Crear Objetos ===");

// Un objeto agrupa propiedades relacionadas
// Cada propiedad es un par clave: valor

// Descomenta las siguientes líneas:
// const book = {
//   title: "JavaScript: The Good Parts",
//   author: "Douglas Crockford",
//   year: 2008,
//   pages: 172,
//   available: true,
// };
//
// // Acceso con notación de punto
// console.log("Título:", book.title);
// console.log("Autor:", book.author);
// console.log("Año:", book.year);
// console.log("Disponible:", book.available);

console.log("");

// ============================================
// SECCIÓN 2: Notación de Corchetes y Acceso Dinámico
// ============================================
console.log("=== Sección 2: Notación de Corchetes ===");

// Los corchetes permiten claves dinámicas o con caracteres especiales

// Descomenta las siguientes líneas:
// const item = {
//   id: 42,
//   name: "Monitor 4K",
//   "screen-size": 27,       // clave con guion — solo accesible con corchetes
//   "resolution px": "3840x2160", // clave con espacio
// };
//
// // Acceso estático con corchetes
// console.log(item["name"]);       // igual que item.name
// console.log(item["screen-size"]); // 27
//
// // Acceso dinámico: la clave viene de una variable
// const fields = ["id", "name", "screen-size"];
// fields.forEach((field) => {
//   console.log(`  ${field}: ${item[field]}`);
// });

console.log("");

// ============================================
// SECCIÓN 3: Modificar, Agregar y Eliminar
// ============================================
console.log("=== Sección 3: Modificar Propiedades ===");

// const no impide modificar propiedades — solo impide reasignar la variable

// Descomenta las siguientes líneas:
// const user = {
//   name: "Ana",
//   age: 28,
//   active: true,
// };
//
// console.log("Antes:", user);
//
// // Modificar propiedad existente
// user.age = 29;
//
// // Agregar propiedad nueva
// user.city = "Madrid";
//
// // Eliminar propiedad
// delete user.active;
//
// console.log("Después:", user);
// console.log("Age:", user.age);
// console.log("Active:", user.active); // undefined — ya no existe

console.log("");

// ============================================
// SECCIÓN 4: Objetos Anidados y Optional Chaining
// ============================================
console.log("=== Sección 4: Objetos Anidados ===");

// Un objeto puede contener otros objetos como valores

// Descomenta las siguientes líneas:
// const employee = {
//   name: "Carlos",
//   role: "Developer",
//   department: {
//     name: "Engineering",
//     floor: 3,
//   },
// };
//
// // Acceso anidado con punto
// console.log("Nombre:", employee.name);
// console.log("Departamento:", employee.department.name);
// console.log("Piso:", employee.department.floor);
//
// // Optional chaining — sin error aunque no exista la propiedad
// console.log("Ciudad:", employee?.address?.city); // undefined (sin error)
//
// // Sin optional chaining causaría error:
// // console.log(employee.address.city); // TypeError!
