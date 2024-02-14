
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
logo.addEventListener('click', () => {
   toogleMenu();
});

const navLink = document.querySelectorAll('.sub-nav .nav-item');

for(var i =0; i < navLink.length; i++) {
  (function(i) {
    navLink[i].addEventListener('click', function(e) {
      toogleMenu();;
      });
   })(i);
}
