window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("[data-scroll-image=section]");
  const imageWraps = section.querySelectorAll("[data-scroll-image=wrap]");

  imageWraps.forEach((wrap) => {
    const image = wrap.querySelector("[data-scroll-image=image]");
    const scale = image.dataset.scale || 1.3;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom 75%",
        scrub: true,
      },
      defaults: {
        duration: 1,
      },
    });

    tl.from(image, {
      scale: scale,
    });
  });
});
