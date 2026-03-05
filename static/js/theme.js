(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Check for a saved theme in localStorage
    let savedTheme = localStorage.getItem('theme');

    // If no theme is saved, check the user's system preference
    if (!savedTheme) {
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Apply the initial theme
    applyTheme(savedTheme);

    // Add event listener for the toggle button
    themeToggle.addEventListener('click', function() {
        let newTheme = 'light';
        if (!body.classList.contains('dark-mode')) {
            newTheme = 'dark';
        }
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
})();
