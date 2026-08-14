// Styles for the Done4U client document at /done4u.
//
// Every selector is scoped under `.d4u` so nothing here can leak into the rest
// of markiting.agency, and nothing in globals.css can reach in and reshape the
// document. Deliberately single-theme (light): this page sits on a light
// marketing site and is meant to read like a printed document.
//
// Fonts come from the site's own next/font variables (--font-sans / --font-mono
// = Geist / Geist Mono), so the page is set in the real Markit typeface.

export const DONE4U_STYLES = `
.d4u {
  /* Markit brand, from app/globals.css */
  --d4u-blue: #0074ff;
  --d4u-sky:  #40bbff;
  --d4u-lime: #6eff3e;

  --d4u-paper:  #ffffff;
  --d4u-card:   #f7f9fa;
  --d4u-text:   #0a0a0a;
  --d4u-soft:   #545c61;
  --d4u-faint:  #868f95;
  --d4u-rule:   #e5e8ea;
  --d4u-rule-2: #eff2f3;
  --d4u-field:  #f2f5f6;
  --d4u-accent: var(--d4u-blue);
  --d4u-acc-bg: #e8f2ff;
  --d4u-alert:  #b3320f;
  --d4u-alt-bg: #fdeee9;

  /* Loud: Done4U's own headline face. Quiet: Markit's Geist. */
  --d4u-display: var(--font-outfit), var(--font-sans), ui-sans-serif, sans-serif;
  --d4u-sans: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  --d4u-mono: var(--font-mono), ui-monospace, monospace;
  --d4u-measure: 35rem;

  background: var(--d4u-paper);
  color: var(--d4u-text);
  font-family: var(--d4u-sans);
  font-size: 16px;
  line-height: 1.62;
  -webkit-font-smoothing: antialiased;
}

.d4u *, .d4u *::before, .d4u *::after { box-sizing: border-box; }

.d4u .wrap { max-width: var(--d4u-measure); margin: 0 auto; padding: 0 1.25rem; }

/* ---------- masthead: the ONLY gradient on the page ---------- */

.d4u .masthead {
  background: linear-gradient(120deg, var(--d4u-lime) 0%, var(--d4u-sky) 50%, var(--d4u-blue) 100%);
  color: #000;
  padding: 3.5rem 0 3rem;
  margin-bottom: 3rem;
}

.d4u .logo { height: 26px; width: auto; display: block; margin-bottom: 2.25rem; }

.d4u .d4u-kicker {
  font-family: var(--d4u-display);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0 0 1rem;
  opacity: 0.75;
}

.d4u h1 {
  font-size: clamp(1.95rem, 6.5vw, 2.75rem);
  line-height: 1.03;
  letter-spacing: -0.035em;
  font-weight: 800;
  text-wrap: balance;
  margin: 0 0 1.1rem;
  font-family: var(--d4u-display);
  color: inherit;
}

.d4u .masthead .lede { font-size: 1.05rem; margin: 0; max-width: 30rem; opacity: 0.85; }

.d4u .partmeta {
  font-family: var(--d4u-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 2.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(0,0,0,0.22);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.75rem;
}

/* ---------- part dividers ---------- */

.d4u .part {
  margin: 4.5rem 0 2.5rem;
  padding-bottom: 0.9rem;
  border-bottom: 3px solid var(--d4u-accent);
}
.d4u .part:first-of-type { margin-top: 0; }

.d4u .part-label {
  font-family: var(--d4u-display);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0;
  color: var(--d4u-accent);
  margin: 0 0 0.4rem;
}

.d4u .part h2 {
  font-size: clamp(1.5rem, 5vw, 1.9rem);
  letter-spacing: -0.028em;
  font-weight: 800;
  margin: 0;
  text-wrap: balance;
  font-family: var(--d4u-display);
  color: inherit;
}

/* ---------- sections ---------- */

.d4u section { padding-top: 2.75rem; }

.d4u .sec-head {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
  border-bottom: 1px solid var(--d4u-rule);
  padding-bottom: 0.55rem;
  margin-bottom: 1.5rem;
}

.d4u .sec-num {
  font-family: var(--d4u-mono);
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--d4u-accent);
  letter-spacing: 0.06em;
  flex: none;
}

.d4u h3 {
  font-size: 1.22rem;
  letter-spacing: -0.02em;
  font-weight: 700;
  margin: 0;
  text-wrap: balance;
  font-family: var(--d4u-display);
  color: inherit;
}

.d4u .sec-intro { color: var(--d4u-soft); margin: 0 0 1.75rem; }

.d4u p { margin: 0 0 1rem; }
.d4u p:last-child { margin-bottom: 0; }

/* ---------- questions + ruled answer fields ---------- */

.d4u .q { margin-bottom: 2rem; }
.d4u .q > p { margin: 0 0 0.65rem; font-weight: 600; }
.d4u .q .hint { font-weight: 400; color: var(--d4u-soft); }

.d4u .field {
  background: var(--d4u-field);
  border: 1px solid var(--d4u-rule-2);
  border-radius: 3px;
  height: 5.25rem;
  background-image: repeating-linear-gradient(
    to bottom, transparent 0, transparent 1.74rem,
    var(--d4u-rule) 1.74rem, var(--d4u-rule) calc(1.74rem + 1px));
}
.d4u .field.tall { height: 10.5rem; }
.d4u .field.short { height: 3.5rem; }

/* ---------- notes ---------- */

.d4u .note {
  border-left: 3px solid var(--d4u-accent);
  background: var(--d4u-acc-bg);
  padding: 0.85rem 1rem;
  margin: 0 0 0.85rem;
  font-size: 0.92rem;
  color: var(--d4u-soft);
  border-radius: 0 3px 3px 0;
}
.d4u .note.alert { border-left-color: var(--d4u-alert); background: var(--d4u-alt-bg); }
.d4u .note strong { color: var(--d4u-text); }
.d4u .note p { margin: 0; }
.d4u .note p + p { margin-top: 0.6rem; }

/* ---------- tables ---------- */

.d4u .table-scroll { overflow-x: auto; margin-bottom: 1.5rem; }
.d4u table { width: 100%; border-collapse: collapse; font-size: 0.93rem; }

.d4u th {
  font-family: var(--d4u-mono);
  font-size: 0.67rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--d4u-faint);
  text-align: left;
  font-weight: 600;
  padding: 0 0.75rem 0.5rem 0;
  border-bottom: 1px solid var(--d4u-text);
  white-space: nowrap;
}

.d4u td {
  padding: 0.68rem 0.75rem 0.68rem 0;
  border-bottom: 1px solid var(--d4u-rule-2);
  vertical-align: top;
}
.d4u td:last-child, .d4u th:last-child { padding-right: 0; }

.d4u .tick { width: 3.2rem; }
.d4u .tick div {
  width: 1.15rem; height: 1.15rem;
  border: 1px solid var(--d4u-faint);
  border-radius: 2px;
  background: var(--d4u-paper);
}
.d4u .num { font-variant-numeric: tabular-nums; }

/* ---------- panels ---------- */

.d4u .panel {
  background: var(--d4u-card);
  border: 1px solid var(--d4u-rule);
  border-radius: 4px;
  padding: 1.3rem 1.35rem;
  margin-bottom: 1.5rem;
}

.d4u .panel h4 {
  font-family: var(--d4u-display);
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  color: var(--d4u-text);
  margin: 0 0 0.85rem;
  font-weight: 700;
}

.d4u .subhead {
  font-family: var(--d4u-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--d4u-text);
  margin: 2rem 0 0.85rem;
}

.d4u .panel.hero { border-color: var(--d4u-accent); border-width: 2px; }

.d4u .money {
  font-family: var(--d4u-display);
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  display: block;
  margin-bottom: 0.2rem;
}

.d4u ul { margin: 0 0 1rem; padding-left: 1.15rem; list-style: disc; }
.d4u li { margin-bottom: 0.4rem; }

.d4u .swatches { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 1.4rem; }
.d4u .swatch { flex: 1 1 7rem; }
.d4u .swatch span {
  display: block; font-family: var(--d4u-display); font-size: 0.85rem;
  font-weight: 600; color: var(--d4u-soft); margin-bottom: 0.45rem;
}
.d4u .swatch div {
  height: 2.6rem; border: 1px solid var(--d4u-rule);
  border-radius: 3px; background: var(--d4u-field);
}

.d4u .closing {
  margin: 4rem 0;
  padding-top: 1.6rem;
  border-top: 3px solid var(--d4u-accent);
  color: var(--d4u-soft);
}
.d4u .closing strong { color: var(--d4u-text); }

.d4u a { color: var(--d4u-accent); }
.d4u :focus-visible { outline: 2px solid var(--d4u-accent); outline-offset: 2px; }

@media (min-width: 62rem) {
  .d4u .sec-head { position: relative; }
  .d4u .sec-num {
    position: absolute; left: -4.5rem; top: 0.1rem;
    text-align: right; width: 3.5rem;
  }
}

@media print {
  .d4u .masthead { background: #fff !important; color: #000 !important; }
  .d4u .field { background: #fff; }
  .d4u .part { break-inside: avoid; }
}
`;
