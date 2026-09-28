(function(){
  'use strict';

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
  var allNavLinks = document.querySelectorAll('.nav-link, .navlinks a');
  allNavLinks.forEach(function(link){
    var href = link.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'index.html')){
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Sticky nav elevation observer
  var navSection = document.getElementById('navSection');
  var brandHeader = document.querySelector('.site-brand-header');
  if (navSection && brandHeader && 'IntersectionObserver' in window) {
    var stickyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          navSection.classList.add('is-stuck');
        } else {
          navSection.classList.remove('is-stuck');
        }
      });
    }, { threshold: [0] });
    stickyObserver.observe(brandHeader);
  }

  // Active link auto-centering on mobile / overflow
  var activeLink = document.querySelector('.nav-link.active, .navlinks a.active');
  var navTrack = document.getElementById('navTrack');
  if (activeLink && navTrack) {
    setTimeout(function() {
      activeLink.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }, 120);
  }
})();
