window.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll("[data-faq=item]");

  faqItems.forEach((faqItem) => {
    const faqQuestion = faqItem.querySelector("[data-faq=question]");
    const faqAnswer = faqItem.querySelector("[data-faq=answer]");
    const icon = faqItem.querySelector("[data-faq=icon]");

    const clickTl = gsap.timeline({
      defaults: { duration: 0.25 },
      paused: true,
      force3D: true,
    });

    clickTl
      .to(faqAnswer, { height: "auto", ease: "power1.inOut" })
      .to(icon, { rotate: 45 }, "<");

    faqQuestion.addEventListener("click", () => {
      faqQuestion.classList.toggle("is-active");
      if (faqQuestion.classList.contains("is-active")) {
        clickTl.play();
      } else {
        clickTl.reverse();
      }
    });
  });
});
