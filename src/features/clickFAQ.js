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

    gsap.set(faqAnswer, { height: 0 });

    clickTl
      .to(faqAnswer, { height: "auto", duration: 0.5 })
      .to(icon, { rotate: 45 }, "<")
      .to(
        faqQuestion,
        { color: "white", duration: 0.25, ase: "power2.inOut" },
        "<"
      )
      .to(
        faqQuestion,
        { padding: "0 16px", duration: 0.25, ase: "power2.inOut" },
        "<"
      );

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
