// Match Mintlify's current-production layout by rendering the footer inside
// #content-area (the right column). Keep the original #footer in place so
// Mintlify/Next can still manage it across client-side route changes.
(function () {
  const cloneAttribute = 'data-ccluster-footer-clone';
  const sourceAttribute = 'data-ccluster-footer-source';

  function renderFooterClone() {
    const sourceFooter = document.querySelector(`#footer:not([${cloneAttribute}])`);
    const contentArea = document.getElementById('content-area');
    if (!sourceFooter || !contentArea) return;

    sourceFooter.setAttribute(sourceAttribute, 'true');

    let footerClone = contentArea.querySelector(`[${cloneAttribute}]`);
    if (!footerClone) {
      footerClone = sourceFooter.cloneNode(true);
      footerClone.removeAttribute('id');
      footerClone.removeAttribute(sourceAttribute);
      footerClone.setAttribute(cloneAttribute, 'true');
      contentArea.appendChild(footerClone);
    }

    document.querySelectorAll(`[${cloneAttribute}]`).forEach((clone) => {
      if (clone !== footerClone) clone.remove();
    });
  }

  function scheduleRender() {
    renderFooterClone();
    window.requestAnimationFrame(renderFooterClone);
    window.setTimeout(renderFooterClone, 100);
    window.setTimeout(renderFooterClone, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleRender);
  } else {
    scheduleRender();
  }

  ['pushState', 'replaceState'].forEach((method) => {
    const original = history[method];
    history[method] = function patchedHistoryMethod() {
      const result = original.apply(this, arguments);
      scheduleRender();
      return result;
    };
  });

  window.addEventListener('popstate', scheduleRender);

  new MutationObserver(scheduleRender).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
