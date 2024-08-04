function pageLoader() {
    const fullClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    const rightSideClipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
  
    // Get loader elements
    const loader = document.querySelector("[data-loader]");
    const progressBar = loader.querySelector("[data-loader-bar]");
    const percentageText = loader.querySelector("[data-loader-percentage]");
    const logo = loader.querySelector("[data-loader-logo]");
    const bg = loader.querySelector("[data-loader-bg]");
  
    // Set initial styles
    gsap.set(loader, {
      opacity: 1,
      display: "block",
    });
  
    gsap.set(progressBar, {
      width: "0%",
    });
  
    // Determine loader duration based on session storage
    const loaderDuration = sessionStorage.getItem("pageLoaded") ? 0.5 : 4;
  
    // Animate loader
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out loader
        gsap.set(loader, { display: "none" });
      },
    });
  
    tl.to(progressBar, {
      width: "100%",
      duration: loaderDuration, // Use the dynamic duration
      ease: "power3.inOut",
    }).to(
      percentageText,
      {
        duration: loaderDuration, // Use the dynamic duration
        ease: "power2.inOut",
        onUpdate: () => {
          const progress = Math.round(tl.progress() * 100);
          console.log(`Progress: ${progress}%`);
          percentageText.textContent = `${progress}%`;
        },
        onComplete: () => {
          tl.to([percentageText, logo], {
            y: 110,
            duration: 1, // This duration remains the same
            stagger: 0.1,
            ease: "power2.inOut",
          })
            .fromTo(
              progressBar,
              { clipPath: fullClipPath },
              { clipPath: rightSideClipPath, duration: 1, ease: "power2.inOut" }, // This duration remains the same
              "<"
            )
            .to(
              bg,
              {
                scaleY: 0,
                transformOrigin: "top",
                duration: 1, // This duration remains the same
                ease: "expo.inOut",
              },
              "<+0.5"
            );
        },
      },
      0
    );
  }
  
  pageLoader();
  