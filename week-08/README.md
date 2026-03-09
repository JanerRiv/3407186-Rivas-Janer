# Semana 08: Arrays — Listas de Datos

> **Etapa 0 — Fundamentos de Programación** | Semana 8 de 10

Los arrays son la primera estructura de datos real de JavaScript: permiten almacenar múltiples valores en una sola variable y operar sobre colecciones completas con métodos potentes. Esta semana pasamos de trabajar con valores individuales a trabajar con **listas**.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana serás capaz de:

1. Crear arrays y acceder a sus elementos por índice (incluyendo `.at()` de ES2022)
2. Modificar arrays con los métodos de mutación: `push`, `pop`, `shift`, `unshift`, `splice`
3. Buscar y extraer información: `includes`, `indexOf`, `slice`, `find`, `findIndex`
4. Iterar arrays con `for...of`, `forEach`, `map` y `filter`
5. Usar el operador spread `...` para copiar, fusionar y expandir arrays
6. Gestionar una colección de datos de tu dominio asignado usando todas las técnicas aprendidas

---

## 📚 Requisitos Previos

Debes tener dominio de:

- ✅ Semana 06: Bucles (`for`, `while`, `for...of`, `break`, `continue`)
- ✅ Semana 07: Funciones (`function`, arrow functions `=>`, parámetros por defecto, callbacks)
- ✅ Variables `const` / `let`, template literals, operadores de comparación

---

## 🗂️ Estructura de la Semana

```
week-08/
├── README.md                          ← este archivo
├── rubrica-evaluacion.md              ← criterios de evaluación
├── 0-assets/                          ← diagramas SVG
│   ├── 01-crear-acceder-arrays.svg
│   ├── 02-metodos-mutacion.svg
│   ├── 03-metodos-busqueda.svg
│   ├── 04-iteracion-arrays.svg
│   └── 05-spread-arrays.svg
├── 1-teoria/                          ← material teórico
│   ├── 01-crear-acceder-arrays.md
│   ├── 02-metodos-mutacion.md
│   ├── 03-metodos-busqueda.md
│   ├── 04-iteracion-arrays.md
│   └── 05-spread-arrays.md
├── 2-practicas/                       ← ejercicios guiados
│   ├── README.md
│   ├── ejercicio-01-crear-acceder/
│   ├── ejercicio-02-metodos-mutacion/
│   ├── ejercicio-03-metodos-busqueda/
│   ├── ejercicio-04-iteracion/
│   └── ejercicio-05-spread/
├── 3-proyecto/                        ← entregable semanal
│   ├── README.md
│   └── starter/
│       └── script.js
├── 4-recursos/
│   ├── ebooks-free/README.md
│   ├── videografia/README.md
│   └── webgrafia/README.md
└── 5-glosario/
    └── README.md
```

---

## 📝 Contenidos

### Teoría

| Archivo                                                           | Tema                           | Conceptos clave                                     |
| ----------------------------------------------------------------- | ------------------------------ | --------------------------------------------------- |
| [01-crear-acceder-arrays.md](1-teoria/01-crear-acceder-arrays.md) | Crear y acceder arrays         | `[]`, índices, `.length`, `.at()`                   |
| [02-metodos-mutacion.md](1-teoria/02-metodos-mutacion.md)         | Métodos que modifican el array | `push`, `pop`, `shift`, `unshift`, `splice`         |
| [03-metodos-busqueda.md](1-teoria/03-metodos-busqueda.md)         | Buscar y extraer datos         | `includes`, `indexOf`, `slice`, `find`, `findIndex` |
| [04-iteracion-arrays.md](1-teoria/04-iteracion-arrays.md)         | Recorrer y transformar         | `forEach`, `map`, `filter`                          |
| [05-spread-arrays.md](1-teoria/05-spread-arrays.md)               | Operador spread con arrays     | `...`, copiar, fusionar, expandir                   |

### Prácticas

| Ejercicio                                                  | Tema                       | Duración |
| ---------------------------------------------------------- | -------------------------- | -------- |
| [ejercicio-01](2-practicas/ejercicio-01-crear-acceder/)    | Crear y acceder arrays     | ~35 min  |
| [ejercicio-02](2-practicas/ejercicio-02-metodos-mutacion/) | Métodos de mutación        | ~35 min  |
| [ejercicio-03](2-practicas/ejercicio-03-metodos-busqueda/) | Métodos de búsqueda        | ~35 min  |
| [ejercicio-04](2-practicas/ejercicio-04-iteracion/)        | Iteración y transformación | ~40 min  |
| [ejercicio-05](2-practicas/ejercicio-05-spread/)           | Spread operator            | ~35 min  |

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad               | Tiempo | Cuándo    |
| ----------------------- | ------ | --------- |
| Leer teoría + diagramas | 2.5h   | Lunes     |
| Ejercicios 01–03        | 1.5h   | Miércoles |
| Ejercicios 04–05        | 1.5h   | Miércoles |
| Proyecto integrador     | 2h     | Viernes   |
| Recursos adicionales    | 0.5h   | Viernes   |

### Calendario Sugerido

```
Lunes     → Teoría: 01 + 02 + 03 (crear, mutar, buscar)
Miércoles → Teoría: 04 + 05 (iterar, spread) + Ejercicios 01–05
Viernes   → Proyecto: inventario.js + revisión del instructor
```

---

## 📌 Entregables

> **🎯 ÚNICO ENTREGABLE OBLIGATORIO**: El proyecto de la carpeta `3-proyecto/`

- [ ] `3-proyecto/starter/script.js` completado y adaptado a tu dominio
- [ ] El archivo ejecuta sin errores con `node script.js`
- [ ] Mínimo 5 elementos en tu inventario
- [ ] Usa al menos 4 de los 5 métodos de mutación
- [ ] Usa al menos un método de iteración (`forEach`, `map` o `filter`)
- [ ] Usa spread operator en al menos un lugar

---

## 🔗 Navegación

| ← Anterior                                    | Inicio                                | Siguiente →                                 |
| --------------------------------------------- | ------------------------------------- | ------------------------------------------- |
| [Semana 07 — Funciones](../week-07/README.md) | [Bootcamp JS ES2023](../../README.md) | [Semana 09 — Objetos](../week-09/README.md) |
