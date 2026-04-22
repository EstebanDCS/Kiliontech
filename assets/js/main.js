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

  /* ----- Contact form (no backend yet — fake-submit visual) ----- */
  window.submitForm = function (e) {
    e.preventDefault();
    const ok = document.getElementById('sent');
    if (ok) ok.classList.add('show');
    const btn = e.target.querySelector('button[type=submit]');
    if (btn) btn.disabled = true;
    return false;
  };

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
