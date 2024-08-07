window.addEventListener("DOMContentLoaded", (event) => {
  let mm = gsap.matchMedia();
  mm.add("(min-width: 992px)", () => {
    const containers = document.querySelectorAll("[data-cycle-container]");

    containers.forEach((container) => {
      const children = container.querySelectorAll("[data-cycle-item]");
      let currentIndex = 0;
      let isPaused = false;
      let delayedCall; // Store the delayedCall for pausing and resuming

      // Hide all children initially
      gsap.set(children, { autoAlpha: 0 });

      // Show the first child by default
      if (children.length > 0) {
        gsap.set(children[0], { autoAlpha: 1 });
      }

      function showNextChild() {
        if (isPaused) return; // Don't continue if paused

        // Hide the current child
        gsap.to(children[currentIndex], { autoAlpha: 0, duration: 0 });

        // Move to the next child, loop back to the start if at the end
        currentIndex = (currentIndex + 1) % children.length;

        // Show the next child
        gsap.to(children[currentIndex], {
          autoAlpha: 1,
          duration: 0,
          onComplete: () => {
            // Wait for the specified duration before showing the next child
            delayedCall = gsap.delayedCall(0.5, showNextChild);
          },
        });
      }

      container.addEventListener("mouseenter", () => {
        isPaused = false;
        if (!delayedCall || !delayedCall.isActive()) {
          // Start the cycle if not already running
          showNextChild();
        }
      });

      container.addEventListener("mouseleave", () => {
        isPaused = true;
        if (delayedCall) {
          delayedCall.kill(); // Stop the delayed call
        }
      });
    });
  });

  function handleSmallScreen() {
    const containers = document.querySelectorAll("[data-cycle-container]");

    containers.forEach((container) => {
      const children = container.querySelectorAll("[data-cycle-item]");

      // Keep only the first child, remove the rest
      for (let i = 1; i < children.length; i++) {
        children[i].remove();
      }
    });
  }

  // Initial check
  if (window.innerWidth < 992) {
    handleSmallScreen();
  }

  // Listen for resize events
  window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
      handleSmallScreen();
    } else {
      // Refresh the page when going from small to large screen
      // This is needed to restore removed elements
      location.reload();
    }
  });
});
