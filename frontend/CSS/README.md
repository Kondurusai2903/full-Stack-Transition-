# 🎨 CSS Full Roadmap (Basics → Advanced → Production Ready)

This roadmap covers **all CSS concepts** needed to become a **Frontend Beast** and crack **product-based company interviews**.

---

## **1️⃣ CSS Foundations (Basics You Can’t Skip)**

- Inline, Internal, External CSS
- CSS Selectors:
  - Tag, Class, ID
  - Attribute selectors `[type="text"]`
  - Combinators:
    - Descendant (`div p`)
    - Child (`div > p`)
    - Sibling (`+ ~`)
- Pseudo-classes: `:hover`, `:focus`, `:nth-child()`
- Pseudo-elements: `::before`, `::after`
- CSS Comments `/* comment */`
- CSS Specificity & Priority (Inline > ID > Class > Tag)

---

## **2️⃣ CSS Units & Sizing**

- Absolute vs Relative Units: `px`, `%`, `em`, `rem`
- Viewport Units: `vh`, `vw`, `vmin`, `vmax`
- CSS Functions: `calc()`, `min()`, `max()`, `clamp()`
- Box Model: `margin`, `border`, `padding`, `content`
- `box-sizing: border-box` (important for layout control)

---

## **3️⃣ Colors, Backgrounds & Borders**

- Color formats: HEX, RGB, RGBA, HSL, HSLA
- Backgrounds:
  - `background-color`
  - `background-image: url()`
  - Gradients: `linear-gradient`, `radial-gradient`
- Borders & Border-radius (circle, pill shapes)
- Box-shadow & Text-shadow

---

## **4️⃣ Layout Mastery**

- **Display property:** `block`, `inline`, `inline-block`, `none`
- **Positioning:** `static`, `relative`, `absolute`, `fixed`, `sticky`
- **Z-index & stacking context**
- **Float & Clear** (legacy but asked in interviews)
- **Flexbox:**
  - `display: flex`
  - Main-axis & cross-axis
  - `justify-content`, `align-items`, `align-self`
  - `flex-wrap`, `flex-basis`, `flex-grow`, `flex-shrink`
- **Grid Layout:**
  - `display: grid`
  - `grid-template-columns` & `grid-template-rows`
  - `gap`, `fr` unit, `repeat()`
  - Grid areas for complex layouts

---

## **5️⃣ Typography & Text Styling**

- `font-family`, `font-size`, `font-weight`, `font-style`
- `line-height`, `letter-spacing`, `word-spacing`
- `text-align`, `text-transform`, `text-decoration`
- Web fonts (Google Fonts)

---

## **6️⃣ Responsive & Modern CSS**

- **Media Queries** → mobile-first design
- **Container Queries** (latest CSS feature)
- **Viewport-based layouts (vh/vw)**
- **Object-fit & aspect-ratio** for images/videos
- **Responsive Units:** `%`, `fr`, `minmax()`

---

## **7️⃣ Transitions, Animations & Transforms**

- `transition` → smooth hover effects
- `transform` → `scale`, `rotate`, `translate`, `skew`
- `@keyframes` animations → looping effects
- **3D Effects:** `perspective`, `rotateX`, `rotateY`
- CSS Animation Projects: loaders, cards, buttons

---

## **8️⃣ Advanced Effects & Modern Features**

- **Clip-path & Masking** → creative shapes
- **Filter & Backdrop-filter** → blur, brightness effects
- **CSS Variables (Custom Properties)**
- **Mix-blend-mode** → image & text blending effects
- **Scroll Snap** → carousels, story sliders

---

## **9️⃣ CSS Architecture for Real Projects**

- **BEM Naming Convention** (Block\_\_Element--Modifier)
- **Utility-first styling** (like Tailwind)
- **SCSS / SASS basics** → nesting & variables
- **CSS Resets & Normalize.css**
- **Performance tips:** minification, avoiding `!important` abuse

---

## **🔟 CSS Interview + Production Tips**

- How `position: sticky` actually works
- Flex vs Grid → when to use what
- How to center anything (flex & grid methods)
- `will-change`, `contain`, and GPU acceleration
- Test performance in **Lighthouse / DevTools**

---
