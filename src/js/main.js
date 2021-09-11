$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  autoWidth: true,
  startPosition: 1,
  dots: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: { items: 1 },
    375: { items: 1 },
    768: { items: 1 },
    960: { items: 2 },
    1200: { items: 3 },
  },
});
