// Carousel
const myCarouselElement = document.querySelector('#carouselExampleRide')

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
    // select header element
    const header = document.querySelector('header');
    // get rendered styles
    const styles = window.getComputedStyle(header);
    // Distance
    // const dist = 20;
    // set header height rendered style
    const headerHeight = styles.height;
    // set CSS as a value
    let elementList = document.querySelectorAll('.hero-grid');
    let elementListChild = document.querySelectorAll('.hero-img');

    for (let element of elementList) {
      element.style.setProperty("height", 'calc( 100svh - ' + headerHeight + ')');
    }
    for (let element of elementListChild) {
      element.style.setProperty("height", 'calc( 100svh - ' + headerHeight + ')');
      element.style.setProperty("width", 'calc( 100svh - ' + headerHeight + ')');
    }
  }
  addEventListener("resize", checkHeaderHeight);
  addEventListener("orientationchange", checkHeaderHeight);
  checkHeaderHeight();


  // Tab Outside btn

const activePane = document.querySelector('.tab-pane.active');
const activeTab = document.querySelector('.nav-link.active');
const trigger = document.querySelectorAll('.tab-btn');

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
