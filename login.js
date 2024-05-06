$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault(); // Hindari pengiriman form secara default

        var username = $('#username').val();
        var password = $('#password').val();

        // Kirim data login ke server menggunakan AJAX
        $.ajax({
            url: 'auth.php',
            type: 'POST',
            dataType: 'json',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if (response.status === 'success') {
                    // Redirect ke halaman lain atau lakukan tindakan setelah login berhasil
                    alert('Login berhasil');
                    window.location.href = 'dashboard.php'; // Ganti dengan halaman yang sesuai
                } else if (response.status === 'failed') {
                    alert('Login gagal. Periksa kembali username dan password Anda.');
                } else if (response.status === 'already_logged_in') {
                    alert('Anda sudah login sebagai ' + response.username);
                    window.location.href = 'dashboard.php'; // Redirect jika sudah login
                }
            },
            error: function(xhr, status, error) {
                console.error('Error: ' + status, error);
            }
        });
    });
});
