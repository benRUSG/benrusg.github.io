window.addEventListener('scroll', burgermenu);

const burger = document.querySelector('#burger');
const burgercontainer = document.querySelector('#burger-container');
const wrapper = document.querySelector('#menu-wrapper');
//const burgerchecker = document.querySelector('#burger-checker');

function burgermenu(){

   var top = document.querySelector('body');
   //var windowheight = window.innerHeight;
   var revealtop = top.getBoundingClientRect().top;
   var revealpoint = -369;

   if(revealtop < revealpoint){
      burgercontainer.classList.add('on');
      wrapper.classList.add('slide');
   }
   else{
      burgercontainer.classList.remove('on');
      wrapper.classList.remove('slide');
      burger.classList.remove('checked');
      wrapper.classList.remove('in');
   }

}

burger.addEventListener("click", function(){
   burger.classList.toggle('checked');
   wrapper.classList.toggle('in');
 });