import '@/scss/index.scss';

import {
  onAuthFormSubmit,
  onShowPasswordClick,
  onLogoutClick,
} from '@/js/auth.js';

import { onOpenVacancy } from '@/js/vacancies.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-auth-submit]');
  form?.addEventListener('submit', onAuthFormSubmit);

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
