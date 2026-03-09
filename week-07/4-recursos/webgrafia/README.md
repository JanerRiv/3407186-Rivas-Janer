# 🌐 Webgrafía — Semana 07: Funciones

Documentación, artículos y herramientas online para la semana de funciones.

---

## 📖 Documentación Oficial (MDN)

| Recurso                | URL                                                                                         | Descripción                             |
| ---------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------- |
| `function` declaration | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function          | Sintaxis y comportamiento de `function` |
| Arrow functions        | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions    | Guía completa de `=>`                   |
| Default parameters     | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters | Parámetros por defecto con ejemplos     |
| Rest parameters        | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters    | `...args` en funciones                  |
| `return` statement     | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/return            | Comportamiento de `return`              |
| Closures               | https://developer.mozilla.org/es/docs/Web/JavaScript/Closures                               | Scope y closures en profundidad         |
| Functions (guía)       | https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions                        | Guía completa del lenguaje              |

---

## 📘 javascript.info (Tutorial)

| Sección              | URL                                            | Descripción                          |
| -------------------- | ---------------------------------------------- | ------------------------------------ |
| Function basics      | https://javascript.info/function-basics        | Declaración, parámetros, `return`    |
| Function expressions | https://javascript.info/function-expressions   | Diferencia declaration vs expression |
| Arrow functions      | https://javascript.info/arrow-functions-basics | Sintaxis `=>` básica                 |
| Callbacks            | https://javascript.info/callbacks              | Funciones como argumentos            |
| Closure              | https://javascript.info/closure                | Scope y closures                     |
| Variable scope       | https://javascript.info/var                    | `var` vs `let`/`const` en scope      |

> 💡 Versión en español disponible en [https://es.javascript.info](https://es.javascript.info)

---

## 🛠️ Herramientas de Práctica

### Python Tutor — Visualizador de Scope

- **URL**: [https://pythontutor.com/javascript.html](https://pythontutor.com/javascript.html)
- **Para qué**: Visualizar paso a paso cómo se crean y destruyen los scopes
- **Cómo usarlo**: Pegar código JavaScript → clic en "Visualize Execution" → usar flechas para avanzar paso a paso
- **Recomendado para**: scope local/global, closures, orden de ejecución de callbacks

```javascript
// Ejemplo para probar en Python Tutor:
const multiplier = (factor) => {
  return (number) => number * factor;
};

const triple = multiplier(3);
console.log(triple(5));
```

---

### JSFiddle / CodePen — Entornos de Prueba

| Herramienta | URL                  | Descripción                         |
| ----------- | -------------------- | ----------------------------------- |
| JSFiddle    | https://jsfiddle.net | Editor online rápido, sin registro  |
| CodePen     | https://codepen.io   | Editor con vista previa HTML+CSS+JS |
| PlayCode    | https://playcode.io  | Editor Node.js online               |

---

## 📰 Artículos Complementarios

| Artículo                          | URL                                                                                                                   | Nivel        |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ |
| Funciones puras en JS             | https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/                                 | Intermedio   |
| Higher-Order Functions explicadas | https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/                                     | Intermedio   |
| Arrow functions vs `function`     | https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/ | Principiante |

> Fuente: freeCodeCamp — artículos gratuitos con ejemplos prácticos

---

## 🔍 Búsquedas Útiles

Cuando encuentres un error con funciones, busca con estas frases en Google o Stack Overflow:

- `"is not a function" javascript` — error al llamar algo que no es función
- `"undefined is not a function"` — función no definida al momento de llamarla
- `"expected expression, got return"` — error de sintaxis en arrow function implícita
- `javascript function hoisting` — orden de declaración de funciones
- `javascript closure example` — entender closures con ejemplos

---

## ✅ Ruta de Consulta Recomendada

```
1. Tengo una duda de sintaxis
   → MDN (documentación oficial)

2. Quiero entender un concepto con ejemplos
   → javascript.info (tutorial interactivo)

3. Necesito ver cómo ejecuta el código paso a paso
   → Python Tutor (visualizador)

4. Quiero practicar código rápido
   → JSFiddle o PlayCode

5. Busco artículos y explicaciones más amplias
   → freeCodeCamp
```
