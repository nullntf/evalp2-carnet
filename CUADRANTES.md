# 📍 Sistema de Identificación de Cuadrantes

## Funcionalidad Implementada

### Identificador de Cuadrantes del Plano Cartesiano

Sistema completo que permite identificar en qué cuadrante del plano cartesiano 2D se encuentra un punto dado sus coordenadas (x, y).

## 🎯 Características Principales

### Identificación de Posición

El sistema identifica correctamente:

#### **Cuadrantes:**
- **Cuadrante I:** x > 0, y > 0 (positivo, positivo)
- **Cuadrante II:** x < 0, y > 0 (negativo, positivo)
- **Cuadrante III:** x < 0, y < 0 (negativo, negativo)
- **Cuadrante IV:** x > 0, y < 0 (positivo, negativo)

#### **Casos Especiales:**
- **Origen:** x = 0, y = 0 → "El punto está en el origen (0,0)"
- **Eje Y:** x = 0, y ≠ 0 → "El punto está sobre el eje Y"
- **Eje X:** x ≠ 0, y = 0 → "El punto está sobre el eje X"

## ✅ Validaciones Implementadas

### Validación de Entrada

1. **Campos obligatorios:** Ambas coordenadas deben estar completas
2. **Valores numéricos:** Solo acepta números válidos (enteros o decimales)
3. **Valores positivos y negativos:** Acepta cualquier número real
4. **Mensajes de error claros:**
   - "Este campo es obligatorio"
   - "Debe ingresar un número válido"

### Retroalimentación Visual

- **Borde rojo** en campos con error
- **Fondo rosa claro** en campos inválidos
- **Mensaje de error** específico debajo de cada campo
- **Borrado automático** de errores al escribir

## 🎨 Interfaz Visual

### Componentes de la Interfaz

#### 1. Formulario de Entrada
- **2 campos numéricos:** Coordenada X y Coordenada Y
- **Placeholders informativos:** "Ej: 5 o -3"
- **Botón grande:** "🔍 Identificar Cuadrante"
- **Validación en tiempo real**

#### 2. Tarjeta de Información
- **Referencia rápida** de los 4 cuadrantes
- **Badges de colores** para cada cuadrante:
  - 🔵 Cuadrante I (azul)
  - 🟠 Cuadrante II (naranja)
  - 🟣 Cuadrante III (morado)
  - 🟢 Cuadrante IV (verde)
- **Condiciones matemáticas** (x > 0, y > 0, etc.)

#### 3. Plano Cartesiano SVG
- **Visualización completa** del plano con ejes
- **4 cuadrantes coloreados** suavemente
- **Cuadrícula de referencia**
- **Ejes X e Y con flechas**
- **Etiquetas de cuadrantes** (I, II, III, IV)
- **Origen marcado** (0,0)
- **Punto dinámico** que se actualiza al calcular

#### 4. Tarjeta de Resultados
- **Coordenadas del punto:** Formato (x, y)
- **Icono circular grande** con color del cuadrante
- **Nombre del cuadrante/ubicación**
- **Descripción detallada** con condiciones
- **Animación de entrada** (slide down)

## 🎨 Diseño Visual

### Colores por Cuadrante/Ubicación

