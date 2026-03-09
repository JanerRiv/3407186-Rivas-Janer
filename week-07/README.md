# Semana 07 — Funciones

> **Etapa 0: Fundamentos de Programación** | Semanas 1–10

Las funciones son la unidad fundamental de organización en JavaScript. Esta semana aprendemos a crear bloques de código reutilizables, pasar información a través de parámetros y devolver resultados. Pasamos de escribir código lineal a escribir código modular y organizado.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

1. Declarar y llamar funciones usando la palabra clave `function`
2. Usar `return` para devolver valores desde una función
3. Escribir arrow functions `=>` — la sintaxis moderna preferida en ES2023
4. Aplicar parámetros por defecto para valores opcionales
5. Entender y usar funciones como valores (callbacks básicos)
6. Diferenciar scope local y global, y entender funciones puras

---

## 📚 Requisitos Previos

- ✅ Semana 01: `console.log()`, tipos primitivos
- ✅ Semana 02: `const`/`let`, variables
- ✅ Semana 03: Operadores y expresiones
- ✅ Semana 04: Strings y template literals
- ✅ Semana 05: Condicionales (`if/else`, ternario)
- ✅ Semana 06: Bucles (`for`, `while`, `for...of`)

---

## 🗂️ Estructura de la Semana

```
week-07/
├── README.md                          ← Este archivo
├── rubrica-evaluacion.md              ← Criterios de evaluación
├── 0-assets/                          ← Diagramas SVG
│   ├── 01-declaracion-funciones.svg
│   ├── 02-arrow-functions.svg
│   ├── 03-parametros-avanzados.svg
│   ├── 04-callbacks.svg
│   └── 05-scope-funciones-puras.svg
├── 1-teoria/                          ← Material teórico
│   ├── 01-declaracion-funciones.md
│   ├── 02-arrow-functions.md
│   ├── 03-parametros-avanzados.md
│   ├── 04-funciones-como-valores-callbacks.md
│   └── 05-scope-funciones-puras.md
├── 2-practicas/                       ← Ejercicios guiados
│   ├── README.md
│   ├── ejercicio-01-declaracion/
│   ├── ejercicio-02-arrow-functions/
│   ├── ejercicio-03-parametros/
│   ├── ejercicio-04-callbacks/
│   └── ejercicio-05-scope-puras/
├── 3-proyecto/                        ← Entregable obligatorio
│   ├── README.md
│   └── starter/
│       └── script.js
├── 4-recursos/
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
    └── README.md
```

---

## 📝 Contenidos

### Teoría

| #   | Archivo                                                                                   | Tema                                 | Tiempo |
| --- | ----------------------------------------------------------------------------------------- | ------------------------------------ | ------ |
| 01  | [01-declaracion-funciones.md](1-teoria/01-declaracion-funciones.md)                       | Declaración, parámetros y return     | 30 min |
| 02  | [02-arrow-functions.md](1-teoria/02-arrow-functions.md)                                   | Arrow functions `=>`                 | 25 min |
| 03  | [03-parametros-avanzados.md](1-teoria/03-parametros-avanzados.md)                         | Parámetros por defecto               | 20 min |
| 04  | [04-funciones-como-valores-callbacks.md](1-teoria/04-funciones-como-valores-callbacks.md) | Funciones como valores y callbacks   | 25 min |
| 05  | [05-scope-funciones-puras.md](1-teoria/05-scope-funciones-puras.md)                       | Scope local/global y funciones puras | 20 min |

### Prácticas

| #   | Ejercicio                                                                 | Concepto                           | Tiempo |
| --- | ------------------------------------------------------------------------- | ---------------------------------- | ------ |
| 01  | [ejercicio-01-declaracion](2-practicas/ejercicio-01-declaracion/)         | Declarar y llamar funciones        | 35 min |
| 02  | [ejercicio-02-arrow-functions](2-practicas/ejercicio-02-arrow-functions/) | Arrow functions y return implícito | 35 min |
| 03  | [ejercicio-03-parametros](2-practicas/ejercicio-03-parametros/)           | Parámetros por defecto             | 35 min |
| 04  | [ejercicio-04-callbacks](2-practicas/ejercicio-04-callbacks/)             | Funciones como valores / callbacks | 40 min |
| 05  | [ejercicio-05-scope-puras](2-practicas/ejercicio-05-scope-puras/)         | Scope y funciones puras            | 35 min |

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad    | Tiempo | Descripción                                         |
| ------------ | ------ | --------------------------------------------------- |
| 📖 Teoría    | 2.5h   | Lectura de los 5 archivos teóricos + SVGs           |
| 💻 Prácticas | 3h     | 5 ejercicios guiados (~35 min c/u)                  |
| 🏗️ Proyecto  | 2h     | `utilidades.js` — librería de funciones del dominio |
| 📚 Recursos  | 0.5h   | Videos y documentación complementaria               |

### Calendario sugerido

| Día           | Actividad                       |
| ------------- | ------------------------------- |
| **Lunes**     | Teoría 01–02 + Ejercicios 01–02 |
| **Miércoles** | Teoría 03–05 + Ejercicios 03–05 |
| **Viernes**   | Proyecto + revisión             |

---

## 📌 Entregables

> **🎯 ÚNICO ENTREGABLE OBLIGATORIO**: El proyecto de la semana.

- **Archivo**: `3-proyecto/starter/script.js` (completado con tu dominio asignado)
- **Requisito**: Debe ejecutarse con `node script.js` sin errores
- **Criterio clave**: Todas las funciones declaradas, llamadas y con `return`

Consulta [rubrica-evaluacion.md](rubrica-evaluacion.md) para los criterios detallados.

---

## 🔗 Navegación

| Anterior                                    | Siguiente                                   |
| ------------------------------------------- | ------------------------------------------- |
| [← Semana 06: Bucles](../week-06/README.md) | [Semana 08: Arrays →](../week-08/README.md) |
