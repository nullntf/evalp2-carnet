// Calculadora de Área y Volumen

// Función para validar campo
function validateField(value, fieldName, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    const inputElement = document.getElementById(fieldName);
    
    // Limpiar error previo
    errorElement.textContent = '';
    inputElement.classList.remove('error');
    
    // Validar campo vacío
    if (value === '' || value === null) {
        errorElement.textContent = 'Este campo es obligatorio';
        inputElement.classList.add('error');
        return false;
    }
    
    // Convertir a número
    const numValue = parseFloat(value);
    
    // Validar que sea un número
    if (isNaN(numValue)) {
        errorElement.textContent = 'Debe ingresar un número válido';
        inputElement.classList.add('error');
        return false;
    }
    
    // Validar que sea positivo
    if (numValue <= 0) {
        errorElement.textContent = 'El valor debe ser mayor a 0';
        inputElement.classList.add('error');
        return false;
    }
    
    return true;
}

// Función para limpiar todos los errores de un formulario
function clearFormErrors(formId) {
    const form = document.getElementById(formId);
    const errorMessages = form.querySelectorAll('.error-message');
    const inputs = form.querySelectorAll('input');
    
    errorMessages.forEach(error => error.textContent = '');
    inputs.forEach(input => input.classList.remove('error'));
}

// Calculadora de Cilindro
if (document.getElementById('form-cilindro')) {
    document.getElementById('form-cilindro').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const radio = document.getElementById('cilindro-radio').value;
        const altura = document.getElementById('cilindro-altura').value;
        
        // Validar campos
        const radioValid = validateField(radio, 'cilindro-radio', 'error-cilindro-radio');
        const alturaValid = validateField(altura, 'cilindro-altura', 'error-cilindro-altura');
        
        if (!radioValid || !alturaValid) {
            return;
        }
        
        // Convertir a números
        const r = parseFloat(radio);
        const h = parseFloat(altura);
        
        // Calcular área y volumen
        // Área total = 2πr² + 2πrh = 2πr(r + h)
        const area = 2 * Math.PI * r * (r + h);
        
        // Volumen = πr²h
        const volumen = Math.PI * Math.pow(r, 2) * h;
        
        // Mostrar resultados
        document.getElementById('cilindro-area').textContent = area.toFixed(2) + ' u²';
        document.getElementById('cilindro-volumen').textContent = volumen.toFixed(2) + ' u³';
        
        // Mostrar tarjeta de resultados
        document.getElementById('resultado-cilindro').classList.remove('hidden');
    });
    
    // Limpiar errores al escribir
    ['cilindro-radio', 'cilindro-altura'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            const errorId = 'error-' + id;
            document.getElementById(errorId).textContent = '';
            this.classList.remove('error');
        });
    });
}

// Calculadora de Prisma Rectangular
if (document.getElementById('form-prisma')) {
    document.getElementById('form-prisma').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const largo = document.getElementById('prisma-largo').value;
        const ancho = document.getElementById('prisma-ancho').value;
        const alto = document.getElementById('prisma-alto').value;
        
        // Validar campos
        const largoValid = validateField(largo, 'prisma-largo', 'error-prisma-largo');
        const anchoValid = validateField(ancho, 'prisma-ancho', 'error-prisma-ancho');
        const altoValid = validateField(alto, 'prisma-alto', 'error-prisma-alto');
        
        if (!largoValid || !anchoValid || !altoValid) {
            return;
        }
        
        // Convertir a números
        const l = parseFloat(largo);
        const w = parseFloat(ancho);
        const h = parseFloat(alto);
        
        // Calcular área y volumen
        // Área total = 2(lw + lh + wh)
        const area = 2 * (l * w + l * h + w * h);
        
        // Volumen = l × w × h
        const volumen = l * w * h;
        
        // Mostrar resultados
        document.getElementById('prisma-area').textContent = area.toFixed(2) + ' u²';
        document.getElementById('prisma-volumen').textContent = volumen.toFixed(2) + ' u³';
        
        // Mostrar tarjeta de resultados
        document.getElementById('resultado-prisma').classList.remove('hidden');
    });
    
    // Limpiar errores al escribir
    ['prisma-largo', 'prisma-ancho', 'prisma-alto'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            const errorId = 'error-' + id;
            document.getElementById(errorId).textContent = '';
            this.classList.remove('error');
        });
    });
}

// Navegación entre vistas
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Obtener la vista objetivo
        const viewName = link.getAttribute('data-view');
        
        // Remover clase active de todos los links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Agregar clase active al link clickeado
        link.classList.add('active');
        
        // Ocultar todas las vistas
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        // Mostrar la vista seleccionada
        const targetView = document.getElementById('view-' + viewName);
        if (targetView) {
            targetView.classList.add('active');
        }
    });
});

// ============================================
// IDENTIFICADOR DE CUADRANTES
// ============================================

// Función para validar coordenada (permite negativos)
function validateCoordinate(value, fieldName, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    const inputElement = document.getElementById(fieldName);
    
    // Limpiar error previo
    errorElement.textContent = '';
    inputElement.classList.remove('error');
    
    // Validar campo vacío
    if (value === '' || value === null) {
        errorElement.textContent = 'Este campo es obligatorio';
        inputElement.classList.add('error');
        return false;
    }
    
    // Convertir a número
    const numValue = parseFloat(value);
    
    // Validar que sea un número
    if (isNaN(numValue)) {
        errorElement.textContent = 'Debe ingresar un número válido';
        inputElement.classList.add('error');
        return false;
    }
    
    return true;
}

