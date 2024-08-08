window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-scroll-image=section]");

  if (!sections || sections.length === 0) return;
  sections.forEach((section) => {
    const imageWraps = section.querySelectorAll("[data-scroll-image=wrap]");

    if (!imageWraps || imageWraps.length === 0) return;
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
          scrub: true,
        },
        defaults: {
          duration: 1,
        },
      });

      tl.from(image, {
        scale: scale,
        force3D: true, // Forces 3D acceleration
        ease: "none",
      });
    });
  });
});
