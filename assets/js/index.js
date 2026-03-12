if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

// Wrap each word in .more-container paragraphs with a span for hover animation
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.more-container p').forEach(function (p) {
    wrapWords(p);
    p.querySelectorAll('.word').forEach(function (span, i) {
      span.style.setProperty('--word-index', i);
    });
  });
});

function wrapWords(node) {
  Array.from(node.childNodes).forEach(function (child) {
    if (child.nodeType === Node.TEXT_NODE) {
      var parts = child.textContent.split(/(\s+)/);
      var frag = document.createDocumentFragment();
      parts.forEach(function (part) {
        if (/^\s+$/.test(part) || part === '') {
          frag.appendChild(document.createTextNode(part));
        } else {
          var span = document.createElement('span');
          span.className = 'word';
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      node.replaceChild(frag, child);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      wrapWords(child);
    }
  });
}
