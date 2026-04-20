(function () {
  let ticking = false;

  function update() {
    const sidebar = document.getElementById('sidebar');
    const footer = document.getElementById('footer');
    if (!sidebar || !footer) return;

    const footerTop = footer.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    const overlap = viewportHeight - footerTop;

    // Keep the sidebar anchored to the navbar and only trim its bottom when
    // the footer is in view. Mintlify's built-in one-shot handler tries to
    // be clever with `top` and leaves a stale negative value that shifts
    // the sidebar off-screen — reset it here so the sidebar stays put.
    sidebar.style.top = '4rem';
    sidebar.style.bottom = overlap > 0 ? overlap + 'px' : '0';
    sidebar.style.height = 'auto';
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
