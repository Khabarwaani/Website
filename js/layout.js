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
    var roadmapPages = ['roadmap.html', 'execution.html', 'funding.html'];

    var isHome = (page === 'index.html');
    var isVision = (page === 'vision.html');
    var isWhy = whyPages.indexOf(page) !== -1;
    var isHow = howPages.indexOf(page) !== -1;
    var isWhat = whatPages.indexOf(page) !== -1;
    var isRoadmap = roadmapPages.indexOf(page) !== -1;
    var isTeam = (page === 'leadership.html');

    var headerHtml = '<header class="site-brand-header" role="banner">' +
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
            '<li class="nav-item">' +
              '<a href="thesis.html" class="nav-link' + (isWhy ? ' active" aria-current="page' : '') + '">Why</a>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="how.html" class="nav-link' + (isHow ? ' active" aria-current="page' : '') + '">How</a>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="what.html" class="nav-link' + (isWhat ? ' active" aria-current="page' : '') + '">What</a>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="execution.html" class="nav-link' + (isRoadmap ? ' active" aria-current="page' : '') + '">Roadmap</a>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="leadership.html" class="nav-link' + (isTeam ? ' active" aria-current="page' : '') + '">Team</a>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>';

    if (isWhy) {
      headerHtml += '<nav class="subnav-section" aria-label="Why Sub-Navigation">' +
        '<div class="subnav-container">' +
          '<div class="subnav-track">' +
            '<a href="thesis.html" class="subnav-pill' + (page === 'thesis.html' ? ' active" aria-current="page' : '') + '">' +
              'Overview' +
            '</a>' +
            '<a href="media.html" class="subnav-pill' + (page === 'media.html' ? ' active" aria-current="page' : '') + '">' +
              'Media Crisis' +
            '</a>' +
            '<a href="genz.html" class="subnav-pill' + (page === 'genz.html' ? ' active" aria-current="page' : '') + '">' +
              'Gen Z Shift' +
            '</a>' +
            '<a href="reels.html" class="subnav-pill' + (page === 'reels.html' ? ' active" aria-current="page' : '') + '">' +
              'Reels Format' +
            '</a>' +
            '<a href="ai-newsroom.html" class="subnav-pill' + (page === 'ai-newsroom.html' ? ' active" aria-current="page' : '') + '">' +
              'Agentic AI' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</nav>';
    }

    if (isHow) {
      headerHtml += '<nav class="subnav-section" aria-label="How Sub-Navigation">' +
        '<div class="subnav-container">' +
          '<div class="subnav-track">' +
            '<a href="how.html" class="subnav-pill' + (page === 'how.html' ? ' active" aria-current="page' : '') + '">' +
              'Overview' +
            '</a>' +
            '<a href="architecture.html" class="subnav-pill' + (page === 'architecture.html' ? ' active" aria-current="page' : '') + '">' +
              'Architecture' +
            '</a>' +
            '<a href="pipeline.html" class="subnav-pill' + (page === 'pipeline.html' ? ' active" aria-current="page' : '') + '">' +
              'Pipeline' +
            '</a>' +
            '<a href="editorial.html" class="subnav-pill' + (page === 'editorial.html' ? ' active" aria-current="page' : '') + '">' +
              'Editorial Desk' +
            '</a>' +
            '<a href="studio.html" class="subnav-pill' + (page === 'studio.html' ? ' active" aria-current="page' : '') + '">' +
              'AI Studio' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</nav>';
    }

    if (isWhat) {
      headerHtml += '<nav class="subnav-section" aria-label="What Sub-Navigation">' +
        '<div class="subnav-container">' +
          '<div class="subnav-track">' +
            '<a href="what.html" class="subnav-pill' + (page === 'what.html' ? ' active" aria-current="page' : '') + '">' +
              'Overview' +
            '</a>' +
            '<a href="scripting-agent.html" class="subnav-pill' + (page === 'scripting-agent.html' ? ' active" aria-current="page' : '') + '">' +
              'Scripting Agent' +
            '</a>' +
            '<a href="video-builder.html" class="subnav-pill' + (page === 'video-builder.html' ? ' active" aria-current="page' : '') + '">' +
              'Video Builder' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</nav>';
    }

    if (isRoadmap) {
      headerHtml += '<nav class="subnav-section" aria-label="Roadmap Sub-Navigation">' +
        '<div class="subnav-container">' +
          '<div class="subnav-track">' +
            '<a href="execution.html" class="subnav-pill' + (page === 'execution.html' || page === 'roadmap.html' ? ' active" aria-current="page' : '') + '">' +
              'Execution' +
            '</a>' +
            '<a href="funding.html" class="subnav-pill' + (page === 'funding.html' ? ' active" aria-current="page' : '') + '">' +
              'Funding' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</nav>';
    }

    return headerHtml;
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
              '<li><a href="execution.html">3. Execution Roadmap</a></li>' +
              '<li><a href="funding.html">4. Funding Horizon</a></li>' +
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
