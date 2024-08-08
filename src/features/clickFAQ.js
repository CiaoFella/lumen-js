window.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll("[data-faq=item]");

  faqItems.forEach((faqItem) => {
    const faqQuestion = faqItem.querySelector("[data-faq=question]");
    const faqAnswer = faqItem.querySelector("[data-faq=answer]");
    const icon = faqItem.querySelector("[data-faq=icon]");

    const tl = gsap.timeline({ defaults: { duration: 0.5 }, paused: true });

    tl.fromTo(faqAnswer, { height: 0 }, { height: "auto" })
      .to(icon, { rotate: 45 }, "<")
      .to(faqQuestion, { color: "white" }, "<")
      .to(faqQuestion, { padding: "0 16px" }, "<");

    faqQuestion.addEventListener("click", () => {
      tl.reversed() ? tl.play() : tl.reverse();
    });
  });
});