// Función para actualizar el punto en el SVG
function updatePuntoSVG(x, y) {
    const punto = document.getElementById('punto-dinamico');
    const coords = document.getElementById('coords-dinamico');
    
    if (!punto || !coords) return;
    
    // Escalar las coordenadas al SVG (centro en 200, 200)
    // Máximo rango visible: -5 a 5 en cada eje
    const scale = 40; // 100 unidades SVG por cada 2.5 unidades del plano
    const svgX = 200 + (x * scale);
    const svgY = 200 - (y * scale); // Invertir Y porque SVG tiene Y hacia abajo
    
    // Limitar al área visible
    const limitedX = Math.max(10, Math.min(390, svgX));
    const limitedY = Math.max(10, Math.min(390, svgY));
    
    // Actualizar posición del punto
    punto.setAttribute('cx', limitedX);
    punto.setAttribute('cy', limitedY);
    punto.setAttribute('r', '8');
    punto.setAttribute('opacity', '1');
    
    // Actualizar texto de coordenadas
    coords.textContent = `(${x}, ${y})`;
    coords.setAttribute('x', limitedX + 12);
    coords.setAttribute('y', limitedY - 5);
    coords.setAttribute('opacity', '1');
}

// Función para identificar el cuadrante
function identificarCuadrante(x, y) {
    // Casos especiales
    if (x === 0 && y === 0) {
        return {
            tipo: 'origen',
            nombre: 'Origen',
            descripcion: 'El punto está en el origen (0,0)',
            clase: 'en-origen',
            icono: '⊙'
        };
    } else if (x === 0 && y !== 0) {
        return {
            tipo: 'eje-y',
            nombre: 'Eje Y',
            descripcion: 'El punto está sobre el eje Y',
            clase: 'en-eje-y',
            icono: '↕'
        };
    } else if (x !== 0 && y === 0) {
        return {
            tipo: 'eje-x',
            nombre: 'Eje X',
            descripcion: 'El punto está sobre el eje X',
            clase: 'en-eje-x',
            icono: '↔'
        };
    }
    
    // Determinar cuadrante
    if (x > 0 && y > 0) {
        return {
            tipo: 'cuadrante',
            numero: 1,
            nombre: 'Cuadrante I',
            descripcion: 'x > 0, y > 0 (positivo, positivo)',
            clase: 'cuadrante-1',
            icono: 'I'
        };
    } else if (x < 0 && y > 0) {
        return {
            tipo: 'cuadrante',
            numero: 2,
            nombre: 'Cuadrante II',
            descripcion: 'x < 0, y > 0 (negativo, positivo)',
            clase: 'cuadrante-2',
            icono: 'II'
        };
    } else if (x < 0 && y < 0) {
        return {
            tipo: 'cuadrante',
            numero: 3,
            nombre: 'Cuadrante III',
            descripcion: 'x < 0, y < 0 (negativo, negativo)',
            clase: 'cuadrante-3',
            icono: 'III'
        };
    } else if (x > 0 && y < 0) {
        return {
            tipo: 'cuadrante',
            numero: 4,
            nombre: 'Cuadrante IV',
            descripcion: 'x > 0, y < 0 (positivo, negativo)',
            clase: 'cuadrante-4',
            icono: 'IV'
        };
    }
}

// Manejador del formulario de cuadrantes
if (document.getElementById('form-cuadrante')) {
    document.getElementById('form-cuadrante').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const coordX = document.getElementById('coord-x').value;
        const coordY = document.getElementById('coord-y').value;
        
        // Validar campos
        const xValid = validateCoordinate(coordX, 'coord-x', 'error-coord-x');
        const yValid = validateCoordinate(coordY, 'coord-y', 'error-coord-y');
        
        if (!xValid || !yValid) {
            return;
        }
        
        // Convertir a números
        const x = parseFloat(coordX);
        const y = parseFloat(coordY);
        
        // Identificar cuadrante
        const resultado = identificarCuadrante(x, y);
        
        // Actualizar punto en SVG
        updatePuntoSVG(x, y);
        
        // Mostrar resultados
        document.getElementById('punto-coords').textContent = `(${x}, ${y})`;
        
        const iconElement = document.getElementById('cuadrante-icon');
        const textElement = document.getElementById('cuadrante-text');
        
        // Limpiar clases previas
        iconElement.className = 'cuadrante-icon';
        iconElement.classList.add(resultado.clase);
        iconElement.textContent = resultado.icono;
        
        // Actualizar texto
        textElement.innerHTML = `
            <h3>${resultado.nombre}</h3>
            <p>${resultado.descripcion}</p>
        `;
        
        // Mostrar tarjeta de resultados
        document.getElementById('resultado-cuadrante').classList.remove('hidden');
    });
    
    // Limpiar errores al escribir
    ['coord-x', 'coord-y'].forEach(id => {
        document.getElementById(id).addEventListener('input', function() {
            const errorId = 'error-' + id;
            document.getElementById(errorId).textContent = '';
            this.classList.remove('error');
        });
    });
}
