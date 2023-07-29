import '@/scss/index.scss';

import { onAuthFormSumbit, onShowPasswordClick } from '@/js/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-auth-submit]');
  form.addEventListener('submit', onAuthFormSumbit);

  const showPasswordButton = document.querySelector('[data-show-password]');
  showPasswordButton.addEventListener('click', onShowPasswordClick);
});
