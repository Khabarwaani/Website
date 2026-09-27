(function(){
  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  // Highlight active page link in navigation
  var path = window.location.pathname.replace(/\/$/, "");
  var currentPage = path.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.navlinks a');
  navLinks.forEach(function(link){
    var href = link.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'index.html')){
      link.classList.add('active');
    }
  });
})();
