window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("[data-scroll-image=section]");
  const imageWraps = section.querySelectorAll("[data-scroll-image=wrap]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target.querySelector("[data-scroll-image=image]");
          const scale = image.dataset.scale || 1.17;
          image.style.setProperty("--scale", scale);
          image.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value as needed
    }
  );

  imageWraps.forEach((wrap) => observer.observe(wrap));
});
