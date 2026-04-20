// Shared behaviors: header scroll, mobile nav, sticky CTA, exit intent, form validation, FAQ, lightbox, reveals

(function () {
  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  // Fake dataLayer
  window.dataLayer = window.dataLayer || [];
  function track(event, params = {}) { window.dataLayer.push({ event, ...params }); }

  onReady(() => {
    // Header scroll shadow
    const header = document.getElementById('siteHeader');
    if (header) {
      const onScroll = () => {
        if (window.scrollY > 8) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const dropdown = document.getElementById('mobileDropdown');
    if (navToggle && dropdown) {
      navToggle.addEventListener('click', () => {
        const open = dropdown.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
      });
      dropdown.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => dropdown.classList.remove('open'));
      });
    }

    // Tracking on click links
    document.querySelectorAll('[data-track]').forEach(el => {
      el.addEventListener('click', () => track(el.dataset.track));
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(el => {
      el.addEventListener('click', () => track('call_click'));
    });
    document.querySelectorAll('a[href^="sms:"]').forEach(el => {
      el.addEventListener('click', () => track('sms_click'));
    });

    // Scroll CTA banner (mobile): show after 50% scroll
    const scrollCTA = document.getElementById('scrollCTA');
    if (scrollCTA) {
      const onScroll = () => {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (pct > 0.35 && pct < 0.9) scrollCTA.classList.add('visible');
        else scrollCTA.classList.remove('visible');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Exit intent (desktop only, once per session)
    const exitModal = document.getElementById('exitModal');
    if (exitModal && window.matchMedia('(min-width: 900px)').matches && !sessionStorage.getItem('exitShown')) {
      const handler = (e) => {
        if (e.clientY < 10) {
          exitModal.classList.add('open');
          sessionStorage.setItem('exitShown', '1');
          document.removeEventListener('mouseout', handler);
        }
      };
      // Delay arming so it doesn't fire on page-load mouse reset
      setTimeout(() => document.addEventListener('mouseout', handler), 3000);

      const close = document.getElementById('exitClose');
      close?.addEventListener('click', () => exitModal.classList.remove('open'));
      exitModal.addEventListener('click', (e) => {
        if (e.target === exitModal) exitModal.classList.remove('open');
      });
      document.getElementById('exitForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.innerHTML = '<div class="form-success"><div class="check">' + window.iconCheck() + '</div><h5>On its way.</h5><p>Check your inbox in a minute.</p></div>';
        track('form_submit', { form: 'exit_intent' });
      });
    }

    // Quote form validation
    document.querySelectorAll('.quote-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll('[required]').forEach(field => {
          const wrap = field.closest('.field');
          wrap?.classList.remove('has-error');
          const err = wrap?.querySelector('.error-msg');
          if (err) err.textContent = '';
          if (!field.value.trim()) {
            valid = false;
            wrap?.classList.add('has-error');
            if (err) err.textContent = 'Required';
          } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
            valid = false;
            wrap?.classList.add('has-error');
            if (err) err.textContent = 'Invalid email';
          } else if (field.type === 'tel' && field.value.replace(/\D/g, '').length < 10) {
            valid = false;
            wrap?.classList.add('has-error');
            if (err) err.textContent = 'Valid phone, please';
          }
        });
        if (!valid) return;

        const parent = form.parentElement;
        parent.innerHTML = `
          <div class="form-success">
            <div class="check">${window.iconCheck()}</div>
            <h4 style="font-family:var(--display);font-size:28px;margin-bottom:8px">Got it — we'll be in touch.</h4>
            <p class="ink-soft">Expect a reply within 2 business hours. If it's urgent, give us a call at ${window.SITE_DATA.business.phone}.</p>
          </div>
        `;
        track('form_submit', { form: form.id });
      });
    });

    // Reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Map facade — load on click
    document.querySelectorAll('.map-facade').forEach(el => {
      el.addEventListener('click', () => {
        const q = encodeURIComponent(window.SITE_DATA.business.address);
        el.innerHTML = `<iframe style="width:100%;height:100%;border:0;border-radius:inherit" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.63%2C45.50%2C-122.60%2C45.52&amp;layer=mapnik" title="Map"></iframe>`;
      });
    });
  });
})();
