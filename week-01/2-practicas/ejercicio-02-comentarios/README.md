# Ejercicio 02: Comentarios

## 🎯 Objetivo

Practicar el uso de comentarios para documentar código: comentarios de una línea, multilínea e inline.

## ⏱️ Duración estimada

35 minutos

## 📋 Instrucciones

Abre `starter/index.js`. En este ejercicio el código ya está escrito pero sin comentarios. Tu tarea es añadir los comentarios en las secciones indicadas y también descomentar algunos bloques.

---

### Paso 1: Comentario de una línea

Los comentarios de una línea empiezan con `//`:

```javascript
// Este es un comentario de una línea
console.log("Hola");
```

**Abre `starter/index.js`** y descomenta la sección del Paso 1.

---

### Paso 2: Comentario multilínea

Para bloques de texto más largos:

```javascript
/*
  Este bloque describe el propósito del programa.
  Puede tener las líneas que necesite.
*/
console.log("Programa de presentación");
```

**Descomenta la sección del Paso 2.**

---

### Paso 3: Comentario inline

Un comentario al final de una línea de código explica qué hace esa instrucción:

```javascript
console.log(100 + 200); // Suma precio base más costo de envío
```

**Descomenta la sección del Paso 3.**

---

### Paso 4: Deshabilitar código con comentarios

Una técnica de debugging: "apagar" temporalmente una línea:

```javascript
console.log("Versión 1");
// console.log('Versión 2 — desactivada');
console.log("Versión 3");
```

**Descomenta la sección del Paso 4.**

---

### Paso 5: Documentar el propósito de un bloque

Antes de un grupo de instrucciones relacionadas, un comentario explica qué hace ese bloque:

```javascript
// Mostrar encabezado del reporte
console.log("================");
console.log("  REPORTE 2026  ");
console.log("================");
```

**Descomenta la sección del Paso 5.**

---

## 🏃 Cómo Ejecutar

```bash
node starter/index.js
```

## ✅ Criterios de Éxito

- [ ] El script corre sin errores
- [ ] El código tiene al menos un comentario de cada tipo
- [ ] Los comentarios están escritos en español
- [ ] Los comentarios explican el "por qué" o contexto, no solo el "qué"
