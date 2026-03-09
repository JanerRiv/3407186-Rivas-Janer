# 🚀 Proyecto Semanal — Semana 06: Reporte con Bucles

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Implementar un **sistema de reporte** que procese una colección de datos de tu dominio asignado usando todos los tipos de bucle vistos esta semana.

---

## 📋 Tu dominio asignado

**Dominio**: El instructor te ha asignado un dominio único al inicio del trimestre.

Cada aprendiz tiene un dominio diferente. Adapta todos los elementos de este proyecto a ese contexto.

---

## ✅ Requisitos Funcionales

Tu `script.js` debe implementar los siguientes 6 componentes:

### 1. Datos del dominio (array de elementos)

Define un array con **al menos 6 elementos** representativos de tu dominio. Cada elemento debe tener al menos: nombre, categoría y un valor numérico relevante.

### 2. Listar todos los elementos con `for...of`

Recorre el array e imprime cada elemento con su información básica.

### 3. Contar por categoría con `for...of` + contador

Usando un `for...of`, cuenta cuántos elementos pertenecen a cada categoría usando contadores.

### 4. Calcular totales y promedio con acumulador

Suma el valor numérico de todos los elementos y calcula el promedio.

### 5. Encontrar el máximo y mínimo

Identifica el elemento con mayor y menor valor numérico.

### 6. Generar reporte con `for` clásico

Usando un `for` clásico, imprime un reporte numerado de todos los elementos, indicando si su valor está por encima o por debajo del promedio.

---

## 💡 Ejemplos de adaptación por dominio

| Dominio     | Elemento    | Categorías posibles          | Valor numérico        |
| ----------- | ----------- | ---------------------------- | --------------------- |
| Biblioteca  | Libro       | ficción, no-ficción, ciencia | número de páginas     |
| Farmacia    | Medicamento | analgésico, antibiótico      | stock disponible      |
| Gimnasio    | Máquina     | cardio, fuerza, flexibilidad | horas de uso diario   |
| Restaurante | Platillo    | entrada, principal, postre   | precio                |
| Hospital    | Paciente    | urgente, programado, alta    | días de estancia      |
| Cine        | Película    | acción, comedia, drama       | duración en minutos   |
| Hotel       | Habitación  | simple, doble, suite         | precio por noche      |
| Escuela     | Estudiante  | primaria, secundaria         | calificación promedio |

---

## 🗂️ Estructura de archivos

```
3-proyecto/
├── README.md          ← este archivo
└── starter/
    └── script.js      ← aquí desarrollas tu proyecto
```

> **Nota**: La carpeta `solution/` existe localmente para referencia del instructor
> pero **no se publica en GitHub**. Debes completar el proyecto por tu cuenta.

---

## 📤 Entregables

1. `starter/script.js` completamente implementado con tu dominio
2. El script debe ejecutarse sin errores: `node starter/script.js`
3. La salida debe mostrar todos los componentes del reporte

---

## 🛠️ Evaluación

Ver `rubrica-evaluacion.md` para los criterios detallados (100 puntos).

| Componente                        | Puntos |
| --------------------------------- | ------ |
| Script sin errores                | 20     |
| `for` clásico funcional           | 20     |
| `while` o `do...while`            | 15     |
| `for...of` funcional              | 15     |
| `break` o `continue`              | 10     |
| Contadores y/o acumuladores       | 10     |
| Dominio coherente + código limpio | 10     |
