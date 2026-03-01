// Frontend-only helpers: active nav + fake actions
(function () {
  const current = document.body?.dataset?.page;
  if (current) {
    document.querySelectorAll('[data-nav]').forEach((a) => {
      if (a.getAttribute('data-nav') === current) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  // Debug: ensure nav handlers and action buttons are present
  console.info('ASTU app.js initializing. data-page=', document.body?.dataset?.page);
  const navLinks = document.querySelectorAll('.app-nav a');
  if (!navLinks || navLinks.length === 0) console.warn('No sidebar nav links found. Check .app-nav selectors and script path.');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => console.info('Nav click:', link.getAttribute('href'), link.getAttribute('data-nav')));
    // Fallback: if a click does not navigate (blocked by overlay), force navigation using JS
    link.addEventListener('click', (e) => {
      try {
        const href = link.getAttribute('href');
        if (!href) return;
        const absolute = new URL(href, window.location.href).href;
        // If the current location is already the same, do nothing
        // Frontend helpers: active nav, action handlers, and chatbot demo
        (function () {
          const current = document.body?.dataset?.page;

          // Highlight active nav link based on body data-page
          if (current) {
            document.querySelectorAll('[data-nav]').forEach((a) => {
              if (a.getAttribute('data-nav') === current) a.setAttribute('aria-current', 'page');
              else a.removeAttribute('aria-current');
            });
          }

          // Action buttons (logout, save, submit) — lightweight handlers for demo
          document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action]');
            if (!btn) return;
            const action = btn.getAttribute('data-action');
            if (action === 'logout') console.info('Logout clicked.');
            if (action === 'save') console.info('Save clicked.');
            if (action === 'submit') console.info('Submit clicked.');
          });

          // Chatbot demo: attach only if elements exist
          const chatForm = document.querySelector('[data-chat-form]');
          if (chatForm) {
            const list = document.querySelector('[data-chat-list]');
            const input = document.querySelector('[data-chat-input]');
            chatForm.addEventListener('submit', (e) => {
              e.preventDefault();
              const text = (input.value || '').trim();
              if (!text) return;
              addMsg('user', text);
              input.value = '';
              setTimeout(() => addMsg('bot', 'Thanks. Please add more details (location, time, and urgency).'), 400);
            });

            function addMsg(type, text) {
              const row = document.createElement('div');
              row.className = 'd-flex my-2';
              const bubble = document.createElement('div');
              bubble.className = `chat-msg ${type}`;
              bubble.textContent = text;
              row.appendChild(bubble);
              list.appendChild(row);
              if (list.parentElement) list.parentElement.scrollTop = list.parentElement.scrollHeight;
            }
          }
        })();
      input.value = '';

      setTimeout(() => addMsg('bot', 'Thanks. Please add more details (location, time, and urgency).'), 400);
