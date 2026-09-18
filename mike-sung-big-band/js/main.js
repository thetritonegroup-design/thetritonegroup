document.getElementById("yr").textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const links = document.getElementById("primary-nav");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); })
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  const root = document.documentElement;
  const tbtn = document.querySelector(".theme-toggle");
  const sun = tbtn.querySelector(".ico-sun");
  const moon = tbtn.querySelector(".ico-moon");
  function currentTheme() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function syncIcon() {
    const dark = currentTheme() === "dark";
    sun.style.display = dark ? "block" : "none";
    moon.style.display = dark ? "none" : "block";
  }
  try { const saved = localStorage.getItem("msbb-theme"); if (saved) root.dataset.theme = saved; } catch (e) {}
  syncIcon();
  tbtn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("msbb-theme", next); } catch (e) {}
    syncIcon();
  });

  // ---- premium: scroll progress + nav lift ----
  const _rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const _bar = document.createElement("div"); _bar.id = "scrollbar"; document.body.appendChild(_bar);
  const _nav = document.querySelector("header.nav");
  function _onScroll() {
    const st = window.scrollY || document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    _bar.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
    if (_nav) _nav.classList.toggle("scrolled", st > 8);
  }
  document.addEventListener("scroll", _onScroll, { passive: true });
  _onScroll();

  // ---- premium: count-up stats ----
  if (!_rm) {
    const _statIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target, to = +el.dataset.to, dur = 1100, t0 = performance.now();
          (function tick(now) {
            const p = Math.min((now - t0) / dur, 1);
            el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * to);
            if (p < 1) requestAnimationFrame(tick);
          })(t0);
          _statIO.unobserve(el);
        }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".stat b").forEach((el) => {
      const txt = el.textContent.trim();
      if (/^\d+$/.test(txt)) { el.dataset.to = txt; el.textContent = "0"; _statIO.observe(el); }
    });
  }
