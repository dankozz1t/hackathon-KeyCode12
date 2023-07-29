import '@/scss/index.scss';

import {
  onAuthFormSumbit,
  onShowPasswordClick,
  onLogoutClick,
} from '@/js/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-auth-submit]');
  form?.addEventListener('submit', onAuthFormSumbit);

  const showPasswordButton = document.querySelector('[data-show-password]');
  showPasswordButton?.addEventListener('click', onShowPasswordClick);

  const logout = document.querySelector('[data-logout]');
  logout?.addEventListener('click', onLogoutClick);

  if (window.location.href.includes('vacancies')) {
    const vacanciesLink = document.querySelector('[data-vacancies-link]');
    vacanciesLink?.classList.add('active-link');
  }

  if (window.location.href.includes('dashboard')) {
    const dashboardLink = document.querySelector('[data-dashboard-link]');
    dashboardLink?.classList.add('active-link');
  }
});
import '@/services/chart.js';
import '@/services/datePicker.js';
