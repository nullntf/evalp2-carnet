# 🚀 Guía Rápida - Sistema de Login

## ✅ Todo está listo!

### El sistema incluye:

#### Backend (PHP + SQLite)
- ✅ PHP 8.4.11 instalado
- ✅ SQLite3 instalado con extensiones PDO
- ✅ Base de datos creada: `backend/database.sqlite`
- ✅ 4 endpoints API funcionando:
  - `POST /backend/api/register.php` - Registro
  - `POST /backend/api/login.php` - Login
  - `POST /backend/api/logout.php` - Logout
  - `GET /backend/api/check_session.php` - Verificar sesión

#### Frontend (HTML + CSS + JavaScript)
- ✅ Página de login (`frontend/index.html`)
- ✅ Página de registro (`frontend/register.html`)
- ✅ Dashboard protegido (`frontend/dashboard.html`)
- ✅ Estilos modernos con gradientes
- ✅ JavaScript para comunicación con API

## 🎯 Acceso Rápido

### El servidor está corriendo en: `http://localhost:8000`

### URLs principales:
- **Inicio:** http://localhost:8000/
- **Login:** http://localhost:8000/frontend/index.html
- **Registro:** http://localhost:8000/frontend/register.html

## 📝 Prueba Rápida

### 1. Registrar un usuario
```
1. Ve a: http://localhost:8000/frontend/register.html
2. Completa el formulario:
   - Usuario: test
   - Email: test@ejemplo.com
   - Contraseña: 123456
   - Confirmar: 123456
3. Click en "Registrarse"
4. Verás mensaje de éxito
```

### 2. Iniciar sesión
```
1. Ve a: http://localhost:8000/frontend/index.html
2. Ingresa:
   - Usuario: test
   - Contraseña: 123456
3. Click en "Iniciar Sesión"
4. Serás redirigido al dashboard
```

### 3. Cerrar sesión
```
1. En el dashboard, click en "Cerrar Sesión"
2. Serás redirigido al login
```

## 🛠️ Comandos Útiles

### Iniciar servidor
```bash
php -S localhost:8000
# o usando el script:
./start_server.sh
```

### Reiniciar base de datos
```bash
cd backend
rm database.sqlite
php init_db.php
```

### Ver usuarios en la base de datos
```bash
sqlite3 backend/database.sqlite "SELECT id, username, email, created_at FROM users;"
```

## 🔒 Seguridad Implementada

- ✓ Contraseñas hasheadas con BCRYPT
- ✓ Prepared statements (prevención de SQL injection)
- ✓ Sanitización de inputs con htmlspecialchars()
- ✓ Validación de email
- ✓ Validación de contraseña (mínimo 6 caracteres)
- ✓ Verificación de duplicados (username y email únicos)
- ✓ Manejo de sesiones PHP

## 📂 Estructura de Archivos

```
evalp2-carnet/
├── backend/
│   ├── api/
│   │   ├── check_session.php
│   │   ├── login.php
│   │   ├── logout.php
│   │   └── register.php
│   ├── config/
│   │   └── database.php
│   ├── models/
│   │   └── User.php
│   ├── database.sqlite (20 KB)
│   └── init_db.php
├── frontend/
│   ├── app.js
│   ├── dashboard.html
│   ├── index.html
│   ├── register.html
│   └── styles.css
├── index.php (página de inicio)
├── start_server.sh
├── README.md
└── GUIA_RAPIDA.md (este archivo)
```

## 🎨 Interfaz

- Diseño moderno con gradientes
- Responsive (se adapta a móviles)
- Mensajes de éxito/error
- Validación de formularios
- Experiencia de usuario fluida

## ⚙️ Tecnologías

- **Backend:** PHP 8.4.11
- **Base de datos:** SQLite3
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Servidor:** PHP Built-in Server

---

**¡Listo para usar!** 🎉
