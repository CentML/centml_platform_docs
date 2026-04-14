(function () {
  const CONTAINER_ID = 'nvidia-legal-footer-links';
  const LINKS = [
    ['Privacy Policy', 'https://www.nvidia.com/en-us/about-nvidia/privacy-policy/'],
    ['Your Privacy Choices', 'https://www.nvidia.com/en-us/about-nvidia/privacy-center/'],
    ['Terms of Service', 'https://www.nvidia.com/en-us/about-nvidia/terms-of-service/'],
    ['Accessibility', 'https://www.nvidia.com/en-us/about-nvidia/accessibility/'],
    ['Corporate Policies', 'https://www.nvidia.com/en-us/about-nvidia/company-policies/'],
    ['Product Security', 'https://www.nvidia.com/en-us/product-security/'],
    ['Contact', 'https://www.nvidia.com/en-us/contact/'],
  ];

  function buildContainer() {
    const wrapper = document.createElement('div');
    wrapper.id = CONTAINER_ID;
    wrapper.className = 'nvidia-legal-footer-links';

    const title = document.createElement('div');
    title.className = 'nvidia-legal-footer-title';
    title.textContent = 'Legal Disclosures';
    wrapper.appendChild(title);

    const links = document.createElement('div');
    links.className = 'nvidia-legal-footer-items';

    LINKS.forEach(function ([label, href], index) {
      const anchor = document.createElement('a');
      anchor.href = href;
      anchor.textContent = label;
      links.appendChild(anchor);

      if (index < LINKS.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'nvidia-legal-footer-separator';
        separator.textContent = '·';
        links.appendChild(separator);
      }
    });

    wrapper.appendChild(links);
    return wrapper;
  }

  function mount() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    let container = document.getElementById(CONTAINER_ID);
    if (!container) {
      container = buildContainer();
    }

    if (container.parentElement !== footer) {
      footer.appendChild(container);
    }
  }

  let scheduled = false;
  function scheduleMount() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      mount();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleMount);
  } else {
    scheduleMount();
  }

  const observer = new MutationObserver(scheduleMount);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
