/**
 * Khabarwaani Reusable Layout System
 * Single Source of Truth for Header, Navigation, and Footer across all pages.
 */
(function() {
  'use strict';

  function getCurrentPage() {
    var path = window.location.pathname.replace(/\/$/, "");
    var file = path.split('/').pop() || 'index.html';
    if (!file.includes('.')) {
      file = 'index.html';
    }
    return file;
  }

  function getHeaderHTML() {
    var page = getCurrentPage();

    var whyPages = ['thesis.html', 'media.html', 'genz.html', 'reels.html', 'ai-newsroom.html'];
    var howPages = ['how.html', 'architecture.html', 'pipeline.html', 'editorial.html', 'studio.html'];
    var whatPages = ['what.html', 'scripting-agent.html', 'video-builder.html'];

    var isHome = (page === 'index.html');
    var isVision = (page === 'vision.html');
    var isWhy = whyPages.indexOf(page) !== -1;
    var isHow = howPages.indexOf(page) !== -1;
    var isWhat = whatPages.indexOf(page) !== -1;
    var isRoadmap = (page === 'roadmap.html');
    var isTeam = (page === 'leadership.html');

    return '<header class="site-brand-header" role="banner">' +
      '<div class="brand-container">' +
        '<a href="index.html" class="brand-group" aria-label="Khabarwaani Home">' +
          '<span class="brand-logo-wrapper">' +
            '<img class="brand-logo-img" src="assets/mark.png" alt="Khabarwaani Logo" width="26" height="26" onerror="this.style.display=\'none\';">' +
          '</span>' +
          '<span class="brand-name">Khabarwaani</span>' +
        '</a>' +
        '<div class="brand-tagline-cluster">' +
          '<span class="lead-phrase">News, Reimagined</span>' +
          '<span class="tagline-sep" aria-hidden="true">—</span>' +
          '<span class="brand-tagline">From Humiliation, Shouting to <strong>Curiosity, Conversation &amp; Fun</strong></span>' +
        '</div>' +
      '</div>' +
    '</header>' +

    '<nav class="nav-section" id="navSection" aria-label="Sections">' +
      '<div class="nav-container">' +
        '<div class="nav-track" id="navTrack" tabindex="0" role="region" aria-label="Navigation Menu">' +
          '<ul class="nav-list">' +
            '<li class="nav-item">' +
              '<a href="index.html" class="nav-link' + (isHome ? ' active" aria-current="page' : '') + '">Home</a>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="vision.html" class="nav-link' + (isVision ? ' active" aria-current="page' : '') + '">Vision</a>' +
            '</li>' +
            '<li class="nav-item nav-dropdown">' +
              '<a href="thesis.html" class="nav-link dropdown-toggle' + (isWhy ? ' active" aria-current="page' : '') + '" id="dropdownWhy" aria-haspopup="true" aria-expanded="false">' +
                'Why <span class="dropdown-caret" aria-hidden="true">▾</span>' +
              '</a>' +
              '<div class="nav-dropdown-menu" aria-labelledby="dropdownWhy" role="menu">' +
                '<a href="thesis.html" class="dropdown-item' + (page === 'thesis.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Why Overview</span>' +
                  '<span class="dropdown-desc">The Core Thesis Hub</span>' +
                '</a>' +
                '<a href="media.html" class="dropdown-item' + (page === 'media.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Media Crisis</span>' +
                  '<span class="dropdown-desc">The 39% Avoidance Paradox</span>' +
                '</a>' +
                '<a href="genz.html" class="dropdown-item' + (page === 'genz.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Gen Z Shift</span>' +
                  '<span class="dropdown-desc">Attention on Mobile Feeds</span>' +
                '</a>' +
                '<a href="reels.html" class="dropdown-item' + (page === 'reels.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Reels Format</span>' +
                  '<span class="dropdown-desc">15s–60s Positive Emotion</span>' +
                '</a>' +
                '<a href="ai-newsroom.html" class="dropdown-item' + (page === 'ai-newsroom.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Agentic AI</span>' +
                  '<span class="dropdown-desc">Scalable 90% Cost Cut</span>' +
                '</a>' +
              '</div>' +
            '</li>' +
            '<li class="nav-item nav-dropdown">' +
              '<a href="how.html" class="nav-link dropdown-toggle' + (isHow ? ' active" aria-current="page' : '') + '" id="dropdownHow" aria-haspopup="true" aria-expanded="false">' +
                'How <span class="dropdown-caret" aria-hidden="true">▾</span>' +
              '</a>' +
              '<div class="nav-dropdown-menu" aria-labelledby="dropdownHow" role="menu">' +
                '<a href="how.html" class="dropdown-item' + (page === 'how.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">How Overview</span>' +
                  '<span class="dropdown-desc">The Operating Engine Hub</span>' +
                '</a>' +
                '<a href="architecture.html" class="dropdown-item' + (page === 'architecture.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Architecture</span>' +
                  '<span class="dropdown-desc">Multi-Agent Mesh Orchestration</span>' +
                '</a>' +
                '<a href="pipeline.html" class="dropdown-item' + (page === 'pipeline.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Pipeline</span>' +
                  '<span class="dropdown-desc">6-Stage Newsroom Operations</span>' +
                '</a>' +
                '<a href="editorial.html" class="dropdown-item' + (page === 'editorial.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Editorial Desk</span>' +
                  '<span class="dropdown-desc">Fact Verification &amp; Standards</span>' +
                '</a>' +
                '<a href="studio.html" class="dropdown-item' + (page === 'studio.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">AI Studio</span>' +
                  '<span class="dropdown-desc">9:16 Video &amp; Voice Synthesis</span>' +
                '</a>' +
              '</div>' +
            '</li>' +
            '<li class="nav-item nav-dropdown">' +
              '<a href="what.html" class="nav-link dropdown-toggle' + (isWhat ? ' active" aria-current="page' : '') + '" id="dropdownWhat" aria-haspopup="true" aria-expanded="false">' +
                'What <span class="dropdown-caret" aria-hidden="true">▾</span>' +
              '</a>' +
              '<div class="nav-dropdown-menu" aria-labelledby="dropdownWhat" role="menu">' +
                '<a href="what.html" class="dropdown-item' + (page === 'what.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">What Overview</span>' +
                  '<span class="dropdown-desc">The Solution Architecture</span>' +
                '</a>' +
                '<a href="scripting-agent.html" class="dropdown-item' + (page === 'scripting-agent.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">AI Scripting Agent</span>' +
                  '<span class="dropdown-desc">News Analysis to Emotion Scripts</span>' +
                '</a>' +
                '<a href="video-builder.html" class="dropdown-item' + (page === 'video-builder.html' ? ' active" aria-current="page' : '') + '" role="menuitem">' +
                  '<span class="dropdown-title">Hindi Video Builder</span>' +
                  '<span class="dropdown-desc">End-to-End Automated Editing</span>' +
                '</a>' +
                '<a href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer" class="dropdown-item" role="menuitem">' +
                  '<span class="dropdown-title">Watch Pilot ↗</span>' +
                  '<span class="dropdown-desc">Live Instagram Reel Proof</span>' +
                '</a>' +
              '</div>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="roadmap.html" class="nav-link' + (isRoadmap ? ' active" aria-current="page' : '') + '">Roadmap</a>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="leadership.html" class="nav-link' + (isTeam ? ' active" aria-current="page' : '') + '">Team</a>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>';
  }

  function getFooterHTML() {
    return '<footer class="site-footer" role="contentinfo">' +
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          '<div class="footer-col">' +
            '<h4 class="footer-col-title">Why Khabarwaani</h4>' +
            '<ul class="footer-links">' +
              '<li><a href="thesis.html">Why Overview</a></li>' +
              '<li><a href="media.html">1. Media Crisis &amp; Avoidance</a></li>' +
              '<li><a href="genz.html">2. Gen Z Attention Shift</a></li>' +
              '<li><a href="reels.html">3. Reels &amp; Positive Emotion</a></li>' +
              '<li><a href="ai-newsroom.html">4. Agentic AI Newsrooms</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h4 class="footer-col-title">How It Works</h4>' +
            '<ul class="footer-links">' +
              '<li><a href="how.html">How Overview</a></li>' +
              '<li><a href="architecture.html">1. Systems Architecture</a></li>' +
              '<li><a href="pipeline.html">2. 6-Stage Pipeline</a></li>' +
              '<li><a href="editorial.html">3. Editorial Desk</a></li>' +
              '<li><a href="studio.html">4. AI Reel Studio</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h4 class="footer-col-title">What We Build</h4>' +
            '<ul class="footer-links">' +
              '<li><a href="what.html">What Overview</a></li>' +
              '<li><a href="scripting-agent.html">1. AI Scripting Agent</a></li>' +
              '<li><a href="video-builder.html">2. Hindi Video Builder</a></li>' +
              '<li><a href="roadmap.html">3. Roadmap &amp; Funding</a></li>' +
              '<li><a href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer">Watch Live Pilot ↗</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h4 class="footer-col-title">Company &amp; Connect</h4>' +
            '<ul class="footer-links">' +
              '<li><a href="index.html">Home</a></li>' +
              '<li><a href="vision.html">The Vision</a></li>' +
              '<li><a href="mission.html">The Story Climax</a></li>' +
              '<li><a href="leadership.html">Team &amp; Founders</a></li>' +
              '<li><a href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>' +
              '<li><a href="https://github.com/Khabarwaani/Website" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>' +
              '<li><a href="https://www.linkedin.com/in/abhi266raj/" target="_blank" rel="noopener noreferrer">Abhiraj Kumar ↗</a></li>' +
              '<li><a href="https://www.linkedin.com/in/parthkumar-panchal/" target="_blank" rel="noopener noreferrer">Parthkumar Panchal ↗</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +

        '<div class="footer-bottom">' +
          '<div class="footer-brand-row">' +
            '<a href="index.html" class="footer-brand" aria-label="Khabarwaani Home">' +
              '<img src="assets/mark.png" alt="" class="footer-brand-mark" width="20" height="20">' +
              '<span class="footer-brand-name">Khabarwaani</span>' +
            '</a>' +
            '<span class="footer-brand-sep" aria-hidden="true">—</span>' +
            '<span class="footer-brand-goal">News, Reimagined: From humiliation and shouting to curiosity, conversation, and fun.</span>' +
          '</div>' +

          '<div class="footer-utility-row">' +
            '<p class="footer-copy">© 2026 Khabarwaani. All rights reserved.</p>' +
            '<a href="#top" class="footer-back-to-top" aria-label="Back to top">Back to top ↑</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  function mountLayout() {
    var headerEl = document.getElementById('site-header');
    if (headerEl) {
      headerEl.outerHTML = getHeaderHTML();
    }
    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.outerHTML = getFooterHTML();
    }
  }

  // Mount layout as soon as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountLayout);
  } else {
    mountLayout();
  }

  // Expose function for immediate invocation by script.js
  window.mountKhabarwaaniLayout = mountLayout;
})();
