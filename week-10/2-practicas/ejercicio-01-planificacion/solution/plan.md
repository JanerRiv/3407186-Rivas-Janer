# 📐 Plan de Diseño — Estación Meteorológica

> Ejemplo completo de planificación (dominio de referencia del instructor)

---

## 1. Dominio Asignado

| Campo                  | Valor                                                              |
| ---------------------- | ------------------------------------------------------------------ |
| **Nombre del dominio** | Estación Meteorológica                                             |
| **Elemento principal** | Registro meteorológico (WeatherReading)                            |
| **Descripción**        | Gestión de registros climáticos para un observatorio meteorológico |

---

## 2. Modelo de Datos — Estructura del Objeto

```
OBJETO: WeatherReading

  id          : number   — identificador único del registro
  date        : string   — fecha en formato "YYYY-MM-DD"
  city        : string   — nombre de la ciudad de la medición
  temperature : number   — temperatura en grados Celsius
  humidity    : number   — humedad relativa en porcentaje (0–100)
  condition   : string   — estado: "soleado", "nublado", "lluvia", "tormenta", "nieve"
  active      : boolean  — true si la estación está operativa
  notes       : string   — OPCIONAL — observaciones del meteorólogo
```

### Ejemplo de objetos:

```
Objeto 1: { id:1, date:"2026-01-15", city:"Madrid", temperature:18, humidity:65, condition:"soleado", active:true }
Objeto 2: { id:2, date:"2026-01-16", city:"Barcelona", temperature:12, humidity:80, condition:"lluvia", active:true, notes:"Alerta por lluvias intensas" }
```

---

## 3. Lista de Funciones

| #   | Nombre                       | Parámetros              | Qué retorna                   | Usa                          |
| --- | ---------------------------- | ----------------------- | ----------------------------- | ---------------------------- |
| 1   | `addReading(reading)`        | objeto registro         | — (push al array)             | `.push()`                    |
| 2   | `findById(id)`               | number                  | registro o undefined          | `.find()`                    |
| 3   | `getActive()`                | —                       | array de registros activos    | `.filter()`                  |
| 4   | `getByCondition(condition)`  | string                  | array filtrado por condición  | `.filter()`                  |
| 5   | `updateReading(id, changes)` | number, objeto          | array actualizado (inmutable) | `.map()` + spread            |
| 6   | `calculateStats(field)`      | string (campo numérico) | objeto con avg/max/min        | `Object.values` + `reduce()` |
| 7   | `formatReading(reading)`     | objeto                  | string formateado             | template literals            |
| 8   | `buildReport()`              | —                       | — (imprime todo)              | `Object.entries`, `forEach`  |

---

## 4. Pseudocódigo — buildReport()

```
FUNCIÓN buildReport:
  IMPRIMIR "=== ESTACIÓN METEOROLÓGICA ==="
  IMPRIMIR total de registros: readings.length
  IMPRIMIR total de estaciones activas: getActive().length

  CALCULAR estadísticas de temperatura usando calculateStats("temperature")
  IMPRIMIR temperatura promedio, máxima, mínima

  CALCULAR estadísticas de humedad usando calculateStats("humidity")
  IMPRIMIR humedad promedio

  AGRUPAR registros por condición usando Object.entries + for...in
  IMPRIMIR conteo por condición

  PARA CADA registro EN readings ordenados por temperatura descendente:
    IMPRIMIR línea: fecha, ciudad, temperatura, condición
    SI tiene notes → imprimir nota con Object.hasOwn()

  IMPRIMIR el registro con mayor temperatura (readings.at(0) después de sort)
```

---

## 5. Estructura de la Salida

```
================================================
🌤 ESTACIÓN METEOROLÓGICA
================================================
  Total de registros   : 8
  Estaciones activas   : 6
  Temperatura promedio : 14.75°C
  Temperatura máxima   : 28°C (Valencia)
  Temperatura mínima   : -2°C (Bilbao)
  Humedad promedio     : 68.5%

Condiciones registradas:
  soleado   : 3
  nublado   : 2
  lluvia    : 2
  tormenta  : 1

Listado (temp. descendente):
  ☀  Valencia     28°C  52%  soleado
  🌤  Madrid       18°C  65%  soleado
  ☁   Sevilla      15°C  70%  nublado
  🌧  Barcelona    12°C  80%  lluvia
     📝 Alerta por lluvias intensas
  ...

✨ Temperatura más alta: Valencia (28°C)
================================================
```

---

## 6. Conceptos de Cada Semana — Mapa de Uso

| Semana | Concepto                                    | Uso en la app                                                            |
| ------ | ------------------------------------------- | ------------------------------------------------------------------------ |
| 01–02  | `const`, tipos, `typeof`                    | `DOMAIN_NAME`, `VALUE_LABEL`, propiedades tipadas                        |
| 03     | Operadores                                  | `temperature * 1.8 + 32`, `humidity / 100`, `total / count`              |
| 04     | Template literals                           | Toda la salida: `` `${city}: ${temperature}°C` ``                        |
| 05     | Condicionales                               | `active ? "operativa" : "fuera de servicio"`, `condition === "tormenta"` |
| 06     | `forEach` + `for...in`                      | Iterar registros, iterar propiedades de un objeto                        |
| 07     | Funciones arrow                             | Todas las 8 funciones del módulo                                         |
| 08     | `.filter()`, `.map()`, `.find()`, `.sort()` | `getActive()`, `updateReading()`, `findById()`, reporte ordenado         |
| 09     | `Object.*`, spread, `Object.hasOwn()`       | `calculateStats()`, `updateReading()`, verificar `notes`                 |
