import './sass/main.scss';

// mobile menu
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger__button'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();


// {/* <script type="text/javascript"> */}
// $(document).ready(function(){ 
  $('.single-item').slick({
dots: true,
infinite: false,
speed: 300,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  dots: true
}
},
{
breakpoint: 600,
settings: {
  slidesToShow: 2,
  slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
// });
