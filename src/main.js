import '@/scss/index.scss';

export function onLogoutClick() {
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('vacancies')) {
    const vacanciesLink = document.querySelector('[data-vacancies-link]');
    vacanciesLink?.classList.add('active-link');
  }

  if (window.location.href.includes('dashboard')) {
    const dashboardLink = document.querySelector('[data-dashboard-link]');
    dashboardLink?.classList.add('active-link');
  }

  const logout = document.querySelector('[data-logout]');
  logout?.addEventListener('click', onLogoutClick);

  const userEmail = document.querySelector('[data-user-email]');
  if (userEmail) {
    userEmail.textContent =
      localStorage.getItem('userEmail') || 'testemail@gmail.com';
  }
});
import '@/services/chart.js';
import '@/services/datePicker.js';
