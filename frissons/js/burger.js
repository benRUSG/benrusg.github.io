
const burger = document.querySelector('#burger');
const wrapper = document.querySelector('#myTab');
const logo = document.querySelector('.nav-item.logo');

const toogleMenu = () => {
   burger.classList.toggle('checked');
   wrapper.classList.toggle('in');
/*    logo.classList.toggle('in'); */
 }

burger.addEventListener('click', () => {
   toogleMenu();
});

logo.addEventListener('click', () => {
   toogleMenu();
});

