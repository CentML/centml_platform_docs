(function () {
  let ticking = false;

  function update() {
    const sidebar = document.getElementById('sidebar');
    const footer = document.getElementById('footer');
    if (!sidebar || !footer) return;

    const footerTop = footer.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    const overlap = viewportHeight - footerTop;

    sidebar.style.bottom = overlap > 0 ? overlap + 'px' : '';
  }

  function request() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', update);
  } else {
    update();
  }

  // Mintlify is a Next.js SPA; re-run on DOM mutations (route navigation).
  new MutationObserver(request).observe(document.body, { childList: true });
})();
