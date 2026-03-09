# Proyecto Semanal — Semana 05: Clasificador

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Implementar un sistema de clasificación usando `if/else`, operador ternario, `switch`, nullish coalescing `??` y optional chaining `?.`, aplicado a tu **dominio asignado**.

---

## 📋 Tu Dominio Asignado

**El instructor te asignó un dominio al inicio del trimestre.**

Cada aprendiz trabaja sobre un dominio diferente para evitar copias. Adapta todos los datos, condiciones y mensajes a ese dominio.

---

## ✅ Requisitos Funcionales

El script `script.js` debe:

1. **Datos del elemento** — Define al menos 5 variables con datos del elemento de tu dominio (nombre, estado, capacidad, categoría, etc.)
2. **Clasificación con `if/else`** — Clasifica el elemento en al menos 3 categorías según algún valor numérico del dominio
3. **Estado con operador ternario** — Determina un estado binario del elemento (ej: activo/inactivo, disponible/lleno, abierto/cerrado)
4. **Tipo con `switch`** — Clasifica el elemento en un tipo o categoría según un string (ej: tipo de elemento, zona, categoría)
5. **Valor por defecto con `??`** — Usa `??` para al menos un valor que puede ser `null` o `undefined`
6. **Acceso seguro con `?.`** — Usa `?.` para acceder a al menos una propiedad de un objeto anidado opcional
7. **Ficha de salida** — Muestra un resumen con `console.log` usando template literals. Sin concatenación `+`

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio    | Elemento    | Clasificación `if/else`            | `switch`                   |
| ---------- | ----------- | ---------------------------------- | -------------------------- |
| Biblioteca | Libro       | Demanda: alta / media / baja       | Género: ficción/no-ficción |
| Farmacia   | Medicamento | Stock: crítico/normal/exceso       | Tipo: genérico/original    |
| Gimnasio   | Miembro     | Actividad: activo/regular/inactivo | Plan: básico/premium       |
| Escuela    | Estudiante  | Desempeño: excelente/regular/bajo  | Grado: primaria/secundaria |

> **⚠️ IMPORTANTE**: Los ejemplos anteriores son solo orientativos.
> No quieres mostrar la solución de otro aprendiz. Implementa **tu propio dominio**.

---

## 🏛️ Ejemplo de referencia (dominio no asignable)

El archivo `solution/script.js` muestra una implementación de referencia usando el **Acuario Municipal** como dominio de ejemplo. Este dominio **no está en la lista de dominios asignables**, por lo que no corresponde a ningún aprendiz.

> Usa la solución solo para entender la estructura esperada, **no para copiarla**.

---

## 📁 Estructura de archivos

```
3-proyecto/
├── README.md          ← estás aquí
├── starter/
│   └── script.js      ← tu punto de partida (completa los TODO)
└── solution/
    └── script.js      ← referencia (Acuario Municipal)
```

---

## 🛠️ Cómo ejecutar

```bash
node starter/script.js
```

---

## 📊 Criterios de evaluación

| Criterio                        | Puntos      |
| ------------------------------- | ----------- |
| El script funciona sin errores  | 20 pts      |
| `if` / `else if` / `else`       | 20 pts      |
| Operador ternario `? :`         | 15 pts      |
| `switch` con `case` y `default` | 15 pts      |
| `??` y `?.` (ES2020)            | 10 pts      |
| Adaptación coherente al dominio | 10 pts      |
| Nomenclatura y código limpio    | 10 pts      |
| **Total**                       | **100 pts** |

**Mínimo para aprobar**: 70 pts
