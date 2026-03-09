# 📐 Plan de Diseño — Mi Aplicación Integradora

> Completa este documento **antes** de escribir código.
> Sustituye todos los `[placeholders]` con información real de tu dominio.

---

## 1. Dominio Asignado

| Campo                  | Valor                                                |
| ---------------------- | ---------------------------------------------------- |
| **Nombre del dominio** | [Tu dominio: Biblioteca, Farmacia, Gimnasio...]      |
| **Elemento principal** | [Nombre del objeto: Libro, Medicamento, Equipo...]   |
| **Descripción**        | [Una línea: "Gestión de [elementos] para [dominio]"] |

---

## 2. Modelo de Datos — Estructura del Objeto

Define las propiedades de cada elemento:

```
OBJETO: [NombreDelElemento]

  id           : number   — identificador único (1, 2, 3...)
  name         : string   — [descripción: qué representa el nombre]
  [propiedad3] : [tipo]   — [descripción]
  [propiedad4] : [tipo]   — [descripción]
  [propiedad5] : boolean  — [descripción: qué significa true/false]
  [opcional]   : [tipo]   — OPCIONAL — [cuándo aparece]
```

### Ejemplo de objetos (escribe al menos 2 ejemplos):

```
Objeto 1: { id:1, name:"...", [prop3]:..., [prop4]:..., [prop5]:true }
Objeto 2: { id:2, name:"...", [prop3]:..., [prop4]:..., [prop5]:false, [opcional]:"..." }
```

---

## 3. Lista de Funciones

Define al menos 5 funciones con nombre descriptivo en inglés:

| #   | Nombre          | Parámetros   | Qué retorna        | Usa                          |
| --- | --------------- | ------------ | ------------------ | ---------------------------- |
| 1   | `addItem(item)` | objeto nuevo | — (push)           | `.push()`                    |
| 2   | `findById(id)`  | número       | objeto o undefined | `.find()`                    |
| 3   | `[nombre]()`    | [params]     | [retorno]          | [método]                     |
| 4   | `[nombre]()`    | [params]     | [retorno]          | [método]                     |
| 5   | `[nombre]()`    | [params]     | [retorno]          | [método]                     |
| 6   | `buildReport()` | —            | — (imprime)        | `Object.entries` + `forEach` |

---

## 4. Pseudocódigo — buildReport()

Describe en español qué hace tu reporte:

```
FUNCIÓN buildReport:
  IMPRIMIR título "=== [DOMINIO] ==="
  IMPRIMIR total de [elementos]: items.length
  IMPRIMIR total de [elementos activos]: getActive().length
  CALCULAR [estadística numérica] usando Object.values()
  IMPRIMIR estadística: promedio, máximo, mínimo
  PARA CADA elemento EN items ordenados por [campo]:
    IMPRIMIR línea formateada con nombre, [campo3], [campo5]
  IMPRIMIR elemento con mayor [campo numérico]
```

---

## 5. Estructura de la Salida (consola)

Describe cómo se verá el reporte final:

```
================================================
[NOMBRE DEL DOMINIO EN MAYÚSCULAS]
================================================
  Total de [elementos]   : X
  [Activos/Disponibles]  : Y
  [Campo numérico] prom. : Z.XX
  [Campo numérico] máx.  : XX
  [Campo numérico] mín.  : XX

Listado ([criterio de orden]):
  [emoji] [nombre]            [campo3]    [campo5 → label]
  [emoji] [nombre]            [campo3]    [campo5 → label]
  ...

[Destacado]: [nombre del mejor elemento]
================================================
```

---

## 6. Conceptos de Cada Semana — Mapa de Uso

Antes de implementar, confirma qué semana cubre cada parte:

| Semana | Concepto                                    | Dónde lo usaré en mi app                     |
| ------ | ------------------------------------------- | -------------------------------------------- |
| 01–02  | `const`/`let`, tipos                        | `DOMAIN_NAME`, `items`, propiedades          |
| 03     | Operadores                                  | Cálculos en `calculateStats()`               |
| 04     | Template literals                           | Toda la salida de `buildReport()`            |
| 05     | Condicionales                               | [Ejemplo: si stock === 0, mostrar "Agotado"] |
| 06     | `forEach`/bucles                            | Iterar items en reporte                      |
| 07     | Funciones arrow                             | Todas las funciones del módulo               |
| 08     | `.filter()`, `.map()`, `.find()`, `.sort()` | `getActive()`, `findById()`, reporte         |
| 09     | `Object.*`, spread                          | `calculateStats()`, `updateItem()`           |
