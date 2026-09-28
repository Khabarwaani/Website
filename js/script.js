(function(){
  'use strict';

  // Highlight active page link in navigation (static, zero scroll animation)
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

  // Natural scroll reveal (strictly one-way, never reverts, no layout displacement)
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach(function(el){
      var rect = el.getBoundingClientRect();
      if (rect.top < vh) {
        el.classList.add('in');
      }
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });

      revealEls.forEach(function(el){
        if (!el.classList.contains('in')) {
          io.observe(el);
        }
      });
    } else {
      revealEls.forEach(function(el){
        el.classList.add('in');
      });
    }
  }
})();
