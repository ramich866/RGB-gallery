<?php

class CreateUsersTable
{
    public function up($pdo)
    {
        $sql = "CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password TEXT NOT NULL
        )";

        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    public function down($pdo)
    {
        $sql = "DROP TABLE IF EXISTS users";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }
}