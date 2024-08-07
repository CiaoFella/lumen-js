window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("[data-scroll-image=section]");
  if (!section) return;
  const imageWraps = section.querySelectorAll("[data-scroll-image=wrap]");

  // Use will-change to hint the browser
  imageWraps.forEach((wrap) => {
    const image = wrap.querySelector("[data-scroll-image=image]");
    if (image) {
      image.style.willChange = "transform";
    }
  });

  // Create a single ScrollTrigger for the section
  ScrollTrigger.create({
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      imageWraps.forEach((wrap) => {
        const image = wrap.querySelector("[data-scroll-image=image]");
        if (!image) return;
        const scale = parseFloat(image.dataset.scale) || 1.17;
        const startScale = 1;
        const endScale = scale;

        // Calculate the scale based on scroll progress
        const currentScale = startScale + (endScale - startScale) * progress;

        // Apply the scale to the image
        gsap.from(image, { scale: currentScale, overwrite: "auto" });
      });
    },
  });
});
