# Design System Document: The Predictive Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Intelligent Atmosphere"**
The "Smart House Price Predictor" transcends the utility of a calculator to become a high-end advisory experience. We reject the "dashboard" aesthetic of dense grids and heavy borders. Instead, we embrace **Soft Minimalism**—an editorial-inspired layout where data breathes through expansive white space, intentional asymmetry, and tonal depth. By utilizing layered glassmorphism and subtle gradients, we create a sense of professional foresight, positioning the app as a trustworthy, forward-looking partner in real estate.

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in deep, authoritative indigos (`primary`) and sophisticated violets (`secondary`), balanced by a breathable, cool-grey surface.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established solely through background shifts.
*   **Surface Hierarchy:** Use `surface_container_low` for the main canvas, and `surface_container_lowest` (pure white) for elevated content cards.
*   **Nesting:** To create depth without lines, nest a `surface_container_high` element within a `surface` section. This creates a soft, "carved-out" appearance.

### The "Glass & Gradient" Rule
To achieve a signature premium feel, use the following:
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface_container_lowest` at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** Hero sections and primary CTAs should utilize a linear gradient from `primary` (#392cc1) to `primary_container` (#534ad9) at a 135-degree angle to add "visual soul."

## 3. Typography: Editorial Authority
We utilize **Manrope** for structural authority and **Plus Jakarta Sans** for modern, high-legibility data consumption.

*   **Display & Headlines (Manrope):** Large-scale, high-contrast type (e.g., `display-lg` at 3.5rem) should be used for price predictions and hero statements. These are the "anchors" of the page.
*   **Body & Titles (Plus Jakarta Sans):** Chosen for its geometric clarity. Use `body-lg` (1rem) for property descriptions to ensure a premium reading experience.
*   **Data Labels:** Use `label-md` in `on_surface_variant` to provide clear, unobtrusive metadata without distracting from the primary price points.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are a fallback, not a standard. We define hierarchy through the physical stacking of tones.

*   **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` background. This creates a "Natural Lift" that feels integrated into the UI.
*   **Ambient Shadows:** For high-priority floating elements (e.g., a "Predict" button or a property modal), use an ultra-diffused shadow: `Y: 12px, Blur: 32px, Color: on_surface @ 6%`.
*   **The "Ghost Border" Fallback:** If a container sits on an identical color background, use a "Ghost Border" of `outline_variant` at **15% opacity**. Never use a 100% opaque border.

## 5. Components: Stylistic Implementation

### Buttons
*   **Primary:** Gradient-filled (`primary` to `primary_container`), `xl` (1.5rem) roundedness. No border.
*   **Secondary:** Ghost style. No background, `outline_variant` (at 20% opacity) border, with `primary` text.
*   **Tertiary:** Text-only with `primary` color, used for low-emphasis actions like "View More Details."

### Cards & Lists
*   **The Divider Forbiddance:** Horizontal lines are banned. Separate list items using `spacing scale 4` (1.4rem) or by alternating background tones between `surface_container_low` and `surface`.
*   **Property Cards:** Use `xl` rounded corners (1.5rem). The price prediction should be set in `headline-lg` (Manrope) for maximum impact.

### Input Fields
*   **Address/Search Inputs:** Use `surface_container_highest` for the field background with a `md` (0.75rem) corner radius. Labels should be `label-md` and sit *above* the field, never inside as placeholder text for accessibility.

### Predictive Chips
*   **Confidence Indicators:** Use `tertiary_container` for "High Confidence" predictions to provide a calming, trustworthy blue-green accent that differs from the primary action colors.

## 6. Do’s and Don’ts

| Do | Don't |
| :--- | :--- |
| **Do:** Use `spacing scale 12` (4rem) to separate major sections. | **Don't:** Use thin grey lines to separate content sections. |
| **Do:** Use Manrope `display-sm` for numbers and currency. | **Don't:** Use standard Roboto for primary price displays. |
| **Do:** Layer glassmorphic elements over soft gradients. | **Don't:** Use 100% opaque, flat-colored modals. |
| **Do:** Use `outline_variant` at low opacity for "Ghost Borders." | **Don't:** Use high-contrast black or dark grey borders. |
| **Do:** Trust white space to guide the user's eye. | **Don't:** Cram information into tight, bordered boxes. |