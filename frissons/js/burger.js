
const burgerContainer = document.querySelector('#burger-container');
const burger = document.querySelector('#burger');
const wrapper = document.querySelector('#myTab');
const logo = document.querySelector('.nav-item.logo');
const blanket = document.querySelector('.blanket');

const toogleMenu = () => {
   burger.classList.toggle('checked');
   wrapper.classList.toggle('in');
   burgerContainer.classList.toggle('no-bg');
   blanket.classList.toggle('on');
 }


burger.addEventListener('click', () => {
   toogleMenu();
});

wrapper.addEventListener('click', () => {
   if (wrapper.classList.contains("in")) {
      toogleMenu();
    }
});
