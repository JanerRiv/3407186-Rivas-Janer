// ============================================
// EJERCICIO 04: Nomenclatura — SOLUCIÓN
// Semana 02 — Variables y tipos de datos
// ============================================

// ============================================
// PASO 1: camelCase para variables y funciones
// ============================================
console.log("--- Paso 1: camelCase ---");

const firstName = "María";
const productPrice = 49.99;
const maxRetryCount = 3;
const userEmailAddress = "maria@example.com";

console.log("Nombre:", firstName);
console.log("Precio:", productPrice);
console.log("Máximo de intentos:", maxRetryCount);
console.log("Email:", userEmailAddress);

console.log("");

// ============================================
// PASO 2: UPPER_SNAKE_CASE para constantes globales
// ============================================
console.log("--- Paso 2: UPPER_SNAKE_CASE ---");

const MAX_ITEMS_PER_PAGE = 20;
const DEFAULT_LANGUAGE = "es";
const MIN_PASSWORD_LENGTH = 8;

console.log("Ítems por página:", MAX_ITEMS_PER_PAGE);
console.log("Idioma por defecto:", DEFAULT_LANGUAGE);
console.log("Longitud mínima de contraseña:", MIN_PASSWORD_LENGTH);

console.log("");

// ============================================
// PASO 3: Prefijos semánticos para booleanos
// ============================================
console.log("--- Paso 3: is / has / can / should ---");

const isActive = true;
const hasDiscount = false;
const canEditProfile = true;
const shouldShowWarning = false;

console.log("¿Activo?", isActive);
console.log("¿Tiene descuento?", hasDiscount);
console.log("¿Puede editar perfil?", canEditProfile);
console.log("¿Mostrar advertencia?", shouldShowWarning);

console.log("");

// ============================================
// PASO 4: Nombres descriptivos
// ============================================
console.log("--- Paso 4: nombres descriptivos ---");

const SECONDS_PER_DAY = 86400;
const registrationDate = "2025-01-15";
const pendingOrders = [];
const isFirstName = true;

console.log("Segundos por día:", SECONDS_PER_DAY);
console.log("Fecha de registro:", registrationDate);

console.log("");

// ============================================
// PASO 5: Nombres corregidos
// ============================================
console.log("--- Paso 5: nombres corregidos ---");

const userName = "Juan";           // ← era user_name
const productStock = 50;           // ← era ProductStock
const hasSubscription = false;     // ← era HASSUBSCRIPTION
const MAX_SPEED = 120;             // ← era max_speed (constante de config)

console.log("Usuario:", userName);
console.log("Stock:", productStock);
console.log("¿Tiene suscripción?", hasSubscription);
console.log("Velocidad máxima:", MAX_SPEED);

console.log("");
