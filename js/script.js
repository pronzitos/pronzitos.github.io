/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("return").style.fontSize = "3vw";
  } else {
    document.getElementById("return").style.fontSize = "5vw";
  }
}*/


$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
      margin: 10,
            nav: true,
      navText: [
          'PREV',
          'NEXT'
      ],
      slideSpeed : 300,
      paginationSpeed : 100,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      animateOut: 'fadeOut'
  });
 
});
