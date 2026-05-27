if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

// Scroll-triggered reveal using IntersectionObserver
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var cards = Array.from(document.querySelectorAll('.layout'));

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
