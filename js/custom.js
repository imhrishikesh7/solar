// page Load Jquery

jQuery(window).on('load', function() { // makes sure the whole site is loaded 
  // jQuery('#preloader').addClass('hidden').delay(6000); // will first fade out the loading animation 
  // jQuery('.hidden').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  
  setInterval(function(){
     setInterval(function(){ 
      jQuery('.org-bg').addClass("expand")
    }, 100);
      setInterval(function(){ 
      jQuery("#preloader").addClass("hidden")
    }, 1000);
  });
  // On instantiation
  //const text = baffle(".text__glitch");
  // text.set({
  //     characters: " HKWZEJCRUGJOTMMPBEJOHHKWZEJCRUGJOTMMPBEJOHHKWZE",
  //     speed: 150
  // });
  // text.start();
  // text.reveal(4000); 
  
  // After instantiation
  // baffle('.someSelector')
  //     .start()
  //     .set({
  //         characters: 'HKWZEJCRUGJOTMMPBEJOHHKWZEJCRUGJOTMMPBEJOHHKW',
  //         speed: 150
  //     });
  // text.start();
  // text.reveal(4000); 
  
})




gsap.registerPlugin(ScrollTrigger);
AOS.init({
  duration: 800,
  once: true
});
Splitting();




// function Particle( x, y, radius ) {
//   this.init( x, y, radius );
// }

// Particle.prototype = {

//   init: function( x, y, radius ) {

//     this.alive = true;

//     this.radius = radius || 10;
//     this.wander = 0.15;
//     this.theta = random( TWO_PI );
//     this.drag = 0.92;
//     this.color = '#fff';

//     this.x = x || 0.0;
//     this.y = y || 0.0;

//     this.vx = 0.0;
//     this.vy = 0.0;
//   },

//   move: function() {

//     this.x += this.vx;
//     this.y += this.vy;

//     this.vx *= this.drag;
//     this.vy *= this.drag;

//     this.theta += random( -0.5, 0.5 ) * this.wander;
//     this.vx += sin( this.theta ) * 0.1;
//     this.vy += cos( this.theta ) * 0.1;

//     this.radius *= 0.96;
//     this.alive = this.radius > 0.5;
//   },

//   draw: function( ctx ) {

//     ctx.beginPath();
//     ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// };





var prevScrollpos = window.pageYOffset;
var navHeight = $('.header').height();

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
   //>=, not <=
  if (scroll >= navHeight+30) {  
      $(".header").addClass("scrollUp");
  } else {
     $(".header").removeClass("scrollUp");
  }
});

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top =  - navHeight - 5 + "px";
  }
  prevScrollpos = currentScrollPos;
}

// home slider
var swiper = new Swiper(".home-swiper", {
    grabCursor: true,
    // effect: 'coverflow',
    effect: 'fade',
    crossFade: true,
    speed: 1200,
    slideShadows: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true,
      scale: 0.5,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: '.pagi-home',
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: '.home-next',
    //   prevEl: '.home-prev',
    // },
});

// number swiper
var swiper = new Swiper(".number-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".dispatch-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".about-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: true
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  breakpoints: {
    560: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    }
  }
});

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


var swiper = new Swiper(".people-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".awards-swiper", {
  // direction: 'vertical',
  // mousewheelControl: true,
  // slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper = new Swiper(".news-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".investor-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".media-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


// Preloader
(function($) {

  //mySplitText = new splitText(".splittext", {type:"words,chars"});
  gsap.set(".splittext", {perspective: 400});
  //chars = mySplitText.chars;


 var perfData = window.performance.timing,
     EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
     time = parseInt((EstimatedTime / 1000) % 60, 10) * 100;

 var PercentageID = $("#percentage"),
     LoaderID = $("#loading-bar span"),
     revealID = $("#logo-overlay"),
     start = 0,
     end = 100,
     duration = time;
 animateValue(PercentageID, LoaderID, revealID, start, end, duration);

 function animateValue(id, lid, rid, start, end, duration) {
   var range = end - start,
       current = start,
       increment = end > start ? 1 : -1,
       stepTime = Math.abs(Math.floor(duration / range)),
       obj = $(id);
       objLoader = $(lid);
       objReveal = $(rid);

   var timer = setInterval(function() {
     current += increment;
     $(obj).text(Math.floor(current / 4)); 
     $(objLoader).css("width",current+"%");
     $(objReveal).css("top",-current+"px"); 

       if (current == end) {
           clearInterval(timer);

           gsap.from('.giant-text',{
             duration: 0.5,
             opacity:0,
             y: 30,
             delay: 1.5
           });
            gsap.from('.img-girl',{
             duration: 0.8,
             opacity:0,
             x: -30,
             delay: 2
           });

           gsap.from('#standing',{
             duration: 0.5,
             opacity:0,
             delay: 2
           });

           gsap.from('.banner-logo',{
             duration: 0.5,
             opacity:0,
             y: -30,
             delay: 3
           });

           gsap.from('.red-box', {
             duration: 1.2, 
             opacity:0, 
             y:80,
             ease:"back", 
             delay: 2}
           );

         



           // gsap intro
           // gsap.from('.navbar-brand',{opacity:0, y: 30,duration: 0.5, delay: 1.5});
           // gsap.from('.navbar-nav>li', {opacity:0, y: 30, ease: "power3.out", duration: 0.8, delay: 1.5, stagger: 0.1});
           // gsap.from("#banner-intro", {opacity:0, y: 30, ease: "back", duration: 1, delay: 2});
          
       }
   }, stepTime);
 }

 setInterval(function() {
   $("body").addClass("page-loaded");
 }, time);


})(jQuery);







// gsap.to('#footerLogoBig', {
//   scrollTrigger: {
//     trigger: '#footer',
//     start:'top center',
//     end:'top center',
//     //markers: true,
//     scrub: 1
//   },
//   y: 200
// });












//Show more and less
$(".show-more").click(function () {
  if ($(".text").hasClass("show-more-height")) {
    $(this).text("...Show Less");
  } else {
    $(this).text("...Show More");
  }

  $(".text").toggleClass("show-more-height");
});