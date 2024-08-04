window.addEventListener("DOMContentLoaded", (event) => {
    // attribute value checker
    function attr(defaultVal, attrVal) {
      const defaultValType = typeof defaultVal;
      if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
      if (attrVal === "true" && defaultValType === "boolean") return true;
      if (attrVal === "false" && defaultValType === "boolean") return false;
      if (isNaN(attrVal) && defaultValType === "string") return attrVal;
      if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
      return defaultVal;
    }
  
    const colorThemes = [];
    const htmlStyles = getComputedStyle(document.documentElement);
    const targetStylesheet = document.querySelector("#color-themes");
    const regex = /--([^:\s]+):\s*var\(--([^)]+)\);/g;
  
    if (targetStylesheet) {
      const rules =
        targetStylesheet.sheet.cssRules || targetStylesheet.sheet.rules;
      for (const rule of rules) {
        const styleObject = {};
        let match;
        while ((match = regex.exec(rule.cssText)) !== null) {
          const key = "--" + match[1];
          const value = htmlStyles.getPropertyValue("--" + match[2]);
          styleObject[key] = value;
        }
        colorThemes.push(styleObject);
      }
  
      const durationSetting = attr(0.4, targetStylesheet.getAttribute("speed")),
        easeSetting = attr("power1.out", targetStylesheet.getAttribute("ease")),
        offsetSetting = attr(
          50,
          targetStylesheet.getAttribute("percent-from-top")
        ),
        breakpointSetting = attr(0, targetStylesheet.getAttribute("min-width"));
  
      gsap.registerPlugin(ScrollTrigger);
  
      const triggerElements = document.querySelectorAll("[animate-body-to]");
      let currentThemeIndex = 0;
      let previousThemeIndex = 0;
  
      triggerElements.forEach((element, index) => {
        const modeIndex = +element.getAttribute("animate-body-to");
        let endSetting = `clamp(bottom ${offsetSetting}%)`;
        if (index === triggerElements.length - 1)
          endSetting = `bottom ${offsetSetting}%`;
  
        gsap.matchMedia().add(`(min-width: ${breakpointSetting}px)`, () => {
          const colorScroll = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: `clamp(top ${offsetSetting}%)`,
              end: endSetting,
              toggleActions: "play complete none reverse",
              onEnter: () => {
                previousThemeIndex = currentThemeIndex;
                currentThemeIndex = modeIndex - 1;
              },
              onLeaveBack: () => {
                gsap.to("body", {
                  ...colorThemes[previousThemeIndex],
                  duration: durationSetting,
                  ease: easeSetting,
                });
                currentThemeIndex = previousThemeIndex;
              },
            },
          });
          colorScroll.to("body", {
            ...colorThemes[modeIndex - 1],
            duration: durationSetting,
            ease: easeSetting,
          });
        });
      });
  
      // Handle elements with the set-body-to attribute
      const setBodyElements = document.querySelectorAll("[set-body-to]");
      setBodyElements.forEach((element) => {
        const modeIndex = +element.getAttribute("set-body-to");
        gsap.matchMedia().add(`(min-width: ${breakpointSetting}px)`, () => {
          ScrollTrigger.create({
            trigger: element,
            start: `top top`,
            end: `bottom ${offsetSetting}%`,
            onEnter: () => {
              previousThemeIndex = currentThemeIndex;
              currentThemeIndex = modeIndex - 1;
              gsap.set("body", colorThemes[currentThemeIndex]);
            },
            onEnterBack: () => {
              previousThemeIndex = currentThemeIndex;
              currentThemeIndex = modeIndex - 1;
              gsap.set("body", colorThemes[currentThemeIndex]);
            },
            onLeave: () => {
              gsap.to("body", {
                ...colorThemes[previousThemeIndex],
                duration: durationSetting,
                ease: easeSetting,
              });
              currentThemeIndex = previousThemeIndex;
            },
            onLeaveBack: () => {
              gsap.to("body", {
                ...colorThemes[previousThemeIndex],
                duration: durationSetting,
                ease: easeSetting,
              });
              currentThemeIndex = previousThemeIndex;
            },
          });
        });
      });
    }
  });
  