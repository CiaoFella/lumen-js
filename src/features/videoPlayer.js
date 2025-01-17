document.addEventListener("DOMContentLoaded", function () {
    const videoWrappers = document.querySelectorAll("[data-video=video-wrapper]");
  
    videoWrappers.forEach((wrapper) => {
      const video = wrapper.querySelector("[data-video=video]");
      const playButton = wrapper.querySelector("[data-video=play-button]");
      const soundButton = wrapper.querySelector("[data-video=sound-button]");
  
      video.addEventListener("click", () => {
        if (playButton) {
          playButton.click();
        } else {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }
      });
  
      if (playButton) {
        playButton.addEventListener("click", () => {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
      } else {
      }
  
      if (soundButton) {
        soundButton.addEventListener("click", () => {
          if (video.muted) {
            video.muted = false;
          } else {
            video.muted = true;
          }
        });
      }
    });
  });
  