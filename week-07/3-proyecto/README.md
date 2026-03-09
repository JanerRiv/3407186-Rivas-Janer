# Proyecto Semana 07 — Librería de Funciones Reutilizables

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Construir una **librería de funciones reutilizables** aplicada a tu dominio asignado. Cada función debe estar bien nombrada, recibir información por parámetros, devolver un valor con `return` y estar separada del código que produce efectos (como `console.log`).

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

Cada aprendiz trabaja sobre un dominio diferente para garantizar implementaciones originales.

---

## ✅ Requisitos Funcionales

El script debe implementar las siguientes 6 secciones:

### Sección 1 — Datos del dominio

Define las constantes globales y un array de datos representativos de tu dominio (mínimo 5 elementos).

### Sección 2 — Función de formato

Una arrow function que recibe un elemento de tu dominio y devuelve un string formateado para mostrar en pantalla.

### Sección 3 — Función de cálculo

Una función pura que recibe valores numéricos del dominio y calcula un resultado (precio final, promedio, total, etc.).

### Sección 4 — Función de validación

Una función que recibe un elemento y devuelve `true` o `false` según una regla del dominio (disponible, activo, vigente, etc.).

### Sección 5 — Función con parámetro por defecto

Una función que usa al menos un parámetro por defecto significativo para el dominio.

### Sección 6 — Reporte usando callbacks

Un reporte final que recorre los datos con un bucle `for...of` y usa las funciones anteriores como callbacks o funciones de formato.

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio     | Función formato        | Función cálculo                    | Función validación        |
| ----------- | ---------------------- | ---------------------------------- | ------------------------- |
| Biblioteca  | `formatBook(book)`     | `calculateFine(days)`              | `isAvailable(book)`       |
| Farmacia    | `formatMedicine(med)`  | `calculateTotal(price, qty)`       | `inStock(medicine)`       |
| Gimnasio    | `formatMember(member)` | `calculateBMI(weight, height)`     | `isActive(member)`        |
| Restaurante | `formatDish(dish)`     | `calculateOrderTotal(items)`       | `isAvailable(dish)`       |
| Banco       | `formatAccount(acc)`   | `calculateInterest(balance, rate)` | `isActive(account)`       |
| Hospital    | `formatPatient(p)`     | `calculateAge(birthYear)`          | `hasAppointment(patient)` |
| Cine        | `formatMovie(movie)`   | `calculateRevenue(tickets, price)` | `isNowShowing(movie)`     |
| Hotel       | `formatRoom(room)`     | `calculateStayCost(nights, rate)`  | `isAvailable(room)`       |

---

## 🏗️ Estructura

```
3-proyecto/
└── starter/
    └── script.js   ← Completa los TODOs con tu dominio
```

> La solución de referencia no se publica. Implementa tu propia versión.

---

## 📊 Evaluación (100 pts)

| Criterio                                     | Puntos |
| -------------------------------------------- | ------ |
| Script ejecuta sin errores                   | 20 pts |
| Al menos 3 funciones declaradas              | 15 pts |
| Todas usan `return` correctamente            | 15 pts |
| Al menos 2 arrow functions                   | 15 pts |
| Al menos 1 parámetro por defecto             | 10 pts |
| Al menos 1 función usada como valor/callback | 15 pts |
| Dominio coherente + clean code               | 10 pts |

---

## 🛠️ Entregables

1. `starter/script.js` con todos los TODOs implementados
2. El script debe ejecutarse con `node script.js` sin errores
3. Comentarios en español explicando cada sección
