---
sidebar_position: 5
---

# Page Loader Animation

## Overview

This JavaScript code implements a visually appealing page loader animation. It uses GSAP to create a smooth loading sequence with a progress bar, percentage display, and a stylish exit animation.

## How It Works

1. **Function Initialization:** The `pageLoader` function is defined and immediately invoked.
2. **Element Selection:** The code selects specific elements within the loader structure using `data-` attributes.
3. **Initial Setup:** The loader and progress bar are set to their initial states using GSAP.
4. **Animation Sequence:** A GSAP timeline manages the following animations:
   - **Progress Bar:** Animates from 0% to 100% width over a specified duration.
   - **Percentage Text:** Updates in real-time to match the progress.
   - **Exit Animation:** 
     - Slides the percentage text and logo out of view.
     - Animates the progress bar using a clip-path effect.
     - Scales the background to create a closing effect.
5. **Dynamic Duration:** The loader duration is customizable through a data attribute.
6. **Completion:** Once the animation completes, the loader is hidden from view.

## Implementation

### HTML Structure

To use this loader, your HTML should include the following structure with the corresponding `data-` attributes:

```html
<div data-loader data-loader-duration="3">
  <div data-loader-bar></div>
  <span data-loader-percentage></span>
  <img data-loader-logo src="path/to/logo.png" alt="Logo">
  <div data-loader-bg></div>
</div>
```

Important Notes
Ensure the GSAP library is included in your project.
The loader duration can be customized by setting the data-loader-duration attribute on the main loader element.
The exit animation durations are fixed at 1 second each, but can be adjusted in the code if needed.

## Customization
You can modify:
* Loader Duration: Change the data-loader-duration attribute value in the HTML.

## Troubleshooting
If the page loader animation isn't functioning as expected:
1. GSAP Library: Verify that the GSAP library is correctly included in your project.
2. HTML Structure: Ensure your HTML elements have the correct data- attributes and follow the specified structure.
3. JavaScript Errors: Check the browser console for any JavaScript errors that might prevent the script from executing.
4. Element Targeting: Confirm that all required elements (progress bar, percentage text, logo, background) are present in your HTML.
5. CSS Conflicts: Investigate if any CSS styles might interfere with the GSAP animations, especially for positioning and visibility.
6. Duration Setting: Verify that the data-loader-duration attribute is set correctly on the main loader element.
7. Animation Sequence: If the exit animation doesn't trigger, ensure the progress bar animation completes successfully.

For further assistance or customization requests, please don't hesitate to ask!