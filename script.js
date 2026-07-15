/* ==========================================================================
   SCRIPT.JS — No necesitas tocar este archivo entre clientes.
   ========================================================================== */

(function () {
  "use strict";

  // Set de íconos de línea, minimalista y consistente (nada de emojis)
  const ICONS = {
    shield: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>',
    tool: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M14 7a3 3 0 1 0-4.24 4.24L4 17v3h3l5.76-5.76A3 3 0 0 0 17 10l-3-3z"/></svg>',
    wallet: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2M3 7v10a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H8a2 2 0 0 1 0-4h11"/><circle cx="17" cy="13" r="1"/></svg>',
    chat: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H6l-3 3v-3.6A8.5 8.5 0 1 1 21 11.5z"/></svg>',
    tooth: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M12 3C9 3 7 5 6 5c-1.5 0-2.5 1.8-2.5 4.2 0 2.2.7 3.8 1.2 5.7.5 2 .9 6.1 2.7 6.1 1.6 0 1.6-4 2.3-5.7.3-.8.9-1.3 2.3-1.3s2 .5 2.3 1.3c.7 1.7.7 5.7 2.3 5.7 1.8 0 2.2-4.1 2.7-6.1.5-1.9 1.2-3.5 1.2-5.7C20.5 6.8 19.5 5 18 5c-1 0-3-2-6-2z"/></svg>',
    sparkle: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 15l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7L19 15z"/></svg>',
    braces: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M4 8h16M4 8c0 6 2 10 8 10s8-4 8-10"/><circle cx="8" cy="8" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="8" r="1"/></svg>',
    drop: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/></svg>',
    implant: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M12 3l5 3v3l-5 12-5-12V6l5-3z"/><path d="M8.5 9h7M9 12h6M9.5 15h5"/></svg>',
    alert: '<svg class="icon-line" viewBox="0 0 24 24"><path d="M12 4l9 16H3L12 4z"/><path d="M12 10v4"/><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none"/></svg>'
  };

  const waLink = (customMsg) => {
    const msg = encodeURIComponent(customMsg || CONFIG.whatsappDefaultMessage);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
  };

  function applyColors() {
    const r = document.documentElement.style;
    const c = CONFIG.colors;
    r.setProperty("--color-primary", c.primary);
    r.setProperty("--color-primary-light", c.primaryLight);
    r.setProperty("--color-accent", c.accent);
    r.setProperty("--color-accent-ink", c.accentInk);
    r.setProperty("--color-bg", c.bg);
    r.setProperty("--color-bg-alt", c.bgAlt);
    r.setProperty("--color-text", c.text);
    r.setProperty("--color-text-soft", c.textSoft);
  }

  function applyIdentity() {
    const fullTitle = `${CONFIG.clinicName} — ${CONFIG.tagline}`;
    document.title = fullTitle;
    document.getElementById("metaTitle").textContent = fullTitle;
    document.getElementById("metaDescription").setAttribute("content", CONFIG.hero.subtitle);
    document.getElementById("ogTitle").setAttribute("content", fullTitle);
    document.getElementById("ogDescription").setAttribute("content", CONFIG.hero.subtitle);

    document.getElementById("clinicNameHeader").textContent = CONFIG.clinicName;
    document.getElementById("clinicNameFooter").textContent = CONFIG.clinicName;
    document.getElementById("clinicNameFooterBottom").textContent = CONFIG.clinicName;
    document.getElementById("footerTagline").textContent = CONFIG.tagline;
    document.getElementById("footerYear").textContent = new Date().getFullYear();
    document.getElementById("logoImg").src = CONFIG.logo;

    document.getElementById("headerWhatsappBtn").href = waLink();
    document.getElementById("heroWhatsappBtn").href = waLink();
    document.getElementById("midCtaWhatsappBtn").href = waLink();
    document.getElementById("floatingWa").href = waLink();

    document.getElementById("phoneLink").textContent = CONFIG.phoneDisplay;
    document.getElementById("phoneLink").href = `tel:+${CONFIG.whatsappNumber}`;
    document.getElementById("addressText").textContent = CONFIG.address;
    document.getElementById("mapEmbed").src = CONFIG.googleMapsEmbed;
  }

  function renderHero() {
    document.getElementById("heroEyebrow").textContent = CONFIG.hero.eyebrow;
    document.getElementById("heroTitle").textContent = CONFIG.hero.title;
    document.getElementById("heroSubtitle").textContent = CONFIG.hero.subtitle;
    document.querySelector(".hero__microcopy").textContent = CONFIG.hero.microcopy;

    // Mockup de WhatsApp: usa nombre real e iniciales del cliente
    document.getElementById("waMockName").textContent = CONFIG.clinicName;
    const initials = CONFIG.clinicName.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
    document.getElementById("waMockInitial").textContent = initials;
  }

  function renderTrustStrip() {
    document.getElementById("trustStripGrid").innerHTML = CONFIG.trust.map((t, i) => `
      <div class="trust-item-strip reveal" style="transition-delay:${i * 70}ms">${ICONS[t.icon] || ""}<span>${t.text}</span></div>
    `).join("");
  }

  function renderDoctor() {
    document.getElementById("doctorName").textContent = CONFIG.doctor.name;
    document.getElementById("doctorRole").textContent = CONFIG.doctor.role;
    document.getElementById("doctorBio").textContent = CONFIG.doctor.bio;

    const avatarEl = document.getElementById("doctorAvatar");
    if (CONFIG.doctor.image) {
      avatarEl.innerHTML = `<img src="${CONFIG.doctor.image}" alt="${CONFIG.doctor.name}, ${CONFIG.doctor.role}" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`;
    } else {
      document.getElementById("doctorInitials").textContent = CONFIG.doctor.initials;
    }
  }

  function renderServices() {
    document.getElementById("servicesGrid").innerHTML = CONFIG.services.map((s, i) => `
      <div class="service-card reveal" style="transition-delay:${(i % 3) * 90}ms">
        <div class="service-card__icon">${ICONS[s.icon] || ""}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join("");
  }

  function renderTestimonials() {
    document.getElementById("testimonialsGrid").innerHTML = CONFIG.testimonials.map((t, i) => `
      <div class="testimonial-card reveal" style="transition-delay:${i * 100}ms">
        <div class="testimonial-card__stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</div>
        <p>"${t.text}"</p>
        <strong>${t.name}</strong>
      </div>
    `).join("");
  }

  function renderMidCta() {
    document.getElementById("midCtaText").textContent = CONFIG.midCtaText;
  }

  function renderFAQ() {
    const list = document.getElementById("faqList");
    list.innerHTML = CONFIG.faq.map((item, i) => `
      <div class="faq-item reveal" data-index="${i}" style="transition-delay:${i * 60}ms">
        <button class="faq-item__q" type="button" aria-expanded="false"><span>${item.q}</span></button>
        <div class="faq-item__a"><p>${item.a}</p></div>
      </div>
    `).join("");

    list.querySelectorAll(".faq-item__q").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const answer = item.querySelector(".faq-item__a");
        const isOpen = item.classList.contains("is-open");

        list.querySelectorAll(".faq-item").forEach(el => {
          el.classList.remove("is-open");
          el.querySelector(".faq-item__a").style.maxHeight = null;
          el.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          item.classList.add("is-open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function renderHours() {
    document.getElementById("hoursList").innerHTML = CONFIG.hours.map(h => `
      <li><span>${h.day}</span><span>${h.time}</span></li>
    `).join("");
  }

  function setupForm() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("fname").value.trim();
      const phone = document.getElementById("fphone").value.trim();
      const msg = document.getElementById("fmsg").value.trim();
      const text = `Hola, soy ${name} (tel: ${phone}). ${msg || "Quisiera agendar una cita."}`;
      window.open(waLink(text), "_blank");
    });
  }

  function setupMobileMenu() {
    const burger = document.getElementById("burgerBtn");
    const nav = document.getElementById("headerNav");
    burger.addEventListener("click", () => {
      const isOpen = nav.style.display === "flex";
      nav.style.display = isOpen ? "none" : "flex";
      Object.assign(nav.style, {
        flexDirection: "column", position: "absolute", top: "100%", left: "0", right: "0",
        background: "var(--color-bg)", padding: "16px 24px", gap: "14px", boxShadow: "var(--shadow-soft)"
      });
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.style.display = "none"; }));
  }

  // Un único efecto de aparición al hacer scroll, aplicado de forma consistente
  function setupParallax() {
    const blob = document.querySelector(".hero__blob");
    if (!blob) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600) * 0.12;
        blob.style.transform = `translateY(${y}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  function setupScrollReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
  }

  // SEO técnico: schema.org Dentist, generado desde CONFIG (sin datos inventados)
  function injectSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": CONFIG.clinicName,
      "telephone": `+${CONFIG.whatsappNumber}`,
      "address": CONFIG.address,
      "openingHours": CONFIG.hours.map(h => `${h.day}: ${h.time}`)
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function init() {
    applyColors();
    applyIdentity();
    renderHero();
    renderTrustStrip();
    renderDoctor();
    renderServices();
    renderTestimonials();
    renderMidCta();
    renderFAQ();
    renderHours();
    setupForm();
    setupMobileMenu();
    setupParallax();
    setupScrollReveal();
    injectSchema();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
