# Arrays: Métodos de Mutación

> **Semana 08 — Teoría 02/05**

Los **métodos de mutación** son funciones que **modifican el array original** (no crean uno nuevo). Son esenciales para gestionar listas dinámicas: agregar y quitar elementos.

---

## 🎯 Objetivos

- Agregar elementos al final con `push()` y al inicio con `unshift()`
- Eliminar elementos del final con `pop()` y del inicio con `shift()`
- Insertar, reemplazar y eliminar en cualquier posición con `splice()`
- Entender qué devuelven estos métodos

---

## 1. `push()` — Agregar al Final

`push()` agrega **uno o más elementos** al final del array y devuelve el **nuevo tamaño**.

```javascript
const tasks = ["diseñar", "codear"];

// Agregar un elemento
const newLength = tasks.push("testear");
console.log(tasks); // ["diseñar", "codear", "testear"]
console.log(newLength); // 3 — nuevo tamaño

// Agregar múltiples elementos a la vez
tasks.push("desplegar", "documentar");
console.log(tasks); // ["diseñar", "codear", "testear", "desplegar", "documentar"]
```

---

## 2. `pop()` — Eliminar del Final

`pop()` elimina el **último elemento** del array y lo **devuelve**.

```javascript
const tasks = ["diseñar", "codear", "testear"];

// Eliminar el último elemento
const removed = tasks.pop();
console.log(tasks); // ["diseñar", "codear"]
console.log(removed); // "testear" — el que se eliminó

// Pop en array vacío devuelve undefined
const empty = [];
console.log(empty.pop()); // undefined
```

---

## 3. `unshift()` — Agregar al Inicio

`unshift()` agrega **uno o más elementos** al **inicio** del array y devuelve el nuevo tamaño.

```javascript
const queue = ["segundo", "tercero"];

// Agregar un elemento al inicio
queue.unshift("primero");
console.log(queue); // ["primero", "segundo", "tercero"]

// Agregar múltiples al inicio
queue.unshift("cero-A", "cero-B");
console.log(queue); // ["cero-A", "cero-B", "primero", "segundo", "tercero"]
```

> ⚠️ `unshift()` es más lento que `push()` porque debe reordenar todos los índices.

---

## 4. `shift()` — Eliminar del Inicio

`shift()` elimina el **primer elemento** del array y lo **devuelve**.

```javascript
const queue = ["primero", "segundo", "tercero"];

// Eliminar el primer elemento (simula una fila/queue)
const first = queue.shift();
console.log(queue); // ["segundo", "tercero"]
console.log(first); // "primero" — el que se eliminó
```

---

## 5. Resumen: Los 4 Métodos Básicos

```javascript
const arr = ["b", "c", "d"];

arr.push("e"); // ["b", "c", "d", "e"] — agrega al final
arr.pop(); // ["b", "c", "d"]       — elimina del final
arr.unshift("a"); // ["a", "b", "c", "d"] — agrega al inicio
arr.shift(); // ["b", "c", "d"]       — elimina del inicio
```

| Método          | Posición | Acción  | Devuelve           |
| --------------- | -------- | ------- | ------------------ |
| `push(elem)`    | Final    | Agrega  | Nuevo tamaño       |
| `pop()`         | Final    | Elimina | Elemento eliminado |
| `unshift(elem)` | Inicio   | Agrega  | Nuevo tamaño       |
| `shift()`       | Inicio   | Elimina | Elemento eliminado |

---

## 6. `splice()` — Modificaciones en Cualquier Posición

`splice()` es el más poderoso: puede **insertar**, **reemplazar** y **eliminar** en cualquier posición.

### Firma del método

```javascript
array.splice(inicio, cantidadAEliminar, elem1, elem2, ...);
```

- **`inicio`**: índice donde comienza la operación
- **`cantidadAEliminar`**: cuántos elementos eliminar desde `inicio` (0 = solo insertar)
- **`elem1, elem2...`**: elementos a insertar en esa posición (opcional)

### Eliminar elementos

```javascript
const months = ["ene", "feb", "mar", "abr", "may"];

// Eliminar 1 elemento en índice 2
const removed = months.splice(2, 1);
console.log(months); // ["ene", "feb", "abr", "may"]
console.log(removed); // ["mar"] — siempre devuelve un array

// Eliminar 2 elementos desde índice 1
months.splice(1, 2);
console.log(months); // ["ene", "may"]
```

### Insertar sin eliminar

```javascript
const colors = ["rojo", "azul", "verde"];

// Insertar "naranja" en índice 1, sin eliminar nada
colors.splice(1, 0, "naranja");
console.log(colors); // ["rojo", "naranja", "azul", "verde"]
```

### Reemplazar elementos

```javascript
const days = ["lunes", "MARTES", "miércoles"];

// Reemplazar 1 elemento en índice 1
days.splice(1, 1, "martes");
console.log(days); // ["lunes", "martes", "miércoles"]
```

---

## 7. Diferencia Clave: Mutación vs Inmutabilidad

Estos métodos **modifican el array original**. Si necesitas conservar el original, primero copia el array (veremos esto con `spread` en el tema 05).

```javascript
const original = ["a", "b", "c"];

// ❌ Modifica el array original
original.push("d");
console.log(original); // ["a", "b", "c", "d"] — ya no es el mismo

// ✅ Hacer copia antes de modificar (con spread — tema 05)
const copy = [...original];
copy.push("e");
console.log(original); // ["a", "b", "c", "d"] — sin cambios
console.log(copy); // ["a", "b", "c", "d", "e"]
```

---

## 8. Ejemplo Práctico: Lista de Tareas

```javascript
// Gestión de una lista de tareas pendientes
const todoList = [];

// Agregar tareas
todoList.push("Revisar correo");
todoList.push("Preparar presentación");
todoList.push("Llamar al cliente");
console.log(`Tareas pendientes: ${todoList.length}`);
console.log(todoList);

// Marcar la primera como completada (eliminar del inicio)
const completed = todoList.shift();
console.log(`Completada: "${completed}"`);
console.log(`Tareas pendientes: ${todoList.length}`);

// Agregar tarea urgente al inicio
todoList.unshift("⚡ Tarea urgente");
console.log(todoList);
```

---

## ✅ Checklist de Verificación

- [ ] Agrego elementos al final con `push()` y al inicio con `unshift()`
- [ ] Elimino elementos del final con `pop()` y del inicio con `shift()`
- [ ] Sé qué devuelve cada método (tamaño vs elemento eliminado)
- [ ] Uso `splice()` para eliminar, insertar y reemplazar en posiciones intermedias
- [ ] Entiendo que estos métodos **modifican el array original**

---

## 📚 Recursos

- [MDN — Array.prototype.push()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN — Array.prototype.pop()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [MDN — Array.prototype.splice()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [javascript.info — Array methods](https://javascript.info/array-methods)
