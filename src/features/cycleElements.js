window.addEventListener("DOMContentLoaded", (event) => {
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
