// Carousel
const myCarouselElement = document.querySelector('#carousel-hero')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000
})

// Hero Carousel Height


// check header height
function checkHeaderHeight() {
    // select header element
    const header = document.querySelector('header');
    // get rendered styles
    const styles = window.getComputedStyle(header);
    // set header height rendered style
    const headerHeight = styles.height;
    // set CSS as a value
    document.documentElement.style.setProperty("--sl-header-height", headerHeight);
  }
  addEventListener("resize", checkHeaderHeight);
  addEventListener("orientationchange", checkHeaderHeight);
  checkHeaderHeight();

  