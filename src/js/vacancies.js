import { vacancies } from '@/plug-data/vacancies-data';

export function onOpenVacancy(event) {
  if (event.target && event.target.hasAttribute('data-open-edit-modal')) {
    return;
  }

  event.currentTarget.toggleAttribute('data-vacancy-show-more');
}

function generateVacancyHTML(vacancy) {
  return `
  <li>
    <div class="vacancy" data-vacancy>
      <div class="vacancy__header">
        <p class="vacancy__status">${vacancy.status}</p>
        <p class="vacancy__date">${vacancy.date}</p>
      </div>

      <h2 class="vacancy__company">${vacancy.company}</h2>

      <h3 class="vacancy__position">${vacancy.position}</h3>

      <a href="${vacancy.link}" class="vacancy__link" target="_blank">
        ${vacancy.link}
      </a>

      <div class="vacancy--open mt-20">
        <h4 class="vacancy__sub-title">Template</h4>
        <p class="vacancy__description mb-10">${vacancy.template}</p>

        <h4 class="vacancy__sub-title">My note</h4>
        <p class="vacancy__description">${vacancy.note}</p>

        <div class="vacancy__edit">
          <button data-open-edit-modal class="vacancy__button" type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
    </li>
  `;
}

export function renderVacancies() {
  const vacanciesTitle = document.querySelector('[data-vacancies-title]');
  vacanciesTitle.textContent = `${vacancies.length} Vacancies`;

  const vacanciesContainer = document.querySelector(
    '[data-vacancies-container]'
  );

  if (!vacanciesContainer) {
    console.error('Vacancies container not found.');
    return;
  }

  vacancies.forEach(vacancy => {
    const vacancyHTML = generateVacancyHTML(vacancy);
    vacanciesContainer.insertAdjacentHTML('beforeend', vacancyHTML);
  });
}

export function attachVacancyClickEvent() {
  const vacancies = document.querySelectorAll('[data-vacancy]');
  vacancies.forEach(vacancy => {
    vacancy.addEventListener('click', onOpenVacancy);
  });
}

renderVacancies();
attachVacancyClickEvent();
