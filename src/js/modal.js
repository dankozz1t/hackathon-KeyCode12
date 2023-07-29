function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

function handleOutsideClick(event) {
  const modal = event.target.closest("[data-modal]");
  if (modal && event.target === modal) {
    closeModal(modal);
  }
}

const buttons = document.querySelectorAll("[data-modal-target]");
buttons.forEach(button => {
  const targetModalId = button.dataset.modalTarget;
  const targetModal = document.getElementById(targetModalId);

  button.addEventListener("click", () => openModal(targetModal));
});

const modals = document.querySelectorAll("[data-modal]");
modals.forEach(modal => {
  const closeBtn = modal.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal(modal));
  }
});

window.addEventListener("click", handleOutsideClick);