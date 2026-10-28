/* =========================================================
   Portfolio behaviour (vanilla JavaScript, no dependencies)
   Reads content from assets/js/data.js  ->  portfolioData
   Works on index.html and projects/case-study.html
   ========================================================= */
(function () {
  "use strict";

  var D = (typeof portfolioData !== "undefined") ? portfolioData : {};
  var root = document.body.getAttribute("data-root") || ""; // "" on index, "../" on case-study page

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ---------- icons (inline SVG, stroke style) ---------- */
  var P = {
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-6.9a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.3-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 2.8 5.1 3.1 5.1 3.1a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 3.5 10.5c0 5.4 3.3 6.6 6.4 6.9a3.4 3.4 0 0 0-.9 2.6V22"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    "arrow-down": '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    "arrow-up": '<path d="M12 19V5M5 12l7-7 7 7"/>',
    "arrow-right": '<path d="M5 12h14M12 5l7 7-7 7"/>',
    "arrow-left": '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="m22 6-10 7L2 6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 17l.7 1.8L21.5 19.5l-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>'
  };
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (P[name] || "") + "</svg>";
  }
  function paintIcons(ctx) {
    $$("[data-icon]", ctx).forEach(function (el) {
      if (!el.firstChild) el.innerHTML = icon(el.getAttribute("data-icon"));
      el.classList.add("icon-wrap");
    });
  }

  /* ---------- fill simple text / links from data.js ---------- */
  function bindData() {
    $$("[data-bind]").forEach(function (el) {
      var k = el.getAttribute("data-bind");
      if (D[k]) el.textContent = D[k];
    });
    var links = {
      linkedin: D.linkedin, github: D.github, resume: root + (D.resume || ""),
      email: D.email ? "mailto:" + D.email : "", phone: D.phoneLink ? "tel:" + D.phoneLink : ""
    };
    $$("[data-link]").forEach(function (el) {
      var k = el.getAttribute("data-link");
      var v = links[k];
      if (k === "resume" && !D.resume) { el.hidden = true; return; }
      if (v) el.setAttribute("href", v);
      else if (k === "linkedin" || k === "github") el.hidden = true;
    });
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- theme ---------- */
  function setupTheme() {
    var btn = $("#theme-toggle");
    var html = document.documentElement;
    function apply(t) {
      html.setAttribute("data-theme", t);
      if (btn) {
        btn.innerHTML = icon(t === "dark" ? "sun" : "moon");
        btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
      }
    }
    apply(html.getAttribute("data-theme") || "light");
    if (btn) btn.addEventListener("click", function () {
      var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      safeSet("theme", next); apply(next);
    });
  }

  /* ---------- mobile menu ---------- */
  function setupMenu() {
    var btn = $("#menu-btn"), list = $("#nav-links");
    if (!btn || !list) return;
    function set(open) {
      list.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      btn.innerHTML = icon(open ? "close" : "menu");
      document.body.classList.toggle("menu-open", open);
    }
    btn.addEventListener("click", function () { set(!list.classList.contains("open")); });
    $$("a", list).forEach(function (a) { a.addEventListener("click", function () { set(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) { set(false); btn.focus(); }
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 860) set(false); });
  }

  /* ---------- active nav link on scroll (index page) ---------- */
  function setupScrollSpy() {
    var links = $$("#nav-links a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.removeAttribute("aria-current"); });
          map[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- header shadow ---------- */
  function setupHeader() {
    var h = $(".site-header");
    function f() { h.classList.toggle("scrolled", window.scrollY > 8); }
    f(); window.addEventListener("scroll", f, { passive: true });
  }

  /* ---------- reveal on scroll ---------- */
  function setupReveal() {
    var els = $$(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- index page renderers ---------- */
  function renderHero() {
    var tags = $("#title-tags");
    if (tags && D.titleTags) tags.innerHTML = D.titleTags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    var photo = $(".hero-photo img");
    if (photo && D.photo) { photo.src = root + D.photo; if (D.photoAlt) photo.alt = D.photoAlt; }
    var stats = $("#hero-stats");
    if (stats) {
      var out = "";
      if (D.yearsExperience) out += '<div><strong>' + esc(D.yearsExperience) + '</strong><span>years of experience</span></div>';
      if (D.projects && D.projects.length) out += '<div><strong>' + D.projects.length + '</strong><span>case studies</span></div>';
      stats.innerHTML = out; stats.hidden = !out;
    }
  }

  function renderAbout() {
    var c = $("#about-copy");
    if (c && D.about) c.innerHTML = D.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    var list = $("#edu-list"), card = $("#edu-card");
    if (!list) return;
    var html = "";
    (D.education || []).forEach(function (e) {
      html += "<li><strong>" + esc(e.title) + "</strong><span>" + esc(e.org) + (e.date ? " &middot; " + esc(e.date) : "") + "</span></li>";
    });
    (D.certifications || []).forEach(function (e) {
      html += "<li><strong>" + esc(e.title) + "</strong><span>" + esc(e.org) + " (certification/training)" + (e.date ? " &middot; " + esc(e.date) : "") + "</span></li>";
    });
    list.innerHTML = html; card.hidden = !html;
  }

  function renderExperience() {
    var t = $("#timeline"); if (!t || !D.experience) return;
    t.innerHTML = D.experience.map(function (x, i) {
      var tools = (x.tools && x.tools.length)
        ? '<ul class="chip-list small" aria-label="Tools">' + x.tools.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>" : "";
      var more = (x.highlights && x.highlights.length)
        ? '<details class="more"><summary>All responsibilities <span class="count">(' + x.highlights.length + ")</span></summary><ul class=\"bullet-list\">" +
          x.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul></details>" : "";
      var key = x.keyContribution
        ? '<div class="key-note"><span class="key-label">Key contribution</span><p>' + esc(x.keyContribution) + "</p></div>" : "";
      return '<li class="tl-item reveal">' +
        '<div class="tl-date"><time>' + esc(x.start) + " &ndash; " + esc(x.end) + "</time><span>" + esc(x.location) + "</span></div>" +
        '<div class="tl-card"><h3>' + esc(x.role) + '</h3><p class="tl-company">' + esc(x.company) + "</p>" +
        '<p class="tl-summary">' + esc(x.summary) + "</p>" + key + tools + more + "</div></li>";
    }).join("");
  }

  function renderSkills() {
    var g = $("#skills-grid"); if (!g || !D.competencies) return;
    g.innerHTML = D.competencies.map(function (c) {
      var body;
      if (c.style === "chips") {
        body = '<ul class="chip-list">' + c.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
      } else {
        body = '<ul class="skill-list">' + c.items.map(function (i) {
          var parts = String(i).split(" — ");
          return "<li>" + (parts.length > 1 ? "<strong>" + esc(parts[0]) + "</strong><span>" + esc(parts.slice(1).join(" — ")) + "</span>" : "<span>" + esc(i) + "</span>") + "</li>";
        }).join("") + "</ul>";
      }
      return '<article class="skill-card reveal' + (c.wide ? " wide" : "") + '"><h3>' + icon(c.icon || "spark") + "<span>" + esc(c.title) + "</span></h3>" + body + "</article>";
    }).join("");
  }

  function projectUrl(p) { return root + "projects/case-study.html?id=" + encodeURIComponent(p.id); }

  function renderProjects() {
    var g = $("#project-grid"); if (!g || !D.projects) return;
    g.innerHTML = D.projects.map(function (p) {
      return '<article class="project-card reveal">' +
        '<a class="project-thumb" href="' + projectUrl(p) + '" tabindex="-1" aria-hidden="true"><img src="' + esc(root + p.image) + '" alt="" loading="lazy" width="1200" height="750"></a>' +
        '<div class="project-body">' +
        '<p class="project-cat">' + esc(p.category) + "</p>" +
        '<h3><a href="' + projectUrl(p) + '">' + esc(p.name) + "</a></h3>" +
        '<p class="project-desc">' + esc(p.shortDescription) + "</p>" +
        '<div class="project-meta"><span class="meta-label">Tools</span><ul class="chip-list small">' + p.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="project-meta"><span class="meta-label">Skills demonstrated</span><ul class="chip-list small accent">' + p.skills.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>" +
        '<a class="btn btn-small project-btn" href="' + projectUrl(p) + '">View Case Study ' + icon("arrow-right") + "</a>" +
        "</div></article>";
    }).join("");
  }

  /* ---------- case-study page ---------- */
  function renderCaseStudy() {
    var host = $("#case-study"); if (!host) return;
    var id = new URLSearchParams(window.location.search).get("id");
    var list = D.projects || [];
    var idx = -1;
    list.forEach(function (p, i) { if (p.id === id) idx = i; });
    if (idx < 0) {
      host.innerHTML = '<div class="container narrow"><h1>Case study not found</h1><p>Please choose a project from the <a href="' + root + 'index.html#projects">projects section</a>.</p></div>';
      document.title = "Case study not found | " + (D.name || "");
      return;
    }
    var p = list[idx];
    host.classList.add("t" + ((idx % 6) + 1));
    document.title = p.name + " | Case Study | " + (D.name || "");
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", p.shortDescription);

    function chips(arr, cls) { return '<ul class="chip-list ' + (cls || "") + '">' + arr.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>"; }
    function bullets(arr) { return '<ul class="bullet-list">' + arr.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>"; }

    var facts = "";
    if (p.keyFacts && p.keyFacts.length) {
      facts = '<div class="facts"><dl>' + p.keyFacts.map(function (f) {
        return "<div><dt>" + esc(f.label) + "</dt><dd>" + esc(f.value) + "</dd></div>";
      }).join("") + "</dl>" + (p.keyFactsNote ? '<p class="facts-note">' + esc(p.keyFactsNote) + "</p>" : "") + "</div>";
    }

    var docs = "";
    if (p.documents && p.documents.length) {
      docs = '<ul class="doc-list">' + p.documents.map(function (d) {
        return d.url
          ? '<li><a href="' + esc(root + d.url) + '" target="_blank" rel="noopener">' + icon("file") + esc(d.label) + "</a></li>"
          : "<li>" + icon("file") + "<span>" + esc(d.label) + "</span></li>";
      }).join("") + "</ul>";
    }

    var steps = [
      { id: "problem", title: "Business problem", html: "<p>" + esc(p.problem) + "</p>" },
      { id: "objective", title: "Objective", html: "<p>" + esc(p.objective) + "</p>" },
      { id: "approach", title: "Approach", html:
          '<p class="sub">My role</p><p>' + esc(p.role) + "</p>" +
          '<p class="sub">Methodology</p>' + chips(p.methodology) +
          '<p class="sub">Tools</p>' + chips(p.tools, "accent") +
          '<p class="sub">Data sources</p>' + bullets(p.dataSource) },
      { id: "analysis", title: "Analysis", html: bullets(p.analysis) + facts },
      { id: "findings", title: "Key findings", html: bullets(p.findings) },
      { id: "recommendations", title: "Recommendations", html: bullets(p.recommendations) },
      { id: "outcome", title: "Outcome", html: "<p>" + esc(p.outcome) + "</p>" +
          (p.outcomeNote ? '<p class="note">' + icon("check") + "<span>" + esc(p.outcomeNote) + "</span></p>" : "") +
          (docs ? '<p class="sub">Supporting documents</p>' + docs : "") },
      { id: "impact", title: "Business impact", html: "<p>" + esc(p.impact) + "</p>" }
    ];

    var toc = steps.map(function (s, i) {
      return '<li><a href="#' + s.id + '"><span>' + String(i + 1).padStart(2, "0") + "</span>" + esc(s.title) + "</a></li>";
    }).join("");

    var body = steps.map(function (s, i) {
      return '<section class="cs-step reveal" id="' + s.id + '" aria-labelledby="h-' + s.id + '">' +
        '<p class="step-no">' + String(i + 1).padStart(2, "0") + '</p><div><h2 id="h-' + s.id + '">' + esc(s.title) + "</h2>" + s.html + "</div></section>";
    }).join("");

    var prev = list[idx - 1], next = list[idx + 1];
    var pager = '<nav class="cs-pager" aria-label="More case studies">' +
      (prev ? '<a class="pager-link" href="' + projectUrl(prev) + '"><span>' + icon("arrow-left") + " Previous</span><strong>" + esc(prev.name) + "</strong></a>" : "<span></span>") +
      (next ? '<a class="pager-link next" href="' + projectUrl(next) + '"><span>Next ' + icon("arrow-right") + "</span><strong>" + esc(next.name) + "</strong></a>" : "<span></span>") + "</nav>";

    host.innerHTML =
      '<div class="container">' +
      '<a class="back-link" href="' + root + 'index.html#projects">' + icon("arrow-left") + " All projects</a>" +
      '<header class="cs-header"><p class="project-cat">' + esc(p.category) + "</p><h1>" + esc(p.name) + '</h1><p class="section-lead">' + esc(p.shortDescription) + "</p></header>" +
      '<figure class="cs-hero"><img src="' + esc(root + p.image) + '" alt="' + esc(p.imageAlt || "") + '" width="1200" height="750"></figure>' +
      '<div class="cs-layout"><aside class="cs-toc" aria-label="Case study sections"><p class="meta-label">Case study</p><ol>' + toc + "</ol></aside>" +
      '<div class="cs-content">' + body + "</div></div>" + pager +
      '<div class="cs-cta"><h2>Want to discuss a similar problem?</h2><a class="btn btn-primary" href="' + root + 'index.html#contact">Get in touch ' + icon("arrow-right") + "</a></div>" +
      "</div>";
  }

  /* ---------- contact form (Formspree, no backend) ---------- */
  function setupForm() {
    var form = $("#contact-form"); if (!form) return;
    if (D.formspreeEndpoint) form.setAttribute("action", D.formspreeEndpoint);
    var status = $("#cf-status"), btn = $("#cf-submit"), label = $(".btn-label", btn);
    var msgs = { name: "Please enter your name.", email: "Please enter a valid email address.", subject: "Please enter a subject.", message: "Please write a message (at least 10 characters)." };

    function validateField(input) {
      var err = $("#" + input.id + "-err");
      var ok = input.checkValidity() && input.value.trim() !== "";
      input.setAttribute("aria-invalid", ok ? "false" : "true");
      if (err) err.textContent = ok ? "" : msgs[input.name] || "This field is required.";
      return ok;
    }
    var fields = $$("input[required], textarea[required]", form);
    fields.forEach(function (f) {
      f.addEventListener("blur", function () { if (f.value !== "") validateField(f); });
      f.addEventListener("input", function () { if (f.getAttribute("aria-invalid") === "true") validateField(f); });
    });

    function setStatus(kind, text) { status.className = "form-status " + kind; status.textContent = text; }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("", "");
      var firstBad = null;
      fields.forEach(function (f) { if (!validateField(f) && !firstBad) firstBad = f; });
      if (firstBad) { firstBad.focus(); return; }
      if (!form.action || form.action.indexOf("formspree.io") === -1) {
        setStatus("error", "The contact form is not configured yet. Please email me directly instead.");
        return;
      }
      btn.disabled = true; btn.classList.add("loading"); label.textContent = "Sending…";
      setStatus("", "Sending your message…");

      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            fields.forEach(function (f) { f.removeAttribute("aria-invalid"); });
            setStatus("success", "Thank you. Your message has been sent and I will reply soon.");
          } else {
            return r.json().then(function (d) {
              throw new Error(d && d.errors ? d.errors.map(function (x) { return x.message; }).join(", ") : "Server error");
            }, function () { throw new Error("Server error"); });
          }
        })
        .catch(function () {
          setStatus("error", "Sorry, your message could not be sent. Please try again, or email me at " + (D.email || "the address above") + ".");
        })
        .then(function () { btn.disabled = false; btn.classList.remove("loading"); label.textContent = "Send message"; });
    });
  }

  /* ---------- init ---------- */
  function init() {
    renderHero(); renderAbout(); renderExperience(); renderSkills(); renderProjects(); renderCaseStudy();
    bindData(); paintIcons(document);
    setupTheme(); setupMenu(); setupHeader(); setupScrollSpy(); setupForm(); setupReveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
