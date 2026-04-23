(function () {
  var KEY = 'kilion_consent';

  /* ── Inject styles ─────────────────────────────────────────── */
  var css = `
#cookie-banner {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(140%);
  z-index: 9999;
  width: calc(100% - 48px);
  max-width: 660px;
  background: oklch(0.145 0.008 300);
  border: 1px solid oklch(0.4 0.02 300 / 0.8);
  border-radius: 18px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 24px 56px rgba(0,0,0,0.55),
              0 0 0 1px color-mix(in oklch, #c8a8e9 18%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-family: "Inter", -apple-system, system-ui, sans-serif;
}
#cookie-banner.visible {
  transform: translateX(-50%) translateY(0);
}
#cookie-banner .cb-icon {
  font-size: 22px;
  flex-shrink: 0;
  line-height: 1;
  min-width: 32px;
  text-align: center;
  overflow: visible;
}
#cookie-banner .cb-text {
  flex: 1;
  min-width: 0;
}
#cookie-banner .cb-title {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 10.5px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: oklch(0.55 0.012 300);
  margin-bottom: 4px;
}
#cookie-banner .cb-body {
  font-size: 13.5px;
  line-height: 1.5;
  color: oklch(0.72 0.01 300);
}
#cookie-banner .cb-body a {
  color: #c8a8e9;
  border-bottom: 1px solid color-mix(in oklch, #c8a8e9 35%, transparent);
  padding-bottom: 1px;
  transition: border-color .2s;
}
#cookie-banner .cb-body a:hover { border-bottom-color: #c8a8e9; }
#cookie-banner .cb-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}
#cookie-banner .cb-btn {
  padding: 9px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: 0;
  font-family: inherit;
  transition: all .2s;
  white-space: nowrap;
}
#cookie-banner .cb-accept {
  background: #c8a8e9;
  color: #0a0a0a;
}
#cookie-banner .cb-accept:hover {
  background: oklch(0.97 0.005 300);
}
#cookie-banner .cb-reject {
  background: transparent;
  color: oklch(0.72 0.01 300);
  border: 1px solid oklch(0.4 0.02 300 / 0.8);
}
#cookie-banner .cb-reject:hover {
  border-color: oklch(0.97 0.005 300);
  color: oklch(0.97 0.005 300);
}
@media (max-width: 560px) {
  #cookie-banner {
    flex-direction: column;
    align-items: flex-start;
    bottom: 16px;
    padding: 18px 20px;
  }
  #cookie-banner .cb-actions {
    width: 100%;
  }
  #cookie-banner .cb-btn {
    flex: 1;
    text-align: center;
  }
}`;

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ── Helpers ────────────────────────────────────────────────── */
  function applyConsent(granted) {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: 'denied'
      });
    }
  }

  function hideBanner() {
    var b = document.getElementById('cookie-banner');
    if (!b) return;
    b.classList.remove('visible');
    setTimeout(function () { b && b.remove(); }, 500);
  }

  function accept() {
    localStorage.setItem(KEY, 'granted');
    applyConsent(true);
    hideBanner();
  }

  function reject() {
    localStorage.setItem(KEY, 'denied');
    applyConsent(false);
    hideBanner();
  }

  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML =
      '<span class="cb-icon">🍪</span>' +
      '<div class="cb-text">' +
        '<div class="cb-title">Cookies</div>' +
        '<div class="cb-body">Usamos cookies de análisis para mejorar la web. ' +
        'Consulta nuestra <a href="/legal/cookies.html">política de cookies</a>.</div>' +
      '</div>' +
      '<div class="cb-actions">' +
        '<button class="cb-btn cb-reject" id="cb-reject">Rechazar</button>' +
        '<button class="cb-btn cb-accept" id="cb-accept">Aceptar</button>' +
      '</div>';

    document.body.appendChild(banner);

    // Trigger entrance animation on next frame
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.classList.add('visible');
      });
    });

    document.getElementById('cb-accept').addEventListener('click', accept);
    document.getElementById('cb-reject').addEventListener('click', reject);
  }

  /* ── Init ───────────────────────────────────────────────────── */
  var saved = localStorage.getItem(KEY);
  if (saved) {
    applyConsent(saved === 'granted');
  } else {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }
})();
