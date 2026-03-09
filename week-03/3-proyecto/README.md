# Proyecto Semana 03: Calculadora de Dominio

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

## 🎯 Objetivo

Construir una **calculadora multi-operación** aplicada a tu dominio asignado, usando todos los operadores aprendidos esta semana: aritméticos, de asignación compuesta, de comparación estricta y lógicos.

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

Ejemplos de cómo adaptar una calculadora a un dominio (usando dominios NO asignables):

- 🔭 **Planetario**: calcular ingresos por función, capacidad disponible, aforo restante
- 🐠 **Acuario**: calcular costo de alimentación, volumen total de tanques, temperatura promedio
- 🏛️ **Museo**: calcular valor de exhibiciones, costo de entrada, total recaudado
- 🦁 **Zoológico**: calcular gasto diario por especie, total de visitantes, costo de mantenimiento
- 🌌 **Observatorio**: calcular duración total de eventos, tickets vendidos, aforo restante

## ✅ Requisitos Funcionales

Tu calculadora debe incluir al menos:

1. **Operaciones aritméticas** (`+`, `-`, `*`, `/`, `%`)
   - Calcular totales, descuentos, restos, promedios
2. **Operadores de asignación compuesta** (`+=`, `-=`, `*=`, `/=`)
   - Actualizar valores acumulados sin reescribir la variable completa
3. **Comparación estricta** (`===`, `!==`, `>=`, `<=`, `>`, `<`)
   - Validar condiciones con `===` (nunca con `==`)
4. **Operadores lógicos** (`&&`, `||`, `!`)
   - Combinar condiciones (descuento si cumple criterios, etc.)
5. **Numeric separators** para cantidades grandes (`1_000_000`)
6. **`console.log()`** con resultados claros y etiquetados

## 💡 Ejemplo de Referencia (Planetario — solo instructor)

El archivo `starter/script.js` contiene TODOs genéricos para cualquier dominio.
El archivo `solution/script.js` muestra una implementación de referencia con el dominio **Planetario** (dominio no asignable, solo para ejemplificar).

## 🛠️ Archivos del Proyecto

```
3-proyecto/
├── README.md          ← estás aquí
├── starter/
│   └── script.js      ← tu punto de partida (completar los TODOs)
└── solution/
    └── script.js      ← referencia del instructor (no copiar)
```

## 🚀 Cómo ejecutar

```bash
node starter/script.js
```

## 📌 Entregables

1. `script.js` funcional, adaptado a tu dominio
2. Todas las operaciones etiquetadas con `console.log()`
3. Al menos una validación con `===` y una condición con `&&` o `||`
4. Código comentado en español explicando la lógica de negocio de tu dominio

## 📊 Criterios de Evaluación

| Criterio                                       | Puntos  |
| ---------------------------------------------- | ------- |
| La calculadora funciona sin errores            | 20      |
| Uso correcto de operadores aritméticos         | 20      |
| Uso de asignación compuesta (mínimo 2)         | 15      |
| Uso de `===` / `!==` (nunca `==`)              | 15      |
| Uso de operadores lógicos                      | 10      |
| Coherencia con el dominio asignado             | 10      |
| Nomenclatura en inglés, comentarios en español | 10      |
| **Total**                                      | **100** |

> ⚠️ **Penalizaciones**: -5 pts por cada uso de `var`, -5 pts por usar `==` en lugar de `===`
