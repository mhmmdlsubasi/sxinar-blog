// script.js
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.set
