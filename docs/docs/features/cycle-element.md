---
sidebar_position: 3
---

# Content Cycle on Hover

## Overview

This JavaScript code implements a content cycling feature that activates on hover for specific containers. It sequentially displays child elements within a container, creating a dynamic and engaging user experience.

## How It Works

1. **Container Selection:** It targets all HTML elements with the attribute `data-cycle-container`.
2. **Child Elements:** Within each container, it selects elements with the attribute `data-cycle-item`.
3. **Initial State:** All child elements are initially hidden (opacity set to 0). The first child, if any, is made visible.
4. **Hover Effect (mouseenter):** When the user hovers over the container:
   - The `showNextChild` function is called to start the cycle.
   - The cycle continues as long as the user's cursor remains over the container.
5. **Cycling Mechanism (showNextChild):** 
   - Hides the currently visible child.
   - Determines the next child to display, looping back to the beginning if necessary.
   - Displays the next child with a smooth fade-in effect.
   - Uses `gsap.delayedCall` to introduce a delay before proceeding to the next child, creating a pause between transitions.
6. **Pause on Hover Out (mouseleave):** 
   - The cycle pauses when the user's cursor leaves the container area.
   - The `delayedCall` is cleared to prevent any pending transitions.

## Implementation

### HTML Structure

To utilize this feature, your HTML should include:

- Container elements with the attribute `data-cycle-container`.
- Child elements within the containers with the attribute `data-cycle-item`.

#### Example:

```html
<div data-cycle-container>
  <div data-cycle-item>Content 1</div>
  <div data-cycle-item>Content 2</div>
  <div data-cycle-item>Content 3</div>
</div>
```

## Important Notes
1. Ensure the GSAP library (specifically gsap.matchMedia and gsap.delayedCall) is included in your project.

## Troubleshooting
If the content cycle feature isn't working as expected:
1. HTML Structure: Verify that your HTML elements use the correct data-cycle-container and data-cycle-item attributes.
2. JavaScript Errors: Check the browser console for any JavaScript errors that might affect the script execution.
3. Media Query: Confirm that your screen width is above the specified breakpoint (992px) for the script to activate.
4. Element Visibility: Ensure that your child elements are not hidden by other CSS styles, which might conflict with the GSAP settings.

For further questions or customization requests, please feel free to contact me!
