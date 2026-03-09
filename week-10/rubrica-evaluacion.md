# 📊 Rúbrica de Evaluación — Semana 10

## Proyecto Integrador — Etapa 0

**Puntaje total**: 100 puntos
**Mínimo para aprobar**: 70 puntos en cada categoría

---

## 🧠 Conocimiento (K) — 30 puntos

| Criterio                       | Descripción                                                         | Puntos |
| ------------------------------ | ------------------------------------------------------------------- | ------ |
| **K1** — Conceptos semanas 1–5 | Demuestra comprensión de tipos, strings, condicionales y funciones  | 15     |
| **K2** — Conceptos semanas 6–9 | Demuestra comprensión de bucles, arrays, objetos y métodos modernos | 15     |

### K1 — Rúbrica detallada (15 pts)

| Nivel        | Descripción                                                                                                                                                                    | Puntos |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Excelente    | Usa `const`/`let` correctamente, template literals en toda cadena de texto, condicionales con `===`, `??` y ternario según aplique, funciones arrow con `return` bien definido | 13–15  |
| Bueno        | Usa la mayoría correctamente con errores menores (ej: `var` en 1–2 lugares, algún `+` para concatenar)                                                                         | 9–12   |
| Suficiente   | Usa los conceptos pero con errores frecuentes o mezcla con patrones obsoletos                                                                                                  | 6–8    |
| Insuficiente | Evidencia comprensión mínima o ausente de los conceptos                                                                                                                        | 0–5    |

### K2 — Rúbrica detallada (15 pts)

| Nivel        | Descripción                                                                                                                                                                                   | Puntos |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Excelente    | `forEach`/`for...of` para iteración, `.filter()/.map()/.find()` aplicados correctamente, `Object.keys/values/entries` con desestructuring, `Object.hasOwn()` ES2022, spread con inmutabilidad | 13–15  |
| Bueno        | Usa la mayoría con 1–2 errores menores (ej: usa `sort()` sin copiar el array)                                                                                                                 | 9–12   |
| Suficiente   | Usa los conceptos de forma básica sin métodos modernos                                                                                                                                        | 6–8    |
| Insuficiente | No demuestra comprensión de arrays y objetos modernos                                                                                                                                         | 0–5    |

---

## 💪 Desempeño (P) — 40 puntos

| Criterio                                   | Descripción                                                                                 | Puntos |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- | ------ |
| **P1** — Planificación documentada         | `ejercicio-01-planificacion/starter/plan.md` completado con datos, funciones y pseudocódigo | 10     |
| **P2** — Integración coherente en práctica | `ejercicio-02-integracion/starter/index.js` descomentado y ejecuta correctamente            | 10     |
| **P3** — Funciones bien diseñadas          | Mínimo 5 funciones en el proyecto, cada una con responsabilidad única y `return`            | 10     |
| **P4** — Arrays y objetos integrados       | `.filter()`, `.map()`, spread y `Object.*` usados en contexto real del dominio              | 10     |

---

## 📦 Producto (Pr) — 30 puntos

| Criterio                          | Descripción                                                                                | Puntos |
| --------------------------------- | ------------------------------------------------------------------------------------------ | ------ |
| **Pr1** — App ejecuta sin errores | `node app.js` corre sin errores ni warnings                                                | 10     |
| **Pr2** — Integración completa    | Usa al menos un concepto de cada semana (1–9) verificable en el código                     | 10     |
| **Pr3** — Dominio + clean code    | Nombres descriptivos, dominio coherente, sin código muerto, sin `console.log` sin contexto | 5      |
| **Pr4** — Originalidad            | Implementación única, sin copias de compañeros                                             | 5      |

---

## ⚠️ Penalizaciones

| Infracción                                                            | Penalización          |
| --------------------------------------------------------------------- | --------------------- |
| Uso de `var`                                                          | −5 pts por ocurrencia |
| Uso de `==` en lugar de `===`                                         | −3 pts por ocurrencia |
| Nombres de variables sin sentido (`a`, `x`, `temp`)                   | −3 pts por ocurrencia |
| Código copiado de otro aprendiz (igual dominio o idéntica estructura) | −100 pts (reprobado)  |
| App no ejecuta (`node app.js` lanza error)                            | −20 pts               |
| Falta integración de alguna semana (conceptos ausentes)               | −5 pts por semana     |
| `console.log` sin etiqueta en salida del reporte                      | −1 pt por ocurrencia  |
| Uso de `hasOwnProperty` en lugar de `Object.hasOwn()`                 | −3 pts                |

---

## 📋 Lista de Verificación del Proyecto

Antes de entregar, confirma que tu `app.js`:

- [ ] Tiene `const DOMAIN_NAME` y al menos 6 objetos con 5+ propiedades
- [ ] Usa template literals en **toda** construcción de strings
- [ ] Tiene mínimo un condicional con `if/else` y uno con ternario
- [ ] Itera con `forEach` o `for...of` al menos una vez
- [ ] Define mínimo 5 funciones arrow con `return`
- [ ] Usa `.filter()`, `.map()`, `.find()`, `.sort()` (con copia)
- [ ] Usa `Object.keys()`, `Object.values()`, `Object.entries()`
- [ ] Usa `Object.hasOwn()` al menos una vez
- [ ] Usa spread `{...obj}` para copia o actualización inmutable
- [ ] Ejecuta con `node app.js` sin errores
- [ ] El reporte final muestra información relevante del dominio
