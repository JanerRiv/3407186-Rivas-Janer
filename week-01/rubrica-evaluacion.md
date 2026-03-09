# 📊 Rúbrica de Evaluación — Semana 1

## 🎯 Criterios Generales

- **Calificación mínima para aprobar**: 70 puntos sobre 100
- **Único entregable**: El proyecto `script.js`
- **Penalización por entrega tardía**: 10 puntos por día de retraso
- **Código funcional**: El archivo debe ejecutarse sin errores con `node`

---

## 📦 Proyecto: Mi Presentación (100 puntos)

El proyecto es la demostración de que el aprendiz comprendió los conceptos de la semana.

---

### Criterio 1: Funcionamiento técnico (25 pts)

El script corre sin errores al ejecutar `node starter/script.js`.

| Nivel | Puntos | Descripción |
| ----- | ------ | ----------- |
| Excelente | 25 | Corre sin ningún error ni advertencia |
| Satisfactorio | 20 | Corre con advertencias menores no críticas |
| Aceptable | 17 | Corre parcialmente (algunos console.log no muestran) |
| Insuficiente | 0 | No corre o tiene errores de sintaxis que impiden la ejecución |

---

### Criterio 2: Contenido requerido (25 pts)

El script muestra los 7 datos requeridos en el README del proyecto.

| Nivel | Puntos | Descripción |
| ----- | ------ | ----------- |
| Excelente | 25 | Los 7 datos están presentes, claros y correctamente identificados |
| Satisfactorio | 20 | 5-6 datos presentes |
| Aceptable | 17 | 4 datos presentes |
| Insuficiente | 0-12 | Menos de 4 datos |

**Datos requeridos (4 pts c/u):**
- [ ] Nombre completo (string)
- [ ] Ciudad y país (string)
- [ ] Edad (number — sin comillas)
- [ ] Afición o interés (string)
- [ ] Por qué estudia programación (string)
- [ ] Año de inicio (number)
- [ ] Valor boolean descriptivo (ej: `experienciaPrevia: true`)

---

### Criterio 3: Comentarios documentados (20 pts)

El código tiene comentarios en español que explican el propósito de cada sección.

| Nivel | Puntos | Descripción |
| ----- | ------ | ----------- |
| Excelente | 20 | 3+ comentarios en español, explican el "por qué" o contexto de cada sección |
| Satisfactorio | 16 | 3 comentarios, al menos 2 aportan contexto real |
| Aceptable | 14 | 2 comentarios básicos pero en español |
| Insuficiente | 0 | Sin comentarios, o comentarios en inglés, o menos de 2 |

---

### Criterio 4: Salida organizada y legible (15 pts)

La salida en consola usa separadores, secciones y espacios que la hacen fácil de leer.

| Nivel | Puntos | Descripción |
| ----- | ------ | ----------- |
| Excelente | 15 | Salida con encabezado, secciones claras, separadores, cierre organizado |
| Satisfactorio | 12 | Salida con separadores básicos y secciones distinguibles |
| Aceptable | 10 | Salida legible pero sin estructurar |
| Insuficiente | 0 | Datos mezclados sin formato, difícil de leer |

---

### Criterio 5: Uso correcto de tipos de datos (15 pts)

El script demuestra que el aprendiz distingue string, number y boolean.

| Nivel | Puntos | Descripción |
| ----- | ------ | ----------- |
| Excelente | 15 | Usa los tres tipos correctamente: strings con comillas, numbers sin comillas, booleans sin comillas |
| Satisfactorio | 12 | Usa los tres tipos, al menos dos de forma completamente correcta |
| Aceptable | 10 | Usa strings y numbers correctamente, boolean ausente o incorrecto |
| Insuficiente | 0 | Confunde tipos (ej: edad como '24' string) |

---

## 📈 Cálculo de Calificación

```
Calificación Final = Criterio1 + Criterio2 + Criterio3 + Criterio4 + Criterio5
                   = 25 + 25 + 20 + 15 + 15
                   = 100 puntos máximo
```

### Ejemplo

```
Técnico:      22/25
Contenido:    25/25
Comentarios:  16/20
Formato:      12/15
Tipos:        12/15
-----------------
Total:        87/100 ✅ APROBADO CON DISTINCIÓN
```

---

## ✅ Checklist de Autoevaluación

Antes de entregar, verifica:

- [ ] `node starter/script.js` corre sin errores en la terminal
- [ ] Se muestran los 7 datos requeridos en la consola
- [ ] Los 3 tipos de datos están presentes: string, number y boolean
- [ ] Los numbers (edad, año) van SIN comillas
- [ ] Los booleans (true/false) van SIN comillas
- [ ] Hay al menos 3 comentarios en español
- [ ] La salida tiene separadores y está organizada por secciones

---

## 📝 Formato de Entrega

El aprendiz sube el archivo `script.js` al repositorio con el mensaje de commit:

```
feat(week-01): proyecto mi-presentacion
```

---

## ❓ Preguntas Frecuentes

**¿Puedo usar variables?**  
No son obligatorias esta semana (se aprenden en la semana 2). Si las usas, no se evalúan pero tampoco restan puntos.

**¿Qué pasa si no llego al 70%?**  
Recibirás retroalimentación específica y tendrás 5 días para resubmitir.

**¿Los comentarios deben ser en español?**  
Sí. Los comentarios son documentación educativa — van en español. El código (nombres) va en inglés.

**¿Puedo agregar más datos de los requeridos?**  
Sí, y se valora. No perjudica la nota.

---

_Semana 1 — Bootcamp JavaScript ES2023_
