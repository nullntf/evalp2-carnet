<?php
class Database {
    private $db_file = __DIR__ . '/../database.sqlite';
    private $conn = null;
    
    public function getConnection() {
        if ($this->conn === null) {
            try {
                $this->conn = new PDO("sqlite:" . $this->db_file);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            } catch(PDOException $e) {
                die("Error de conexión: " . $e->getMessage());
            }
        }
        return $this->conn;
    }
    
    public function initDatabase() {
        $conn = $this->getConnection();
        
        $sql = "CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )";
        
        try {
            $conn->exec($sql);
            return true;
        } catch(PDOException $e) {
            die("Error al crear tabla: " . $e->getMessage());
        }
    }
}
