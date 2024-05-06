<?php
session_start();

// Cek apakah pengguna sudah login
if (isset($_SESSION['username'])) {
    echo json_encode(array("status" => "already_logged_in", "username" => $_SESSION['username']));
    exit();
}

// Cek apakah ada data yang dikirimkan melalui POST
if (isset($_POST['username']) && isset($_POST['password'])) {
    // Proses autentikasi
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Disini Anda akan melakukan validasi dengan database, saya akan simulasi saja
    if ($username === "admin" && $password === "admin123") {
        // Autentikasi berhasil, simpan data pengguna dalam sesi
        $_SESSION['username'] = $username;
        echo json_encode(array("status" => "success", "username" => $username));
    } else {
        // Autentikasi gagal
        echo json_encode(array("status" => "failed"));
    }
} else {
    // Jika tidak ada data yang dikirimkan melalui POST
    echo json_encode(array("status" => "error", "message" => "Invalid request"));
}
?>
