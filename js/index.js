const burgerButton = document.querySelector('.header__burger');

const header = document.querySelector('.header');

const nav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', (event) => {
  document.body.classList.toggle('active');
  event.currentTarget.classList.toggle('active');
  nav.classList.toggle('active');
  header.classList.toggle('active');
});

nav.addEventListener('click', (event) => {
  const isNav = event.target === event.currentTarget;
  if (!isNav) {
    document.body.classList.toggle('active');
    event.currentTarget.classList.toggle('active');
    burgerButton.classList.toggle('active');
    header.classList.toggle('active');
  }
});

const gztCopyText = document.querySelector('.gzt__contract');

gztCopyText.addEventListener('click', (event) => {
  const text = event.currentTarget.innerText;
  navigator.clipboard.writeText(text);
});

const paralaxTop = document.getElementById('paralaxTop');
const paralaxScreen = document.querySelector('.paralax-screen');

window.addEventListener('scroll', (event) => {
  const paralaxHeight = paralaxScreen.offsetHeight;

  if (window.scrollY > paralaxHeight * 0.35) paralaxTop.classList.add('active');
  if (window.scrollY <= paralaxHeight * 0.35) paralaxTop.classList.remove('active');

});

paralaxTop.addEventListener('scroll', () => {
  console.log(scrollDirection);
});
