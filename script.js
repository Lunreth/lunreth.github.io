// Dark and Light Mode Handler
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme state on initialization
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '??';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '??';
}

// Toggle logic execution
themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '??';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '??';
        localStorage.setItem('theme', 'light');
    }
});
