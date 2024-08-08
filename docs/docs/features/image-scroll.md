---
sidebar_position: 8
---

# Scroll-Triggered Image Scaling

## Overview

This JavaScript code implements a scroll-triggered image scaling effect. As the user scrolls down the page, images within designated sections smoothly scale down from an enlarged state to their original size, creating a dynamic and engaging visual experience.

## How It Works

1.  **DOM Content Loaded:** The script waits for the DOM content to be fully loaded before executing.
2.  **Section Selection:** It targets all HTML elements with the attribute `data-scroll-image="section"`.
3.  **Image Wrap Selection:** Within each section, it selects elements with the attribute `data-scroll-image="wrap"`.
4.  **Image Selection:** Inside each wrap, it finds the image element with the attribute `data-scroll-image="image"`.
5.  **Scale Factor:** Retrieves the scale factor from the image's `data-scale` attribute, defaulting to 1.17 if not specified.
6.  **Performance Optimization:** Adds `will-change: transform` to the image for better performance.
7.  **GSAP Timeline:** Creates a GSAP timeline for each image with scroll-triggered animation.
8.  **Animation:** Scales the image from its initial enlarged state to its original size as the user scrolls.

## Implementation

### HTML Structure

To utilize this feature, your HTML should include:

- Section elements with the attribute `data-scroll-image="section"`.
- Wrap elements within sections with the attribute `data-scroll-image="wrap"`.
- Image elements within wraps with the attribute `data-scroll-image="image"`.

#### Example:

```html
<div data-scroll-image="section">
  <div data-scroll-image="wrap">
    <img
      data-scroll-image="image"
      data-scale="1.3"
      src="path/to/image.jpg"
      alt="Description"
    />
  </div>
  <div data-scroll-image="wrap">
    <img data-scroll-image="image" src="path/to/image.jpg" alt="Description" />
  </div>
</div>
```

## Important Notes

Ensure the GSAP library (including ScrollTrigger plugin) is included in your project.
The script uses GSAP's ScrollTrigger for scroll-based animations.
The default scale factor is `1.17` if not specified in the image's data attribute.

## Troubleshooting

If the image scaling effect isn't working as expected:

1. HTML Structure: Verify that your HTML elements use the correct data attributes (data-scroll-image="section", data-scroll-image="wrap", data-scroll-image="image").
2. JavaScript Errors: Check the browser console for any JavaScript errors that might affect the script execution.
3. GSAP Library: Confirm that GSAP and its ScrollTrigger plugin are properly loaded.
4. Image Visibility: Ensure that your images are not hidden by other CSS styles, which might interfere with the scaling effect.
5. Scroll Behavior: Make sure the page has enough scroll height for the effect to be noticeable.

For further questions or customization requests, please feel free to contact me!
