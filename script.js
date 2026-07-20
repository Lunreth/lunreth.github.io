// Dark and Light Mode Handler
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme state on initialization
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '○ Tema Oscuro';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☼ Tema Claro';
}

// Toggle logic execution
themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '○ Tema Oscuro';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☼ Tema Claro';
        localStorage.setItem('theme', 'light');
    }
});
