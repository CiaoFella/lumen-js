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

  imageWraps.forEach((wrap) => {
    const image = wrap.querySelector("[data-scroll-image=image]");
    if (!image) return;
    const scale = parseFloat(image.dataset.scale) || 1.17;

    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
      defaults: { duration: 1 },
    });

    // Reduce precision for better performance
    tl.from(image, { scale: scale.toFixed(2) });
  });
});
