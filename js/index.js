const btn = document.querySelector('.js-menu-btn')
const nav = document.querySelector('.js-menu');
const yearTargets = document.querySelectorAll('.js-year');

yearTargets.forEach((_target) => {
  _target.textContent= new Date().getFullYear();
})

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
