const svgStartFromTop = "M 0 100 V 0 Q 500 75 1000 0 V 0 H 0 z";
const svgEndFromTop = "M 0 100 V 100 Q 500 100 1000 100 V 0 H 0 z";
const svgStartFromBottom = "M 0 100 V 100 Q 500 25 1000 100 V 100 z";
const svgEndFromBottom = "M 0 100 V 0 Q 500 0 1000 0 V 100 z";

const svgStartToTop = "M 0 100 V 100 Q 500 25 1000 100 V 0 H 0 z";
const svgEndToTop = "M 0 100 V 0 Q 500 0 1000 0 V 0 H 0 z";
const svgStartToBottom = "M 0 100 V 0 Q 500 75 1000 0 V 100 z";
const svgEndToBottom = "M 0 100 V 100 Q 500 100 1000 100 V 100 z";

const svgStartFromLeft = "M 0 0 H 0 Q 0 50 0 100 H 0 V 0 z";
const svgEndFromLeft = "M 0 0 H 100 Q 110 50 100 100 H 0 V 0 z";
const svgStartFromRight = "M 100 0 H 100 Q 100 50 100 100 H 100 V 0 z";
const svgEndFromRight = "M 100 0 H 0 Q -25 50 0 100 H 100 V 0 z";

const svgStartToLeft = "M 0 0 H 100 Q 75 50 100 100 H 0 V 0 z";
const svgEndToLeft = "M 0 0 H 0 Q 0 50 0 100 H 0 V 0 z";
const svgStartToRight = "M 100 0 H 0 Q 25 50 0 100 H 100 V 0 z";
const svgEndToRight = "M 100 0 H 100 Q 100 50 100 100 H 100 V 0 z";

window.addEventListener("DOMContentLoaded", (event) => {
  const barHoverSections = document.querySelectorAll(
    "[data-animate-hover=bg-section]"
  );

  barHoverSections.forEach((section) => {
    const elements = section.querySelectorAll("[data-animate-hover=bg]");

    elements.forEach((element) => {
      const bgFillPath = element.querySelector("[data-animate=bg-filler-path]");

      element.addEventListener("mouseenter", (event) => {
        const mouseDirection = getMouseEnterDirection(event, element);
        const pathDirection = handleCardHoverIn(mouseDirection, false);
        animateCardHover(bgFillPath, pathDirection.start, pathDirection.end);
      });
      element.addEventListener("mouseleave", (event) => {
        const mouseDirection = getMouseEnterDirection(event, element);
        const pathDirection = handleCardHoverOut(mouseDirection, false);
        animateCardHover(bgFillPath, pathDirection.start, pathDirection.end);
      });
    });
  });

  function getMouseEnterDirection(mouseEvent, item) {
    const rect = item.getBoundingClientRect();

    const mouseX = mouseEvent.clientX;
    const mouseY = mouseEvent.clientY;

    const topEdgeDist = Math.abs(rect.top - mouseY);
    const bottomEdgeDist = Math.abs(rect.bottom - mouseY);
    const leftEdgeDist = Math.abs(rect.left - mouseX);
    const rightEdgeDist = Math.abs(rect.right - mouseX);

    var min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    );

    switch (min) {
      case leftEdgeDist:
        return "left";
      case rightEdgeDist:
        return "right";
      case topEdgeDist:
        return "top";
      case bottomEdgeDist:
        return "bottom";
    }
  }

  function handleCardHoverIn(mouseDirection, allDirections) {
    let start;
    let end;
    if (allDirections === true) {
      if (mouseDirection === "top") {
        start = svgStartFromTop;
        end = svgEndFromTop;
      } else if (mouseDirection === "bottom") {
        start = svgStartFromBottom;
        end = svgEndFromBottom;
      } else if (mouseDirection === "left") {
        start = svgStartFromLeft;
        end = svgEndFromLeft;
      } else if (mouseDirection === "right") {
        start = svgStartFromRight;
        end = svgEndFromRight;
      }
    }
    if (allDirections === false || !allDirections) {
      if (mouseDirection === "top") {
        start = svgStartFromTop;
        end = svgEndFromTop;
      } else if (mouseDirection === "bottom") {
        start = svgStartFromBottom;
        end = svgEndFromBottom;
      } else {
        start = svgStartFromTop;
        end = svgEndFromTop;
      }
    }

    return { start, end };
  }

  function handleCardHoverOut(mouseDirection, allDirections) {
    let start;
    let end;
    if (allDirections === true) {
      if (mouseDirection === "top") {
        start = svgStartToTop;
        end = svgEndToTop;
      } else if (mouseDirection === "bottom") {
        start = svgStartToBottom;
        end = svgEndToBottom;
      } else if (mouseDirection === "left") {
        start = svgStartToLeft;
        end = svgEndToLeft;
      } else if (mouseDirection === "right") {
        start = svgStartToRight;
        end = svgEndToRight;
      }
    } else if (allDirections === false || !allDirections) {
      if (mouseDirection === "top") {
        start = svgStartToTop;
        end = svgEndToTop;
      } else if (mouseDirection === "bottom") {
        start = svgStartToBottom;
        end = svgEndToBottom;
      } else {
        start = svgStartToTop;
        end = svgEndToTop;
      }
    }

    return { start, end };
  }

  function animateCardHover(element, start, end) {
    if (start && end) {
      return gsap.fromTo(
        element,
        { attr: { d: start } },
        {
          attr: { d: end },
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }
});
