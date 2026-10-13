(() => {
  'use strict';

  // Replace each empty value with the corresponding official profile or chat URL.
  const socialUrls = {
    linkedin: '',
    instagram: 'https://www.instagram.com/iam_ashhkhan/',
    whatsapp: '',
    call: 'tel:+919005392993'
  };

  if (document.querySelector('.social-hover-widget')) return;

  const platforms = [
    { id: 'linkedin', label: 'LinkedIn', icon: '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>' },
    { id: 'instagram', label: 'Instagram', icon: '<path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '<path d="M12.04 2a9.86 9.86 0 0 0-8.45 14.95L2.2 22l5.2-1.36A9.98 9.98 0 0 0 12.04 22 10 10 0 0 0 12.04 2zm0 18.2c-1.48 0-2.93-.4-4.18-1.16l-.3-.18-3.08.81.82-3-.2-.31a8.18 8.18 0 1 1 6.94 3.84zm4.49-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.39-1.74-.14-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.42 1.02 2.59c.13.17 1.77 2.7 4.29 3.79.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>' },
    { id: 'call', label: 'Call BIONTIX Healthcare', icon: '<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.56 3.58a1 1 0 0 1-.25 1.01z"/>' }
  ];

  const widget = document.createElement('aside');
  widget.className = 'social-hover-widget';
  widget.setAttribute('aria-label', 'Social media and call links');
  const toggle = document.createElement('button');
  toggle.className = 'social-hover-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open social media links');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'social-hover-panel');
  toggle.textContent = '‹';
  const panel = document.createElement('div');
  panel.className = 'social-hover-panel';
  panel.id = 'social-hover-panel';

  platforms.forEach(({ id, label, icon }) => {
    const link = document.createElement('a');
    link.className = 'social-hover-link';
    link.setAttribute('aria-label', label);
    link.title = socialUrls[id] ? label : `${label} URL not configured`;
    if (id !== 'call') {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    if (socialUrls[id]) {
      link.href = socialUrls[id];
    } else {
      link.href = `#configure-${id}-url`;
      link.setAttribute('aria-disabled', 'true');
      link.addEventListener('click', event => event.preventDefault());
    }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = icon;
    link.appendChild(svg);
    panel.appendChild(link);
  });

  widget.append(toggle, panel);
  document.body.appendChild(widget);

  const setOpen = open => {
    widget.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close social media links' : 'Open social media links');
    toggle.textContent = open ? '›' : '‹';
  };

  toggle.addEventListener('click', () => {
    const mouseHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setOpen(mouseHover || !widget.classList.contains('is-open'));
  });
  widget.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') setOpen(true);
  });
  widget.addEventListener('focusin', () => setOpen(true));
  widget.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') setOpen(false);
  });
  widget.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!widget.contains(event.target)) setOpen(false);
  });
  widget.addEventListener('focusout', event => {
    if (!widget.contains(event.relatedTarget)) setOpen(false);
  });
})();
