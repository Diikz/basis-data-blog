// Logika JavaScript untuk fitur Mode Terang/Gelap

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // 1. Inisialisasi: Periksa preferensi tersimpan atau preferensi sistem
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
        } else if (savedTheme === 'dark' || !savedTheme) {
            // Default ke dark mode jika belum ada atau tersimpan 'dark'
            body.classList.remove('light-mode');
        }
        updateToggleIcon();
    }

    // 2. Fungsi Toggle Tema
    function toggleTheme() {
        if (body.classList.contains('light-mode')) {
            // Ganti ke Dark Mode
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // Ganti ke Light Mode
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
        updateToggleIcon();
    }

    // 3. Update Icon (Menggunakan Emoji sebagai ikon)
    function updateToggleIcon() {
        if (body.classList.contains('light-mode')) {
            themeToggle.textContent = '🌙'; // Bulan untuk Dark Mode
            themeToggle.setAttribute('aria-label', 'Ganti ke mode gelap');
        } else {
            themeToggle.textContent = '☀️'; // Matahari untuk Light Mode
            themeToggle.setAttribute('aria-label', 'Ganti ke mode terang');
        }
    }

    // Listener untuk Tombol
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Muat tema saat halaman dimuat
    loadTheme();
});
