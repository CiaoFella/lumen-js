window.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
  
    const fullClipPath = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)";
    const topClipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  
    const textHoverSections = document.querySelectorAll(
      "[data-animate-scroll=text-section]"
    );
  
    textHoverSections.forEach((section) => {
      const headline = section.querySelectorAll("[data-animate-scroll=headline]");
      headline.forEach((h) => {
        unwrapSpanAndPreserveClasses(h);
      });
      const headlineSplit = new SplitType(headline, {
        types: "words",
        lineClass: "split-line", // !important .line is already taken
      });
  
      const text = section.querySelectorAll("[data-animate-scroll=text]");
      const textSplit = new SplitType(text, {
        types: "lines",
        lineClass: "split-line", // !important .line is already taken
      });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top center",
          toggleActions: "none play none reset",
        },
      });
  
      if (headline && headline.length > 0) {
        tl.fromTo(
          headlineSplit.words,
          { clipPath: topClipPath, y: 150 },
          {
            clipPath: fullClipPath,
            y: 0,
            duration: 1,
            stagger: 0.025,
            ease: "expo.out",
          },
          0
        );
      }
      if (text && text.length > 0) {
        tl.fromTo(
          textSplit.lines,
          { clipPath: topClipPath, y: 150 },
          {
            clipPath: fullClipPath,
            y: 0,
            duration: 1,
            stagger: 0.025,
            ease: "expo.out",
          },
          0
        );
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
  