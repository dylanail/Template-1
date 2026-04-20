// Shared UI helpers and components
(function () {
  const data = window.SITE_DATA;

  // Star SVG
  window.starSVG = () => `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2z"/></svg>`;
  window.renderStars = (rating, count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) stars.push(window.starSVG());
    return `<span class="stars" aria-label="${rating} out of 5 stars">${stars.join('')}</span>`;
  };

  // Phone icon
  window.iconPhone = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  window.iconSms = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
  window.iconMail = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  window.iconArrow = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;
  window.iconCheck = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;
  window.iconPlus = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;
  window.iconX = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
  window.iconChevron = (dir = 'right') => {
    const d = dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6';
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  };
  window.iconMenu = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`;
  window.iconMapPin = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  window.iconClock = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`;
  window.iconInstagram = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
  window.iconFacebook = () => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;

  // Header
  window.renderHeader = (active = 'home') => {
    const b = data.business;
    const navItems = [
      { label: 'Services', href: 'services.html', key: 'services' },
      { label: 'Gallery', href: 'gallery.html', key: 'gallery' },
      { label: 'Reviews', href: 'reviews.html', key: 'reviews' },
      { label: 'Journal', href: 'blog.html', key: 'blog' },
      { label: 'About', href: 'index.html#about', key: 'about' },
      { label: 'Contact', href: 'contact.html', key: 'contact' }
    ];
    return `
      <header class="site-header" id="siteHeader">
        <div class="site-header-inner">
          <a href="index.html" class="brand-lockup">
            <div class="brand-mark">R</div>
            <div class="brand-text">
              <div class="brand-name">${b.short_name}</div>
              <div class="brand-sub">Painters · Est ${b.year_founded}</div>
            </div>
          </a>
          <nav class="site-nav" aria-label="Main">
            ${navItems.map(n => `<a href="${n.href}" class="${active === n.key ? 'active' : ''}">${n.label}</a>`).join('')}
          </nav>
          <div class="header-cta">
            <a href="${b.phone_href}" class="header-phone" aria-label="Call us">
              <span class="label">Call or text</span>
              <span class="num">${b.phone}</span>
            </a>
            <a href="contact.html" class="btn btn-primary btn-sm">Get a quote</a>
            <button class="nav-toggle" id="navToggle" aria-label="Open navigation" aria-expanded="false">${window.iconMenu()}</button>
          </div>
        </div>
        <div class="mobile-dropdown" id="mobileDropdown">
          ${navItems.map(n => `<a href="${n.href}" class="${active === n.key ? 'active' : ''}">${n.label} ${window.iconChevron()}</a>`).join('')}
          <a href="${b.phone_href}" class="phone-row">
            <span>Call ${b.phone}</span>
            ${window.iconPhone()}
          </a>
        </div>
      </header>
    `;
  };

  // Sticky mobile CTA
  window.renderStickyMobileCTA = () => {
    const b = data.business;
    return `
      <div class="sticky-mobile-cta" role="region" aria-label="Contact shortcuts">
        <a href="${b.phone_href}" data-track="call_click">
          <span class="label">Call</span>
          <span class="val">Phone</span>
        </a>
        <a href="${b.sms_href}" data-track="sms_click">
          <span class="label">Text</span>
          <span class="val">SMS</span>
        </a>
        <a href="contact.html" class="primary">
          <span class="label">Free</span>
          <span class="val">Get Quote</span>
        </a>
      </div>
    `;
  };

  // Footer
  window.renderFooter = () => {
    const b = data.business;
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="brand-lockup">
                <div class="brand-mark">R</div>
                <div class="brand-text">
                  <div class="brand-name">${b.short_name}</div>
                  <div class="brand-sub">Painters · Est ${b.year_founded}</div>
                </div>
              </div>
              <p>Interior, exterior, cabinet, and deck painting for the Portland metro. Licensed, insured, and unreasonably particular about prep.</p>
            </div>
            <div class="footer-col">
              <h5>Services</h5>
              <ul>
                ${data.services.map(s => `<li><a href="service.html?s=${s.slug}">${s.name}</a></li>`).join('')}
              </ul>
            </div>
            <div class="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="blog.html">Journal</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>Hours</h5>
              <div class="footer-hours">
                ${b.hours.map(h => `<div><span class="day">${h.day}</span> — ${h.time}</div>`).join('')}
              </div>
            </div>
          </div>
          <div class="footer-legal">
            <div>${b.license_number} · Insured by ${b.insurance_carrier}</div>
            <div>${b.address}</div>
            <div class="footer-social">
              <a href="${b.instagram_url}" aria-label="Instagram">${window.iconInstagram()}</a>
              <a href="${b.facebook_url}" aria-label="Facebook">${window.iconFacebook()}</a>
            </div>
          </div>
          <div class="footer-legal" style="padding-top:0;">
            <div>© ${new Date().getFullYear()} ${b.name}. All rights reserved.</div>
            <div>Built by Redwood Studio</div>
          </div>
        </div>
      </footer>
    `;
  };

  // Scroll CTA banner (mobile)
  window.renderScrollCTA = () => `
    <a class="scroll-cta" id="scrollCTA" href="contact.html">
      Get a free quote ${window.iconArrow()}
    </a>
  `;

  // Exit intent modal (desktop only)
  window.renderExitModal = () => {
    return `
      <div class="exit-modal" id="exitModal" role="dialog" aria-modal="true">
        <div class="exit-modal-card">
          <button class="close" id="exitClose" aria-label="Close">${window.iconX()}</button>
          <div class="eyebrow-dot eyebrow">Before you go</div>
          <h3>Still thinking it <em>over?</em></h3>
          <p>We'll send you a free color consultation guide — the same one we give every new client. No salesy follow-up, promise.</p>
          <form id="exitForm">
            <div class="field">
              <label>Email</label>
              <input type="email" required placeholder="you@example.com">
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">Send me the guide</button>
          </form>
        </div>
      </div>
    `;
  };

  // Quote form
  window.renderQuoteForm = (opts = {}) => {
    const services = data.services;
    return `
      <form class="quote-form" id="${opts.id || 'quoteForm'}" novalidate>
        <div class="field">
          <label>Your name</label>
          <input type="text" name="name" required autocomplete="name">
          <span class="error-msg" aria-live="polite"></span>
        </div>
        <div class="field">
          <label>Phone</label>
          <input type="tel" name="phone" required autocomplete="tel" inputmode="tel" placeholder="(503) 555-0199">
          <span class="error-msg" aria-live="polite"></span>
        </div>
        <div class="field">
          <label>Email</label>
          <input type="email" name="email" required autocomplete="email" inputmode="email">
          <span class="error-msg" aria-live="polite"></span>
        </div>
        <div class="field">
          <label>What do you need painted?</label>
          <select name="service" required>
            <option value="">Pick a service…</option>
            ${services.map(s => `<option value="${s.slug}" ${opts.service === s.slug ? 'selected' : ''}>${s.name}</option>`).join('')}
            <option value="other">Something else</option>
          </select>
          <span class="error-msg" aria-live="polite"></span>
        </div>
        <div class="field">
          <label>Tell us a bit more (optional)</label>
          <textarea name="message" rows="3" placeholder="Rooms, timing, color thoughts…"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Request free quote ${window.iconArrow()}</button>
        <p style="font-family:var(--mono);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-mute);margin-top:16px;text-align:center">Typical reply within 2 business hours</p>
      </form>
    `;
  };

  // FAQ accordion
  window.renderFAQAccordion = (faqs) => {
    return `<div class="faq-list">
      ${faqs.map(f => `
        <details class="faq-item">
          <summary>
            <span>${f.question}</span>
            <span class="toggle">${window.iconPlus()}</span>
          </summary>
          <div class="a">${f.answer}</div>
        </details>
      `).join('')}
    </div>`;
  };

  // Trust bar
  window.renderTrustBar = () => {
    const b = data.business;
    return `
      <section class="trust-bar">
        <div class="container">
          <div class="trust-grid">
            <div class="trust-item">
              <div class="label">Licensed</div>
              <div class="val small">${b.license_number}</div>
            </div>
            <div class="trust-item">
              <div class="label">Insured</div>
              <div class="val small">${b.insurance_carrier}</div>
            </div>
            <div class="trust-item">
              <div class="label">In business since</div>
              <div class="val">${b.year_founded} · ${b.years_in_business} years</div>
            </div>
            <div class="trust-item">
              <div class="label">Reviews</div>
              <div class="stars-row">
                <span class="score">${b.avg_rating}</span>
                ${window.renderStars(b.avg_rating)}
                <span class="ink-mute" style="font-family:var(--mono);font-size:12px">${b.review_count}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  };
})();
