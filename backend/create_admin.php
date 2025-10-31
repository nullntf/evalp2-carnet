<?php
require_once __DIR__ . '/models/User.php';

echo "Creando usuario administrador...\n";

$user = new User();
$user->username = 'admin';
$user->email = 'admin@test.com';
$user->password = '123456';

// Verificar si ya existe
if ($user->usernameExists()) {
    echo "ERROR: El usuario 'admin' ya existe.\n";
    exit(1);
}

if ($user->emailExists()) {
    echo "ERROR: El email 'admin@test.com' ya está registrado.\n";
    exit(1);
}

// Registrar usuario
if ($user->register()) {
    echo "✓ Usuario admin creado exitosamente!\n";
    echo "  - Usuario: admin\n";
    echo "  - Email: admin@test.com\n";
    echo "  - Contraseña: 123456\n";
    exit(0);
} else {
    echo "ERROR: No se pudo crear el usuario admin.\n";
    exit(1);
}
