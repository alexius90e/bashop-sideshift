const burgerButton = document.querySelector('.header__burger');

const nav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', (event) => {
  document.body.classList.toggle('active');
  event.currentTarget.classList.toggle('active');
  nav.classList.toggle('active');
});

nav.addEventListener('click', (event) => {
  const isNav = event.target === event.currentTarget;
  if (!isNav) {
    document.body.classList.toggle('active');
    event.currentTarget.classList.toggle('active');
    burgerButton.classList.toggle('active');
  }
});

const paralaxScreen = document.querySelector('.paralax-screen');

const gztCopyText = document.querySelector('.gzt__contract');

gztCopyText.addEventListener('click', (event) => {
  const text = event.currentTarget.innerText;
  navigator.clipboard.writeText(text);
});
