if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

// ── Developer console easter egg ──────────────────────────────────────────────
(function () {
  var nameStyle  = 'background:#282c34; color:#e06c75; font-weight:700; '
                 + 'padding:2px 6px; border-radius:3px; font-family:Consolas,monospace; font-size:13px;';
  var dimStyle   = 'color:#3e4451; font-family:Consolas,monospace;';
  var codeStyle  = 'color:#abb2bf; font-family:Consolas,monospace; font-size:12px; line-height:2;';
  var labelStyle = 'color:#61afef; font-family:Consolas,monospace; font-size:12px; line-height:2;';

  console.log('%c Yiwen Ding %c ─────────────────────────────────────────', nameStyle, dimStyle);
  console.log(
    '%c// You opened DevTools. That\'s a good sign.\n'  +
    '//\n'                                               +
    '// Former Go player — ranked top in province at 10.\n' +
    '// Now I debug distributed systems instead of endgames.\n' +
    '//\n'                                               +
    '// Seeking: %c2026 Summer SDE / TPM Internship%c\n' +
    '//\n'                                               +
    '// → dingywn@seas.upenn.edu\n'                      +
    '// → github.com/dingonewen',
    codeStyle,
    'color:#98c379; font-family:Consolas,monospace; font-size:12px; line-height:2; font-weight:700;',
    codeStyle
  );
  console.log('%c ─────────────────────────────────────────────────────', dimStyle);
}());

// Scroll-triggered reveal using IntersectionObserver
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var cards = Array.from(document.querySelectorAll('.layout, .text-container'));

  // Assign stagger delay based on sibling index within each section container
  var seen = new Set();
  cards.forEach(function (el) {
    var parent = el.parentNode;
    if (seen.has(parent)) return;
    seen.add(parent);
    Array.from(parent.children)
      .filter(function (c) { return c.classList.contains('layout'); })
      .forEach(function (sib, i) {
        sib.dataset.revealDelay = (i * 0.09).toFixed(2);
      });
  });

  // Mark all cards as hidden reveal targets
  cards.forEach(function (el) { el.classList.add('scroll-reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.style.transitionDelay = (el.dataset.revealDelay || '0') + 's';
      el.classList.add('is-visible');
      observer.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  cards.forEach(function (el) { observer.observe(el); });
}());

// Cursor spotlight — tracks mouse and updates CSS custom props on each card
(function () {
  document.querySelectorAll('.layout').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - r.top)  + 'px');
    });
  });
}());

// Magnetic hover — social icon buttons follow cursor slightly then spring back
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.button--sacnite').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left  - r.width  / 2) * 0.28;
      var y = (e.clientY - r.top   - r.height / 2) * 0.28;
      btn.style.transform  = 'translate(' + x + 'px, ' + y + 'px)';
      btn.style.transition = 'transform 0.1s linear';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform  = '';
      btn.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    });
  });
}());
