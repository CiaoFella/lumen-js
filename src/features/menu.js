window.addEventListener("DOMContentLoaded", (event) => {
  function initMenu() {
    const fullClipPath = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)";
    const topClipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

    const navigation = document.querySelector("[data-menu=wrapper]");
    const navWrapper = document.querySelector(".nav-wrapper");
    const menuTrigger = navigation.querySelector("[data-menu=trigger]");
    const menuTriggerContent = navigation.querySelector(
      "[data-menu=trigger-content]"
    );
    const flyout = navigation.querySelector("[data-menu=flyout]");
    const bg = flyout.querySelector("[data-menu=bg]");
    const items = flyout.querySelectorAll("[data-menu=item]");
    const nums = flyout.querySelectorAll("[data-menu=num]");
    const divider = flyout.querySelector("[data-menu=divider]");
    const generalElements = flyout.querySelectorAll("[data-menu=element]");
    const ctaText = flyout.querySelector("[data-menu=split]");
    let ctaSplit = new SplitType(ctaText, {
      types: "lines",
      lineClass: "split-line",
    });

    const menuTl = gsap.timeline({ paused: true });
    const menuTriggerTl = gsap.timeline({ paused: true });
    menuTl
      .to(flyout, { display: "flex", duration: 0 })
      .call(() => navigation.classList.toggle("is-active"), [], "<")
      .from(bg, { height: "0vh", duration: 1, ease: "power4.inOut" }, 0)
      .from(
        items,
        {
          yPercent: 110,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.1,
        },
        ">-10%"
      )
      .fromTo(
        nums,
        { clipPath: topClipPath, y: 50 },
        {
          clipPath: fullClipPath,
          y: 0,
          ease: "expo.out",
          duration: 1.5,
          stagger: 0.1,
        },
        "<-0.1"
      )
      .from(divider, { width: 0, duration: 2, ease: "power4.inOut" }, "<+0.5")
      .fromTo(
        [ctaSplit.lines, generalElements],
        { clipPath: topClipPath, y: 50 },
        {
          clipPath: fullClipPath,
          y: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.05,
        },
        "<+0.25"
      );

    menuTriggerTl.to(menuTriggerContent, {
      yPercent: -100,
      duration: 0.5,
      ease: "power2.inOut",
    });

    menuTrigger.addEventListener("click", () => {
      menuTrigger.classList.toggle("is-active");
      if (menuTrigger.classList.contains("is-active")) {
        menuTl.timeScale(1).play();
        menuTriggerTl.play();
        gsap.to(navWrapper, { color: "black", duration: 0.5 });
      } else {
        menuTl.timeScale(2).reverse();
        menuTriggerTl.reverse();
        gsap.to(navWrapper, { color: "white", duration: 0.5 });
      }
    });
  }
  initMenu();
});
