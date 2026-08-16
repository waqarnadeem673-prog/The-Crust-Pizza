/* ============================================================
   THE CRUST PIZZA — MAIN INTERACTION LAYER
   Lenis smooth scroll + GSAP/ScrollTrigger animation orchestration.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- Lenis smooth scroll ---------------- */
  let lenis;
  if (!prefersReducedMotion) {
    lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------------- Scroll progress bar ---------------- */
  const progress = document.querySelector(".scroll-progress");
  if (progress) {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => { progress.style.width = (self.progress * 100).toFixed(2) + "%"; }
    });
  }

  /* ---------------- Navbar scroll state ---------------- */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    ScrollTrigger.create({
      start: 40, end: 99999,
      onUpdate: (self) => navbar.classList.toggle("scrolled", self.scroll() > 40)
    });
  }

  /* ---------------- Mobile menu ---------------- */
  const burger = document.querySelector(".nav-burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      burger.classList.remove("open"); mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }));
  }

  /* ---------------- Active nav link by page ---------------- */
  const current = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((a) => {
    if (a.dataset.nav === current) a.classList.add("active");
  });

  /* ---------------- Custom cursor (desktop, fine pointer only) ---------------- */
  if (window.matchMedia("(pointer:fine)").matches && !prefersReducedMotion) {
    const dot = document.createElement("div"); dot.className = "cursor-dot";
    const ring = document.createElement("div"); ring.className = "cursor-ring";
    document.body.append(dot, ring);
    let rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => {
      dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px";
      rx = e.clientX; ry = e.clientY;
      gsap.to(ring, { left: rx, top: ry, duration: 0.35, ease: "power3.out" });
    });
    document.querySelectorAll("a, button, .food-card").forEach((el) => {
      el.addEventListener("mouseenter", () => { ring.style.width = "56px"; ring.style.height = "56px"; ring.style.opacity = ".6"; });
      el.addEventListener("mouseleave", () => { ring.style.width = "36px"; ring.style.height = "36px"; ring.style.opacity = "1"; });
    });
  }

  /* ---------------- Text split-line reveal (hero + headings) ---------------- */
  document.querySelectorAll("[data-split]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="line"><span>${w}</span></span>`).join(" ");
  });

  if (!prefersReducedMotion) {
    gsap.utils.toArray(".hero-title .line span").forEach((span, i) => {
      gsap.fromTo(span, { yPercent: 120, rotate: 4 }, {
        yPercent: 0, rotate: 0, duration: 1.1, delay: 0.15 + i * 0.045, ease: "power4.out"
      });
    });
    gsap.fromTo(".hero-sub", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.fromTo(".hero-ctas", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, delay: 0.65, ease: "power3.out" });
    gsap.fromTo(".hero-meta", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" });
    gsap.fromTo(".hero-badge", { opacity: 0, scale: 0.7, rotate: -20 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.9, ease: "back.out(1.6)" });
  } else {
    document.querySelectorAll(".hero-title .line span, .hero-sub, .hero-ctas, .hero-meta, .hero-badge").forEach(el => el.style.opacity = 1);
  }

  /* ---------------- Generic reveal-on-scroll ---------------- */
  const revealTargets = gsap.utils.toArray(".reveal");
  revealTargets.forEach((el) => {
    if (prefersReducedMotion) { el.style.opacity = 1; return; }
    gsap.fromTo(el, { opacity: 0, y: 46 }, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" }
    });
  });

  /* ---------------- Staggered groups ---------------- */
  document.querySelectorAll("[data-stagger]").forEach((group) => {
    const items = group.children;
    if (prefersReducedMotion) { gsap.set(items, { opacity: 1 }); return; }
    gsap.fromTo(items, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.09,
      scrollTrigger: { trigger: group, start: "top 85%" }
    });
  });

  /* ---------------- Image reveal (clip-path) ---------------- */
  document.querySelectorAll("[data-img-reveal]").forEach((el) => {
    if (prefersReducedMotion) return;
    gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, {
      clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power4.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  /* ---------------- Parallax ---------------- */
  document.querySelectorAll("[data-parallax]").forEach((el) => {
    if (prefersReducedMotion) return;
    gsap.to(el, {
      yPercent: parseFloat(el.dataset.parallax) || -14,
      ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  /* ---------------- Counters (about stats) ---------------- */
  document.querySelectorAll("[data-counter]").forEach((el) => {
    const end = parseInt(el.dataset.counter, 10);
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el, start: "top 90%", once: true,
      onEnter: () => gsap.to(obj, {
        val: end, duration: 1.6, ease: "power2.out",
        onUpdate: () => el.textContent = Math.floor(obj.val) + (el.dataset.suffix || "")
      })
    });
  });

  /* ---------------- Smooth anchor scrolling ---------------- */
  document.querySelectorAll('a[href*="#"]').forEach((a) => {
    const url = new URL(a.href, window.location.href);
    if (url.pathname === window.location.pathname && url.hash) {
      a.addEventListener("click", (e) => {
        const target = document.querySelector(url.hash);
        if (target) {
          e.preventDefault();
          if (lenis) lenis.scrollTo(target, { offset: -90 });
          else target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  /* ---------------- Magnetic buttons ---------------- */
  if (!prefersReducedMotion && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: x * 0.28, y: y * 0.5, duration: 0.4, ease: "power3.out" });
      });
      btn.addEventListener("mouseleave", () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" }));
    });
  }

  ScrollTrigger.refresh();
});