- **Cuadrante I:** Azul (#1976d2 → #42a5f5)
- **Cuadrante II:** Naranja (#f57c00 → #ffb74d)
- **Cuadrante III:** Morado (#7b1fa2 → #ba68c8)
- **Cuadrante IV:** Verde (#388e3c → #66bb6a)
- **Origen:** Gris (#424242 → #757575)
- **Eje X:** Rojo (#d32f2f → #f44336)
- **Eje Y:** Cyan (#0288d1 → #03a9f4)

### Efectos Visuales

- **Gradientes modernos** en todos los elementos
- **Sombras suaves** en tarjetas
- **Animaciones fluidas** al mostrar resultados
- **Punto rojo dinámico** en el SVG que muestra la ubicación
- **Layout de 2 columnas:** Formularios a la izquierda, SVG a la derecha
- **Responsive:** Se adapta a una columna en pantallas pequeñas

## 📐 Plano Cartesiano SVG

### Características del SVG

- **Tamaño:** 400x400 px (viewBox)
- **4 cuadrantes coloreados** con transparencia
- **Cuadrícula auxiliar** para referencia
- **Ejes principales** en gris oscuro
- **Flechas indicadoras** en los ejes
- **Etiquetas:** X, Y en los ejes
- **Números romanos:** I, II, III, IV en cada cuadrante
- **Origen marcado:** Círculo pequeño en (0,0)

### Punto Dinámico

- **Color:** Rojo (#d32f2f)
- **Tamaño:** 8px de radio
- **Borde blanco** para destacar
- **Etiqueta de coordenadas** junto al punto
- **Escalado automático:** Se adapta al rango -5 a +5
- **Limitado al área visible**

## 🔢 Ejemplos de Uso

### Cuadrante I
```
Entrada: x = 3, y = 2
Resultado: Cuadrante I
Descripción: x > 0, y > 0 (positivo, positivo)
```

### Cuadrante II
```
Entrada: x = -4, y = 5
Resultado: Cuadrante II
Descripción: x < 0, y > 0 (negativo, positivo)
```

### Cuadrante III
```
Entrada: x = -2, y = -3
Resultado: Cuadrante III
Descripción: x < 0, y < 0 (negativo, negativo)
```

### Cuadrante IV
```
Entrada: x = 5, y = -1
Resultado: Cuadrante IV
Descripción: x > 0, y < 0 (positivo, negativo)
```

### Casos Especiales

```
Entrada: x = 0, y = 0
Resultado: Origen
Descripción: El punto está en el origen (0,0)

Entrada: x = 0, y = 5
Resultado: Eje Y
Descripción: El punto está sobre el eje Y

Entrada: x = 3, y = 0
Resultado: Eje X
Descripción: El punto está sobre el eje X
```

## 📁 Archivos Modificados

### `frontend/dashboard.html`
- Vista completa de cuadrantes con formulario
- SVG del plano cartesiano embebido
- Tarjetas de información y resultados
- Total: ~130 líneas nuevas

### `frontend/dashboard-styles.css`
- Estilos para la vista de cuadrantes
- Layout de 2 columnas responsive
- Estilos del SVG y tarjetas
- Clases de colores para cada cuadrante
- Total: ~293 líneas nuevas

### `frontend/calculadora.js`
- Función de validación de coordenadas
- Función para identificar cuadrantes
- Función para actualizar punto en SVG
- Manejador del formulario con validaciones
- Total: ~189 líneas nuevas

## 🧮 Lógica Implementada

### Algoritmo de Identificación

```javascript
function identificarCuadrante(x, y) {
    // Casos especiales (ejes y origen)
    if (x === 0 && y === 0) return "Origen"
    if (x === 0 && y !== 0) return "Eje Y"
    if (x !== 0 && y === 0) return "Eje X"
    
    // Cuadrantes
    if (x > 0 && y > 0) return "Cuadrante I"
    if (x < 0 && y > 0) return "Cuadrante II"
    if (x < 0 && y < 0) return "Cuadrante III"
    if (x > 0 && y < 0) return "Cuadrante IV"
}
```

### Escalado del Punto en SVG

```javascript
// Centro del SVG: (200, 200)
// Escala: 40 unidades SVG = 1 unidad del plano
const svgX = 200 + (x * 40);
const svgY = 200 - (y * 40); // Invertir Y
```

## 📱 Responsive Design

### Desktop (> 1024px)
- Layout de 2 columnas
- SVG sticky a la derecha
- Formularios e info a la izquierda

### Tablet (768px - 1024px)
- Layout de 1 columna
- SVG debajo del formulario

### Mobile (< 768px)
- Coordenadas en 1 columna
- Tarjetas con padding reducido
- Resultado centrado verticalmente

## 🚀 Tecnologías

- **HTML5:** Estructura semántica
- **CSS3:** Grid, Flexbox, Gradientes, Animaciones
- **JavaScript ES6+:** Funciones arrow, template literals
- **SVG:** Gráfico vectorial del plano cartesiano

## ✨ Mejoras Futuras Sugeridas

- Historial de puntos evaluados
- Graficar múltiples puntos
- Calcular distancia desde el origen
- Exportar imagen del plano con el punto
- Modo interactivo: click en el SVG para obtener coordenadas

---

**Estado:** ✅ Completado y funcional  
**Rama:** `plano`  
**Pruebas:** Validado con casos positivos, negativos y especiales
