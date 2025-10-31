// Configuración de la API
const API_URL = 'http://localhost:8000/backend/api';

// Función para mostrar mensajes
function showMessage(elementId, message, type) {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    messageElement.style.display = 'block';
    
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}

// Manejo del formulario de login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch(`${API_URL}/login.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                showMessage('message', data.message, 'success');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                showMessage('message', data.message, 'error');
            }
        } catch (error) {
            showMessage('message', 'Error de conexión con el servidor', 'error');
        }
    });
}

// Manejo del formulario de registro
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            showMessage('message', 'Las contraseñas no coinciden', 'error');
            return;
        }
        
        try {
            const response = await fetch(`${API_URL}/register.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage('message', data.message + '. Redirigiendo...', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                showMessage('message', data.message, 'error');
            }
        } catch (error) {
            showMessage('message', 'Error de conexión con el servidor', 'error');
        }
    });
}

// Manejo del dashboard
if (window.location.pathname.includes('dashboard.html')) {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        window.location.href = 'index.html';
    } else {
        // Actualizar información del usuario en la vista principal
        const displayUsername = document.getElementById('displayUsername');
        const displayEmail = document.getElementById('displayEmail');
        const displayId = document.getElementById('displayId');
        
        if (displayUsername) displayUsername.textContent = user.username;
        if (displayEmail) displayEmail.textContent = user.email;
        if (displayId) displayId.textContent = user.id;
        
        // Actualizar nombre en el sidebar
        const sidebarUsername = document.getElementById('sidebarUsername');
        if (sidebarUsername) sidebarUsername.textContent = user.username;
    }
    
    // Manejo del botón de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                const response = await fetch(`${API_URL}/logout.php`, {
                    method: 'POST',
                });
                
                const data = await response.json();
                
                if (data.success) {
                    localStorage.removeItem('user');
                    window.location.href = 'index.html';
                }
            } catch (error) {
                showMessage('message', 'Error al cerrar sesión', 'error');
            }
        });
    }
}
