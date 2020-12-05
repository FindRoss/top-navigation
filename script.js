const hambun = document.querySelector('.ham-bum');
const navMenu = document.querySelector('.nav--list');


hambun.addEventListener('click', () => {
  hambun.classList.toggle('close');
  navMenu.classList.toggle('show');
})