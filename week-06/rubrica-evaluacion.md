# Rúbrica de Evaluación — Semana 06: Bucles

> **Proyecto**: Sistema de procesamiento por bucles (dominio asignado)
> **Puntaje total**: 100 puntos
> **Aprobación mínima**: 70 puntos

---

## 📊 Criterios de Evaluación

| #   | Criterio                                        | Puntaje |
| --- | ----------------------------------------------- | ------- |
| 1   | El script ejecuta sin errores en Node.js        | 20 pts  |
| 2   | Uso correcto del bucle `for` clásico            | 20 pts  |
| 3   | Uso correcto de `while` o `do...while`          | 15 pts  |
| 4   | Uso correcto de `for...of`                      | 15 pts  |
| 5   | Uso de `break` o `continue`                     | 10 pts  |
| 6   | Contadores y/o acumuladores funcionales         | 10 pts  |
| 7   | Adaptación coherente al dominio + código limpio | 10 pts  |

---

## 🎯 Niveles de Desempeño

| Nivel                  | Puntaje | Descripción                                                          |
| ---------------------- | ------- | -------------------------------------------------------------------- |
| ⭐⭐⭐⭐ Sobresaliente | 90–100  | Todos los bucles correctos, código limpio, dominio coherente         |
| ⭐⭐⭐ Bueno           | 75–89   | La mayoría de bucles correctos, algún detalle menor de estilo        |
| ⭐⭐ Suficiente        | 60–74   | Algunos bucles funcionan, falta consistencia o adaptación al dominio |
| ⭐ Insuficiente        | < 60    | Errores de ejecución o bucles incompletos                            |

---

## 📋 Detalle por Criterio

### 1. Script ejecuta sin errores (20 pts)

| Puntos | Descripción                                               |
| ------ | --------------------------------------------------------- |
| 20     | `node script.js` corre sin ningún error en consola        |
| 10     | Errores menores que no impiden la ejecución parcial       |
| 0      | El script no ejecuta o tiene errores de sintaxis críticos |

### 2. Bucle `for` clásico (20 pts)

| Puntos | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 20     | `for` con inicialización, condición e incremento correctos; usa índice apropiadamente |
| 10     | `for` funciona pero la lógica de índices o condición es imprecisa                     |
| 0      | Ausente o con errores que impiden ejecución                                           |

### 3. `while` o `do...while` (15 pts)

| Puntos | Descripción                                                                       |
| ------ | --------------------------------------------------------------------------------- |
| 15     | Bucle `while` o `do...while` con condición correcta; sin riesgo de bucle infinito |
| 8      | Bucle presente pero con condición o condición de salida incorrecta                |
| 0      | Ausente o con error bloqueante                                                    |

### 4. `for...of` (15 pts)

| Puntos | Descripción                                                             |
| ------ | ----------------------------------------------------------------------- |
| 15     | `for...of` sobre array o string, accediendo correctamente a cada valor  |
| 8      | `for...of` presente pero con uso incorrecto de la variable de iteración |
| 0      | Ausente o sustituido por un bucle menos adecuado                        |

### 5. `break` o `continue` (10 pts)

| Puntos | Descripción                                                           |
| ------ | --------------------------------------------------------------------- |
| 10     | `break` o `continue` aplicados con lógica correcta dentro de un bucle |
| 5      | Presentes pero con lógica de condición incorrecta                     |
| 0      | Ausentes                                                              |

### 6. Contadores y/o acumuladores (10 pts)

| Puntos | Descripción                                                       |
| ------ | ----------------------------------------------------------------- |
| 10     | Al menos un contador y un acumulador implementados correctamente  |
| 5      | Uno presente pero con errores de lógica (ej: no inicializar en 0) |
| 0      | Ausentes                                                          |

### 7. Adaptación al dominio + código limpio (10 pts)

| Puntos | Descripción                                                       |
| ------ | ----------------------------------------------------------------- |
| 10     | Dominio coherente, nombres descriptivos, `const`/`let`, sin `var` |
| 5      | Dominio presente pero nombres genéricos o código poco legible     |
| 0      | Sin adaptación al dominio o código ininteligible                  |

---

## ⚠️ Penalizaciones

| Infracción                                      | Penalización |
| ----------------------------------------------- | ------------ |
| Uso de `var`                                    | −5 pts       |
| Uso de `==` en lugar de `===`                   | −5 pts       |
| Bucle infinito que bloquea la ejecución         | −10 pts      |
| Nombres de variables no descriptivos (`x`, `a`) | −3 pts       |
| Código copiado de otro aprendiz                 | −100 pts (0) |

---

## 📌 Nota sobre el dominio

Cada aprendiz trabaja sobre su dominio único asignado al inicio del trimestre.
La implementación debe reflejar el contexto real del dominio (tipos de datos
relevantes, nombres coherentes, lógica que tiene sentido en ese contexto).
