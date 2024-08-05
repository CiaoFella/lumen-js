---
sidebar_position: 4
---

# Animated Menu

## Overview

This JavaScript code creates an engaging animated menu interaction. It utilizes GSAP and SplitType to orchestrate a visually appealing sequence of animations when the menu is toggled.

## How It Works

1. **Initialization (DOMContentLoaded):** The code executes after the entire page loads, initializing the menu functionality.
2. **Element Selection:** It targets specific elements within the menu structure based on their `data-menu` attributes.
3. **GSAP Timeline (menuTl):** A GSAP timeline is created to manage the animation sequence. It's initially paused.
4. **Animation Sequence:** The timeline includes the following animations:
   - **Flyout Reveal:** The flyout menu becomes visible with a smooth height transition.
   - **Trigger Rotation:** The menu trigger rotates 45 degrees.
   - **Item Slide-In:** Menu items slide in from below.
   - **Number Reveal:** Numbers associated with menu items are revealed with a clip-path animation.
   - **Divider Extension:** A divider line extends across the menu.
   - **Call to Action (CTA) Split and Reveal:** The CTA text is split into lines, and each line is revealed with a clip-path animation.
5. **Trigger Click Event:** When the menu trigger is clicked:
   - **Toggle Active State:** The trigger toggles its active state.
   - **Timeline Control:** The GSAP timeline plays forward if the trigger is active, and reverses if not.

## Implementation

### HTML Structure

To utilize this feature, your HTML should include the following structure with the corresponding `data-menu` attributes:

```html
<div data-menu="wrapper">
  <button data-menu="trigger">Menu</button>
  <div data-menu="flyout">
    <div data-menu="bg"></div>
    <span data-menu="element">Some Text</span>
    <div data-menu="divider"></div>
    <div>
        <a data-menu="item" href="#">Item 1</a>
        <span data-menu="num">01</span>
    </div>
    <span data-menu="element">Some Text</span>
    <span data-menu="split">Call to Action</span>
  </>
</div>
```

## Important Notes
Ensure the GSAP and SplitType libraries are included in your project.

## Troubleshooting
If the animated menu interaction isn't working as expected:
1. Library Inclusion: Verify that the GSAP and SplitType libraries are correctly included in your project.
2. HTML Structure: Ensure that your HTML elements have the correct data-menu attributes and follow the specified structure.
3. JavaScript Errors: Check the browser console for any JavaScript errors that might hinder the script's execution.
4. Animation Conflicts: Investigate if other CSS animations or transitions might interfere with the GSAP animations.

For further assistance or customization requests, please feel free to reach out!