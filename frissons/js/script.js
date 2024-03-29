// Carousel
const myCarouselElement = document.querySelector('#carousel-hero-section')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 6000
})

// Hero Carousel Height
// check header height
function checkHeaderHeight() {
    var r = document.querySelector(':root');
    var body = document.querySelector('body');
    const header = document.querySelector('header');
    const styles = window.getComputedStyle(header);
    // set header height rendered style
    const headerHeight = styles.height;
    r.style.setProperty('--header-height', headerHeight);
  }
  addEventListener("resize", checkHeaderHeight);
  addEventListener("orientationchange", checkHeaderHeight);
  checkHeaderHeight();


// Hero-Punch Width

function checkPunchWidth() {
  
    var r = document.querySelector(':root');
    const punch = document.querySelector('#home-tab-pane .active .hero-grid .hero-punch h1');
    const punchWidth = punch.offsetWidth;
    if(window.innerWidth > 822) {
      r.style.setProperty('--punch-width', punchWidth + 'px');
    }
    else {
      r.style.setProperty('--punch-width', '0');
    }
  }
addEventListener("resize", checkPunchWidth);
addEventListener("orientationchange", checkPunchWidth);
checkPunchWidth();


// Tab Outside btn
/* const carousel = document.querySelector('#carousel-hero'); */
const activePane = document.querySelector('.tab-pane.active');
const activeTab = document.querySelector('.nav-link.active');
const trigger = document.querySelectorAll('.tab-btn');

for(var i =0; i < trigger.length; i++) {
  (function(i) {
    trigger[i].onmouseenter = function() { 
      myCarouselElement.setAttribute('data-bs-pause', 'hover');
    };     
   })(i);
}

for(var i =0; i < trigger.length; i++) {
  (function(i) {
    trigger[i].onmouseleave = function() { 
      myCarouselElement.setAttribute('data-bs-pause', 'false');
    };     
   })(i);
}

for(var i =0; i < trigger.length; i++) {
  (function(i) {
    trigger[i].onmousedown = function() { 
      const tab = this.dataset['tabtarget'];
      outsideToogleMenu(this.dataset['tabtarget'], this.dataset['panetarget']);
    };     
   })(i);
}


const outsideToogleMenu = (tab, pane) => {
   activeTab.classList.toggle('active');
   activePane.classList.remove('active', 'show');

   document.querySelector(tab).classList.add('active');
   document.querySelector(pane).classList.add('active', 'show');
 }
