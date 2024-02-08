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

    for (let element of elementList) {
      element.style.setProperty("height", 'calc( 100svh - ' + headerHeight + ')');
    }
  }
  addEventListener("resize", checkHeaderHeight);
  addEventListener("orientationchange", checkHeaderHeight);
  checkHeaderHeight();

  