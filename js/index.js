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

const paralaxScreen = document.querySelector('.paralax-screen');

let oldScrollY = window.scrollY;
let scrollDirection = 'up';

const paralaxTop = document.getElementById('paralaxTop');
const paralaxBottom = document.getElementById('paralaxBottom');

// window.addEventListener('scrollend', (event) => {
//   if (oldScrollY < window.scrollY) {
//     scrollDirection = 'down';
//   } else {
//     scrollDirection = 'up';
//   }
//   oldScrollY = window.scrollY;

//   const paralaxBlockHeight = paralaxTop.offsetHeight;

//   const isTopParalax = oldScrollY >= 0 && oldScrollY <= paralaxBlockHeight;
//   const isBottomParalax = oldScrollY > paralaxBlockHeight && oldScrollY <= paralaxBlockHeight * 2;

//   if (isTopParalax && scrollDirection === 'down') {
//     console.log('top down');
//     paralaxBottom.scrollIntoView({behavior: "smooth"})
//   } else if (isBottomParalax && scrollDirection === 'up') {
//     console.log('bottonm up');
//     paralaxTop.scrollIntoView({behavior: "smooth"})
//   }
// });

// paralaxTop.addEventListener('scroll', () => {
//   console.log(scrollDirection);
// });

const gztCopyText = document.querySelector('.gzt__contract');

gztCopyText.addEventListener('click', (event) => {
  const text = event.currentTarget.innerText;
  navigator.clipboard.writeText(text);
});
