<?php
$host = "localhost";
$user = "root"; // Default XAMPP user
$password = ""; // No password in XAMPP by default
$database = "easygro"; // Change this to your database name

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>

