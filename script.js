// Match Mintlify's current-production layout by moving the footer into
// #content-area (the right column). Our pinned version puts the footer in
// a parallel flex column at page level, which causes the fixed left
// sidebar to overlap the footer when scrolled to the bottom.
//
// Mintlify's own docs (mintlify.com/docs) render the footer inside
// #content-area so the sidebar never interacts with it. This script
// reproduces that structure at runtime.
(function () {
  function relocate() {
    const footer = document.getElementById('footer');
    const contentArea = document.getElementById('content-area');
    if (!footer || !contentArea) return;
    if (contentArea.contains(footer)) return;
    contentArea.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', relocate);
  } else {
    relocate();
  }

  // Mintlify is a Next.js SPA; re-apply after route changes or re-renders
  // that may reset the DOM.
  new MutationObserver(relocate).observe(document.body, { childList: true, subtree: true });
})();
