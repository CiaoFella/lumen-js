---
sidebar_position: 1
---

# Directional Hover Animation

## Overview
This feature adds an engaging hover animation to elements on your webpage. When a user hovers over a designated element, a background fill animation occurs, with the direction of the fill based on where the mouse enters the element.

## How It Works
1. The animation uses SVG paths to create a smooth, curved filling effect.
2. The fill direction is determined by which side of the element the mouse enters from (top, bottom, left, or right).
3. When the mouse leaves the element, the fill animation reverses, again based on the exit direction.

## Implementation

### HTML Structure
To use this feature, your HTML should include:
1. A container element with the attribute `data-animate-hover="bg-section"`.
2. Inside this container, elements that you want to animate with the attribute `data-animate-hover="bg"`.
3. Each animated element should contain an SVG path element with the attribute `data-animate="bg-filler-path"`.

Example:
```html
<div data-animate-hover="bg-section">
  <div data-animate-hover="bg">
    <svg>
      <path data-animate="bg-filler-path"></path>
    </svg>
    <!-- Your content here -->
  </div>
</div>
```

### Important Notes
1. The animation uses GSAP (GreenSock Animation Platform) for smooth transitions. Make sure GSAP is included in your project.
2. The feature automatically initializes when the DOM content is loaded.
3. The animation duration is set to 0.5 seconds by default, with an "power3.out" easing for a natural feel.
Troubleshooting

### If the animation isn't working:
1. Ensure all data attributes are correctly set on your HTML elements.
2. Check that the JavaScript file containing this code is properly linked in your Webflow site settings.
3. Verify that GSAP is included and loaded before this script runs.

For any further questions or customization needs, please don't hesitate to reach out!