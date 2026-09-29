(function(){
  'use strict';

  // Highlight active page link and parent dropdown in universal navigation
  var path = window.location.pathname.replace(/\/$/, "");
  var currentPage = path.split('/').pop() || 'index.html';

  // Map sub-pages to their parent dropdown id
  var parentDropdownMap = {
    'thesis.html': 'dropdownWhy',
    'media.html': 'dropdownWhy',
    'genz.html': 'dropdownWhy',
    'reels.html': 'dropdownWhy',
    'ai-newsroom.html': 'dropdownWhy',
    'architecture.html': 'dropdownHow',
    'pipeline.html': 'dropdownHow',
    'editorial.html': 'dropdownHow',
    'studio.html': 'dropdownHow',
    'distribution.html': 'dropdownWhat'
  };

  // Highlight direct nav links
  var allNavLinks = document.querySelectorAll('.nav-link, .navlinks a');
  allNavLinks.forEach(function(link){
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Activate parent dropdown if current page belongs to that group
  if (parentDropdownMap[currentPage]) {
    var parentToggle = document.getElementById(parentDropdownMap[currentPage]);
    if (parentToggle) {
      parentToggle.classList.add('active');
    }
  }

  // Highlight active item inside dropdown menu
  var allDropdownItems = document.querySelectorAll('.dropdown-item');
  allDropdownItems.forEach(function(item){
    var href = item.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      item.classList.add('active');
      item.setAttribute('aria-current', 'page');
    }
  });

  // Accessible dropdown interaction (touch, click, keyboard)
  var dropdownEls = document.querySelectorAll('.nav-dropdown');
  dropdownEls.forEach(function(dropdown){
    var toggle = dropdown.querySelector('.dropdown-toggle');
    var menu = dropdown.querySelector('.nav-dropdown-menu');
    if (!toggle || !menu) return;

    // Mobile / touch click handling
    toggle.addEventListener('click', function(e){
      if (window.innerWidth <= 768) {
        var isOpen = dropdown.classList.contains('is-open');
        if (!isOpen) {
          e.preventDefault();
          // Close other open dropdowns
          dropdownEls.forEach(function(other){
            if (other !== dropdown) {
              other.classList.remove('is-open');
              var otherToggle = other.querySelector('.dropdown-toggle');
              if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
            }
          });
          dropdown.classList.add('is-open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      }
    });

    // Close on Escape key
    dropdown.addEventListener('keydown', function(e){
      if (e.key === 'Escape') {
        dropdown.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  });

  // Click outside listener to close dropdowns
  document.addEventListener('click', function(e){
    if (!e.target.closest('.nav-dropdown')) {
      dropdownEls.forEach(function(dropdown){
        dropdown.classList.remove('is-open');
        var toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
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
