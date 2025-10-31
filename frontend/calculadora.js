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
