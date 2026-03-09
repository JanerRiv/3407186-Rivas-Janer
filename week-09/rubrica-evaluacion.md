# Rúbrica de Evaluación — Semana 09: Objetos

## 📊 Distribución de Puntaje

| Tipo de Evidencia | Peso     | Puntos      |
| ----------------- | -------- | ----------- |
| 🧠 Conocimiento   | 30%      | 30 pts      |
| 💪 Desempeño      | 40%      | 40 pts      |
| 📦 Producto       | 30%      | 30 pts      |
| **Total**         | **100%** | **100 pts** |

---

## 🧠 Conocimiento (30 pts)

| Criterio                                      | Indicadores                                                                                                                                                         | Puntos |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **K1** Comprensión de objetos literales       | Define correctamente qué es un objeto, propiedades y valores. Distingue notación punto vs corchetes. Sabe cuándo usar cada una.                                     | 10 pts |
| **K2** Métodos de `Object` e iteración        | Explica la diferencia entre `Object.keys()`, `Object.values()` y `Object.entries()`. Sabe cuándo usar `for...in` vs `forEach`. Comprende `Object.hasOwn()` vs `in`. | 10 pts |
| **K3** Spread con objetos y arrays de objetos | Explica el problema de referencia en objetos. Describe cómo spread copia en el primer nivel. Comprende cómo trabajar con arrays de objetos.                         | 10 pts |

---

## 💪 Desempeño (40 pts)

| Criterio                          | Indicadores                                                                                                                                           | Puntos |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **P1** Crear y acceder objetos    | Crea objetos con múltiples propiedades. Accede y modifica valores con punto y corchetes. Agrega y elimina propiedades dinámicamente.                  | 8 pts  |
| **P2** Métodos de `Object`        | Usa correctamente `Object.keys()`, `Object.values()`, `Object.entries()`. Itera el resultado con `forEach`. Convierte entradas a strings formateados. | 12 pts |
| **P3** Verificación e iteración   | Usa `Object.hasOwn()` para verificar propiedades de forma segura. Itera propiedades con `for...in`. Distingue propiedades propias de las heredadas.   | 8 pts  |
| **P4** Spread y arrays de objetos | Copia y fusiona objetos con spread sin mutar. Filtra, transforma y busca en arrays de objetos usando métodos funcionales.                             | 12 pts |

---

## 📦 Producto (30 pts)

| Criterio                              | Indicadores                                                                                                                          | Puntos |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| **Pr1** Script ejecutable y funcional | `node script.js` corre sin errores. Muestra reporte completo. Contiene mínimo 5 objetos en el catálogo con ≥ 4 propiedades cada uno. | 15 pts |
| **Pr2** Dominio + clean code          | Código coherente con el dominio asignado. Nombres en inglés, comentarios en español. Funciones con responsabilidad única.            | 10 pts |
| **Pr3** Originalidad                  | Implementación diferente a la de otros aprendices. No hay copia de código de compañeros ni de ejemplos del enunciado.                | 5 pts  |

---

## ⚠️ Penalizaciones

| Infracción                                        | Penalización               |
| ------------------------------------------------- | -------------------------- |
| Uso de `var`                                      | -5 pts por ocurrencia      |
| Uso de `==` en lugar de `===`                     | -3 pts por ocurrencia      |
| Nombres no descriptivos (a, x, data, temp)        | -3 pts por ocurrencia      |
| Código copiado de otro aprendiz                   | -100 pts (cero automático) |
| `console.log` sin etiqueta descriptiva            | -1 pt por ocurrencia       |
| No usar `Object.hasOwn()` (usar `hasOwnProperty`) | -3 pts                     |

---

## ✅ Criterios de Aprobación

- Mínimo **70 pts** en total
- Mínimo **21 pts** en Conocimiento (70% de 30)
- Mínimo **28 pts** en Desempeño (70% de 40)
- Mínimo **21 pts** en Producto (70% de 30)
- Script ejecuta sin errores de sintaxis
