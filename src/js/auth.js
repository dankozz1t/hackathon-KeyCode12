// import { loginUser, registerUser } from '@/services/authApi.js';

export function onAuthFormSubmit(event) {
  event.preventDefault();

  console.log('event:', event.target);
  window.location.href = 'dashboard.html';
}

export function onShowPasswordClick() {
  const passwordInput = document.querySelector('[data-password]');
  const showPasswordButton = document.querySelector('[data-show-password]');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.textContent = 'Hide password';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.textContent = 'Show password';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-auth-submit]');
  form?.addEventListener('submit', onAuthFormSubmit);

  const showPasswordButton = document.querySelector('[data-show-password]');
  showPasswordButton?.addEventListener('click', onShowPasswordClick);
});
