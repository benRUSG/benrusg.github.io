window.addEventListener('scroll', reveal);

function reveal(){
   var reveals = document.querySelectorAll('#book img, #book h2, #book p, #book figcaption');

   for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 10;

      if (!reveals[i].classList.contains('dont-reveal')) {
         if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('revealed')
         }
         else{
            reveals[i].classList.remove('revealed')
         }
       }
   }
}

