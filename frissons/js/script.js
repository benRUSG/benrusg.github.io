// Carousel
const myCarouselElement = document.querySelector('#carousel-hero-section')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 6000
})
/* const myCarouselElement = document.querySelector('#carousel-hero')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000
})
 */

// Hero Carousel Height
// check header height
function checkHeaderHeight() {
    var r = document.querySelector(':root');
    const header = document.querySelector('header');
    const styles = window.getComputedStyle(header);

    // set header height rendered style
    const headerHeight = styles.height;
    // set CSS as a value to an element
/*     let elementList = document.querySelectorAll('.hero-grid');
    let elementListChild = document.querySelectorAll('.hero-img');

    for (let element of elementList) {
      element.style.setProperty("height", 'calc( 100svh - ' + headerHeight + ')');
    }
    for (let element of elementListChild) {
      element.style.setProperty("height", 'calc( 100svh - ' + headerHeight + ')');
      element.style.setProperty("width", 'calc( 100svh - ' + headerHeight + ')');
    } */
    r.style.setProperty('--full-height', 'calc( 100svh - ' + headerHeight + ' )');

  }
  addEventListener("resize", checkHeaderHeight);
  addEventListener("orientationchange", checkHeaderHeight);
  checkHeaderHeight();


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
