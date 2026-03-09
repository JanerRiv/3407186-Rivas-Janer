# 📦 Semana 2: Variables y Tipos de Datos

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Declarar variables con `const` y `let`, y elegir la correcta en cada caso
- ✅ Explicar por qué `var` está obsoleto y no debe usarse
- ✅ Conocer los cinco tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`
- ✅ Usar `typeof` para identificar el tipo de cualquier valor (incluida la trampa de `null`)
- ✅ Convertir tipos explícitamente con `Number()`, `String()` y `Boolean()`
- ✅ Aplicar reglas de nomenclatura: camelCase y nombres descriptivos
- ✅ Usar numeric separators `1_000_000` (ES2021)

---

## 📚 Requisitos Previos

- ✅ Semana 1 completada
- ✅ Node.js instalado y funcionando
- ✅ Saber ejecutar un script con `node archivo.js`
- ✅ Entender `console.log()` y tipos primitivos básicos

---

## 🗂️ Estructura de la Semana

```
week-02/
├── README.md                         # Este archivo
├── rubrica-evaluacion.md             # Criterios de evaluación
├── 0-assets/                         # Diagramas y recursos visuales
├── 1-teoria/                         # Material teórico
│   ├── 01-const-let.md
│   ├── 02-tipos-primitivos-completos.md
│   ├── 03-conversion-tipos.md
│   └── 04-nomenclatura.md
├── 2-practicas/                      # Ejercicios guiados
│   ├── ejercicio-01-const-let/
│   ├── ejercicio-02-tipos-completos/
│   ├── ejercicio-03-conversiones/
│   ├── ejercicio-04-nomenclatura/
│   └── ejercicio-05-numeric-separators/
├── 3-proyecto/                       # Proyecto semanal (único entregable)
│   ├── README.md
│   └── starter/
│       └── script.js
├── 4-recursos/                       # Material adicional
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                       # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5 horas)

| Tema                                                                    | Duración | Descripción                                          |
| ----------------------------------------------------------------------- | -------- | ---------------------------------------------------- |
| [const vs let](1-teoria/01-const-let.md)                                | 35 min   | Variables modernas y por qué evitar var              |
| [Tipos primitivos completos](1-teoria/02-tipos-primitivos-completos.md) | 35 min   | null, undefined y typeof para todos los tipos        |
| [Conversión de tipos](1-teoria/03-conversion-tipos.md)                  | 30 min   | Number(), String(), Boolean() y coerción             |
| [Nomenclatura](1-teoria/04-nomenclatura.md)                             | 20 min   | camelCase, nombres descriptivos y numeric separators |

### 2️⃣ Prácticas (3 horas)

| Ejercicio                                                          | Duración | Nivel  | Objetivo                                     |
| ------------------------------------------------------------------ | -------- | ------ | -------------------------------------------- |
| [const y let](2-practicas/ejercicio-01-const-let/)                 | 35 min   | Básico | Declarar variables y entender la mutabilidad |
| [null y undefined](2-practicas/ejercicio-02-tipos-completos/)      | 35 min   | Básico | Explorar todos los tipos primitivos          |
| [Conversiones](2-practicas/ejercicio-03-conversiones/)             | 40 min   | Básico | Convertir entre tipos explícitamente         |
| [Nomenclatura](2-practicas/ejercicio-04-nomenclatura/)             | 30 min   | Básico | Aplicar camelCase y nombres descriptivos     |
| [Numeric separators](2-practicas/ejercicio-05-numeric-separators/) | 20 min   | Básico | Usar `1_000_000` para legibilidad (ES2021)   |

### 3️⃣ Proyecto (2 horas)

**Ficha de Datos del Dominio**

Script de consola que declara variables con `const`/`let`, aplica `typeof`, realiza conversiones y muestra información organizada de una entidad del dominio asignado.

---

## ⏱️ Distribución del Tiempo (8 horas)

```
📖 Teoría:       2.5h  (31%)
💻 Prácticas:    3h    (37.5%)
🚀 Proyecto:     2h    (25%)
📚 Recursos:     0.5h  (6.5%)
```

### Cronograma Sugerido

| Día         | Actividad                                 | Tiempo |
| ----------- | ----------------------------------------- | ------ |
| **Día 1**   | Teoría 01-02 + ejercicios 1-2             | 2.5h   |
| **Día 2**   | Teoría 03-04 + ejercicios 3-4             | 2h     |
| **Día 3**   | Ejercicio 5 + inicio del proyecto         | 1.5h   |
| **Día 4-5** | **Proyecto: Ficha de Datos** (entregable) | 2h     |

---

## 📌 Entregables

### 📦 Proyecto (100%)

> El proyecto es el **único entregable obligatorio** de la semana.

- **Archivo**: `starter/script.js` adaptado a tu dominio asignado
- **Entrega**: Viernes de la semana correspondiente
- **Ejecución**: `node starter/script.js` sin errores
- **Evalúa**: uso de `const`/`let`, tipos, conversiones y nomenclatura

---

## 🔗 Navegación

⬅️ [Semana 1: ¿Qué es programar?](../week-01/README.md)
➡️ [Semana 3: Operadores y Expresiones](../week-03/README.md)
