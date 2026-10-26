/**
 * Obsługa dynamicznej zmiany motywu (Dark / Light Mode)
 * Zapamiętuje preference użytkownika w localStorage
 */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  // Pobranie zachowanego motywu lub domyślny 'dark'
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateToggleUI(savedTheme);

  // Zdarzenie kliknięcia przełącznika
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleUI(newTheme);
  });

  // Aktualizacja ikony oraz tekstu na przycisku
  function updateToggleUI(theme) {
    if (theme === 'dark') {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Ciemny';
    } else {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Jasny';
    }
  }
});
