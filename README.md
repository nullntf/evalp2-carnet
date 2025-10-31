# Sistema de Login con PHP y SQLite

Sistema simple de autenticación de usuarios con PHP y SQLite.

## 📁 Estructura del Proyecto

```
evalp2-carnet/
├── backend/
│   ├── api/
│   │   ├── login.php          # Endpoint de login
│   │   ├── register.php       # Endpoint de registro
│   │   ├── logout.php         # Endpoint de logout
│   │   └── check_session.php  # Verificar sesión
│   ├── config/
│   │   └── database.php       # Configuración de base de datos
│   ├── models/
│   │   └── User.php           # Modelo de usuario
│   ├── database.sqlite        # Base de datos SQLite
│   └── init_db.php            # Script de inicialización
├── frontend/
│   ├── index.html             # Página de login
│   ├── register.html          # Página de registro
│   ├── dashboard.html         # Dashboard protegido
│   ├── styles.css             # Estilos CSS
│   └── app.js                 # Lógica JavaScript
└── README.md
```

## ✅ Requisitos Instalados

- PHP 8.4.11 con CLI
- SQLite3
- Extensiones PHP: pdo_sqlite, sqlite3

## 🚀 Cómo Usar

### 1. Iniciar el Servidor PHP

Desde la raíz del proyecto, ejecuta:

```bash
php -S localhost:8000
```

### 2. Acceder a la Aplicación

Abre tu navegador y visita:
- **Login:** http://localhost:8000/frontend/index.html
- **Registro:** http://localhost:8000/frontend/register.html

### 3. Crear un Usuario

1. Ve a la página de registro
2. Completa el formulario con:
   - Usuario
   - Email
   - Contraseña (mínimo 6 caracteres)
   - Confirmar contraseña
3. Click en "Registrarse"

### 4. Iniciar Sesión

1. Ve a la página de login
2. Ingresa tu usuario y contraseña
3. Click en "Iniciar Sesión"
4. Serás redirigido al dashboard

## 🔧 Reiniciar la Base de Datos

Si necesitas reiniciar la base de datos:

```bash
cd backend
rm database.sqlite
php init_db.php
```

## 📡 API Endpoints

### POST /backend/api/register.php
Registrar un nuevo usuario.

**Body:**
```json
{
  "username": "usuario",
  "email": "email@ejemplo.com",
  "password": "contraseña"
}
```

### POST /backend/api/login.php
Iniciar sesión.

**Body:**
```json
{
  "username": "usuario",
  "password": "contraseña"
}
```

### POST /backend/api/logout.php
Cerrar sesión.

### GET /backend/api/check_session.php
Verificar si hay una sesión activa.

## 🔒 Características de Seguridad

- Contraseñas hasheadas con `password_hash()` (BCRYPT)
- Validación de datos de entrada
- Sanitización con `htmlspecialchars()`
- Prevención de inyección SQL con prepared statements
- Validación de formato de email
- Verificación de duplicados (username y email)

## 💾 Base de Datos

La base de datos SQLite se crea automáticamente en `backend/database.sqlite` con la siguiente estructura:

**Tabla: users**
- id (INTEGER PRIMARY KEY AUTOINCREMENT)
- username (TEXT NOT NULL UNIQUE)
- email (TEXT NOT NULL UNIQUE)
- password (TEXT NOT NULL)
- created_at (DATETIME DEFAULT CURRENT_TIMESTAMP)

## 🎨 Interfaz

- Diseño moderno y responsive
- Gradientes de colores
- Formularios validados
- Mensajes de éxito/error
- Compatible con dispositivos móviles