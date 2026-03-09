# 📐 Cómo Diseñar tu Solución

> Antes de escribir una sola línea de código, dedica tiempo a **diseñar**. Un desarrollador que planifica tarda menos y comete menos errores que uno que codifica sin pensar.

---

## 🎯 Objetivo

Aprender a convertir un enunciado de problema en una solución estructurada usando **pseudocódigo**, **modelo de datos** y **lista de funciones**, antes de escribir código real.

---

## 1. Entender el Problema

Antes de diseñar, responde estas preguntas:

1. **¿Qué datos voy a manejar?** → Define el modelo de datos
2. **¿Qué operaciones necesito sobre esos datos?** → Define las funciones
3. **¿Qué debe mostrar la salida final?** → Define el reporte

### Ejemplo: Dominio "Acuario"

**Datos**: peces → cada pez tiene nombre, especie, tanque, temperatura, peso
**Operaciones**: agregar, filtrar por tanque, buscar por nombre, calcular peso promedio
**Salida**: listado de peces por tanque, estadísticas generales

---

## 2. Modelo de Datos

Define la **estructura de un elemento** del dominio antes de crear el array.

```
ELEMENTO: Fish (pez)
  id        : número único
  name      : string — nombre común
  species   : string — especie científica
  tank      : string — identificador del tanque
  weight    : número — en gramos
  active    : boolean — si está en exhibición
  notes     : string — OPCIONAL, observaciones del cuidador
```

Una vez definida la estructura, crea el array con al menos 6 objetos:

```javascript
const items = [
  {
    id: 1,
    name: "Nemo",
    species: "Amphiprion ocellaris",
    tank: "A1",
    weight: 85,
    active: true,
  },
  {
    id: 2,
    name: "Dori",
    species: "Paracanthurus hepatus",
    tank: "A2",
    weight: 120,
    active: true,
    notes: "Observación especial",
  },
  // ...
];
```

---

## 3. Lista de Funciones

Define **qué funciona** tu app necesita antes de codificarla.
Cada función debe tener UN solo propósito.

```
FUNCIONES:
  addItem(item)            → push al array
  getActive()              → filter por active === true
  findById(id)             → find por id
  findByTank(tank)         → filter por tank
  updateItem(id, changes)  → map + spread inmutable
  calculateStats()         → min/max/avg del campo numérico
  formatItem(item)         → string formateado para mostrar
  buildReport()            → reporte completo con estadísticas
```

---

## 4. Pseudocódigo

El pseudocódigo describe **qué hace** el programa sin preocuparte de la sintaxis exacta.

```
INICIO

  DEFINIR array items con 6+ elementos del dominio

  FUNCIÓN getActive:
    FILTRAR items donde active sea true
    RETORNAR array filtrado

  FUNCIÓN findById(id):
    BUSCAR el primer elemento donde item.id === id
    RETORNAR elemento o undefined

  FUNCIÓN calculateStats:
    EXTRAER todos los valores de la propiedad numérica principal
    CALCULAR promedio, máximo, mínimo
    IMPRIMIR estadísticas

  FUNCIÓN buildReport:
    IMPRIMIR título del dominio
    IMPRIMIR total de elementos
    IMPRIMIR estadísticas
    PARA CADA elemento EN items ordenados por campo numérico:
      IMPRIMIR línea formateada

FIN
```

---

## 5. Estructura del Archivo

Un archivo `app.js` bien organizado tiene estas secciones en orden:

```
1. CONFIGURACIÓN         → DOMAIN_NAME, VALUE_LABEL, constantes
2. DATOS                 → array items con los objetos del dominio
3. FUNCIONES CRUD        → addItem, removeItem, findById, updateItem
4. FUNCIONES ANÁLISIS    → getActive, filterBy*, calculateStats
5. FUNCIONES DISPLAY     → formatItem, printItem, buildReport
6. EJECUCIÓN PRINCIPAL   → llamadas a las funciones, demostración
```

---

## 6. Reglas de Clean Code para el Proyecto

| Regla                           | Ejemplo correcto                    | Ejemplo incorrecto                |
| ------------------------------- | ----------------------------------- | --------------------------------- |
| Nombres descriptivos            | `calculateAvgPrice()`               | `calc()`, `fn1()`                 |
| Una responsabilidad por función | `formatItem(item)` solo formatea    | `formatAndPrint()` hace dos cosas |
| Sin código muerto               | —                                   | Código comentado que no se usará  |
| Sin repetición                  | Usar función en lugar de copy-paste | Mismo bloque en 3 lugares         |
| Const por defecto               | `const items = []`                  | `var items = []`                  |
| Template literals               | `` `Precio: ${price}` ``            | `"Precio: " + price`              |

---

## ✅ Plantilla de Diseño

Completa este documento antes de codificar (ver `ejercicio-01-planificacion/`):

```
DOMINIO:
NOMBRE DEL ARRAY: items
TIPO DE ELEMENTO: [nombre del objeto]

PROPIEDADES:
  id        : número
  name      : string
  [campo3]  : [tipo] — [descripción]
  [campo4]  : [tipo] — [descripción]
  [campo5]  : boolean — [descripción]
  [opcionalA]: string — OPCIONAL

FUNCIONES:
  1. [nombre](params) → [qué retorna]
  2. [nombre](params) → [qué retorna]
  ...

REPORTE FINAL incluirá:
  - [info 1]
  - [info 2]
  - [estadísticas]
```
