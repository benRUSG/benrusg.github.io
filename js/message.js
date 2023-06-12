// check for saved 'messageSent' in localStorage
let messageSent = localStorage.getItem('messageSent'); 


const msgmodal = document.querySelector('.message-sent-modal');

const container = document.querySelector('.container');

const closebtn = document.querySelector('.remove-msg-sent');

function storeMsgSent(){
   localStorage.setItem('messageSent', 'sent'); 
 }

 function removeMsgSent(){
    localStorage.removeItem('messageSent'); 
  }


// If DomReady check if messageSent === sent > modal '.message-sent-modal'
document.addEventListener("DOMContentLoaded", () => {
   if (messageSent === 'sent') {
      document.body.classList.add('no-scroll');
      msgmodal.classList.add('open');
      msgmodal.classList.add('small');
      //container.classList.add('zoom');
   }  

   // on click '.memove-msg-sent' > remove messageSent

   closebtn.addEventListener('click', () => {
      removeMsgSent(); 
      document.body.classList.remove('no-scroll');
      msgmodal.classList.remove('open');
      msgmodal.classList.remove('small');
      //container.classList.remove('zoom');
   });
 });

