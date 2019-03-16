$(function () {
  "use strict";
  let content = `<a href="#" id="scrollToTop"> <i class="fas fa-arrow-up centerarrow"></i></a>`;
  $('body').append(content);

  $(document).ready(function () {
    document.getElementById('scrollToTop').onclick = function () {
        scrollTo(document.documentElement, 0, 1250);   
     }
         
     function scrollTo(element, to, duration) {
         var start = element.scrollTop,
             change = to - start,
             currentTime = 0,
             increment = 20;
             
         var animateScroll = function(){        
             currentTime += increment;
             var val = Math.easeInOutQuad(currentTime, start, change, duration);
             element.scrollTop = val;
             if(currentTime < duration) {
                 setTimeout(animateScroll, increment);
             }
         };
         animateScroll();
     }
     
     //t = current time
     //b = start value
     //c = change in value
     //d = duration
     Math.easeInOutQuad = function (t, b, c, d) {
       t /= d/2;
         if (t < 1) return c/2*t*t + b;
         t--;
         return -c/2 * (t*(t-2) - 1) + b;
     };
  });
});
