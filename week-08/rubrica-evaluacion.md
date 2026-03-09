# 📋 Rúbrica de Evaluación — Semana 08: Arrays

**Puntaje total**: 100 puntos
**Puntaje mínimo para aprobar**: 70 puntos

---

## 🧠 Evidencia de Conocimiento (30 pts)

| Criterio                               | Excelente (100%)                                                                                                                 | Satisfactorio (75%)                                                       | En desarrollo (50%)                                                   | Insuficiente (0%)                            |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| **K1. Comprensión de arrays** (10 pts) | Explica con precisión qué es un array, cómo funciona la indexación base-0 y `.length`. Distingue métodos mutables de inmutables. | Explica el concepto con alguna imprecisión menor. Entiende la indexación. | Describe los arrays de forma general pero confunde índices o métodos. | No demuestra comprensión del concepto.       |
| **K2. Métodos de iteración** (10 pts)  | Distingue correctamente entre `forEach` (efecto), `map` (transformación) y `filter` (selección). Describe cuándo usar cada uno.  | Entiende la diferencia general pero confunde alguno de los tres.          | Solo comprende `forEach` o `for...of`.                                | No distingue entre los métodos de iteración. |
| **K3. Spread operator** (10 pts)       | Explica el spread `...` en arrays: copia superficial, fusión, expansión como argumentos.                                         | Entiende la copia y fusión pero no la expansión como argumento.           | Describe spread de forma vaga sin ejemplos concretos.                 | No comprende el operador spread.             |

---

## 💪 Evidencia de Desempeño (40 pts)

| Criterio                              | Excelente (100%)                                                                                               | Satisfactorio (75%)                                         | En desarrollo (50%)                                   | Insuficiente (0%)           |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------- | --------------------------- |
| **P1. Creación y acceso** (8 pts)     | Crea arrays con sintaxis `[]`, accede por índice positivo y negativo con `.at()`, usa `.length` correctamente. | Crea y accede arrays correctamente pero no usa `.at()`.     | Crea arrays pero comete errores de acceso por índice. | No crea arrays válidos.     |
| **P2. Métodos de mutación** (12 pts)  | Usa correctamente `push`, `pop`, `shift`, `unshift` y `splice` con comprensión de qué modifica cada uno.       | Usa al menos 3 métodos de mutación correctamente.           | Usa solo `push` o hace push/pop de forma incorrecta.  | No usa métodos de mutación. |
| **P3. Búsqueda e iteración** (12 pts) | Implementa `includes`, `find`/`findIndex`, `map` y `filter` con funciones bien nombradas.                      | Usa al menos 3 métodos de búsqueda/iteración correctamente. | Solo usa `indexOf` o `for...of` básico.               | No usa métodos de búsqueda. |
| **P4. Spread operator** (8 pts)       | Usa spread para copiar arrays, fusionar y pasar como argumentos de función.                                    | Usa spread para copiar o fusionar (al menos uno).           | Intenta usar spread pero con sintaxis incorrecta.     | No usa el operador spread.  |

---

## 📦 Evidencia de Producto (30 pts)

| Criterio                                  | Excelente (100%)                                                                                                                        | Satisfactorio (75%)                                                      | En desarrollo (50%)                                               | Insuficiente (0%)                                    |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------- |
| **Pr1. Script ejecutable** (15 pts)       | El script ejecuta sin errores. El reporte muestra datos coherentes del dominio asignado.                                                | El script ejecuta con advertencias menores pero produce salida correcta. | El script ejecuta parcialmente o con algunos errores no críticos. | El script no ejecuta o tiene errores de sintaxis.    |
| **Pr2. Dominio y código limpio** (10 pts) | Todas las variables y funciones tienen nombres en inglés descriptivos del dominio. Código bien estructurado con comentarios en español. | Nombres mayormente descriptivos, algún nombre genérico (`arr`, `x`).     | Varios nombres no descriptivos o uso de `var`.                    | Nombres sin relación al dominio, código desordenado. |
| **Pr3. Originalidad** (5 pts)             | Implementación coherente y única del dominio asignado. No hay partes copiadas de otros aprendices.                                      | Implementación propia con alguna similitud no copiada.                   | Implementación con dudas razonables de originalidad.              | Copia detectada.                                     |

---

## ⚠️ Penalizaciones

| Infracción                                           | Penalización               |
| ---------------------------------------------------- | -------------------------- |
| Uso de `var`                                         | -5 pts por ocurrencia      |
| Uso de `==` en lugar de `===`                        | -3 pts por ocurrencia      |
| Nombres no descriptivos (`arr`, `x`, `data`, `temp`) | -3 pts por variable        |
| Código copiado de otro aprendiz (detectado)          | -100 pts (cero automático) |
| Función declarada pero nunca llamada                 | -5 pts por función         |
| Array creado pero nunca usado                        | -3 pts por array           |
| `console.log` sin contexto (valor sin etiquetar)     | -1 pt por ocurrencia       |

---

## 📊 Tabla de Niveles

| Nivel            | Puntaje    | Descripción                                                              |
| ---------------- | ---------- | ------------------------------------------------------------------------ |
| 🏆 Sobresaliente | 90–100 pts | Domina todos los métodos de arrays y los aplica con propiedad al dominio |
| ✅ Satisfactorio | 70–89 pts  | Comprende y aplica la mayoría de métodos correctamente                   |
| 📈 En desarrollo | 50–69 pts  | Comprensión parcial; necesita refuerzo en iteración o spread             |
| ❌ Insuficiente  | < 50 pts   | No alcanza los fundamentos mínimos de arrays                             |

---

## 📝 Notas del Instructor

- Verificar que el dominio asignado sea coherente en todo el script
- El uso de `.at()` con índice negativo es un plus (ES2022)
- `map` debe **retornar** un nuevo valor, no usar `console.log` adentro como si fuera `forEach`
- `filter` debe retornar `true`/`false` — verificar que el callback sea un predicado
- Spread crea una **copia superficial** — no confundir con copia profunda (semanas avanzadas)
