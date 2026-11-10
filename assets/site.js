(() => {
  'use strict';
  const header = document.getElementById('site-header');
  const menu = document.querySelector('.menu-toggle');
  const mobile = document.getElementById('mobile-nav');
  const setMenu = open => {
    if (!menu || !mobile) return;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobile.hidden = !open;
  };
  if (menu && mobile) {
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 990) setMenu(false); });
  }
  if (header) window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 10), { passive: true });
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const emailBtn = form.querySelector('[type="submit"]');
  const whatsBtn = document.getElementById('whatsapp-enquiry');
  const copyBtn = document.getElementById('copy-enquiry');
  const result = document.getElementById('form-result');
  let draft = '';
  function buildMessage() {
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('telephone') || '').trim();
    const practice = String(data.get('practice') || '').trim();
    const city = String(data.get('city') || '').trim();
    const summary = String(data.get('summary') || '').trim();
    const checked = form.elements.namedItem('acknowledge').checked;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailValid || !practice || !summary || !checked) {
      result.textContent = 'Please complete the required fields, enter a valid email and confirm the acknowledgement.';
      result.classList.add('error');
      form.reportValidity();
      return null;
    }
    result.classList.remove('error');
    draft = `Preliminary enquiry — ${practice}\n\nName: ${name}\nEmail: ${email}\nTelephone: ${phone || 'Not provided'}\nCity / forum: ${city || 'Not specified'}\nMatter area: ${practice}\n\nBrief summary:\n${summary}\n\nI understand that this is an initial enquiry and does not create an advocate–client relationship.`;
    copyBtn.hidden = false;
    return { draft, subject: `Professional enquiry: ${practice} — ${name}` };
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const message = buildMessage(); if (!message) return;
    result.textContent = 'Your email app should open with a prepared draft. You must review and send it yourself. If it does not open, use “Copy prepared message” below.';
    window.location.href = 'mailto:thenaumansuhail065@gmail.com?subject=' + encodeURIComponent(message.subject) + '&body=' + encodeURIComponent(message.draft);
  });
  if (whatsBtn) whatsBtn.addEventListener('click', () => {
    const message = buildMessage(); if (!message) return;
    result.textContent = 'WhatsApp should open with your prepared message. Please review it before sending.';
    window.open('https://wa.me/923483996102?text=' + encodeURIComponent(message.draft), '_blank', 'noopener,noreferrer');
  });
  if (copyBtn) copyBtn.addEventListener('click', async () => {
    if (!draft) return;
    try { await navigator.clipboard.writeText(draft); result.textContent = 'Enquiry copied. Paste it into your email or messaging app to send it.'; }
    catch { result.textContent = 'Clipboard access was unavailable. Please select and copy the text from your email draft.'; }
  });
})();
