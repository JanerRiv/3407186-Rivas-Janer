# Semana 09: Objetos — Datos Estructurados

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

1. Crear y manipular objetos literales con propiedades y métodos
2. Acceder a propiedades usando notación de punto y de corchetes
3. Usar `Object.keys()`, `Object.values()` y `Object.entries()` para inspeccionar objetos
4. Verificar propiedades con `Object.hasOwn()` (ES2022) e iterar con `for...in`
5. Usar el operador spread `{ ...obj }` para copiar y fusionar objetos
6. Trabajar con arrays de objetos aplicando `map`, `filter` y `find`

---

## 📚 Requisitos Previos

- Semana 07: Funciones
- Semana 08: Arrays — especialmente `map`, `filter`, `forEach`

---

## 🗂️ Estructura de la Semana

```
week-09/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-objetos-literales.svg
│   ├── 02-metodos-objeto.svg
│   ├── 03-verificar-iterar.svg
│   ├── 04-spread-objetos.svg
│   └── 05-arrays-de-objetos.svg
├── 1-teoria/
│   ├── 01-objetos-literales.md
│   ├── 02-metodos-objeto.md
│   ├── 03-verificar-iterar.md
│   ├── 04-spread-objetos.md
│   └── 05-arrays-de-objetos.md
├── 2-practicas/
│   ├── README.md
│   ├── ejercicio-01-crear-acceder/
│   ├── ejercicio-02-metodos-objeto/
│   ├── ejercicio-03-verificar-iterar/
│   ├── ejercicio-04-spread-objetos/
│   └── ejercicio-05-arrays-objetos/
├── 3-proyecto/
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

| #   | Archivo                                                     | Tema                                                                    |
| --- | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| 01  | [01-objetos-literales.md](1-teoria/01-objetos-literales.md) | Crear objetos, acceso con punto y corchetes, modificar propiedades      |
| 02  | [02-metodos-objeto.md](1-teoria/02-metodos-objeto.md)       | Métodos propios, `Object.keys()`, `Object.values()`, `Object.entries()` |
| 03  | [03-verificar-iterar.md](1-teoria/03-verificar-iterar.md)   | `Object.hasOwn()` (ES2022), operador `in`, `for...in`                   |
| 04  | [04-spread-objetos.md](1-teoria/04-spread-objetos.md)       | Spread `{...obj}`: copiar, fusionar, sobrescribir propiedades           |
| 05  | [05-arrays-de-objetos.md](1-teoria/05-arrays-de-objetos.md) | Arrays de objetos: `map`, `filter`, `find`, `sort`                      |

### Prácticas

| #   | Ejercicio                                                                   | Tema                                          |
| --- | --------------------------------------------------------------------------- | --------------------------------------------- |
| 01  | [ejercicio-01-crear-acceder](2-practicas/ejercicio-01-crear-acceder/)       | Crear objetos y acceder a sus propiedades     |
| 02  | [ejercicio-02-metodos-objeto](2-practicas/ejercicio-02-metodos-objeto/)     | Métodos propios y métodos de `Object`         |
| 03  | [ejercicio-03-verificar-iterar](2-practicas/ejercicio-03-verificar-iterar/) | Verificar propiedades e iterar con `for...in` |
| 04  | [ejercicio-04-spread-objetos](2-practicas/ejercicio-04-spread-objetos/)     | Copiar y fusionar objetos con spread          |
| 05  | [ejercicio-05-arrays-objetos](2-practicas/ejercicio-05-arrays-objetos/)     | Arrays de objetos con métodos funcionales     |

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad                | Tiempo | Recursos                     |
| ------------------------ | ------ | ---------------------------- |
| Teoría (5 archivos)      | 2.5h   | `1-teoria/`                  |
| Prácticas (5 ejercicios) | 3h     | `2-practicas/`               |
| Proyecto integrador      | 2h     | `3-proyecto/`                |
| Recursos y glosario      | 0.5h   | `4-recursos/`, `5-glosario/` |

### Sugerencia de horario (3 días)

| Día       | Actividad                       |
| --------- | ------------------------------- |
| Lunes     | Teoría 01–03 + Ejercicios 01–02 |
| Miércoles | Teoría 04–05 + Ejercicios 03–05 |
| Viernes   | Proyecto `catalogo.js` completo |

---

## 📌 Entregables

> **🎯 ÚNICO ENTREGABLE OBLIGATORIO**: El proyecto semanal `3-proyecto/`

- `script.js` funcional adaptado al dominio asignado
- Demuestra todos los conceptos de la semana
- Ejecuta sin errores con `node script.js`

---

## 🔗 Navegación

| ← Anterior                                 | Siguiente →                                                     |
| ------------------------------------------ | --------------------------------------------------------------- |
| [Semana 08 — Arrays](../week-08/README.md) | [Semana 10 — Proyecto Integrador Etapa 0](../week-10/README.md) |
