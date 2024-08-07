window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("[data-scroll-image=section]");
  const imageWraps = section.querySelectorAll("[data-scroll-image=wrap]");

  imageWraps.forEach((wrap) => {
    const image = wrap.querySelector("[data-scroll-image=image]");
    const scale = image.dataset.scale || 1.17;

    // Add will-change property to the image element
    image.style.willChange = "transform";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom center",
        onUpdate: (self) => {
          // Use requestAnimationFrame for smoother animation
          requestAnimationFrame(() => {
            tl.progress(self.progress);
          });
        },
      },
      defaults: {
        duration: 1,
        ease: "none",
      },
    });

    tl.from(image, {
      height: 120,
      width: 120,
      transformOrigin: "center center", // Specify the transform origin
    });
  });
});
