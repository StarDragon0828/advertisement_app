$(document).ready(function () {





  $('.thumbnail').on('click', function() {
    var clicked = $(this);
    var newSelection = clicked.data('big');
    var $img = $('.primary').css("background-image","url(" + newSelection + ")");
    clicked.parent().find('.thumbnail').removeClass('selected');
    clicked.addClass('selected');
    $('.primary').empty().append($img.hide().fadeIn('slow'));
  });


    const navbarMenu = document.getElementById("menuBar");
    const burgerMenu = document.getElementById("burger");
    const bgOverlay = document.querySelector(".overlay");
    
    console.log(burgerMenu);
    
    // Show Menu when Click the Burger
    // Hide Menu when Click the Overlay
    if (burgerMenu && navbarMenu && bgOverlay) {
      burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
      });
    
      bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
      });
    }
    
    // Hide Menu when Click the Links
    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
      });
    });
})