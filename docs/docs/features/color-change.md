---
sidebar_position: 1
---

# Dynamic Theme Manager

## Overview

The Dynamic Color Theme Manager allows your webpage to change its color scheme based on user scroll events. It enhances the user experience by smoothly transitioning between different color themes as the user interacts with the content.

## How It Works

The script first checks for attributes in the `#color-themes` stylesheet to define various color themes.
As the user scrolls, it listens to specific elements with attributes `animate-body-to` and `set-body-to` to trigger color changes.
Uses GSAP and ScrollTrigger for smooth animations and responsive behavior.

## Implementation

### HTML Structure

To utilize this feature, your HTML should include:

- A stylesheet with ID `color-themes`, where your CSS custom properties (variables) for color themes are defined.
- Elements with the `animate-body-to` attribute to animate color changes.
- Elements with the `set-body-to` attribute for instant color changes.

#### Example:

```html
<style id="color-themes">
  /* Define your color themes using CSS variables */
  :root {
    --theme1-color: #FF5733;
    --theme2-color: #33FF57;
    /* More themes... */
  }
</style>

<div animate-body-to="1">
  <!-- Content that triggers the first color theme -->
</div>

<div set-body-to="2">
  <!-- Content that sets the second color theme -->
</div>
```

### Important Notes
Ensure GSAP and ScrollTrigger libraries are included in your project for this feature to work. The script automatically initializes when the DOM content is fully loaded. Customize animation settings (duration, easing, offsets, and breakpoints) through attributes in the #color-themes stylesheet. It accounts for lazy-loaded images and refreshes ScrollTrigger upon their loading.

### Troubleshooting
If the feature isn't working as expected:
1. Verify that the color-themes stylesheet is defined with the correct ID and contains valid CSS variables.
2. Ensure that elements with the required attributes (animate-body-to, set-body-to) are present in your HTML.
3.  Check that GSAP and ScrollTrigger are properly loaded before this script executes.
4. Confirm that your CSS variable definitions in the stylesheet follow the correct syntax.

For further questions or customization requests, please feel free to contact me!