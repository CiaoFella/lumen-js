window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("[data-scroll-image=section]");
  const imageWraps = section.querySelectorAll("[data-scroll-image=wrap]");

  imageWraps.forEach((wrap) => {
    const image = wrap.querySelector("[data-scroll-image=image]");
    const scale = image.dataset.scale || 1.1;
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
      width: "110%",
      height: "110%",
    });
  });
});
