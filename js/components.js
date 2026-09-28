(function () {
  'use strict';

  var headerHTML = [
    '<header class="site-brand-header" role="banner">',
    '  <div class="brand-container">',
    '    <a href="index.html" class="brand-group" aria-label="Khabarwaani Home">',
    '      <span class="brand-logo-wrapper">',
    '        <img class="brand-logo-img" src="assets/mark.png" alt="Khabarwaani Logo" width="32" height="32" onerror="this.style.display=\'none\';">',
    '      </span>',
    '      <span class="brand-name">Khabarwaani</span>',
    '    </a>',
    '    <div class="brand-tagline-cluster">',
    '      <span class="lead-phrase">News, Reimagined</span>',
    '      <span class="tagline-sep" aria-hidden="true">—</span>',
    '      <span class="brand-tagline">From Humiliation, Shouting to <strong>Curiosity, Conversation &amp; Fun</strong></span>',
    '    </div>',
    '  </div>',
    '</header>',
    '',
    '<nav class="nav-section" id="navSection" aria-label="Sections">',
    '  <div class="nav-container">',
    '    <div class="nav-track" id="navTrack" tabindex="0" role="region" aria-label="Scrollable Section Menu">',
    '      <ul class="nav-list">',
    '        <li class="nav-item"><a href="index.html" class="nav-link">Overview</a></li>',
    '        <li class="nav-item"><a href="thesis.html" class="nav-link">Market Thesis</a></li>',
    '        <li class="nav-item"><a href="architecture.html" class="nav-link">Architecture</a></li>',
    '        <li class="nav-item"><a href="pipeline.html" class="nav-link">Pipeline</a></li>',
    '        <li class="nav-item"><a href="editorial.html" class="nav-link">Editorial Desk</a></li>',
    '        <li class="nav-item"><a href="studio.html" class="nav-link">AI Studio</a></li>',
    '        <li class="nav-item"><a href="distribution.html" class="nav-link">Distribution</a></li>',
    '        <li class="nav-item"><a href="leadership.html" class="nav-link">Leadership</a></li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '</nav>'
  ].join('\n');

  var footerHTML = [
    '<footer>',
    '  <div class="wrap">',
    '    <div class="footer-goal">',
    '      <div class="footer-goal-lead">',
    '        <span class="footer-goal-tag">Project Goal</span>',
    '        <h3 class="footer-goal-title">KHABARWAANI</h3>',
    '        <span class="footer-goal-divider">·</span>',
    '        <span class="footer-goal-tagline">News, Reimagined</span>',
    '      </div>',
    '      <p class="footer-goal-statement">From Humiliation, Shouting to <strong>Curiosity, Conversation &amp; Fun</strong>.</p>',
    '    </div>',
    '    <div class="footer-meta">',
    '      <div class="footer-copy">',
    '        © 2026 Khabarwaani · Agentic AI News-Reels Studio · Digital Media / News &amp; Info',
    '      </div>',
    '      <div class="fnav">',
    '        <a href="index.html">Home</a>',
    '        <a href="thesis.html">Market Thesis</a>',
    '        <a href="architecture.html">Architecture</a>',
    '        <a href="pipeline.html">Pipeline</a>',
    '        <a href="editorial.html">Editorial Desk</a>',
    '        <a href="studio.html">AI Studio</a>',
    '        <a href="distribution.html">Distribution</a>',
    '        <a href="leadership.html">Leadership</a>',
    '        <a href="https://www.linkedin.com/in/abhi266raj/" target="_blank" rel="noopener noreferrer">Abhiraj Kumar</a>',
    '        <a href="https://www.linkedin.com/in/parthkumar-panchal/" target="_blank" rel="noopener noreferrer">Parthkumar Panchal</a>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = headerHTML;

      // Automatically highlight active page link (supports both /page and /page.html)
      var rawPath = window.location.pathname.replace(/\/$/, '');
      var currentPage = rawPath.split('/').pop() || 'index.html';
      if (!currentPage.includes('.')) {
        currentPage = currentPage + '.html';
      }
      var links = this.querySelectorAll('.nav-link');
      links.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });

      // On mobile / overflow, auto-scroll active nav link into view
      var activeLink = this.querySelector('.nav-link.active');
      var navTrack = this.querySelector('#navTrack');
      if (activeLink && navTrack) {
        setTimeout(function () {
          activeLink.scrollIntoView({ inline: 'center', block: 'nearest' });
        }, 60);
      }
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = footerHTML;
    }
  }

  if (typeof customElements !== 'undefined') {
    if (!customElements.get('site-header')) {
      customElements.define('site-header', SiteHeader);
    }
    if (!customElements.get('site-footer')) {
      customElements.define('site-footer', SiteFooter);
    }
  }
})();
