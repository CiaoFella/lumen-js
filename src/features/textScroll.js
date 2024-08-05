window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const fullClipPath = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)";
  const topClipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

  const textScrollSections = document.querySelectorAll(
    "[data-animate-scroll=text-section]"
  );

  textScrollSections.forEach((section) => {
    const headline = section.querySelector("[data-animate-scroll=headline]");
    const text = section.querySelectorAll("[data-animate-scroll=text]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top 80%",
        toggleActions: "none play none reset",
      },
    });

    if (headline) {
      unwrapSpanAndPreserveClasses(headline);
      const headlineSplit = new SplitType(headline, {
        types: "lines",
        lineClass: "split-line", // !important .line is already taken
      });
      const headlineDelay = headline.dataset.delay || 0;
      const headlineDuration = headline.dataset.duration || 2;

      let headlineY = 150
      let mm = gsap.matchMedia()

      mm.add('(max-width: 991px)', () => {
        headlineY = 75
      })

      tl.fromTo(
        headlineSplit.lines,
        { clipPath: topClipPath, y: headlineY },
        {
          clipPath: fullClipPath,
          y: 0,
          duration: headlineDuration,
          delay: headlineDelay,
          stagger: 0.25,
          ease: "expo.out",
        },
        0
      );
    }

    if (text && text.length > 0) {
      text.forEach((item) => {
        const textDelay = item.dataset.delay || 0;
        const textDuration = item.dataset.duration || 2;

        const textSplit = new SplitType(item, {
          types: "lines",
          lineClass: "split-line", // !important .line is already taken
        });

        tl.fromTo(
          textSplit.lines,
          { clipPath: topClipPath, y: 150 },
          {
            clipPath: fullClipPath,
            y: 0,
            duration: textDuration,
            delay: textDelay,
            stagger: 0.15,
            ease: "expo.out",
          },
          0
        );
      });
    }
  });

  function unwrapSpanAndPreserveClasses(element) {
    // Select all span elements inside the given element
    const spans = element.querySelectorAll("span");

    // Iterate over each span
    spans.forEach((span) => {
      // Get the class list of the span
      const spanClasses = span.className;

      // Create a document fragment to hold the new elements
      const fragment = document.createDocumentFragment();

      // Iterate over child nodes to preserve <br> elements
      span.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          // Split the text content into words
          const words = node.textContent.split(/\s+/);

          words.forEach((word, index) => {
            // Create a new span for each word
            const newSpan = document.createElement("span");
            newSpan.textContent = word;

            // Add the original span's classes to the new span
            if (spanClasses) {
              newSpan.className = spanClasses;
            }

            // Append the new span and a space after the word (if it's not the last word)
            fragment.appendChild(newSpan);
            if (index < words.length - 1) {
              fragment.appendChild(document.createTextNode(" "));
            }
          });
        } else if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName === "BR"
        ) {
          // Preserve <br> elements
          fragment.appendChild(node.cloneNode());
        }
      });

      // Replace the original span with the new fragment
      span.replaceWith(fragment);
    });
  }
});
