$("#header-carousel").owlCarousel({
  center: true,
  // autoplay: true,
  autoplay: true,
  stagePadding: 20,
  loop: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  items: 1,
  responsive: {
    768: {
      items: 3,
    },
    576: {
      items: 2,
    },
    320: {
      items: 1,
    },
  },
});

$("#product-carousel-1").owlCarousel({
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  loop: true,
  items: 1,
  responsive: {
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});
$("#product-carousel-2").owlCarousel({
  margin: 15,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  loop: true,
  items: 1,
  responsive: {
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  },
});


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText:["<div class='nav-btn prev-slide'><i class='fa-solid fa-arrow-left'></i></div>","<div class='nav-btn next-slide'><i class='fa-solid fa-arrow-right'></i></div>"],
  autplay: true,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
