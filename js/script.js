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

  // Interactive cost calculator (if present on page)
  var range = document.getElementById('langRange');
  var langVal = document.getElementById('langVal');
  var tradBar = document.getElementById('tradBar');
  var khabBar = document.getElementById('khabBar');
  var tradVal = document.getElementById('tradVal');
  var khabVal = document.getElementById('khabVal');

  function renderCalc(){
    if(!range) return;
    var n = parseInt(range.value, 10);
    if(langVal) langVal.textContent = n;
    var tradUnits = n * 10;
    var khabUnits = 10 + (n - 1) * 1.5;
    var maxUnits = 12 * 10;
    var tradPct = Math.min(100, (tradUnits / maxUnits) * 100);
    var khabPct = Math.min(100, (khabUnits / maxUnits) * 100);
    if(tradBar) tradBar.style.width = tradPct + '%';
    if(khabBar) khabBar.style.width = khabPct + '%';
    if(tradVal) tradVal.textContent = tradUnits + 'x';
    if(khabVal) khabVal.textContent = khabUnits.toFixed(1) + 'x';
  }
  if(range){
    range.addEventListener('input', renderCalc);
    renderCalc();
  }

  // Interactive Output Simulator (Why Future page)
  var simStories = document.getElementById('simStories');
  var simStoriesVal = document.getElementById('simStoriesVal');
  var simLangs = document.getElementById('simLangs');
  var simLangsVal = document.getElementById('simLangsVal');
  var simDailyReels = document.getElementById('simDailyReels');
  var simMonthlyReels = document.getElementById('simMonthlyReels');

  function renderSimulator(){
    if(!simStories || !simLangs) return;
    var s = parseInt(simStories.value, 10);
    var l = parseInt(simLangs.value, 10);
    if(simStoriesVal) simStoriesVal.textContent = s;
    if(simLangsVal) simLangsVal.textContent = l;
    var daily = s * l;
    var monthly = daily * 30;
    if(simDailyReels) simDailyReels.textContent = daily;
    if(simMonthlyReels) simMonthlyReels.textContent = monthly.toLocaleString();
  }
  if(simStories && simLangs){
    simStories.addEventListener('input', renderSimulator);
    simLangs.addEventListener('input', renderSimulator);
    renderSimulator();
  }
})();
