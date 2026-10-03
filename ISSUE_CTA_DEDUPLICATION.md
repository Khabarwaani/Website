## Problem
The "Watch Pilot on Instagram" call-to-action (CTA) is redundantly duplicated with primary/ghost button styling inside the hero section of 8 separate pages (`vision.html`, `thesis.html`, `how.html`, `what.html`, `media.html`, `genz.html`, `reels.html`, `ai-newsroom.html`). This creates severe visual noise, competes with page-specific exploration anchors, and clutters the reading flow across both desktop and mobile viewports. Meanwhile, the site lacks a unified, persistent navigation-level conversion point for the active pilot.

## What to Do
- Add a single, persistent `.nav-cta-btn` ("Watch Pilot ↗") to the global sticky navigation in `js/layout.js`.
- Add responsive styling in `css/style.css` to position `.nav-cta-btn` cleanly on desktop and hide it gracefully on compact mobile screens.
- Purge redundant Instagram hero CTA button blocks from `vision.html`, `thesis.html`, `how.html`, and `what.html` (aligning with changes already underway in spoke pages).

## How to Do It

### [js/layout.js]
- **Lines [77–83]:**
  - **From:**
```javascript
            '<li class="nav-item">' +
              '<a href="leadership.html" class="nav-link' + (isTeam ? ' active" aria-current="page' : '') + '">Team</a>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>';
```
  - **To:**
```javascript
            '<li class="nav-item">' +
              '<a href="leadership.html" class="nav-link' + (isTeam ? ' active" aria-current="page' : '') + '">Team</a>' +
            '</li>' +
          '</ul>' +
        '</div>' +
        '<a href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer" class="nav-cta-btn">' +
          'Watch Pilot ↗' +
        '</a>' +
      '</div>' +
    '</nav>';
```

---

### [css/style.css]
- **Lines [450–462]:**
  - **From:**
```css
  .nav-track {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: visible;
    white-space: nowrap;
    padding: 6px 0;
  }
```
  - **To:**
```css
  .nav-track {
    display: flex;
    align-items: center;
    width: auto;
    overflow: visible;
    white-space: nowrap;
    padding: 6px 0;
  }

  .nav-cta-btn {
    margin-left: auto;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: var(--gold);
    color: #FFFFFF !important;
    font-size: 13px;
    font-weight: 600;
    border-radius: 999px;
    text-decoration: none;
    transition: opacity .15s ease, transform .15s ease;
  }
  .nav-cta-btn:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
  @media(max-width: 640px) {
    .nav-cta-btn {
      display: none;
    }
  }
```

---

### [thesis.html]
- **Lines [34–36]:**
  - **From:**
```html
    <div class="hero-links" style="margin-top:0;">
      <a class="btn primary" href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer">Watch Our Active Pilot on Instagram ↗</a>
    </div>
```
  - **To:**
```html
    <!-- Hero links purged; primary pilot CTA elevated to global navigation -->
```

---

### [how.html]
- **Lines [34–37]:**
  - **From:**
```html
    <div class="hero-links" style="margin-top:0;">
      <a class="btn primary" href="#pillars">The 4 Operating Pillars ↓</a>
      <a class="btn ghost" href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer">Watch Our Active Pilot on Instagram ↗</a>
    </div>
```
  - **To:**
```html
    <div class="hero-links" style="margin-top:0;">
      <a class="btn primary" href="#pillars">The 4 Operating Pillars ↓</a>
    </div>
```

---

### [what.html]
- **Lines [31–39]:**
  - **From:**
```html
    <div class="hero-links" style="margin-top:0;">
      <a class="btn primary" href="#solution-engines">The 2 Solution Engines ↓</a>
      <a class="btn ghost" href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer">
        <svg class="insta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        Watch Live Pilot on Instagram ↗
      </a>
    </div>
```
  - **To:**
```html
    <div class="hero-links" style="margin-top:0;">
      <a class="btn primary" href="#solution-engines">The 2 Solution Engines ↓</a>
    </div>
```

---

### [vision.html]
- **Lines [30–39]:**
  - **From:**
```html
      <div class="hero-links" style="justify-content:center; margin-top:0;">
        <a class="btn primary" href="#golden-circle">The Golden Circle Rule ↓</a>
        <a class="btn ghost" href="https://www.instagram.com/khabarwaani" target="_blank" rel="noopener noreferrer">
          <svg class="insta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          Watch Reel Pilot on Instagram
        </a>
      </div>
```
  - **To:**
```html
      <div class="hero-links" style="justify-content:center; margin-top:0;">
        <a class="btn primary" href="#golden-circle">The Golden Circle Rule ↓</a>
      </div>
```
