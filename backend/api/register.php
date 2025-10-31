<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/../models/User.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    
    if (!empty($data->username) && !empty($data->email) && !empty($data->password)) {
        $user = new User();
        $user->username = $data->username;
        $user->email = $data->email;
        $user->password = $data->password;
        
        // Validar si ya existe el usuario o email
        if ($user->usernameExists()) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'El nombre de usuario ya existe']);
            exit;
        }
        
        if ($user->emailExists()) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'El email ya está registrado']);
            exit;
        }
        
        // Validar formato de email
        if (!filter_var($user->email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Email inválido']);
            exit;
        }
        
        // Validar longitud de contraseña
        if (strlen($data->password) < 6) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'La contraseña debe tener al menos 6 caracteres']);
            exit;
        }
        
        if ($user->register()) {
            http_response_code(201);
            echo json_encode(['success' => true, 'message' => 'Usuario registrado exitosamente']);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Error al registrar usuario']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
