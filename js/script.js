(function(){
  'use strict';

  // Highlight active page link in navigation (static, no scroll animation)
  var path = window.location.pathname.replace(/\/$/, "");
  var currentPage = path.split('/').pop() || 'index.html';
  var allNavLinks = document.querySelectorAll('.nav-link, .navlinks a');
  allNavLinks.forEach(function(link){
    var href = link.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'index.html')){
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Reveal ONLY when needed (for content that is initially invisible / off-screen)
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    var motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var vh = window.innerHeight || document.documentElement.clientHeight;

    // Content already visible above the fold renders immediately with zero transition delay
    revealEls.forEach(function(el){
      var rect = el.getBoundingClientRect();
      if (rect.top < vh - 20) {
        el.classList.add('in', 'no-anim');
      }
    });

    // Content that is off-screen / invisible gets a smooth, one-time reveal as user scrolls to it
    if (motionOk && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach(function(el){
        if (!el.classList.contains('in')) {
          io.observe(el);
        }
      });
    } else {
      revealEls.forEach(function(el){
        el.classList.add('in', 'no-anim');
      });
    }
  }
})();
