# 📖 Glosario — Semana 10: Proyecto Integrador Etapa 0

Términos clave relacionados con el proceso de **diseño e integración** de una
aplicación JavaScript de consola.

---

## A

### App de consola

Programa que recibe entrada y muestra salida únicamente a través de la terminal
(no tiene interfaz gráfica). En este bootcamp, todas las apps de Etapa 0 son de
consola. El navegador y el DOM se trabajan en Etapa 1.

```javascript
// App de consola — comunicación solo por console.log
console.log("Resultado:", calcularTotal(items));
```

### Arquitectura por capas

Organización del código en grupos según su responsabilidad:

1. **Datos** — array de objetos y constantes
2. **Lógica (funciones)** — CRUD, análisis, display
3. **Ejecución** — llamadas a las funciones en orden

---

## C

### Clean code

Código que es fácil de leer, entender y mantener. Principios básicos en Etapa 0:

- Nombres descriptivos (`calculateStats`, no `cs`)
- Funciones pequeñas con una sola responsabilidad
- Comentarios que explican el _por qué_, no el _qué_
- Sin código repetido (DRY)

### CRUD

Acrónimo de las 4 operaciones básicas sobre datos:

- **C**reate → `addItem()`
- **R**ead → `findById()`, `getActive()`
- **U**pdate → `updateItem()` (con spread para inmutabilidad)
- **D**elete → `removeItem()` con `.filter()`

---

## D

### Design first, code second

Principio que indica que **antes de escribir código** hay que diseñar la solución:
modelo de datos → funciones necesarias → pseudocódigo → estructura del archivo.
Evita refactorizaciones costosas por falta de planificación.

### DRY (Don't Repeat Yourself)

No duplicar lógica. Si el mismo código aparece dos veces, extraerlo en una función.

```javascript
// ❌ DRY violado
console.log(`${items[0].name}: ${items[0].price * 1.19}`);
console.log(`${items[1].name}: ${items[1].price * 1.19}`);

// ✅ DRY respetado
const withTax = (item) => ({ ...item, total: item.price * 1.19 });
items.forEach((item) => console.log(`${item.name}: ${withTax(item).total}`));
```

---

## F

### Función pura

Función que:

1. Para los mismos argumentos, siempre retorna el mismo resultado
2. No modifica variables externas ni hace operaciones con efectos secundarios

```javascript
// ✓ Función pura — solo depende de sus parámetros
const calculateTax = (price, rate) => +(price * rate).toFixed(2);
```

---

## I

### Inmutabilidad

No modificar los datos originales — crear copias con los cambios aplicados.
En Etapa 0 se logra con **spread operator** en objetos y `.map()` en arrays.

```javascript
// ✓ Actualización inmutable
const updated = { ...original, price: 999 };
// original no fue tocado
```

### Integración

Combinar conceptos de distintas semanas en un solo programa coherente.
El proyecto de semana 10 demuestra integración de todas las semanas 01–09.

---

## M

### Modelo de datos

Definición de la **estructura de los objetos** de tu dominio: qué propiedades tienen,
qué tipo es cada una, y cuáles son opcionales.

```
// Modelo: Lectura meteorológica
// id:          number    (requerido)
// city:        string    (requerido)
// temperature: number    (requerido)
// notes:       string    (opcional)
```

---

## P

### Pseudocódigo

Descripción de la lógica de un programa en lenguaje natural (no código).
Permite pensar el algoritmo sin preocuparse por la sintaxis.

```
buildReport():
  1. Imprimir cabecera con nombre del dominio
  2. Para cada item: imprimir formatItem(item)
  3. Imprimir estadísticas de calculateStats("price")
  4. Imprimir pie con conteo total
```

---

## R

### Refactorización

Reorganizar o reescribir código existente para mejorar su estructura sin cambiar
su comportamiento. Identificar si hay código repetido o funciones demasiado largas.

### Responsabilidad única (SRP)

Cada función debe hacer **una sola cosa** y hacerla bien.

```javascript
// ✓ Una responsabilidad
const formatItem = (item) => `[${item.id}] ${item.name}`;
const buildReport = () => items.forEach((i) => console.log(formatItem(i)));
```

---

## S

### Separación de responsabilidades (SoC)

Los datos, la lógica y la visualización deben estar en secciones separadas del código.
Facilita encontrar errores y modificar partes sin romper otras.

---

## T

### TODOs

Comentarios marcados con `// TODO:` que indican trabajo pendiente de implementar.
El `starter/app.js` de cada proyecto tiene TODOs que el aprendiz debe completar.
