---
sidebar_position: 6
---

# Text Reveal on Scroll

## Overview

This JavaScript code implements a text reveal animation that is triggered when a section comes into view on scroll. It uses GSAP and ScrollTrigger to create a visually engaging effect where text elements are revealed with a clip-path animation.

## How It Works

1. **Initialization (DOMContentLoaded):** The code executes after the entire page loads, setting up the animation.
2. **Element Selection:** It selects sections marked with the `data-animate-scroll="text-section"` attribute and their corresponding headline and text elements.
3. **GSAP Timeline and ScrollTrigger:** A GSAP timeline is created for each section, and ScrollTrigger is used to activate the animation when the section enters the viewport.
4. **Text Splitting (SplitType):** The SplitType library splits the headline and text elements into individual lines, allowing for granular animation control.
5. **Clip-Path Animation:** The animation reveals each line of text by transitioning its `clipPath` property from a hidden state to fully visible.
6. **Staggering and Delays:** Individual lines are staggered and delayed for a more dynamic effect.
7. **Responsive Design:** The animation adjusts for smaller screen sizes by reducing the vertical offset.
8. **Span Unwrapping:** A utility function `unwrapSpanAndPreserveClasses` ensures that text within spans is properly split and animated, preserving any existing classes.

## Implementation

### HTML Structure

To use this animation, your HTML should include sections with the following structure:

```html
<section data-animate-scroll="text-section">
  <h2 data-animate-scroll="headline" data-delay="0.2" data-duration="1.5">Your Headline</h2>
  <p data-animate-scroll="text" data-delay="0.5" data-duration="2">Your text content here.</p>
</section>
```

## Important Notes
Ensure the GSAP, ScrollTrigger, and SplitType libraries are included in your project.
Customize the animation by adjusting the data-delay and data-duration attributes on the headline and text elements.

## Customization
You can modify:
* Animation Timing: Adjust the data-delay and data-duration attributes in the HTML.

## Troubleshooting
If the text reveal animation isn't working as expected:
1. Library Inclusion: Verify that GSAP, ScrollTrigger, and SplitType are correctly included in your project.
2. HTML Structure: Ensure your HTML elements have the correct data-animate-scroll attributes and follow the specified structure.
3. JavaScript Errors: Check the browser console for any JavaScript errors that might prevent the script from executing.
4. Element Targeting: Confirm that the JavaScript code correctly targets the intended elements using the data-animate-scroll attributes.
5. ScrollTrigger Setup: Verify that the ScrollTrigger configuration is correct and the animation triggers when the section is in view.
6. SplitType Functionality: Ensure that SplitType is properly splitting the text elements into lines.
7. CSS Conflicts: Investigate if any CSS styles might interfere with the GSAP animations, particularly styles related to clipPath or positioning.

For further assistance or customization requests, please don't hesitate to ask!