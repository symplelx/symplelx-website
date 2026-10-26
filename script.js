// --- OBSŁUGA MOTYWU (DARK / LIGHT) ---
// Jeśli chcesz dodać przycisk motywu w HTML, wystarczy ID 'theme-toggle'
const themeToggleBtn = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('user_theme') || 'dark';

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('user_theme', theme);
  
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}
setTheme(currentTheme);


// --- OBSŁUGA JĘZYKA (PL / EN) ---
const langToggleBtn = document.getElementById('lang-toggle');
const langPlSpan = document.getElementById('lang-pl');
const langEnSpan = document.getElementById('lang-en');

let currentLang = localStorage.getItem('user_lang') || 'pl';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('user_lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'en') {
    if (langPlSpan) langPlSpan.classList.remove('active');
    if (langEnSpan) langEnSpan.classList.add('active');
  } else {
    if (langEnSpan) langEnSpan.classList.remove('active');
    if (langPlSpan) langPlSpan.classList.add('active');
  }

  document.querySelectorAll('[data-pl][data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.innerHTML = text;
    }
  });
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'pl' ? 'en' : 'pl');
  });
}

setLanguage(currentLang);
