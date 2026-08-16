/* ============================================================
   MENU RENDERING + WHATSAPP ORDER LINKS
   ============================================================ */

function priceLabel(item) {
  if (!item.sizes || item.sizes.length === 0) return "Ask on WhatsApp";
  if (item.sizes.length === 1) return formatPKR(item.sizes[0][1]);
  return "From " + formatPKR(item.sizes[0][1]);
}

function sizesHTML(item) {
  if (!item.sizes || item.sizes.length <= 1) return "";
  return `<div class="food-card-sizes">${item.sizes.map(([label, price]) =>
    `<span class="sz">${label} <b>${formatPKR(price)}</b></span>`).join("")}</div>`;
}

function orderMessage(item) {
  if (!item.sizes || item.sizes.length === 0) {
    return `Hi The Crust Pizza, I would like to order ${item.name}.`;
  }
  if (item.sizes.length === 1) {
    return `Hi The Crust Pizza, I would like to order ${item.name} for ${formatPKR(item.sizes[0][1])}.`;
  }
  return `Hi The Crust Pizza, I would like to order ${item.name} (please confirm size & price).`;
}

function foodCardHTML(item) {
  return `
  <article class="food-card reveal">
    <div class="ticket">${priceLabel(item)}</div>
    <div class="food-card-media">
      <img src="${item.img}" alt="${item.name}" loading="lazy" width="400" height="310">
    </div>
    <div class="food-card-body">
      <h4>${item.name}</h4>
      ${item.note ? `<p class="food-card-note">${item.note}</p>` : ""}
      ${sizesHTML(item)}
      <div class="food-card-foot">
        <a class="order-btn" href="${waLink(orderMessage(item))}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.71 8.24-8.26 8.24zm4.53-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.44 1.03 2.61c.12.17 1.78 2.72 4.32 3.81.6.26 1.08.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z"/></svg>
          Order
        </a>
      </div>
    </div>
  </article>`;
}

/**
 * Renders a single category preview grid (used on homepage) or
 * a full tabbed menu (used on menu.html) depending on options.
 */
function renderMenuGrid(container, items) {
  container.innerHTML = items.map(foodCardHTML).join("");

  // Always make menu cards visible.
  container.querySelectorAll(".food-card").forEach(card => {
    card.style.opacity = "1";
    card.style.visibility = "visible";
    card.style.transform = "none";
  });
}

function initMenuTabs(tabWrap, gridEl, opts = {}) {
  const limit = opts.limit || null;
  const buttons = [];
  MENU.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.className = "menu-tab" + (i === 0 ? " active" : "");
    btn.textContent = cat.label;
    btn.dataset.cat = cat.id;
    btn.addEventListener("click", () => setActive(cat.id));
    tabWrap.appendChild(btn);
    buttons.push(btn);
  });

  function setActive(catId) {
  buttons.forEach((b) => {
    b.classList.toggle("active", b.dataset.cat === catId);
  });

  const cat = MENU.find((c) => c.id === catId);
  if (!cat) return;

  let items = cat.items;
  if (limit) items = items.slice(0, limit);

  // Render first. Menu must never depend on GSAP.
  renderMenuGrid(gridEl, items);

  // Optional animation if GSAP is available.
  if (
    window.gsap &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    gsap.fromTo(
      gridEl.children,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out"
      }
    );
  }
}

  setActive(MENU[0].id);
  return setActive;
}
