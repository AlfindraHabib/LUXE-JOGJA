<script>
            // Ambil elemen form
    const loginForm = document.getElementById('loginForm');

    // Tambahkan event listener untuk validasi sebelum submit
    loginForm.addEventListener('submit', function (event) {
                // Ambil nilai input
                const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validasi apakah input sudah diisi
    if (!nama) {
        alert('Nama wajib diisi!');
    event.preventDefault(); // Mencegah form dikirim
    return;
                }
    if (!email) {
        alert('Email wajib diisi!');
    event.preventDefault();
    return;
                }
    if (!password) {
        alert('Password wajib diisi!');
    event.preventDefault();
    return;
                }

    // Jika semua validasi lulus, form dapat dikirim
    alert('Form berhasil dikirim!');
            });
</script>