import { vacancies } from '@/plug-data/vacancies-data';

export function onOpenVacancy(event) {
  event.currentTarget.toggleAttribute('data-vacancy-show-more');

  if (event.target) {
    console.log('event.target:', event.target);
    // data-open-edit-modal
  }
}

const vacancy = document.querySelector('[data-vacancy]');
vacancy?.addEventListener('click', onOpenVacancy);

export function renterVacancies() {
  event.currentTarget.toggleAttribute('data-vacancy-show-more');

  if (event.target) {
    console.log('event.target:', event.target);
    // data-open-edit-modal
  }
}
