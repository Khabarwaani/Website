(function(){
  'use strict';

  // Ensure reusable layout is mounted before initializing listeners
  if (window.mountKhabarwaaniLayout) {
    window.mountKhabarwaaniLayout();
  }

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
    'how.html': 'dropdownHow',
    'architecture.html': 'dropdownHow',
    'pipeline.html': 'dropdownHow',
    'editorial.html': 'dropdownHow',
    'studio.html': 'dropdownHow',
    'what.html': 'dropdownWhat',
    'scripting-agent.html': 'dropdownWhat',
    'video-builder.html': 'dropdownWhat'
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

  // Accessible tab switcher for HOW & modular pages
  var tablists = document.querySelectorAll('[role="tablist"]');
  tablists.forEach(function(tablist){
    var tabs = tablist.querySelectorAll('[role="tab"]');
    tabs.forEach(function(tab){
      tab.addEventListener('click', function(e){
        e.preventDefault();
        var targetId = tab.getAttribute('aria-controls');
        var container = tablist.closest('.how-tabs-container') || document;

        tabs.forEach(function(t){
          t.setAttribute('aria-selected', 'false');
          t.classList.remove('active');
        });
        tab.setAttribute('aria-selected', 'true');
        tab.classList.add('active');

        var panels = container.querySelectorAll('[role="tabpanel"]');
        panels.forEach(function(panel){
          if (panel.id === targetId) {
            panel.hidden = false;
            panel.classList.add('active');
          } else {
            panel.hidden = true;
            panel.classList.remove('active');
          }
        });
      });

      tab.addEventListener('keydown', function(e){
        var tabArr = Array.from(tabs);
        var idx = tabArr.indexOf(tab);
        var nextTab = null;
        if (e.key === 'ArrowRight') {
          nextTab = tabArr[(idx + 1) % tabArr.length];
        } else if (e.key === 'ArrowLeft') {
          nextTab = tabArr[(idx - 1 + tabArr.length) % tabArr.length];
        }
        if (nextTab) {
          e.preventDefault();
          nextTab.focus();
          nextTab.click();
        }
      });
    });
  });

  // Handle direct hash navigation to tabs (e.g. #telemetry or #tab-telemetry)
  function activateTabFromHash() {
    var hash = window.location.hash;
    if (!hash) return;
    var targetId = hash.replace('#', '');
    if (targetId === 'telemetry') targetId = 'tab-telemetry';
    var targetBtn = document.querySelector('[aria-controls="' + targetId + '"]');
    if (targetBtn) {
      targetBtn.click();
      setTimeout(function() {
        var el = document.getElementById(targetId) || targetBtn;
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', activateTabFromHash);
  } else {
    activateTabFromHash();
  }
  window.addEventListener('hashchange', activateTabFromHash);

  // Handle in-page subnav pill clicks and scrollspy (e.g. roadmap.html #execution and #funding)
  function initInPageSubnav() {
    var subnavLinks = document.querySelectorAll('.subnav-section a[href^="#"]');
    if (!subnavLinks.length) return;

    function setActivePill(hash) {
      if (!hash) return;
      subnavLinks.forEach(function(link) {
        if (link.getAttribute('href') === hash) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }

    subnavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        setActivePill(link.getAttribute('href'));
      });
    });

    if (window.location.hash) {
      setActivePill(window.location.hash);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setActivePill('#' + entry.target.id);
          }
        });
      }, { rootMargin: '-20% 0px -60% 0px' });

      subnavLinks.forEach(function(link) {
        var sec = document.querySelector(link.getAttribute('href'));
        if (sec) observer.observe(sec);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInPageSubnav);
  } else {
    initInPageSubnav();
  }
  window.addEventListener('hashchange', function() {
    var subnavLinks = document.querySelectorAll('.subnav-section a[href^="#"]');
    if (subnavLinks.length && window.location.hash) {
      subnavLinks.forEach(function(link) {
        if (link.getAttribute('href') === window.location.hash) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  });
})();
