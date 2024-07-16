(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
   /* $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    }); */
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);


$(document).ready(function () {
    /*var lastScrollTop = 0;
    var lastTime = 0;
    var scrollSpeedThreshold = 1.5; // Ajustez ce seuil selon vos besoins (en pixels/ms)

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var currentTime = new Date().getTime();
        var timeDiff = currentTime - lastTime;

        if (timeDiff > 0) {
            var scrollSpeed = Math.abs(scrollTop - lastScrollTop) / timeDiff;

            if (scrollTop > lastScrollTop && scrollSpeed > scrollSpeedThreshold) {
                // Scrolling down fast
                $('.sticky-top').removeClass('shadow-sm').css('top', '-105px');
            } else if (scrollTop < lastScrollTop) {
                // Scrolling up
                $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            }
        }

        lastScrollTop = scrollTop;
        lastTime = currentTime;
    });*/

/*    var lastScrollTop = 0;
var scrollSpeedThreshold = 1.5; // Ajustez ce seuil selon vos besoins (en pixels/ms)
var menuHeight = $('.sticky-top').outerHeight(); // Hauteur initiale du menu

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (scrollTop > menuHeight) {
            $('.sticky-top').addClass('slim-menu');
        }
    } else {
        // Scrolling up
        $('.sticky-top').removeClass('slim-menu');
    }

    lastScrollTop = scrollTop;
}); */


    // Function to track scroll direction and update scroll-padding-top
  let lastWindowScrollTop = 0;
  const htmlElement = document.querySelector('#le-stage');

  window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastWindowScrollTop) {
          // Scrolling down
          htmlElement.classList.remove('scrolling-up');
      } else {
          // Scrolling up
          htmlElement.classList.add('scrolling-up');
      }
  

    lastWindowScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');

    // Scroll vers l'élément cible avec un offset de -80px
    $('html, body').animate({
        scrollTop: $(target).offset().top - 80
    }, 1000);
});
});

