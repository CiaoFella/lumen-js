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
        end: "top 90%",
        toggleActions: "none play none reset",
      },
      defaults: {
        duration: 1,
      },
    });

    tl.from(image, {
      transform: `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    });
  });
});
