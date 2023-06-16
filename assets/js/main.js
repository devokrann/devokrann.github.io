function mainFunction() {
  "use strict";

  //Sticky header on scroll
  const selectHeader = document.querySelector('#navbar-main');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('shadow-sm') : selectHeader.classList.remove('shadow-sm');
    });
  }

  //Scroll top button
  const scrollTop = document.querySelector('#scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.remove('d-none') : scrollTop.classList.add('d-none');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

}

document.addEventListener('DOMContentLoaded', mainFunction());