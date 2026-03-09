# Proyecto Semanal — Semana 02: Ficha de Datos del Dominio

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Crear una ficha de datos en consola usando las variables y tipos aprendidos esta semana. Cada aprendiz adapta el proyecto a su **dominio único asignado**.

---

## 📋 Tu Dominio Asignado

**Dominio**: _(el instructor te asignó uno al inicio del trimestre)_

> ⚠️ **Política anticopia**: Cada aprendiz trabaja sobre un dominio diferente. Las implementaciones deben ser coherentes con tu dominio asignado. Se verificará que el código no sea copia de otro aprendiz.

---

## 📦 Estructura del proyecto

```
3-proyecto/
├── README.md          ← Este archivo
└── starter/
    └── script.js      ← Tu archivo de trabajo (completa los TODOs)
```

---

## ✅ Requisitos funcionales

Tu script debe mostrar en consola una "ficha de datos" con:

### 1. Datos con tipo correcto

- Al menos **4 variables** usando `const` con tipos apropiados a tu dominio:
  - 1 `string` (nombre, descripción, categoría…)
  - 1 `number` (cantidad, precio, edad, capacidad…)
  - 1 `boolean` con prefijo semántico (`isActive`, `hasStock`, `canReserve`…)
  - 1 valor `null` que represente algo "no asignado aún" en tu dominio

### 2. `typeof` para verificar tipos

- Usar `typeof` para mostrar el tipo de al menos 3 variables

### 3. Al menos una conversión explícita

- Usar `Number()`, `String()` o `Boolean()` para convertir un valor y mostrarlo

### 4. Buena nomenclatura

- Todas las variables en `camelCase`
- Si hay constantes de configuración, en `UPPER_SNAKE_CASE`
- Al menos 1 boolean con prefijo `is`, `has`, `can` o `should`

### 5. Números con separadores si corresponde

- Si tu dominio maneja números grandes (precios, capacidades, cantidades), usar `_` donde mejore la lectura

---

## 📊 Ejemplo de salida esperada

> _Este ejemplo usa el dominio **Planetario** que no está asignado a ningún aprendiz._

```
===========================
FICHA DE DATOS: Planetario
===========================

Nombre:     Planetario Municipal
Capacidad:  250 personas
Precio:     $45,000 por función
Activo:     true

--- Tipos de datos ---
typeof nombre:    string
typeof capacidad: number
typeof precio:    number
typeof isActive:  boolean

--- Conversiones ---
Precio como texto: "$45,000"
typeof precio string: string

--- Valor nulo ---
Patrocinador actual: null
¿Es null?:  true

===========================
FIN DE FICHA
===========================
```

---

## 💡 Ejemplos de adaptación por dominio

| Dominio      | Variable `string` | Variable `number` | Boolean         | Valor `null`      |
| ------------ | ----------------- | ----------------- | --------------- | ----------------- |
| Planetario   | `exhibitionName`  | `capacity`        | `isOpen`        | `currentGuide`    |
| Acuario      | `speciesName`     | `tankVolume`      | `isEndangered`  | `feedingSchedule` |
| Museo        | `artworkTitle`    | `estimatedValue`  | `isOnDisplay`   | `currentOwner`    |
| Zoológico    | `animalName`      | `weightKg`        | `isInEnclosure` | `veterinarian`    |
| Observatorio | `eventName`       | `durationMinutes` | `isVisible`     | `nextObservation` |

---

## 🛠️ Instrucciones

1. Abre `starter/script.js`
2. Lee los comentarios y completa cada `TODO`
3. Ejecuta tu script con `node starter/script.js`
4. Verifica que la salida sea coherente con tu dominio
5. Asegúrate de cumplir todos los requisitos antes de entregar

---

## 📝 Criterios de evaluación

| Criterio                                 | Puntos      |
| ---------------------------------------- | ----------- |
| Script funciona sin errores              | 20 pts      |
| Uso correcto de `const` / `let`          | 20 pts      |
| Tipos de datos correctos y `typeof`      | 20 pts      |
| Al menos una conversión explícita        | 15 pts      |
| Nomenclatura correcta                    | 15 pts      |
| Adaptación coherente al dominio asignado | 10 pts      |
| **Total**                                | **100 pts** |

**Mínimo para aprobar**: 70 pts

---

## 🔗 Navegación

[← Prácticas](../2-practicas/) | [README semana →](../README.md)
