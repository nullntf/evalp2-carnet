#!/bin/bash

echo "==================================="
echo "Sistema de Login - PHP & SQLite"
echo "==================================="
echo ""
echo "Iniciando servidor en http://localhost:8000"
echo ""
echo "Accede a:"
echo "  - Login: http://localhost:8000/frontend/index.html"
echo "  - Registro: http://localhost:8000/frontend/register.html"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo "==================================="
echo ""

php -S localhost:8000
