(() => {
  'use strict';
  const nav = document.querySelector('.navbar');
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  updateNav(); window.addEventListener('scroll', updateNav, { passive: true });
  document.querySelectorAll('#mainNav .nav-link').forEach(link => link.addEventListener('click', () => { const menu = document.getElementById('mainNav'); if (menu.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide() }));
  document.getElementById('year').textContent = new Date().getFullYear();
  const form = document.getElementById('enquiryForm'), status = document.getElementById('formStatus');
  form.addEventListener('submit', event => { event.preventDefault(); status.textContent = ''; status.className = 'form-status'; const fields = [...form.querySelectorAll('input,select,textarea')]; fields.forEach(field => field.removeAttribute('aria-invalid')); const firstInvalid = fields.find(field => !field.checkValidity()); if (firstInvalid) { firstInvalid.setAttribute('aria-invalid', 'true'); status.textContent = 'Please check the highlighted fields and complete the required information.'; status.classList.add('error'); firstInvalid.focus(); return } status.textContent = 'Thank you. This demo form is ready to connect to a project enquiry service.'; status.classList.add('success'); form.reset() });
  form.querySelectorAll('input,select,textarea').forEach(field => field.addEventListener('input', () => { if (field.checkValidity()) field.removeAttribute('aria-invalid') }));
})();
