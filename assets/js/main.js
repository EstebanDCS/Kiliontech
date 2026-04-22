/* ==========================================================
   Kilion Tech — Site JS
   Nav scroll state, contact form, tweaks panel / edit mode.
   TWEAK_DEFAULTS is declared inline in the host HTML (so the
   edit-mode markers can be rewritten on disk).
   ========================================================== */

(function () {
  'use strict';

  /* ----- Nav scrolled state ----- */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });
  }

  /* ----- Audience toggle (individuals / companies) ----- */
  (function initAudience() {
    const body = document.body;
    const pill = document.getElementById('audiencePill');
    const buttons = document.querySelectorAll('.audience-toggle button[data-audience]');
    if (!buttons.length) return;

    function movePill(btn) {
      if (!pill || !btn) return;
      pill.style.left = btn.offsetLeft + 'px';
      pill.style.width = btn.offsetWidth + 'px';
    }

    function setAudience(value, { persist = true } = {}) {
      body.setAttribute('data-audience', value);
      let activeBtn = null;
      buttons.forEach(b => {
        const on = b.dataset.audience === value;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (on) activeBtn = b;
      });
      movePill(activeBtn);
      if (persist) {
        try { localStorage.setItem('kt_audience', value); } catch (e) {}
      }
    }

    buttons.forEach(b => b.addEventListener('click', () => setAudience(b.dataset.audience)));

    const saved = (() => { try { return localStorage.getItem('kt_audience'); } catch (e) { return null; } })();
    setAudience(saved === 'companies' ? 'companies' : 'individuals', { persist: false });

    // Reposition pill on load (fonts) and on resize
    window.addEventListener('load', () => {
      const on = document.querySelector('.audience-toggle button[aria-pressed="true"]');
      movePill(on);
    });
    window.addEventListener('resize', () => {
      const on = document.querySelector('.audience-toggle button[aria-pressed="true"]');
      movePill(on);
    });
  })();

  /* ----- Contact form → Formsubmit.co ----- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const btn      = contactForm.querySelector('button[type=submit]');
      const okMsg    = document.getElementById('sent');
      const errMsg   = document.getElementById('sendError');
      const origHTML = btn ? btn.innerHTML : '';

      // Reset previous states
      if (okMsg)  okMsg.classList.remove('show');
      if (errMsg) errMsg.classList.remove('show');

      // Loading state
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="btn-spinner"></span> Enviando…';
      }

      try {
        const data = new FormData(contactForm);
        const res  = await fetch('https://formsubmit.co/ajax/contacto@kiliontech.com', {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          if (okMsg) okMsg.classList.add('show');
          contactForm.reset();
        } else {
          throw new Error('Server responded with ' + res.status);
        }
      } catch (err) {
        console.error('Contact form error:', err);
        if (errMsg) errMsg.classList.add('show');
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = origHTML;
        }
      }
    });
  }

  /* ----- Tweaks / edit mode ----- */
  const STATE = Object.assign({}, window.TWEAK_DEFAULTS || {});
  const grainLayer = document.getElementById('grainLayer');
  const grainToggle = document.getElementById('grainToggle');
  const tweaksPanel = document.getElementById('tweaks');

  function applyTweaks(t) {
    const r = document.documentElement.style;
    if (t.accent) r.setProperty('--accent', t.accent);
    if (t.accentDeep) r.setProperty('--accent-deep', t.accentDeep);
    if (t.bg) r.setProperty('--bg', t.bg);
    if (grainLayer) grainLayer.style.display = t.showGrain ? 'block' : 'none';

    document.querySelectorAll('[data-accent]').forEach(el => {
      el.classList.toggle('active', el.dataset.accent === t.accent);
    });
    document.querySelectorAll('[data-bg]').forEach(el => {
      el.classList.toggle('active', el.dataset.bg === t.bg);
    });
    if (grainToggle) grainToggle.checked = !!t.showGrain;
  }
  applyTweaks(STATE);

  function updateTweaks(partial) {
    Object.assign(STATE, partial);
    applyTweaks(STATE);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: partial }, '*');
    } catch (e) { /* ignore cross-origin */ }
  }

  document.querySelectorAll('[data-accent]').forEach(el => {
    el.addEventListener('click', () =>
      updateTweaks({ accent: el.dataset.accent, accentDeep: el.dataset.deep }));
  });
  document.querySelectorAll('[data-bg]').forEach(el => {
    el.addEventListener('click', () => updateTweaks({ bg: el.dataset.bg }));
  });
  if (grainToggle) {
    grainToggle.addEventListener('change', e => updateTweaks({ showGrain: e.target.checked }));
  }

  /* ----- Edit-mode handshake ----- */
  window.addEventListener('message', (ev) => {
    if (!ev.data || !ev.data.type) return;
    if (ev.data.type === '__activate_edit_mode' && tweaksPanel) {
      tweaksPanel.classList.add('show');
    } else if (ev.data.type === '__deactivate_edit_mode' && tweaksPanel) {
      tweaksPanel.classList.remove('show');
    }
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
})();
