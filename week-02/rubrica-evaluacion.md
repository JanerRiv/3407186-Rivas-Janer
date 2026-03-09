# 📊 Rúbrica de Evaluación — Semana 2

## 🎯 Criterios Generales

- **Calificación mínima para aprobar**: 70 puntos sobre 100
- **Único entregable**: El proyecto `starter/script.js`
- **Penalización por entrega tardía**: 10 puntos por día de retraso
- **Código funcional**: El archivo debe ejecutarse sin errores con `node`

---

## 📦 Proyecto: Ficha de Datos del Dominio (100 puntos)

---

### Criterio 1: Funcionamiento técnico (20 pts)

El script corre sin errores al ejecutar `node starter/script.js`.

| Nivel         | Puntos | Descripción                                |
| ------------- | ------ | ------------------------------------------ |
| Excelente     | 20     | Corre sin ningún error ni advertencia      |
| Satisfactorio | 16     | Corre con advertencias menores no críticas |
| Aceptable     | 13     | Corre parcialmente                         |
| Insuficiente  | 0      | No corre o tiene errores de sintaxis       |

---

### Criterio 2: Uso correcto de const y let (25 pts)

Se usa `const` para valores que no cambian y `let` solo para los que sí cambian.

| Nivel         | Puntos | Descripción                                                        |
| ------------- | ------ | ------------------------------------------------------------------ |
| Excelente     | 25     | Todas las variables usan const/let correctamente, ninguna usa var  |
| Satisfactorio | 20     | La mayoría correctas, algún const donde debería ir let o viceversa |
| Aceptable     | 17     | Uso mezclado con algún var                                         |
| Insuficiente  | 0      | Usa var o no usa variables en absoluto                             |

---

### Criterio 3: Tipos de datos y typeof (20 pts)

Se usan al menos tres tipos primitivos distintos y se demuestra `typeof`.

| Nivel         | Puntos | Descripción                                                                  |
| ------------- | ------ | ---------------------------------------------------------------------------- |
| Excelente     | 20     | Usa string, number, boolean + null o undefined; muestra typeof de al menos 3 |
| Satisfactorio | 16     | Usa tres tipos y al menos 2 typeof                                           |
| Aceptable     | 13     | Usa dos tipos y 1 typeof                                                     |
| Insuficiente  | 0      | No aplica typeof o solo usa un tipo                                          |

---

### Criterio 4: Conversión explícita de tipos (15 pts)

Se usa al menos una conversión explícita: `Number()`, `String()` o `Boolean()`.

| Nivel         | Puntos | Descripción                                           |
| ------------- | ------ | ----------------------------------------------------- |
| Excelente     | 15     | Usa 2+ conversiones con propósito claro en el dominio |
| Satisfactorio | 12     | Usa 1 conversión correctamente                        |
| Aceptable     | 10     | Intenta conversión pero con errores menores           |
| Insuficiente  | 0      | No hay conversiones explícitas                        |

---

### Criterio 5: Nomenclatura y legibilidad (10 pts)

Los nombres de variables siguen camelCase y son descriptivos.

| Nivel         | Puntos | Descripción                                              |
| ------------- | ------ | -------------------------------------------------------- |
| Excelente     | 10     | Todos los nombres en camelCase, descriptivos y en inglés |
| Satisfactorio | 8      | La mayoría correctos, algún nombre poco descriptivo      |
| Aceptable     | 6      | Algunos en camelCase, mezcla de idiomas                  |
| Insuficiente  | 0      | snake_case, nombres de una letra o sin convención        |

---

### Criterio 6: Adaptación al dominio asignado (10 pts)

Las variables y datos son coherentes con el dominio asignado por el instructor.

| Nivel         | Puntos | Descripción                                                              |
| ------------- | ------ | ------------------------------------------------------------------------ |
| Excelente     | 10     | Datos completamente contextualizados al dominio, implementación original |
| Satisfactorio | 8      | Datos relacionados con el dominio, alguna parte genérica                 |
| Aceptable     | 6      | Dominio identificable pero implementación genérica                       |
| Insuficiente  | 0      | No refleja el dominio asignado o es copia de otro compañero              |

---

## 📋 Resumen de Puntuación

| Criterio                      | Puntos  |
| ----------------------------- | ------- |
| Funcionamiento técnico        | 20      |
| Uso correcto de const y let   | 25      |
| Tipos de datos y typeof       | 20      |
| Conversión explícita de tipos | 15      |
| Nomenclatura y legibilidad    | 10      |
| Adaptación al dominio         | 10      |
| **Total**                     | **100** |

> **Mínimo para aprobar**: 70 puntos
