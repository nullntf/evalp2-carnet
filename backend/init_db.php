<?php
require_once __DIR__ . '/config/database.php';

echo "Inicializando base de datos...\n";

$database = new Database();
$database->initDatabase();

echo "Base de datos creada exitosamente!\n";
echo "Ubicación: " . __DIR__ . "/database.sqlite\n";
