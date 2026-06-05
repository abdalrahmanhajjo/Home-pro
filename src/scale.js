/*
 * Laptop scaling
 * --------------
 * Makes laptop screens show an exact, proportionally-smaller copy of the
 * desktop layout. When the viewport is between MIN and DESIGN_WIDTH we lock
 * the page to the desktop design width (via the .is-scaled class in
 * global.css) and apply `zoom` so the whole thing shrinks to fit the window.
 *
 * Outside that range nothing is touched:
 *   - viewport >= DESIGN_WIDTH  → native desktop (no zoom)
 *   - viewport <  MIN           → native responsive / mobile layout
 *
 * Keep DESIGN_WIDTH in sync with --design-width in global.css.
 */

const DESIGN_WIDTH = 1920; // the desktop design width we replicate on laptops
const MIN = 1200; // below this we fall back to the responsive layout

function fit() {
  const root = document.documentElement;

  // Always measure from a clean state so the reading is the true viewport
  // width (no leftover zoom / fixed body width feeding back into it).
  root.classList.remove("is-scaled");
  root.style.zoom = "";

  const w = root.clientWidth; // available width, excluding scrollbar

  if (w >= MIN && w < DESIGN_WIDTH) {
    root.classList.add("is-scaled");
    root.style.zoom = String(w / DESIGN_WIDTH);
  }
}

fit();
window.addEventListener("resize", fit);
window.addEventListener("orientationchange", fit);
