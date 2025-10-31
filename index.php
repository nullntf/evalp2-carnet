<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Login - PHP & SQLite</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            padding: 50px;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 500px;
        }
        
        h1 {
            color: #333;
            margin-bottom: 15px;
            font-size: 32px;
        }
        
        .subtitle {
            color: #666;
            margin-bottom: 40px;
            font-size: 16px;
        }
        
        .links {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .btn-secondary {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .info {
            margin-top: 40px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        
        .info h3 {
            color: #667eea;
            margin-bottom: 10px;
            font-size: 18px;
        }
        
        .info ul {
            text-align: left;
            color: #555;
            line-height: 1.8;
        }
        
        .info li {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔐 Sistema de Login</h1>
        <p class="subtitle">PHP & SQLite - Sistema de Autenticación</p>
        
        <div class="links">
            <a href="frontend/index.html" class="btn btn-primary">
                Iniciar Sesión
            </a>
            <a href="frontend/register.html" class="btn btn-secondary">
                Registrarse
            </a>
        </div>
        
        <div class="info">
            <h3>Características del Sistema</h3>
            <ul>
                <li>✓ Registro de usuarios</li>
                <li>✓ Autenticación segura</li>
                <li>✓ Contraseñas encriptadas (BCRYPT)</li>
                <li>✓ Sesiones de usuario</li>
                <li>✓ Base de datos SQLite</li>
                <li>✓ API RESTful</li>
                <li>✓ Interfaz responsive</li>
            </ul>
        </div>
    </div>
</body>
</html>
