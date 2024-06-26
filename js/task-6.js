document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');
  const fragment = document.createDocumentFragment();

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount, fragment);
      input.value = '';
      boxesContainer.appendChild(fragment);
    }
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });

  function createBoxes(amount, fragment) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
});