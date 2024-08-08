// window.addEventListener("DOMContentLoaded", () => {
//   const faqItems = document.querySelectorAll(".faq_accordion");

//   faqItems.forEach((faqItem) => {
//     const faqQuestion = faqItem.querySelector(".faq_question");
//     const faqAnswer = faqItem.querySelector(".faq_answer");
//     const icon = faqItem.querySelector(".faq_icon-wrapper");

//     const clickTl = gsap.timeline({
//       defaults: { duration: 0.25 },
//       paused: true,
//       force3D: true,
//     });

//     clickTl
//       .to(faqAnswer, { height: "auto", ease: "power2.inOut", duration: 0.4 })
//       .to(icon, { rotate: 45 }, "<");

//     faqQuestion.addEventListener("click", () => {
//       faqQuestion.classList.toggle("is-active");
//       if (faqQuestion.classList.contains("is-active")) {
//         clickTl.play();
//       } else {
//         clickTl.reverse();
//       }
//     });
//   });
// });
