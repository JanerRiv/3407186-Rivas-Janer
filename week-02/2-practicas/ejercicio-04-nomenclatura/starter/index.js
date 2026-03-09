// ============================================
// EJERCICIO 04: Nomenclatura
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: camelCase para variables y funciones
// ============================================
console.log("--- Paso 1: camelCase ---");

// camelCase: primera palabra en minúscula, cada nueva con Mayúscula inicial
// Descomenta las siguientes líneas:
// const firstName = "María";
// const productPrice = 49.99;
// const maxRetryCount = 3;
// const userEmailAddress = "maria@example.com";

// console.log("Nombre:", firstName);
// console.log("Precio:", productPrice);
// console.log("Máximo de intentos:", maxRetryCount);
// console.log("Email:", userEmailAddress);

console.log("");

// ============================================
// PASO 2: UPPER_SNAKE_CASE para constantes globales
// ============================================
console.log("--- Paso 2: UPPER_SNAKE_CASE ---");

// Las constantes de configuración global van en MAYÚSCULAS con guiones bajos
// Descomenta las siguientes líneas:
// const MAX_ITEMS_PER_PAGE = 20;
// const DEFAULT_LANGUAGE = "es";
// const MIN_PASSWORD_LENGTH = 8;

// console.log("Ítems por página:", MAX_ITEMS_PER_PAGE);
// console.log("Idioma por defecto:", DEFAULT_LANGUAGE);
// console.log("Longitud mínima de contraseña:", MIN_PASSWORD_LENGTH);

console.log("");

// ============================================
// PASO 3: Prefijos semánticos para booleanos
// ============================================
console.log("--- Paso 3: is / has / can / should ---");

// Los prefijos comunican claramente que el valor es boolean
// Descomenta las siguientes líneas:
// const isActive = true;
// const hasDiscount = false;
// const canEditProfile = true;
// const shouldShowWarning = false;

// console.log("¿Activo?", isActive);
// console.log("¿Tiene descuento?", hasDiscount);
// console.log("¿Puede editar perfil?", canEditProfile);
// console.log("¿Mostrar advertencia?", shouldShowWarning);

console.log("");

// ============================================
// PASO 4: Nombres descriptivos
// ============================================
console.log("--- Paso 4: nombres descriptivos ---");

// Un buen nombre comunica la intención sin comentario adicional
// Descomenta las siguientes líneas:

// ❌ Confuso (no descomentar — solo observar):
// const x = 86400;
// const d = "2025-01-15";
// const arr = [];
// const fn = true;

// ✅ Descriptivo:
// const SECONDS_PER_DAY = 86400;
// const registrationDate = "2025-01-15";
// const pendingOrders = [];
// const isFirstName = true;

// console.log("Segundos por día:", SECONDS_PER_DAY);
// console.log("Fecha de registro:", registrationDate);

console.log("");

// ============================================
// PASO 5: Corregir nombres incorrectos
// ============================================
console.log("--- Paso 5: corregir nombres ---");

// Los siguientes nombres tienen convenciones incorrectas
// Corrige cada variable antes de descomentar:
//
// ❌ const user_name = "Juan";       → debe ser: userName
// ❌ const ProductStock = 50;        → debe ser: productStock (no es clase)
// ❌ const HASSUBSCRIPTION = false;  → debe ser: hasSubscription
// ❌ const max_speed = 120;          → debe ser: maxSpeed (si es config: MAX_SPEED)
//
// Descomenta con los nombres corregidos:
// const userName = "Juan";
// const productStock = 50;
// const hasSubscription = false;
// const MAX_SPEED = 120;

// console.log("Usuario:", userName);
// console.log("Stock:", productStock);
// console.log("¿Tiene suscripción?", hasSubscription);
// console.log("Velocidad máxima:", MAX_SPEED);

console.log("");
