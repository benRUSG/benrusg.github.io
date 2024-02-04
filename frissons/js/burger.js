
const burger = document.querySelector('#burger');
const wrapper = document.querySelector('#menu-wrapper');

const toogleMenu = () => {
   burger.classList.toggle('checked');
   wrapper.classList.toggle('in');
 }

burger.addEventListener('click', () => {
   toogleMenu();
});

