window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("[data-image-scroll=section]");
  const imageWraps = section.querySelectorAll("[data-image-scroll=image-wrap]");

  imageWraps.forEach((wrap) => {
    const image = wrap.querySelector("[data-image-scroll=image]");
    const scale = image.dataset.scale || 1.3;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top 75%",
        end: "bottom 25%",
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
