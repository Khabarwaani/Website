(function(){
  // Scroll progress bar
  var bar = document.getElementById('progressBar');
  function updateProgress(){
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var height = h.scrollHeight - h.clientHeight;
    var pct = height > 0 ? (scrolled / height) * 100 : 0;
    if(bar) bar.style.width = pct + '%';
  }
  document.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

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

  // Scroll-spy active nav link
  var sections = ['top','how','story-desk','reel-factory','audience','team','ask']
    .map(function(id){ return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = document.querySelectorAll('.navlinks a');
  function updateActiveNav(){
    var scrollPos = window.scrollY + 100;
    var current = sections[0];
    sections.forEach(function(sec){
      if(sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function(link){
      var href = link.getAttribute('href').replace('#','');
      link.classList.toggle('active', current && current.id === href);
    });
  }
  document.addEventListener('scroll', updateActiveNav, {passive:true});
  updateActiveNav();

  // Interactive cost calculator
  var range = document.getElementById('langRange');
  var langVal = document.getElementById('langVal');
  var tradBar = document.getElementById('tradBar');
  var khabBar = document.getElementById('khabBar');
  var tradVal = document.getElementById('tradVal');
  var khabVal = document.getElementById('khabVal');

  function renderCalc(){
    var n = parseInt(range.value, 10);
    langVal.textContent = n;
    var tradUnits = n * 10;      // 10 units per language, traditional
    var khabUnits = 10 + (n - 1) * 1.5; // one base unit + small per-language increment
    var maxUnits = 12 * 10;
    var tradPct = Math.min(100, (tradUnits / maxUnits) * 100);
    var khabPct = Math.min(100, (khabUnits / maxUnits) * 100);
    tradBar.style.width = tradPct + '%';
    khabBar.style.width = khabPct + '%';
    tradVal.textContent = tradUnits + 'x';
    khabVal.textContent = khabUnits.toFixed(1) + 'x';
  }
  if(range){
    range.addEventListener('input', renderCalc);
    renderCalc();
  }
})();
