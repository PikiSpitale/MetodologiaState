# Patrón State

El **patrón State** es un patrón de diseño que permite que un objeto cambie su comportamiento dependiendo del estado en el que se encuentre.  

En lugar de usar muchos `if` o `switch`, cada **estado** se maneja en una clase distinta.

Podemos pensarlo como una persona:  
No reacciona igual si está feliz, enojada o cansada. Es la misma persona, pero su comportamiento cambia según su estado.  

De la misma forma, con el patrón **State**, el objeto principal delega la acción al estado actual, y cuando ese estado cambia, también cambia cómo se comporta el objeto.

---

## 📌 Motivación

La idea del patrón **State** surge porque, cuando un objeto puede estar en varios estados, mezclar toda la lógica en una sola clase se vuelve un problema.  

Ejemplo: un **reproductor de música** tiene estados como *reproduciendo*, *pausado* o *detenido*, y cada uno hace cosas distintas.

### Problemas sin usar State:
- La lógica de todos los estados queda en una sola clase gigante.
- Cada vez que agregás un nuevo estado (ej. “repetir” o “shuffle”) hay que modificar esa clase, con riesgo de romper cosas.
- La clase crece demasiado y es difícil de entender.
- Un cambio pequeño puede afectar otros estados.
- No se puede reutilizar la lógica de un estado en otros proyectos.

### Beneficios de usar State:
- Código más limpio y fácil de entender.
- Agregar o modificar estados sin romper el resto.
- Los estados pueden reutilizarse en otros contextos.
- Mantenimiento más seguro y rápido.

---

## ⚙️ Implementación

El patrón **State** da lugar a varias decisiones de implementación:

### 1. ¿Quién define las transiciones entre estados?
- **El Contexto (clase principal):** decide cuándo cambiar de estado.  
- **Los Estados:** cada uno puede decidir la transición al siguiente.

✅ Ventaja: más flexible.  
❌ Desventaja: crea dependencias entre estados.  

> 💡 **Idea clave:** El patrón no obliga a quién decide los cambios; puede hacerlo el Contexto o los propios Estados.

---

### 2. Alternativa basada en tablas
En vez de objetos, se puede usar una **tabla de transiciones**:

✅ Ventaja: fácil de modificar (solo editás la tabla).  
❌ Desventajas:  
- Más lenta que usar clases y métodos.  
- Difícil de leer y mantener.  
- Añadir acciones extra se complica.  
- Muy rígido.  

> 💡 **Idea clave:** las tablas son ordenadas y fáciles de editar, pero menos flexibles y claras que usar objetos.

---

### 3. Crear y destruir objetos Estado
Opciones:
- **Crear todos al inicio y nunca destruirlos** → más rápido, pero ocupa memoria.  
- **Crear solo cuando se necesitan y destruir después** → ahorra memoria, pero consume más CPU.  

> 💡 **Idea clave:** se puede optar por *performance* o *ahorro de memoria* según el caso.

---

### 4. Usar herencia dinámica
En algunos lenguajes (como *Self*) un objeto puede **cambiar de clase en tiempo de ejecución**, sin necesidad del patrón State.  

Pero como no todos los lenguajes lo soportan, el patrón sigue siendo muy útil.  

> 💡 **Idea clave:** en lenguajes comunes (Java, C#, Python, etc.), el patrón State es la mejor opción para manejar cambios de comportamiento.

---

## ✅ Conclusión

El **Patrón State**:
- Organiza el comportamiento dependiente del estado en clases separadas.  
- Hace que el código sea más claro, extensible y seguro de mantener.  
- Conviene usarlo cuando un objeto tiene **muchos estados con lógica diferente** y queremos evitar condicionales enormes.

---
