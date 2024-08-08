window.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll("[data-faq=item]");

  faqItems.forEach((faqItem) => {
    const faqQuestion = faqItem.querySelector("[data-faq=question]");
    const faqAnswer = faqItem.querySelector("[data-faq=answer]");
    const icon = faqItem.querySelector("[data-faq=icon]");

    const clickTl = gsap.timeline({
      defaults: { duration: 0.5 },
      paused: true,
    });
    const hoverTl = gsap.timeline({
      defaults: { duration: 0.5 },
      paused: true,
    });

    clickTl.set(faqAnswer, { height: 0 });

    clickTl
      .to(faqAnswer, { height: "auto" })
      .to(icon, { rotate: 45 }, "<")
      .to(faqQuestion, { color: "white" }, "<")
      .to(faqQuestion, { padding: "0 16px" }, "<");

    hoverTl
      .to(faqQuestion, { color: "white" }, "<")
      .to(faqQuestion, { padding: "0 16px", duration: 0.25 }, "<");

    faqQuestion.addEventListener("click", () => {
      clickTl.reversed() ? clickTl.play() : clickTl.reverse();
    });

    faqQuestion.addEventListener("mouseenter", () => {
      hoverTl.play();
    });
    faqQuestion.addEventListener("mouseleave", () => {
      hoverTl.reverse();
    });
  });
});
